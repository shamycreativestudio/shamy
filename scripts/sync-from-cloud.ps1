# Script de Sincronización: Descargar briefs de la nube a local
# Ejecutar: .\scripts\sync-from-cloud.ps1

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
Write-Info "║   SINCRONIZACIÓN: Nube → Local                         ║"
Write-Info "╚════════════════════════════════════════════════════════╝"
Write-Host ""

# Verificar parámetros
if ([string]::IsNullOrWhiteSpace($CloudUrl)) {
    Write-Error "❌ Debes especificar la URL del servidor en la nube"
    Write-Info "Ejemplo: .\sync-from-cloud.ps1 -CloudUrl 'https://tu-app.railway.app' -Password 'tu_password'"
    exit 1
}

if ([string]::IsNullOrWhiteSpace($Password)) {
    Write-Error "❌ Debes especificar la contraseña de admin"
    exit 1
}

# Crear carpeta de backups si no existe
$backupDir = Join-Path $PSScriptRoot "..\backups"
if (!(Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir | Out-Null
    Write-Success "✅ Carpeta de backups creada: $backupDir"
}

# Preparar autenticación
$base64Auth = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("${Username}:${Password}"))
$headers = @{
    "Authorization" = "Basic $base64Auth"
    "Content-Type" = "application/json"
}

try {
    Write-Info "🌐 Conectando a: $CloudUrl"
    
    # Descargar todos los briefs
    Write-Info "📥 Descargando briefs..."
    $response = Invoke-RestMethod -Uri "$CloudUrl/api/briefs?limit=1000" -Headers $headers -Method Get
    
    $briefCount = $response.briefs.Count
    Write-Success "✅ Se encontraron $briefCount briefs en la nube"
    
    # Guardar en archivo JSON
    $timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
    $backupFile = Join-Path $backupDir "backup_$timestamp.json"
    $response | ConvertTo-Json -Depth 10 | Out-File -FilePath $backupFile -Encoding UTF8
    Write-Success "✅ Backup guardado en: $backupFile"
    
    # Mostrar estadísticas
    Write-Host ""
    Write-Info "📊 ESTADÍSTICAS:"
    Write-Host "   Total de briefs: $briefCount"
    
    # Contar por estado
    $estadisticas = $response.briefs | Group-Object -Property estado
    foreach ($stat in $estadisticas) {
        Write-Host "   Estado '$($stat.Name)': $($stat.Count) briefs"
    }
    
    Write-Host ""
    Write-Success "✅ Sincronización completada exitosamente"
    Write-Info "💡 El backup está en: $backupFile"
    
} catch {
    Write-Error "❌ Error durante la sincronización:"
    Write-Error $_.Exception.Message
    
    if ($_.Exception.Response.StatusCode -eq 401) {
        Write-Warning "⚠️  Error de autenticación. Verifica el username y password."
    }
    
    exit 1
}

Write-Host ""
Write-Info "¿Quieres restaurar estos datos en tu base de datos local?"
Write-Info "Ejecuta: .\scripts\restore-local.ps1 -BackupFile '$backupFile'"
