// ============================================
// FIREBASE CONFIGURATION
// ============================================
// Cambia estos valores con los tuyos de Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROJECT_ID.firebaseapp.com",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_PROJECT_ID.appspot.com",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// Nota: Para desarrollo sin Firebase, puedes comentar esto
// y usar localStorage en su lugar

// ============================================
// FORM HANDLING
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const registroForm = document.getElementById('registro-form');
  
  if (registroForm) {
    registroForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const interes = document.getElementById('interes').value;
      const mensaje = document.getElementById('mensaje').value;
      const statusEl = document.getElementById('form-status');
      
      // Validación básica
      if (!nombre || !email || !interes) {
        statusEl.textContent = '❌ Por favor completa los campos requeridos';
        statusEl.className = 'form-status error';
        return;
      }
      
      // Mostrar enviando
      statusEl.textContent = '⏳ Enviando...';
      statusEl.className = 'form-status';
      
      try {
        // Guardar en localStorage (sin necesidad de Firebase)
        const registro = {
          nombre,
          email,
          interes,
          mensaje,
          fecha: new Date().toLocaleString('es-AR'),
          id: Date.now()
        };
        
        // Guardar en localStorage
        let registros = JSON.parse(localStorage.getItem('registros') || '[]');
        registros.push(registro);
        localStorage.setItem('registros', JSON.stringify(registros));
        
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

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// MOSTRAR REGISTROS (ADMIN - Para debugging)
// ============================================
function mostrarRegistros() {
  const registros = JSON.parse(localStorage.getItem('registros') || '[]');
  console.log('Registros guardados:', registros);
  return registros;
}

// Acceso desde consola: mostrarRegistros()
window.mostrarRegistros = mostrarRegistros;

// ============================================
// EXPORTAR REGISTROS A CSV
// ============================================
function exportarRegistrosCSV() {
  const registros = JSON.parse(localStorage.getItem('registros') || '[]');
  
  if (registros.length === 0) {
    alert('No hay registros para exportar');
    return;
  }
  
  // Headers
  const headers = ['Nombre', 'Email', 'Interés', 'Mensaje', 'Fecha'];
  const rows = registros.map(r => [
    r.nombre,
    r.email,
    r.interes,
    r.mensaje,
    r.fecha
  ]);
  
  // Crear CSV
  let csv = headers.join(',') + '\n';
  rows.forEach(row => {
    csv += row.map(cell => `"${cell || ''}"`).join(',') + '\n';
  });
  
  // Descargar
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `registros-austral-${new Date().toLocaleDateString()}.csv`;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}

// Acceso desde consola: exportarRegistrosCSV()
window.exportarRegistrosCSV = exportarRegistrosCSV;

// ============================================
// LIMPIAR REGISTROS (CUIDADO!)
// ============================================
function limpiarRegistros() {
  if (confirm('¿Estás seguro? Esto eliminará TODOS los registros.')) {
    localStorage.removeItem('registros');
    console.log('Registros eliminados');
  }
}

// Acceso desde consola: limpiarRegistros()
window.limpiarRegistros = limpiarRegistros;

console.log('✅ App lista!');
console.log('Comandos disponibles:');
console.log('- mostrarRegistros()');
console.log('- exportarRegistrosCSV()');
console.log('- limpiarRegistros()');
