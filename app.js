// ============================================================
// MANEJO DE MODALES CON PLAN DE ESTUDIOS
// ============================================================

function abrirModal(idCarrera) {
  const carrera = obtenerCarrera(idCarrera);
  if (!carrera) return;

  let html = `<h2>${carrera.icono} ${carrera.nombre}</h2>`;
  html += `<p style="color: var(--muted); margin-bottom: 24px;">${carrera.descripcion}</p>`;

  // Mostrar años 3, 4, 5
  for (const anio of [3, 4, 5]) {
    const datosAnio = carrera.anios[anio];
    if (datosAnio) {
      html += `
        <div class="anio-section">
          <h3>${datosAnio.titulo}</h3>
          <p style="color: var(--muted); font-size: 0.9rem; margin-bottom: 12px;">${datosAnio.subtitulo}</p>
          <div class="materias-list">
      `;
      
      for (const materia of datosAnio.materias) {
        html += `<div class="materia-item">${materia}</div>`;
      }
      
      html += `</div></div>`;
    }
  }

  // Minors
  if (carrera.minors && carrera.minors.length > 0) {
    html += `
      <div class="minors-section">
        <h3>Minors - Especialización</h3>
        <p style="color: var(--muted); font-size: 0.9rem; margin-bottom: 12px;">Elegís uno a partir de 3.º año — también podés combinar con minors de otras carreras</p>
        <div class="minors-list">
    `;
    
    for (const minor of carrera.minors) {
      html += `
        <div class="minor-item">
          <span class="minor-icon">${minor.icono}</span>
          <div class="minor-info">
            <strong>${minor.titulo}</strong>
            <p>${minor.temas.join(' • ')}</p>
          </div>
        </div>
      `;
    }
    
    html += `</div></div>`;
  }

  document.getElementById('modal-body').innerHTML = html;
  document.getElementById('modal-plan').classList.add('active');
}

function cerrarModal() {
  document.getElementById('modal-plan').classList.remove('active');
}

// Cerrar modal al clickear afuera
window.onclick = function(event) {
  const modal = document.getElementById('modal-plan');
  if (event.target === modal) {
    cerrarModal();
  }
};

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    cerrarModal();
  }
});

// ============================================================
// RENDERIZAR PERFILES FLUIDOS
// ============================================================

function renderPerfiles() {
  const grid = document.getElementById('perfiles-grid');
  if (!grid) return;

  let html = '';
  
  for (const perfil of PERFILES) {
    const minorsText = perfil.minors.join(' + ');
    
    html += `
      <div class="perfil-card">
        <div class="perfil-emoji">${perfil.emoji}</div>
        <h3 class="perfil-nombre">${perfil.nombre}</h3>
        <p class="perfil-tagline">${perfil.tagline}</p>
        
        <div class="perfil-camino">
          <span class="camino-item major">${perfil.major}</span>
          <span class="camino-arrow">+</span>
          <span class="camino-item minors">${minorsText}</span>
        </div>
        
        <p class="perfil-salida">Sale como:<br><strong>${perfil.salida}</strong></p>
      </div>
    `;
  }
  
  grid.innerHTML = html;
}

// ============================================================
// FORMULARIO DE REGISTRO
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
  // Renderizar perfiles
  renderPerfiles();
  
  // Formulario
  const registroForm = document.getElementById('registro-form');
  
  if (registroForm) {
    registroForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const interes = document.getElementById('interes').value;
      const mensaje = document.getElementById('mensaje').value.trim();
      const statusEl = document.getElementById('form-status');
      
      // Validación básica
      if (!nombre || !email || !interes) {
        statusEl.textContent = '❌ Por favor completa los campos requeridos';
        statusEl.className = 'form-status error';
        return;
      }
      
      // Validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        statusEl.textContent = '❌ Por favor ingresa un email válido';
        statusEl.className = 'form-status error';
        return;
      }

      // Mostrar enviando
      statusEl.textContent = '⏳ Enviando...';
      statusEl.className = 'form-status';
      
      try {
        // Crear registro
        const registro = {
          nombre,
          email,
          interes,
          mensaje,
          fecha: new Date().toLocaleString('es-AR'),
          id: Date.now()
        };
        
        // Guardar en localStorage
        let registros = JSON.parse(localStorage.getItem('registros_austral') || '[]');
        registros.push(registro);
        localStorage.setItem('registros_austral', JSON.stringify(registros));
        
        // Log para debug
        console.log('✅ Registro guardado:', registro);
        
        // Éxito
        statusEl.textContent = '✅ ¡Gracias! Nos pondremos en contacto pronto';
        statusEl.className = 'form-status success';
        registroForm.reset();
        
        // Limpiar mensaje después de 5 segundos
        setTimeout(() => {
          statusEl.textContent = '';
        }, 5000);
        
      } catch (error) {
        statusEl.textContent = '❌ Error al enviar. Intenta de nuevo.';
        statusEl.className = 'form-status error';
        console.error('Error:', error);
      }
    });
  }
});

// ============================================================
// COMANDOS DE CONSOLA PARA ADMIN
// ============================================================

function verRegistros() {
  const registros = JSON.parse(localStorage.getItem('registros_austral') || '[]');
  console.clear();
  console.log('📋 REGISTROS GUARDADOS:');
  console.log(`Total: ${registros.length}`);
  console.table(registros);
  return registros;
}

function exportarCSV() {
  const registros = JSON.parse(localStorage.getItem('registros_austral') || '[]');
  
  if (registros.length === 0) {
    alert('No hay registros para exportar');
    return;
  }
  
  const headers = ['Nombre', 'Email', 'Interés', 'Mensaje', 'Fecha'];
  const rows = registros.map(r => [
    `"${r.nombre}"`,
    `"${r.email}"`,
    `"${r.interes}"`,
    `"${(r.mensaje || '').replace(/"/g, '""')}"`,
    `"${r.fecha}"`
  ]);
  
  let csv = headers.join(',') + '\n';
  rows.forEach(row => {
    csv += row.join(',') + '\n';
  });
  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `registros-austral-${new Date().toLocaleDateString().replace(/\//g, '-')}.csv`;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}

function limpiarRegistros() {
  if (confirm('⚠️ ¿Estás seguro? Esto eliminará TODOS los registros.')) {
    localStorage.removeItem('registros_austral');
    console.log('✅ Todos los registros han sido eliminados');
  }
}

function estadisticas() {
  const registros = JSON.parse(localStorage.getItem('registros_austral') || '[]');
  
  if (registros.length === 0) {
    console.log('No hay registros aún');
    return;
  }
  
  const porInteres = {};
  registros.forEach(r => {
    porInteres[r.interes] = (porInteres[r.interes] || 0) + 1;
  });
  
  console.clear();
  console.log('📊 ESTADÍSTICAS:');
  console.log(`Total de registros: ${registros.length}`);
  console.log('Intereses:');
  console.table(porInteres);
}

// Asignar a window para acceso desde consola
window.verRegistros = verRegistros;
window.exportarCSV = exportarCSV;
window.limpiarRegistros = limpiarRegistros;
window.estadisticas = estadisticas;

// ============================================================
// INICIALIZACIÓN
// ============================================================

console.log('%c🎓 Ingeniería Austral 2026', 'font-size: 20px; font-weight: bold; color: #F5A623;');
console.log('%cComandos disponibles:', 'font-weight: bold;');
console.log('  • verRegistros() - Ver todos los registros');
console.log('  • exportarCSV() - Descargar registros como CSV');
console.log('  • estadisticas() - Ver estadísticas de registros');
console.log('  • limpiarRegistros() - Eliminar todos los registros');
