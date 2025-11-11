# Script de Sincronización: Subir briefs de local a la nube
# Ejecutar: .\scripts\sync-to-cloud.ps1

param(
    [string]$CloudUrl = "",
    [string]$Username = "admin",
    [string]$Password = ""
)

# Colores para output
function Write-Success { Write-Host $args -ForegroundColor Green }
function Write-Info { Write-Host $args -ForegroundColor Cyan }
function Write-Warning { Write-Host $args -ForegroundColor Yellow }
function Write-Error { Write-Host $args -ForegroundColor Red }

Write-Info "╔════════════════════════════════════════════════════════╗"
Write-Info "║   SINCRONIZACIÓN: Local → Nube                         ║"
Write-Info "╚════════════════════════════════════════════════════════╝"
Write-Host ""

# Verificar parámetros
if ([string]::IsNullOrWhiteSpace($CloudUrl)) {
    Write-Error "❌ Debes especificar la URL del servidor en la nube"
    Write-Info "Ejemplo: .\sync-to-cloud.ps1 -CloudUrl 'https://tu-app.railway.app' -Password 'tu_password'"
    exit 1
}

if ([string]::IsNullOrWhiteSpace($Password)) {
    Write-Error "❌ Debes especificar la contraseña de admin"
    exit 1
}

Write-Warning "⚠️  ATENCIÓN: Esta operación subirá todos los briefs locales a la nube."
Write-Warning "   Si ya existen briefs en la nube, se crearán duplicados."
Write-Host ""
$confirmation = Read-Host "¿Deseas continuar? (si/no)"

if ($confirmation -ne "si") {
    Write-Info "❌ Operación cancelada"
    exit 0
}

# Preparar autenticación
$base64Auth = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("${Username}:${Password}"))
$headers = @{
    "Authorization" = "Basic $base64Auth"
}

try {
    Write-Info "🌐 Conectando a: $CloudUrl"
    
    # Primero, obtener los briefs locales
    Write-Info "📤 Obteniendo briefs locales..."
    $localResponse = Invoke-RestMethod -Uri "http://localhost:3000/api/briefs?limit=1000" -Headers $headers -Method Get
    
    $localCount = $localResponse.briefs.Count
    Write-Success "✅ Se encontraron $localCount briefs locales"
    
    if ($localCount -eq 0) {
        Write-Warning "⚠️  No hay briefs locales para sincronizar"
        exit 0
    }
    
    # Subir cada brief a la nube
    Write-Info "📤 Subiendo briefs a la nube..."
    $uploadedCount = 0
    $errorCount = 0
    
    foreach ($brief in $localResponse.briefs) {
        try {
            # Crear FormData (simplificado - sin archivos adjuntos)
            $body = @{
                empresaNombre = $brief.empresa_nombre
                contactoNombre = $brief.contacto_nombre
                contactoEmail = $brief.contacto_email
                contactoTelefono = $brief.contacto_telefono
                # ... añadir todos los demás campos necesarios
            } | ConvertTo-Json
            
            $uploadResponse = Invoke-RestMethod `
                -Uri "$CloudUrl/api/briefs" `
                -Method Post `
                -Headers $headers `
                -Body $body `
                -ContentType "application/json"
            
            $uploadedCount++
            Write-Host "   ✅ Brief '$($brief.empresa_nombre)' subido" -ForegroundColor Green
            
        } catch {
            $errorCount++
            Write-Host "   ❌ Error al subir brief '$($brief.empresa_nombre)': $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    
    Write-Host ""
    Write-Success "✅ Sincronización completada"
    Write-Info "   Briefs subidos: $uploadedCount"
    if ($errorCount -gt 0) {
        Write-Warning "   Errores: $errorCount"
    }
    
} catch {
    Write-Error "❌ Error durante la sincronización:"
    Write-Error $_.Exception.Message
    exit 1
}
