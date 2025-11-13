// Estado de la aplicación
let credentials = null;
let briefs = [];

// Elementos del DOM
const loginContainer = document.getElementById('loginContainer');
const adminContainer = document.getElementById('adminContainer');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const briefsList = document.getElementById('briefsList');
const briefCount = document.getElementById('briefCount');
const refreshBtn = document.getElementById('refreshBtn');
const logoutBtn = document.getElementById('logoutBtn');
const detailModal = document.getElementById('detailModal');
const closeModal = document.getElementById('closeModal');
const detailContent = document.getElementById('detailContent');

// Login
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    credentials = btoa(`${username}:${password}`);
    
    try {
        await loadBriefs();
        loginContainer.classList.add('hidden');
        adminContainer.classList.remove('hidden');
        loginError.textContent = '';
    } catch (error) {
        loginError.textContent = '❌ Credenciales incorrectas';
        credentials = null;
    }
});

// Logout
logoutBtn.addEventListener('click', () => {
    credentials = null;
    briefs = [];
    adminContainer.classList.add('hidden');
    loginContainer.classList.remove('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

// Refresh
refreshBtn.addEventListener('click', loadBriefs);

// Cargar briefs desde el API
async function loadBriefs() {
    briefsList.innerHTML = '<div class="loading">Cargando briefs...</div>';
    
    try {
        const response = await fetch(`${API_URL}/api/briefs`, {
            headers: {
                'Authorization': `Basic ${credentials}`
            }
        });
        
        if (!response.ok) {
            throw new Error('Error al cargar briefs');
        }
        
        briefs = await response.json();
        renderBriefs();
    } catch (error) {
        console.error('Error:', error);
        briefsList.innerHTML = '<div class="error">❌ Error al cargar briefs. Verifica tu conexión.</div>';
        throw error;
    }
}

// Renderizar lista de briefs
function renderBriefs() {
    briefCount.textContent = `${briefs.length} brief${briefs.length !== 1 ? 's' : ''}`;
    
    if (briefs.length === 0) {
        briefsList.innerHTML = `
            <div class="empty-state">
                <h2>📭</h2>
                <p>No hay briefs todavía</p>
            </div>
        `;
        return;
    }
    
    briefsList.innerHTML = briefs.map(brief => `
        <div class="brief-card" data-id="${brief.id}">
            <div class="brief-header">
                <div class="brief-title">
                    <h3>${brief.nombre || 'Sin nombre'}</h3>
                    <p>${brief.empresa || 'Sin empresa'} • ${brief.email || 'Sin email'}</p>
                </div>
                <div class="brief-meta">
                    <div>${formatDate(brief.fecha)}</div>
                    <span class="brief-status ${(brief.estado || 'Nuevo').toLowerCase()}">${brief.estado || 'Nuevo'}</span>
                </div>
            </div>
            <div class="brief-actions">
                <button class="btn-view" onclick="viewBrief('${brief.id}')">👁️ Ver detalles</button>
                <button class="btn-delete" onclick="deleteBrief('${brief.id}')">🗑️ Eliminar</button>
            </div>
        </div>
    `).join('');
}

// Ver detalles de un brief
function viewBrief(id) {
    const brief = briefs.find(b => b.id === id);
    if (!brief) return;
    
    detailContent.innerHTML = `
        <h2>📋 Detalles del Brief</h2>
        
        <div class="detail-field">
            <label>Nombre del cliente:</label>
            <p>${brief.nombre || '-'}</p>
        </div>
        
        <div class="detail-field">
            <label>Email:</label>
            <p><a href="mailto:${brief.email}">${brief.email || '-'}</a></p>
        </div>
        
        <div class="detail-field">
            <label>Empresa/Proyecto:</label>
            <p>${brief.empresa || '-'}</p>
        </div>
        
        <div class="detail-field">
            <label>Teléfono:</label>
            <p><a href="tel:${brief.telefono}">${brief.telefono || '-'}</a></p>
        </div>
        
        <div class="detail-field">
            <label>Presupuesto:</label>
            <p>${brief.presupuesto || '-'}</p>
        </div>
        
        <div class="detail-field">
            <label>Tipo de proyecto:</label>
            <p>${brief.tipo || '-'}</p>
        </div>
        
        <div class="detail-field">
            <label>Descripción del proyecto:</label>
            <p>${brief.descripcion || '-'}</p>
        </div>
        
        <div class="detail-field">
            <label>Objetivo:</label>
            <p>${brief.objetivo || '-'}</p>
        </div>
        
        <div class="detail-field">
            <label>Referencias:</label>
            <p>${brief.referencias || '-'}</p>
        </div>
        
        ${brief.imagenes && brief.imagenes.length > 0 ? `
            <div class="detail-field">
                <label>Imágenes de referencia:</label>
                <div class="images-grid">
                    ${brief.imagenes.map(img => `
                        <img src="${img}" alt="Referencia" onclick="window.open('${img}', '_blank')">
                    `).join('')}
                </div>
            </div>
        ` : ''}
        
        <div class="detail-field">
            <label>Fecha de envío:</label>
            <p>${formatDate(brief.fecha)}</p>
        </div>
        
        <div class="detail-field">
            <label>Estado:</label>
            <p><span class="brief-status ${(brief.estado || 'Nuevo').toLowerCase()}">${brief.estado || 'Nuevo'}</span></p>
        </div>
    `;
    
    detailModal.classList.remove('hidden');
    detailModal.classList.add('show');
}

// Eliminar brief
async function deleteBrief(id) {
    if (!confirm('¿Estás seguro de que quieres eliminar este brief?')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/api/briefs?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Basic ${credentials}`
            }
        });
        
        if (!response.ok) {
            throw new Error('Error al eliminar');
        }
        
        await loadBriefs();
        alert('✅ Brief eliminado correctamente');
    } catch (error) {
        console.error('Error:', error);
        alert('❌ Error al eliminar el brief');
    }
}

// Cerrar modal
closeModal.addEventListener('click', () => {
    detailModal.classList.remove('show');
    detailModal.classList.add('hidden');
});

detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) {
        detailModal.classList.remove('show');
        detailModal.classList.add('hidden');
    }
});

// Formatear fecha
function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Hacer funciones globales
window.viewBrief = viewBrief;
window.deleteBrief = deleteBrief;
