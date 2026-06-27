// ============================================================
// DATOS DE CARRERAS - INGENIERÍA AUSTRAL
// ============================================================

const CARRERAS = {
  industrial: {
    id: 'industrial',
    nombre: 'Industrial',
    icono: '⚙️',
    descripcion: 'Optimiza sistemas, procesos y organizaciones. Desde la fábrica hasta la estrategia empresarial.',
    color: '#ff6b35',
    anios: {
      3: {
        titulo: 'Año 3 - Especialización Inicial',
        subtitulo: 'Introducción a procesos, operaciones y tecnologías',
        materias: [
          'Transferencia de calor',
          'Competencias Humanas y desarrollo profesional',
          'Electiva E2 — Minor',
          'Ética General',
          'Gestión de Operaciones I',
          'Automatización y tecnologías de control',
          'Electiva E3 — Minor',
          'Sostenibilidad y ambiente',
          'Mecánica Aplicada: Sólido y resistencia de materiales',
          'Electiva E4 — Minor',
          'Moral, Personas y Valores cristianos',
          'Ingeniería gráfica',
          'Electiva E5 - Laboratorio de consultoría Industrial'
        ]
      },
      4: {
        titulo: 'Año 4 - Sistemas Avanzados',
        subtitulo: 'Gestión integral, manufactura y finanzas',
        materias: [
          'Termofluidos',
          'Máquinas y potencia',
          'Electiva E6 — Minor',
          'Ética profesional',
          'Materiales, manufactura y diseño mecánico',
          'Gestión de Operaciones II',
          'Electiva E7 — Minor',
          'Finanzas y evaluación de proyectos',
          'Gestión de Operaciones III',
          'Responsabilidad Social',
          'Práctica profesional supervisada'
        ]
      },
      5: {
        titulo: 'Año 5 - Integración y Liderazgo',
        subtitulo: 'Estrategia, sistemas y proyecto final',
        materias: [
          'Sistemas de Información',
          'Electiva E8',
          'Modelado, simulación y optimización',
          'Máquinas térmicas',
          'Electiva E9 — Minor',
          'Calidad',
          'Gestión de Operaciones IV',
          'Planeamiento estratégico: mercado y economía',
          'Electiva E10 — Minor',
          'Electiva E11 — Minor',
          'Electiva E12 — Minor',
          'Legal',
          'Mantenimiento',
          'Proyecto final de ingeniería'
        ]
      }
    },
    minors: [
      {
        id: 'lean',
        icono: '📊',
        titulo: 'Lean Manufacturing',
        temas: ['Six Sigma', 'Teoría de Restricciones', 'Mejora continua', 'Eficiencia operacional']
      },
      {
        id: 'supply-chain',
        icono: '🚚',
        titulo: 'Supply Chain & Logística',
        temas: ['Planeamiento de la demanda', 'Gestión de inventarios', 'Logística de distribución', 'Sourcing']
      },
      {
        id: 'sostenibilidad',
        icono: '🌿',
        titulo: 'Sostenibilidad & Ambiente',
        temas: ['Energías renovables', 'Economía circular', 'Huella de carbono', 'Gestión ambiental']
      },
      {
        id: 'ia-industrial',
        icono: '🤖',
        titulo: 'IA Industrial',
        temas: ['Predictive maintenance', 'Optimización con IA', 'Robótica colaborativa', 'Automatización inteligente']
      }
    ]
  },

  informatica: {
    id: 'informatica',
    nombre: 'Informática',
    icono: '💻',
    descripcion: 'Diseña sistemas inteligentes, seguros y escalables. Software, IA, ciberseguridad.',
    color: '#0099ff',
    anios: {
      3: {
        titulo: 'Año 3 - Fundamentos de Ingeniería de Software',
        subtitulo: 'Arquitectura, redes y programación avanzada',
        materias: [
          'Diseño de Sistemas',
          'Redes de Comunicación',
          'Ingeniería de Sistemas',
          'Lenguajes de Programación',
          'Electrónica Informática',
          'Diseño de Interacción',
          'Laboratorio I y II',
          'Ética General — Moral y Valores'
        ]
      },
      4: {
        titulo: 'Año 4 - Sistemas Avanzados e IA',
        subtitulo: 'Inteligencia artificial, seguridad y distribución',
        materias: [
          'Inteligencia Artificial',
          'Seguridad Informática',
          'Sistemas Distribuidos',
          'Calidad de Software',
          'Programación Concurrente',
          'Laboratorio III (Anual)',
          'Electiva ×2',
          'Ética Profesional — Comunicación — Responsabilidad Social'
        ]
      },
      5: {
        titulo: 'Año 5 - Liderazgo e Inserción Profesional',
        subtitulo: 'Gestión, economía y proyecto final',
        materias: [
          'Dirección de Proyectos',
          'Economía y Finanzas',
          'Macroeconomía',
          'Factor Humano',
          'Laboratorio IV',
          'Electiva ×4',
          'Práctica Profesional',
          'Tesis de Grado'
        ]
      }
    },
    minors: [
      {
        id: 'ia',
        icono: '🧠',
        titulo: 'Inteligencia Artificial',
        temas: ['Machine Learning', 'Deep Learning', 'NLP', 'Visión Artificial']
      },
      {
        id: 'ciberseguridad',
        icono: '🛡️',
        titulo: 'Ciberseguridad',
        temas: ['Criptografía', 'Auditoría informática', 'Respuesta a incidentes', 'Seguridad en cloud']
      },
      {
        id: 'videojuegos',
        icono: '🎮',
        titulo: 'Videojuegos',
        temas: ['Game design', 'Motores (Unity/Unreal)', 'Gráficos 3D', 'Desarrollo de narrativa']
      },
      {
        id: 'datos',
        icono: '📊',
        titulo: 'Ingeniería de Datos',
        temas: ['Big Data', 'Data warehousing', 'ETL', 'Analytics avanzado']
      },
      {
        id: 'cloud',
        icono: '☁️',
        titulo: 'Cloud Computing',
        temas: ['AWS/Azure/GCP', 'Arquitectura distribuida', 'Microservicios', 'DevOps']
      },
      {
        id: 'management',
        icono: '💼',
        titulo: 'Management & Startup',
        temas: ['Gestión ágil', 'Liderazgo de equipos', 'Emprendimiento', 'Pitch y fundraising']
      }
    ]
  },

  biomedica: {
    id: 'biomedica',
    nombre: 'Biomédica',
    icono: '🩺',
    descripcion: 'Tecnología al servicio de la salud. Instrumentos, diagnóstico, prótesis.',
    color: '#d946ef',
    anios: {
      3: {
        titulo: 'Año 3 - Biología y Tecnología',
        subtitulo: 'La biología se encuentra con la ingeniería',
        materias: [
          'Biología celular y molecular',
          'Anatomía y biomecánica I, II y III',
          'Análisis matemático IV',
          'Electrotécnia y Máquinas eléctricas',
          'Óptica, ondas y calor',
          'Instrumental Biomédico',
          'Ingeniería Clínica y Hospitalaria',
          'Programación para datos biomédicos I',
          'Ciencia de datos para medicina I',
          'Bioética — Ética General — Moral y Valores'
        ]
      },
      4: {
        titulo: 'Año 4 - Sistemas Clínicos',
        subtitulo: 'Sistemas biomédicos en la práctica clínica',
        materias: [
          'Medicina Nuclear',
          'Electrónica analógica',
          'Fisiología I y II',
          'Biomateriales y biosensores',
          'Procesamiento de imágenes y señales',
          'Modelado y diseño de sistemas biomédicos',
          'Ingeniería de Rehabilitación',
          'Ciencia de datos en medicina II',
          'Laboratorio',
          'Higiene — Legal — Teoría de la empresa',
          'Ética Profesional',
          'Práctica Profesional Supervisada'
        ]
      },
      5: {
        titulo: 'Año 5 - Especialización Clínica',
        subtitulo: 'Especialización, investigación y proyecto final',
        materias: [
          'Imágenes para Diagnóstico',
          'Dirección de Proyectos',
          'Microeconomía aplicada',
          'Finanzas y evaluación de proyectos',
          'Electiva ×6',
          'Proyecto Final de Ingeniería'
        ]
      }
    },
    minors: [
      {
        id: 'bioinformatica',
        icono: '🧬',
        titulo: 'Bioinformática',
        temas: ['Genómica computacional', 'Análisis de secuencias', 'Modelado molecular', 'Biología de sistemas']
      },
      {
        id: 'imagenes-medicas',
        icono: '🖼️',
        titulo: 'Imágenes Médicas',
        temas: ['Resonancia Magnética', 'Tomografía Computada', 'Ecografía avanzada', 'Reconstrucción 3D']
      },
      {
        id: 'protesis',
        icono: '🦾',
        titulo: 'Prótesis & Rehabilitación',
        temas: ['Diseño de prótesis', 'Biomecánica aplicada', 'Dispositivos asistivos', 'Tecnología wearable']
      },
      {
        id: 'fisica-medica',
        icono: '⚛️',
        titulo: 'Física Médica',
        temas: ['Radioterapia', 'Dosimetría', 'Seguridad radiológica', 'Física de radiaciones']
      }
    ]
  },

  'ai-datos': {
    id: 'ai-datos',
    nombre: 'AI & Datos',
    icono: '🤖',
    descripcion: 'Machine Learning, IA Generativa, análisis avanzado. El futuro digital basado en datos.',
    color: '#00c9b1',
    anios: {
      3: {
        titulo: 'Año 3 - Fundamentos de Ciencia de Datos',
        subtitulo: 'Matemática, estadística y primeros modelos',
        materias: [
          'Matemática Discreta',
          'Preprocesamiento de Datos',
          'Arquitectura de Datos y Gobierno de Datos',
          'Cálculo Numérico y Simulación',
          'Enfoque Estadístico del Aprendizaje',
          'IA',
          'Ética General',
          'Modelos de Aprendizaje Automático',
          'Procesamiento de Lenguaje Natural',
          'Minor ELECTIVA 2'
        ]
      },
      4: {
        titulo: 'Año 4 - Modelos Avanzados',
        subtitulo: 'IA Generativa, visión artificial y sistemas inteligentes',
        materias: [
          'IA Generativa 1',
          'Visión Artificial',
          'Métodos basados en Árboles y Grafos',
          'Gestión de Proyectos',
          'Análisis de Datos Longitudinales',
          'Estrategias de Optimización',
          'Redes Neuronales',
          'Moral Personal y Valores',
          'IA Generativa 2',
          'Minor ELECTIVA 3',
          'Minor ELECTIVA 4',
          'Minor ELECTIVA 5'
        ]
      },
      5: {
        titulo: 'Año 5 - Integración y Proyecto',
        subtitulo: 'Aplicaciones reales y proyecto final',
        materias: [
          'Taller de consultoría en datos e IA',
          'Taller de CD e IA en Ciencias Biomédicas',
          'Introducción al Marketing Online',
          'Proyecto Final',
          'Automatización y Robótica',
          'Taller de CD e IA en Administración, Finanzas y Economía',
          'Ética Profesional',
          'Responsabilidad Social',
          'Minor ELECTIVA 6',
          'Minor ELECTIVA 7'
        ]
      }
    },
    minors: [
      {
        id: 'ia-generativa',
        icono: '✨',
        titulo: 'IA Generativa & LLMs',
        temas: ['Transformers', 'Fine-tuning', 'Prompt Engineering', 'RAG (Retrieval-Augmented Generation)']
      },
      {
        id: 'mlops',
        icono: '⚙️',
        titulo: 'MLOps & Ciclo de Vida',
        temas: ['Model deployment', 'Monitoring & alerting', 'Versionado', 'CI/CD para ML']
      },
      {
        id: 'analytics',
        icono: '📊',
        titulo: 'Analytics Aplicado',
        temas: ['Analítica de negocio', 'Dashboard y BI', 'Causalidad', 'A/B Testing']
      },
      {
        id: 'marketing-analytics',
        icono: '📈',
        titulo: 'Marketing Analytics',
        temas: ['Customer analytics', 'Attribution modeling', 'Segmentación', 'Personalización']
      },
      {
        id: 'ia-financiera',
        icono: '💰',
        titulo: 'IA Financiera',
        temas: ['Modelos predictivos', 'Risk analytics', 'Trading algorítmico', 'Detección de fraude']
      }
    ]
  }
};

function obtenerCarrera(id) {
  return CARRERAS[id];
}

function obtenerAnio(idCarrera, anio) {
  const carrera = CARRERAS[idCarrera];
  if (carrera && carrera.anios[anio]) {
    return carrera.anios[anio];
  }
  return null;
}
