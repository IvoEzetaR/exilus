// Datos de servicios Exilus — fuente única de verdad
// Cada servicio alimenta: /servicios, /servicios/[slug], Navbar, sitemap

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface ServiceStep {
  step: number;
  title: string;
  description: string;
}

export interface RecoveryPhase {
  phase: string;
  timeframe: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  shortDescription: string;
  heroSubtitle: string;
  image: string;
  description: string[];
  candidateProfile: string[];
  benefits: ServiceBenefit[];
  steps: ServiceStep[];
  recovery: RecoveryPhase[];
  faqs: ServiceFAQ[];
  stats: { label: string; value: string }[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "manga-gastrica",
    name: "Manga Gástrica",
    shortDescription:
      "El procedimiento bariátrico más realizado en el mundo. Reduce el 75-80% del estómago de forma permanente.",
    heroSubtitle:
      "Procedimiento laparoscópico que transforma tu capacidad gástrica y tu relación con la alimentación.",
    image: "/images/paso-cirugia.jpg",
    description: [
      "La manga gástrica, también conocida como gastrectomía vertical en manga, es el procedimiento bariátrico más realizado a nivel mundial. Consiste en remover aproximadamente el 75-80% del estómago, dejando una estructura tubular en forma de manga o banana.",
      "Este procedimiento no solo reduce la capacidad del estómago, sino que también disminuye significativamente los niveles de grelina, la hormona responsable del apetito. El resultado es una sensación de saciedad más temprana y una reducción natural del hambre.",
      "El Dr. Salazar realiza esta cirugía mediante técnica laparoscópica avanzada, lo que significa incisiones mínimas, menos dolor postoperatorio y una recuperación más rápida.",
    ],
    candidateProfile: [
      "Índice de Masa Corporal (IMC) igual o mayor a 40",
      "IMC igual o mayor a 35 con comorbilidades (diabetes, hipertensión, apnea del sueño)",
      "Intentos previos de pérdida de peso sin resultados sostenidos",
      "Compromiso con cambios en el estilo de vida a largo plazo",
      "Mayores de 18 años en buen estado de salud general",
    ],
    benefits: [
      {
        title: "Pérdida de peso significativa",
        description:
          "Los pacientes pierden entre el 60-70% de su exceso de peso en los primeros 12-18 meses.",
        icon: "TrendingDown",
      },
      {
        title: "Resolución de comorbilidades",
        description:
          "Mejora o resolución de diabetes tipo 2, hipertensión arterial y apnea del sueño.",
        icon: "HeartPulse",
      },
      {
        title: "Procedimiento mínimamente invasivo",
        description:
          "Realizado por laparoscopía con incisiones de 5-12mm. Menor dolor y recuperación rápida.",
        icon: "Minimize2",
      },
      {
        title: "Reducción natural del apetito",
        description:
          "Al remover la parte del estómago que produce grelina, el hambre disminuye naturalmente.",
        icon: "Utensils",
      },
      {
        title: "Sin dispositivos externos",
        description:
          "A diferencia del balón o la banda, no requiere elementos externos ni ajustes periódicos.",
        icon: "ShieldCheck",
      },
      {
        title: "Resultados a largo plazo",
        description:
          "Con seguimiento adecuado, los resultados se mantienen de forma sostenida a largo plazo.",
        icon: "Clock",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Evaluación inicial",
        description:
          "Consulta integral con el Dr. Salazar para evaluar tu caso, historial médico y definir si eres candidato.",
      },
      {
        step: 2,
        title: "Preparación prequirúrgica",
        description:
          "Exámenes de laboratorio, evaluación cardiológica, nutricional y psicológica. Dieta preoperatoria de 2 semanas.",
      },
      {
        step: 3,
        title: "Cirugía laparoscópica",
        description:
          "Procedimiento de 60-90 minutos bajo anestesia general. Se realizan 4-5 incisiones pequeñas en el abdomen.",
      },
      {
        step: 4,
        title: "Hospitalización",
        description:
          "Estancia de 2-3 días en la Clínica Sanna Sánchez Ferrer con monitoreo continuo.",
      },
      {
        step: 5,
        title: "Seguimiento integral",
        description:
          "Controles regulares con el equipo multidisciplinario: cirujano, nutricionista y psicólogo.",
      },
    ],
    recovery: [
      {
        phase: "Primeras 48 horas",
        timeframe: "Día 1-2",
        description:
          "Reposo en clínica. Inicio de líquidos claros. Manejo del dolor con medicación.",
      },
      {
        phase: "Primera semana",
        timeframe: "Día 3-7",
        description:
          "Alta hospitalaria. Dieta líquida estricta. Caminatas cortas. Reposo relativo en casa.",
      },
      {
        phase: "Semanas 2-4",
        timeframe: "Semana 2-4",
        description:
          "Transición a dieta blanda/puré. Retorno gradual a actividades cotidianas. Sin ejercicio intenso.",
      },
      {
        phase: "Mes 2 en adelante",
        timeframe: "Mes 2+",
        description:
          "Incorporación progresiva de alimentos sólidos. Inicio de actividad física moderada. Controles mensuales.",
      },
    ],
    faqs: [
      {
        question: "¿La manga gástrica es reversible?",
        answer:
          "No, la manga gástrica es un procedimiento permanente ya que se remueve una porción del estómago. Sin embargo, sus resultados positivos son también duraderos cuando se acompañan de un estilo de vida saludable.",
      },
      {
        question: "¿Cuánto peso puedo esperar perder?",
        answer:
          "En promedio, los pacientes pierden entre el 60-70% de su exceso de peso durante los primeros 12-18 meses. Los resultados varían según el compromiso con la dieta y el ejercicio.",
      },
      {
        question: "¿Quedan cicatrices visibles?",
        answer:
          "Las incisiones laparoscópicas son de 5-12mm, por lo que las cicatrices son mínimas y con el tiempo se vuelven prácticamente imperceptibles.",
      },
      {
        question: "¿Cuándo puedo volver a trabajar?",
        answer:
          "La mayoría de pacientes retoman actividades laborales de oficina entre los 10-14 días. Para trabajos físicos, se recomienda esperar 4-6 semanas.",
      },
    ],
    stats: [
      { label: "Pérdida de exceso de peso", value: "60-70%" },
      { label: "Tiempo de cirugía", value: "60-90 min" },
      { label: "Estancia hospitalaria", value: "2-3 días" },
      { label: "Retorno laboral", value: "10-14 días" },
    ],
  },
  {
    slug: "bypass-gastrico",
    name: "Bypass Gástrico",
    shortDescription:
      "Técnica gold standard para obesidad severa y diabetes tipo 2. Combina restricción y malabsorción.",
    heroSubtitle:
      "El estándar de oro en cirugía bariátrica para resultados metabólicos superiores.",
    image: "/images/paso-evaluacion-multi.jpg",
    description: [
      "El bypass gástrico en Y de Roux es considerado el estándar de oro en cirugía bariátrica. Combina dos mecanismos: la creación de un pequeño reservorio gástrico (restricción) y el desvío de una porción del intestino delgado (malabsorción controlada).",
      "Este procedimiento es especialmente efectivo para pacientes con diabetes tipo 2, ya que produce cambios hormonales que mejoran la sensibilidad a la insulina incluso antes de que se produzca una pérdida de peso significativa.",
      "El Dr. Salazar realiza el bypass gástrico por vía laparoscópica con más de una década de experiencia, garantizando seguridad y resultados óptimos.",
    ],
    candidateProfile: [
      "IMC igual o mayor a 40 (obesidad mórbida)",
      "IMC igual o mayor a 35 con diabetes tipo 2 o enfermedad por reflujo severo",
      "Pacientes con síndrome metabólico asociado a obesidad",
      "Casos donde la manga gástrica no es la mejor opción",
      "Compromiso con suplementación vitamínica de por vida",
    ],
    benefits: [
      {
        title: "Mayor pérdida de peso",
        description:
          "Pérdida del 70-80% del exceso de peso, superior a otros procedimientos bariátricos.",
        icon: "TrendingDown",
      },
      {
        title: "Resolución de diabetes",
        description:
          "Hasta el 83% de pacientes con DM2 logran remisión completa tras el bypass.",
        icon: "HeartPulse",
      },
      {
        title: "Mejora del reflujo",
        description:
          "Elimina o mejora significativamente la enfermedad por reflujo gastroesofágico (ERGE).",
        icon: "ShieldCheck",
      },
      {
        title: "Cambios hormonales favorables",
        description:
          "Modifica las hormonas intestinales que regulan el apetito y el metabolismo de la glucosa.",
        icon: "Activity",
      },
      {
        title: "Resultados comprobados",
        description:
          "Más de 50 años de seguimiento científico respaldan su eficacia y seguridad a largo plazo.",
        icon: "Award",
      },
      {
        title: "Técnica laparoscópica",
        description:
          "Incisiones mínimas, menor dolor postoperatorio y recuperación más rápida.",
        icon: "Minimize2",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Evaluación multidisciplinaria",
        description:
          "Consulta con el Dr. Salazar, endocrinólogo, nutricionista y psicólogo para evaluar tu caso.",
      },
      {
        step: 2,
        title: "Estudios preoperatorios",
        description:
          "Laboratorio completo, endoscopía, evaluación cardiopulmonar y nutricional detallada.",
      },
      {
        step: 3,
        title: "Cirugía laparoscópica",
        description:
          "Procedimiento de 90-120 minutos. Se crea el reservorio gástrico y se realiza la derivación intestinal.",
      },
      {
        step: 4,
        title: "Hospitalización y monitoreo",
        description:
          "Estancia de 2-4 días con control estricto, inicio temprano de movilización y líquidos.",
      },
      {
        step: 5,
        title: "Seguimiento de por vida",
        description:
          "Controles regulares, suplementación vitamínica permanente y acompañamiento nutricional continuo.",
      },
    ],
    recovery: [
      {
        phase: "Primeras 72 horas",
        timeframe: "Día 1-3",
        description:
          "Estancia hospitalaria. Líquidos claros. Monitoreo de signos vitales y tolerancia oral.",
      },
      {
        phase: "Primera semana",
        timeframe: "Día 4-7",
        description:
          "Alta hospitalaria. Dieta líquida. Inicio de suplementos vitamínicos. Caminatas suaves.",
      },
      {
        phase: "Semanas 2-6",
        timeframe: "Semana 2-6",
        description:
          "Progresión de dieta líquida a blanda. Retorno gradual a actividades. Controles cada 2 semanas.",
      },
      {
        phase: "Mes 2 en adelante",
        timeframe: "Mes 2+",
        description:
          "Alimentación sólida progresiva. Ejercicio moderado. Controles mensuales con laboratorio trimestral.",
      },
    ],
    faqs: [
      {
        question: "¿Es más riesgoso que la manga gástrica?",
        answer:
          "El bypass es técnicamente más complejo, pero en manos expertas como las del Dr. Salazar, las tasas de complicaciones son muy similares. La elección depende de las condiciones clínicas de cada paciente.",
      },
      {
        question: "¿Necesitaré tomar vitaminas de por vida?",
        answer:
          "Sí, la suplementación con multivitamínicos, hierro, calcio y vitamina B12 es necesaria de forma permanente debido al componente de malabsorción del procedimiento.",
      },
      {
        question: "¿Es mejor el bypass para la diabetes?",
        answer:
          "Sí, el bypass gástrico tiene las tasas más altas de remisión de diabetes tipo 2 (hasta 83%) comparado con otros procedimientos bariátricos, gracias a los cambios hormonales que produce.",
      },
      {
        question: "¿Puedo volver a ganar peso después del bypass?",
        answer:
          "Es posible recuperar algo de peso a largo plazo si no se mantienen los hábitos saludables. El seguimiento continuo con nuestro equipo minimiza significativamente este riesgo.",
      },
    ],
    stats: [
      { label: "Pérdida de exceso de peso", value: "70-80%" },
      { label: "Remisión de diabetes", value: "83%" },
      { label: "Tiempo de cirugía", value: "90-120 min" },
      { label: "Estancia hospitalaria", value: "2-4 días" },
    ],
  },
  {
    slug: "balon-intragastrico",
    name: "Balón Intragástrico",
    shortDescription:
      "Opción no quirúrgica para pérdida de peso moderada. Se coloca por endoscopía en solo 20 minutos.",
    heroSubtitle:
      "Alternativa no quirúrgica para iniciar tu transformación de forma segura y controlada.",
    image: "/images/paso-evaluacion-inicial.jpg",
    description: [
      "El balón intragástrico es una alternativa no quirúrgica para el tratamiento del sobrepeso y la obesidad leve a moderada. Consiste en un dispositivo de silicona que se coloca en el estómago por vía endoscópica y se llena con solución salina.",
      "El balón ocupa espacio en el estómago, generando sensación de saciedad temprana y ayudando al paciente a reducir las porciones de comida. Se mantiene por un período de 6 a 12 meses, dependiendo del tipo de balón utilizado.",
      "Es una excelente opción como puente hacia una cirugía bariátrica en pacientes de alto riesgo, o como tratamiento definitivo para quienes no califican para cirugía.",
    ],
    candidateProfile: [
      "IMC entre 27 y 35 (sobrepeso u obesidad grado I)",
      "Pacientes que no califican o no desean someterse a cirugía",
      "Preparación previa a una cirugía bariátrica (puente)",
      "Personas que buscan una opción temporal y reversible",
      "Compromiso con programa nutricional durante los meses del tratamiento",
    ],
    benefits: [
      {
        title: "Sin cirugía",
        description:
          "Procedimiento endoscópico ambulatorio de solo 20 minutos. Sin incisiones ni anestesia general.",
        icon: "Shield",
      },
      {
        title: "Pérdida de peso efectiva",
        description:
          "Pérdida del 10-15% del peso total corporal durante el período de tratamiento.",
        icon: "TrendingDown",
      },
      {
        title: "Completamente reversible",
        description:
          "El balón se retira por endoscopía al finalizar el tratamiento, sin dejar cambios permanentes.",
        icon: "RotateCcw",
      },
      {
        title: "Recuperación inmediata",
        description:
          "El paciente puede retomar sus actividades normales en 24-48 horas.",
        icon: "Zap",
      },
      {
        title: "Reeducación alimentaria",
        description:
          "Acompañamiento nutricional que enseña nuevos hábitos para mantener los resultados.",
        icon: "BookOpen",
      },
      {
        title: "Bajo riesgo",
        description:
          "Tasa de complicaciones significativamente menor comparada con procedimientos quirúrgicos.",
        icon: "ShieldCheck",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Consulta de evaluación",
        description:
          "El Dr. Salazar evalúa tu caso, peso, historial y define si el balón es la mejor opción para ti.",
      },
      {
        step: 2,
        title: "Preparación",
        description:
          "Exámenes básicos de laboratorio y evaluación nutricional. Ayuno de 12 horas antes del procedimiento.",
      },
      {
        step: 3,
        title: "Colocación endoscópica",
        description:
          "Procedimiento ambulatorio de 20 minutos bajo sedación. El balón se introduce desinflado y se llena en el estómago.",
      },
      {
        step: 4,
        title: "Adaptación",
        description:
          "Período de 3-5 días de adaptación con náuseas leves. Dieta líquida progresiva.",
      },
      {
        step: 5,
        title: "Seguimiento y retiro",
        description:
          "Controles mensuales durante 6 meses. Retiro endoscópico al finalizar el período.",
      },
    ],
    recovery: [
      {
        phase: "Día del procedimiento",
        timeframe: "Día 1",
        description:
          "Alta el mismo día. Posibles náuseas y molestias abdominales leves. Reposo relativo.",
      },
      {
        phase: "Primeros 5 días",
        timeframe: "Día 2-5",
        description:
          "Período de adaptación. Dieta líquida. Medicación para náuseas si es necesario.",
      },
      {
        phase: "Semana 2-4",
        timeframe: "Semana 2-4",
        description:
          "Alimentación blanda progresiva. Actividades normales. Primera consulta de seguimiento.",
      },
      {
        phase: "Mes 2-6",
        timeframe: "Mes 2-6",
        description:
          "Alimentación regular controlada. Programa nutricional activo. Controles mensuales. Ejercicio normal.",
      },
    ],
    faqs: [
      {
        question: "¿Duele la colocación del balón?",
        answer:
          "No, el procedimiento se realiza bajo sedación y dura solo 20 minutos. Es posible sentir náuseas y molestias abdominales durante los primeros 3-5 días de adaptación.",
      },
      {
        question: "¿Qué pasa cuando se retira el balón?",
        answer:
          "El retiro es también por endoscopía, de forma ambulatoria. Los resultados se mantienen si el paciente ha adoptado los hábitos alimentarios aprendidos durante el programa nutricional.",
      },
      {
        question: "¿Puedo hacer ejercicio con el balón?",
        answer:
          "Sí, después del período de adaptación (5-7 días) puedes realizar ejercicio de forma normal. De hecho, se recomienda actividad física regular para potenciar los resultados.",
      },
    ],
    stats: [
      { label: "Pérdida de peso total", value: "10-15%" },
      { label: "Duración del procedimiento", value: "20 min" },
      { label: "Tiempo del balón", value: "6 meses" },
      { label: "Retorno a actividades", value: "24-48h" },
    ],
  },
  {
    slug: "cirugia-revisional",
    name: "Cirugía Revisional",
    shortDescription:
      "Corrección o conversión de procedimientos bariátricos previos que no lograron los resultados esperados.",
    heroSubtitle:
      "Soluciones especializadas para pacientes con cirugía bariátrica previa que necesitan una nueva oportunidad.",
    image: "/images/doctor-scrubs.jpg",
    description: [
      "La cirugía revisional o de conversión se realiza cuando un procedimiento bariátrico previo no ha logrado los resultados esperados de pérdida de peso, ha presentado complicaciones, o cuando ha habido una recuperación significativa del peso perdido.",
      "Estas intervenciones requieren un alto nivel de experiencia quirúrgica debido a la complejidad de operar sobre anatomía previamente modificada. El Dr. Salazar cuenta con amplia experiencia en cirugía revisional, evaluando cada caso de forma individualizada.",
      "Las opciones incluyen conversión de banda a manga o bypass, revisión de manga a bypass, y corrección de complicaciones como dilatación de la manga o fístulas.",
    ],
    candidateProfile: [
      "Recuperación significativa de peso después de cirugía bariátrica previa",
      "Pérdida de peso insuficiente con el procedimiento inicial",
      "Complicaciones del procedimiento original (reflujo severo, dilatación)",
      "Banda gástrica que requiere retiro o conversión",
      "Evaluación completa que confirme la necesidad de revisión",
    ],
    benefits: [
      {
        title: "Segunda oportunidad",
        description:
          "Permite retomar el camino hacia un peso saludable cuando el primer procedimiento no fue suficiente.",
        icon: "RefreshCw",
      },
      {
        title: "Experiencia especializada",
        description:
          "El Dr. Salazar tiene amplia experiencia en reoperaciones bariátricas complejas.",
        icon: "Award",
      },
      {
        title: "Técnica laparoscópica",
        description:
          "La mayoría de revisiones se realizan por laparoscopía, minimizando la recuperación.",
        icon: "Minimize2",
      },
      {
        title: "Evaluación integral",
        description:
          "Cada caso se estudia exhaustivamente para elegir la estrategia revisional óptima.",
        icon: "Search",
      },
      {
        title: "Resolución de complicaciones",
        description:
          "Tratamiento de reflujo, dilatación, deslizamiento de banda y otras complicaciones.",
        icon: "Wrench",
      },
      {
        title: "Resultados mejorados",
        description:
          "La conversión a un procedimiento más efectivo puede lograr la pérdida de peso deseada.",
        icon: "TrendingDown",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Evaluación exhaustiva",
        description:
          "Revisión completa del historial quirúrgico, estudios contrastados y endoscópicos del procedimiento previo.",
      },
      {
        step: 2,
        title: "Planificación personalizada",
        description:
          "El Dr. Salazar define la estrategia revisional óptima según los hallazgos y objetivos del paciente.",
      },
      {
        step: 3,
        title: "Preparación preoperatoria",
        description:
          "Exámenes completos, evaluación nutricional y optimización del estado de salud previo a la cirugía.",
      },
      {
        step: 4,
        title: "Cirugía revisional",
        description:
          "Procedimiento laparoscópico de 120-180 minutos, dependiendo de la complejidad del caso.",
      },
      {
        step: 5,
        title: "Recuperación y seguimiento",
        description:
          "Hospitalización de 3-5 días con monitoreo cercano. Seguimiento intensivo los primeros meses.",
      },
    ],
    recovery: [
      {
        phase: "Hospitalización",
        timeframe: "Día 1-5",
        description:
          "Estancia hospitalaria más prolongada. Monitoreo estricto. Inicio gradual de líquidos.",
      },
      {
        phase: "Primeras 2 semanas",
        timeframe: "Semana 1-2",
        description:
          "Reposo en casa. Dieta líquida estricta. Cuidado de heridas. Control del dolor.",
      },
      {
        phase: "Semanas 3-8",
        timeframe: "Semana 3-8",
        description:
          "Progresión a dieta blanda. Retorno gradual a actividades. Controles frecuentes.",
      },
      {
        phase: "Mes 3 en adelante",
        timeframe: "Mes 3+",
        description:
          "Alimentación progresiva. Actividad física moderada. Seguimiento continuo con equipo multidisciplinario.",
      },
    ],
    faqs: [
      {
        question: "¿Por qué puede fallar una cirugía bariátrica previa?",
        answer:
          "Las causas son diversas: falta de seguimiento nutricional, dilatación del reservorio gástrico, elección incorrecta del procedimiento original, o factores anatómicos. Cada caso requiere evaluación individual.",
      },
      {
        question: "¿La cirugía revisional es más riesgosa?",
        answer:
          "Tiene un grado mayor de complejidad técnica debido a las adherencias y la anatomía modificada. Sin embargo, en manos de un cirujano experimentado como el Dr. Salazar, los riesgos se manejan de forma controlada.",
      },
      {
        question: "¿Cuánto tiempo después de mi primera cirugía puedo operarme?",
        answer:
          "Generalmente se recomienda esperar al menos 12-18 meses desde la cirugía original, aunque esto varía según el caso y el tipo de revisión necesaria.",
      },
    ],
    stats: [
      { label: "Duración de cirugía", value: "2-3 horas" },
      { label: "Estancia hospitalaria", value: "3-5 días" },
      { label: "Tiempo de recuperación", value: "4-8 sem" },
      { label: "Retorno laboral", value: "3-4 sem" },
    ],
  },
  {
    slug: "cirugia-laparoscopica",
    name: "Cirugía Laparoscópica",
    shortDescription:
      "Técnica mínimamente invasiva para cirugías abdominales. Menos dolor, menos cicatrices, recuperación más rápida.",
    heroSubtitle:
      "Técnica quirúrgica de mínima invasión que revoluciona la cirugía abdominal moderna.",
    image: "/images/doctor-scrubs-2.jpg",
    description: [
      "La cirugía laparoscópica es una técnica quirúrgica mínimamente invasiva que permite realizar operaciones abdominales a través de pequeñas incisiones de 5 a 12 milímetros, utilizando una cámara de alta definición y instrumental especializado.",
      "El Dr. Salazar es especialista en cirugía laparoscópica avanzada con más de 16 años de experiencia en cirugía abdominal. Esta técnica se aplica no solo en procedimientos bariátricos, sino también en cirugías de vesícula, hernias, apéndice y otras patologías abdominales.",
      "Las ventajas sobre la cirugía abierta tradicional son significativas: menor dolor, estancia hospitalaria más corta, recuperación más rápida y mejores resultados estéticos.",
    ],
    candidateProfile: [
      "Pacientes que requieren cirugía abdominal (vesícula, hernias, apéndice)",
      "Candidatos a cirugía bariátrica (manga, bypass)",
      "Pacientes que buscan una recuperación más rápida",
      "Casos donde se requiera diagnóstico exploratorio abdominal",
      "Pacientes aptos para anestesia general",
    ],
    benefits: [
      {
        title: "Incisiones mínimas",
        description:
          "Solo 3-5 incisiones de 5-12mm en lugar de una incisión grande. Mejores resultados estéticos.",
        icon: "Minimize2",
      },
      {
        title: "Menor dolor postoperatorio",
        description:
          "Significativamente menos dolor que la cirugía abierta. Menor necesidad de analgésicos.",
        icon: "HeartPulse",
      },
      {
        title: "Recuperación rápida",
        description:
          "Alta hospitalaria en 24-48 horas para la mayoría de procedimientos.",
        icon: "Zap",
      },
      {
        title: "Menos riesgo de infección",
        description:
          "Las incisiones pequeñas reducen significativamente el riesgo de infecciones y hernias incisionales.",
        icon: "ShieldCheck",
      },
      {
        title: "Visión amplificada",
        description:
          "La cámara de alta definición permite al cirujano una visión detallada y amplificada del área operatoria.",
        icon: "Eye",
      },
      {
        title: "Menor tiempo de hospitalización",
        description:
          "La mayoría de pacientes son dados de alta en 1-2 días, reduciendo costos y riesgos hospitalarios.",
        icon: "Clock",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Evaluación quirúrgica",
        description:
          "Consulta con el Dr. Salazar para evaluar la patología, determinar la viabilidad laparoscópica y planificar la cirugía.",
      },
      {
        step: 2,
        title: "Preparación preoperatoria",
        description:
          "Exámenes prequirúrgicos estándar: laboratorio, riesgo cardiovascular, evaluación anestesiológica.",
      },
      {
        step: 3,
        title: "Procedimiento laparoscópico",
        description:
          "Bajo anestesia general, se realizan las incisiones, se insufla CO2 para crear espacio de trabajo y se opera con instrumental especializado.",
      },
      {
        step: 4,
        title: "Recuperación hospitalaria",
        description:
          "Monitoreo postoperatorio, inicio temprano de deambulación y alimentación según el tipo de cirugía.",
      },
      {
        step: 5,
        title: "Seguimiento ambulatorio",
        description:
          "Control a los 7 días para retiro de puntos, evaluación de heridas y seguimiento según patología.",
      },
    ],
    recovery: [
      {
        phase: "Postoperatorio inmediato",
        timeframe: "Día 1",
        description:
          "Recuperación de anestesia. Inicio de deambulación temprana. Tolerancia a líquidos.",
      },
      {
        phase: "Primeros 3 días",
        timeframe: "Día 2-3",
        description:
          "Alta hospitalaria. Molestias leves en sitios de incisión. Alimentación progresiva.",
      },
      {
        phase: "Primera semana",
        timeframe: "Día 4-7",
        description:
          "Actividades cotidianas ligeras. Evitar esfuerzos. Control médico para revisión de heridas.",
      },
      {
        phase: "Semana 2-4",
        timeframe: "Semana 2-4",
        description:
          "Retorno completo a actividades normales. Inicio de ejercicio suave. Alta definitiva según evolución.",
      },
    ],
    faqs: [
      {
        question: "¿Todas las cirugías abdominales pueden hacerse por laparoscopía?",
        answer:
          "La mayoría sí, aunque hay casos donde la cirugía abierta es más segura (urgencias complejas, adherencias extensas). El Dr. Salazar evalúa cada caso individualmente para recomendar la mejor técnica.",
      },
      {
        question: "¿Es más cara que la cirugía tradicional?",
        answer:
          "El costo del procedimiento puede ser similar o ligeramente mayor, pero se compensa con menor estancia hospitalaria, menos días de incapacidad y menor necesidad de medicamentos postoperatorios.",
      },
      {
        question: "¿Qué pasa si durante la laparoscopía se necesita convertir a cirugía abierta?",
        answer:
          "En casos excepcionales (menos del 2%), puede ser necesario convertir a cirugía abierta por seguridad del paciente. El Dr. Salazar está preparado para ambas técnicas en cada intervención.",
      },
    ],
    stats: [
      { label: "Incisiones", value: "5-12mm" },
      { label: "Estancia hospitalaria", value: "24-48h" },
      { label: "Retorno a actividades", value: "1-2 sem" },
      { label: "Experiencia", value: "+16 años" },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getOtherServices(currentSlug: string): ServiceData[] {
  return SERVICES.filter((s) => s.slug !== currentSlug);
}
