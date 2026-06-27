# 🎓 Ingeniería Austral - Web Oficial 2026

Web profesional para la Facultad de Ingeniería de la Universidad Austral.

## ✨ Características

- ✅ **Landing page moderna** con diseño responsivo
- ✅ **Simulador vocacional interactivo** (Quiz 10 min)
- ✅ **4 majors**: Industrial, Informática, Biomédica, AI & Datos
- ✅ **28+ minors** especializados
- ✅ **Formulario de registro** con guardado en localStorage
- ✅ **Optimizado** para móvil, tablet y desktop
- ✅ **Sin dependencias externas** (HTML, CSS, JavaScript puro)

## 🚀 Despliegue Rápido

### Opción 1: Netlify (Recomendado)

1. Ve a [netlify.com](https://netlify.com)
2. Selecciona **"Import an existing project"**
3. Conecta tu repositorio GitHub
4. Rama: `main`
5. Build command: (dejar vacío)
6. Publish directory: `./` (o dejar vacío)
7. **Deploy** ✅

**URL automática:** `https://tu-proyecto.netlify.app`

### Opción 2: Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Importa tu repositorio
3. Sin configuración especial
4. **Deploy** ✅

### Opción 3: GitHub Pages

1. Activa GitHub Pages en Settings
2. Branch: `main`
3. Folder: `/ (root)`
4. **Save** ✅

**URL:** `https://tu-usuario.github.io/austral-ingenieria-web`

## 📁 Estructura del Proyecto

```
austral-ingenieria-web/
├── index.html           # Landing page principal
├── simulador.html       # Quiz vocacional interactivo
├── styles.css          # Estilos CSS
├── app.js              # JavaScript + localStorage
├── .gitignore
└── README.md           # Este archivo
```

## 🔧 Desarrollo Local

### Requisitos
- Navegador web moderno
- Editor de texto (VS Code, Sublime, etc.)
- Git

### Setup

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/austral-ingenieria-web.git
cd austral-ingenieria-web

# 2. Abrir con servidor local (opcional pero recomendado)
# Con Python 3:
python -m http.server 8000

# O con Node.js (si tienes http-server instalado):
npx http-server

# 3. Abre en el navegador
# http://localhost:8000
```

## 💾 Guardado de Registros

Los registros se guardan automáticamente en **localStorage** del navegador.

### Ver registros (desde consola del navegador)
```javascript
mostrarRegistros()
```

### Exportar a CSV
```javascript
exportarRegistrosCSV()
```

### Limpiar registros
```javascript
limpiarRegistros()
```

## 🔐 Firebase (Opcional)

Para usar una base de datos real en la nube:

### Paso 1: Crear proyecto Firebase

1. Ve a [firebase.google.com](https://firebase.google.com)
2. Click en **"Get Started"**
3. **Crear nuevo proyecto**
4. Nombre: `austral-ingenieria`
5. Enable Google Analytics (opcional)
6. **Crear proyecto**

### Paso 2: Obtener configuración

1. En Firebase Console, haz clic en **"Web"** (</> icono)
2. Copia tu `firebaseConfig`
3. Abre `app.js` en el editor
4. Reemplaza los valores en `firebaseConfig`:

```javascript
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};
```

### Paso 3: Crear Firestore Database

1. En Firebase Console → **Firestore Database**
2. **Crear base de datos**
3. Modo: **Prueba** (para desarrollo)
4. Ubicación: `América del Sur (São Paulo)`
5. **Crear**

### Paso 4: Crear colección

1. **+ Iniciar colección**
2. Nombre: `registros`
3. **Siguiente**
4. Agregar documento automáticamente (Firestore lo hace)

### Paso 5: Descomentar código en app.js

Busca en `app.js` la sección de Firebase y descomenta:

```javascript
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
```

## 📊 Analytics & Seguimiento

Para ver registros sin terminal:

1. Abre DevTools (F12)
2. Ve a la pestaña **Console**
3. Ejecuta: `mostrarRegistros()`
4. Verás un array con todos los registros

## 🎨 Customización

### Cambiar colores

En `styles.css`, modifica las variables:

```css
:root {
  --navy: #0B1F4B;      /* Azul oscuro */
  --blue: #1A4BB8;      /* Azul */
  --teal: #00C9B1;      /* Verde azulado */
  --orange: #F5A623;    /* Naranja */
}
```

### Cambiar textos

En `index.html`, busca y reemplaza:
- Nombre de la institución
- Descripciones de carreras
- Títulos de secciones

### Cambiar logos

Reemplaza el SVG en `index.html` con tus logos:

```html
<img src="TU_LOGO.png" alt="Austral" class="badge-img">
```

## 🚦 Checklist de Despliegue

- [ ] Cambié el título del proyecto
- [ ] Agregué los logos correctos
- [ ] Actualicé las carreras y minors
- [ ] Probé el simulador
- [ ] Probé el formulario de registro
- [ ] Responsive funciona bien (mobil, tablet, desktop)
- [ ] Enlaces navegan correctamente
- [ ] Deploy en Netlify / Vercel / GitHub Pages
- [ ] URL funciona públicamente

## 📱 URLs Importantes

- **Sitio en Netlify**: `https://tu-proyecto.netlify.app`
- **Repo GitHub**: `https://github.com/tu-usuario/austral-ingenieria-web`
- **Firebase**: `https://console.firebase.google.com`
- **Austral**: `https://www.austral.edu.ar`

## 🤝 Soporte

¿Preguntas o problemas?

1. Revisa la **consola del navegador** (F12 → Console)
2. Revisa los **logs de Netlify**
3. Verifica que todos los archivos estén subidos a GitHub

## 📄 Licencia

© 2026 Universidad Austral - Facultad de Ingeniería

---

**Hecho con ❤️ para Austral Ingeniería**
