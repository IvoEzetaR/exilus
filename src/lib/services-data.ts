// Datos de servicios Exilus — fuente única de verdad
// Cada categoría agrupa sub-servicios. Cada categoría es una página dedicada en /servicios/[slug]
// Los sub-servicios aparecen como secciones internas con scroll suave (#anchor)

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface SubServiceBenefit {
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface SubService {
  slug: string; // anchor para navegación interna #manga-gastrica
  name: string;
  shortDescription: string;
  description: string[];
  image: string;
  imageAlt: string;
  benefits: SubServiceBenefit[];
  candidateProfile: string[];
  stats: { label: string; value: string }[];
}

export interface CategoryStat {
  label: string;
  value: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  tag: string;
  shortDescription: string;
  heroSubtitle: string;
  image: string;
  imageAlt: string;
  intro: string[];
  highlights: { title: string; description: string; icon: string }[];
  subServices: SubService[];
  faqs: ServiceFAQ[];
  stats: CategoryStat[];
}

export const SERVICES: ServiceData[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // 1. CIRUGÍA BARIÁTRICA Y METABÓLICA
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "cirugia-bariatrica",
    name: "Cirugía Bariátrica y Metabólica",
    tag: "Bariátrica",
    shortDescription:
      "Procedimientos quirúrgicos de alta complejidad para el tratamiento definitivo de la obesidad y enfermedades metabólicas asociadas.",
    heroSubtitle:
      "El conjunto de procedimientos más efectivos para tratar la obesidad mórbida, diabetes tipo 2, hipertensión y síndrome metabólico — realizados por laparoscopía con más de 16 años de experiencia.",
    image: "/images/doctor-scrubs.jpg",
    imageAlt:
      "Dr. Augusto Salazar — cirujano bariatra en Trujillo realizando procedimiento laparoscópico",
    intro: [
      "La cirugía bariátrica y metabólica reúne los procedimientos quirúrgicos más eficaces y respaldados científicamente para tratar la obesidad y sus complicaciones. No se trata solo de bajar de peso: estas intervenciones modifican la fisiología del aparato digestivo y producen cambios hormonales que mejoran la diabetes, la hipertensión, el colesterol y la apnea del sueño.",
      "El Dr. Augusto Salazar realiza todos estos procedimientos por vía laparoscópica avanzada en la Clínica Sanna Sánchez Ferrer de Trujillo, con un equipo multidisciplinario que acompaña al paciente desde la primera evaluación hasta el seguimiento de largo plazo.",
    ],
    highlights: [
      {
        title: "Cirugía mínimamente invasiva",
        description:
          "Todos los procedimientos por laparoscopía: incisiones de 5-12mm, menor dolor y recuperación más rápida.",
        icon: "Minimize2",
      },
      {
        title: "Resolución de comorbilidades",
        description:
          "Mejora o remisión de diabetes tipo 2, hipertensión, apnea del sueño y dislipidemias.",
        icon: "HeartPulse",
      },
      {
        title: "Equipo multidisciplinario",
        description:
          "Cirujano bariatra, nutricionista, psicóloga, anestesiólogo y endocrinólogo. Todos bajo un solo techo.",
        icon: "Users",
      },
    ],
    subServices: [
      {
        slug: "manga-gastrica",
        name: "Manga Gástrica",
        shortDescription:
          "El procedimiento bariátrico más realizado en el mundo. Reduce el 75-80% del estómago de forma permanente.",
        description: [
          "La manga gástrica, también conocida como gastrectomía vertical, consiste en remover aproximadamente el 75-80% del estómago, dejando una estructura tubular en forma de manga o banana.",
          "Este procedimiento no solo reduce la capacidad del estómago, sino que también disminuye significativamente los niveles de grelina —la hormona del apetito—. El resultado es saciedad temprana y reducción natural del hambre.",
        ],
        image: "/images/paso-cirugia.jpg",
        imageAlt:
          "Procedimiento de manga gástrica laparoscópica realizado en Trujillo por el Dr. Augusto Salazar",
        benefits: [
          {
            title: "Pérdida del 60-70% del exceso de peso",
            description: "En los primeros 12-18 meses con compromiso adecuado.",
            icon: "TrendingDown",
          },
          {
            title: "Reduce la grelina",
            description: "Disminuye naturalmente el apetito.",
            icon: "Utensils",
          },
          {
            title: "Procedimiento permanente",
            description: "Sin dispositivos externos ni ajustes periódicos.",
            icon: "ShieldCheck",
          },
          {
            title: "Mejora comorbilidades",
            description: "Diabetes tipo 2, hipertensión y apnea del sueño.",
            icon: "HeartPulse",
          },
        ],
        candidateProfile: [
          "IMC ≥ 40, o IMC ≥ 35 con comorbilidades (diabetes, hipertensión, apnea)",
          "Intentos previos de pérdida de peso sin resultado sostenido",
          "Compromiso con cambios de estilo de vida a largo plazo",
          "Mayores de 18 años en buen estado de salud general",
        ],
        stats: [
          { label: "Pérdida exceso de peso", value: "60-70%" },
          { label: "Tiempo de cirugía", value: "60-90 min" },
          { label: "Estancia hospitalaria", value: "2-3 días" },
          { label: "Retorno laboral", value: "10-14 días" },
        ],
      },
      {
        slug: "bypass-gastrico",
        name: "Bypass Gástrico",
        shortDescription:
          "Técnica gold standard para obesidad severa y diabetes tipo 2. Combina restricción y malabsorción controlada.",
        description: [
          "El bypass gástrico en Y de Roux es considerado el estándar de oro de la cirugía bariátrica. Combina dos mecanismos: la creación de un pequeño reservorio gástrico (restricción) y el desvío de una porción del intestino delgado (malabsorción controlada).",
          "Es especialmente efectivo en pacientes con diabetes tipo 2 severa o reflujo gastroesofágico, ya que produce cambios hormonales que mejoran la sensibilidad a la insulina incluso antes de que se produzca pérdida significativa de peso.",
        ],
        image: "/images/doctor-scrubs-2.jpg",
        imageAlt:
          "Bypass gástrico laparoscópico — Dr. Augusto Salazar, cirujano bariatra Trujillo",
        benefits: [
          {
            title: "Pérdida del 70-80% del exceso de peso",
            description: "Superior a otros procedimientos bariátricos.",
            icon: "TrendingDown",
          },
          {
            title: "Remisión de diabetes hasta 83%",
            description: "Tasa más alta entre todos los procedimientos.",
            icon: "Activity",
          },
          {
            title: "Mejora del reflujo severo",
            description: "Elimina o controla el reflujo gastroesofágico (ERGE).",
            icon: "ShieldCheck",
          },
          {
            title: "Cambios hormonales favorables",
            description: "Modifica las hormonas intestinales del apetito.",
            icon: "Award",
          },
        ],
        candidateProfile: [
          "IMC ≥ 40 (obesidad mórbida)",
          "IMC ≥ 35 con diabetes tipo 2 o reflujo severo",
          "Pacientes con síndrome metabólico asociado",
          "Compromiso con suplementación vitamínica de por vida",
        ],
        stats: [
          { label: "Pérdida exceso de peso", value: "70-80%" },
          { label: "Remisión diabetes", value: "83%" },
          { label: "Tiempo de cirugía", value: "90-120 min" },
          { label: "Estancia hospitalaria", value: "2-4 días" },
        ],
      },
      {
        slug: "biparticion-intestinal",
        name: "Bipartición Intestinal",
        shortDescription:
          "Técnica avanzada para diabetes tipo 2 severa con menor componente malabsortivo. Excelente control metabólico.",
        description: [
          "La bipartición intestinal —también llamada SADI-S simplificada— es una técnica de cirugía metabólica diseñada específicamente para pacientes con diabetes tipo 2 severa o difícil de controlar. Combina una manga gástrica con una derivación parcial del intestino delgado.",
          "A diferencia del bypass clásico, mantiene una vía alimentaria fisiológica (la comida sigue pasando por el duodeno), lo que reduce el riesgo de deficiencias vitamínicas mientras mantiene el potente efecto sobre el control glicémico.",
        ],
        image: "/images/paso-evaluacion-multi.jpg",
        imageAlt:
          "Bipartición intestinal — cirugía metabólica avanzada para diabetes tipo 2 en Trujillo",
        benefits: [
          {
            title: "Excelente control de diabetes",
            description: "Tasas de remisión comparables al bypass.",
            icon: "Activity",
          },
          {
            title: "Menor riesgo nutricional",
            description: "Mantiene tránsito por duodeno: menos déficits vitamínicos.",
            icon: "ShieldCheck",
          },
          {
            title: "Pérdida de peso sostenida",
            description: "Resultados duraderos a largo plazo.",
            icon: "TrendingDown",
          },
          {
            title: "Técnica laparoscópica",
            description: "Recuperación rápida y mínimas cicatrices.",
            icon: "Minimize2",
          },
        ],
        candidateProfile: [
          "Diabetes tipo 2 severa o de difícil control",
          "IMC ≥ 35 con síndrome metabólico avanzado",
          "Pacientes con bypass contraindicado por anatomía o nutrición",
          "Quienes buscan equilibrio entre control metabólico y bajo riesgo nutricional",
        ],
        stats: [
          { label: "Pérdida exceso de peso", value: "65-75%" },
          { label: "Control de diabetes", value: "Excelente" },
          { label: "Tiempo de cirugía", value: "120-150 min" },
          { label: "Estancia hospitalaria", value: "3-4 días" },
        ],
      },
      {
        slug: "cirugia-revisional",
        name: "Cirugía Revisional",
        shortDescription:
          "Corrección o conversión de procedimientos bariátricos previos que no lograron los resultados esperados.",
        description: [
          "La cirugía revisional o de conversión se realiza cuando un procedimiento bariátrico previo no logró los resultados esperados, presentó complicaciones o hubo recuperación significativa del peso.",
          "Estas intervenciones requieren alto nivel de experiencia debido a la complejidad de operar sobre anatomía previamente modificada. El Dr. Salazar evalúa caso por caso y define la estrategia óptima: conversión de banda a manga o bypass, revisión de manga a bypass, o corrección de complicaciones (dilatación, fístulas, reflujo severo).",
        ],
        image: "/images/doctor-saco-blanco.jpg",
        imageAlt:
          "Cirugía revisional bariátrica — segunda oportunidad tras procedimiento previo fallido",
        benefits: [
          {
            title: "Segunda oportunidad",
            description: "Permite retomar el camino hacia un peso saludable.",
            icon: "RefreshCw",
          },
          {
            title: "Experiencia especializada",
            description: "Reoperaciones bariátricas complejas.",
            icon: "Award",
          },
          {
            title: "Resolución de complicaciones",
            description: "Reflujo, dilatación, deslizamiento de banda.",
            icon: "Wrench",
          },
          {
            title: "Técnica laparoscópica",
            description: "La mayoría se realizan por mínima invasión.",
            icon: "Minimize2",
          },
        ],
        candidateProfile: [
          "Recuperación significativa de peso post-cirugía bariátrica",
          "Pérdida de peso insuficiente con el procedimiento original",
          "Complicaciones del procedimiento previo (reflujo severo, dilatación)",
          "Banda gástrica que requiere retiro o conversión",
        ],
        stats: [
          { label: "Duración de cirugía", value: "2-3 horas" },
          { label: "Estancia hospitalaria", value: "3-5 días" },
          { label: "Recuperación", value: "4-8 semanas" },
          { label: "Retorno laboral", value: "3-4 semanas" },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cómo elijo entre manga, bypass o bipartición?",
        answer:
          "Cada procedimiento tiene indicaciones específicas según tu IMC, comorbilidades, hábitos alimentarios y antecedentes. En la consulta inicial, el Dr. Salazar evalúa tu caso integralmente y recomienda la mejor opción. No hay 'el mejor' procedimiento absoluto: hay el mejor para tu caso particular.",
      },
      {
        question: "¿Cuánto tiempo de hospitalización requiere cada cirugía?",
        answer:
          "Manga gástrica: 2-3 días. Bypass gástrico: 2-4 días. Bipartición intestinal: 3-4 días. Cirugía revisional: 3-5 días. Todos los procedimientos se realizan en la Clínica Sanna Sánchez Ferrer en Trujillo.",
      },
      {
        question: "¿La cirugía bariátrica está cubierta por seguros en Perú?",
        answer:
          "Algunas EPS y seguros privados cubren parcial o totalmente la cirugía cuando se cumple criterio médico (IMC ≥ 40 o ≥ 35 con comorbilidades). Te asesoramos en el proceso de cobertura con tu seguro.",
      },
      {
        question: "¿Qué tan seguros son estos procedimientos?",
        answer:
          "La cirugía bariátrica laparoscópica realizada por equipos experimentados tiene tasas de complicación menores al 2-3%. El Dr. Salazar acumula más de 16 años de experiencia con cientos de procedimientos exitosos.",
      },
      {
        question: "¿Voy a recuperar el peso después de la cirugía?",
        answer:
          "Con seguimiento adecuado y compromiso con los cambios de estilo de vida, los resultados se mantienen a largo plazo. La cirugía es la herramienta; el seguimiento multidisciplinario y los hábitos saludables sostienen los resultados.",
      },
    ],
    stats: [
      { label: "Pacientes operados", value: "+500" },
      { label: "Años de experiencia", value: "+16" },
      { label: "Tipo de cirugía", value: "Laparoscópica" },
      { label: "Equipo multidisciplinario", value: "Sí" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. MANEJO DE OBESIDAD (no quirúrgico)
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "manejo-obesidad",
    name: "Manejo de Obesidad",
    tag: "Obesidad",
    shortDescription:
      "Abordaje integral y personalizado del sobrepeso combinando evaluación médica, acompañamiento nutricional, soporte farmacológico y opciones endoscópicas.",
    heroSubtitle:
      "Tratamientos no quirúrgicos para el sobrepeso y la obesidad leve a moderada. Combina ciencia, nutrición y la última generación de fármacos GLP-1.",
    image: "/images/doctor-consulta.jpg",
    imageAlt:
      "Consulta médica integral para manejo de obesidad y sobrepeso en Trujillo",
    intro: [
      "No todos los pacientes necesitan o son candidatos a cirugía bariátrica. Para quienes presentan sobrepeso u obesidad leve a moderada (IMC entre 27 y 35), o para quienes prefieren un abordaje no quirúrgico, ofrecemos un programa integral de manejo del peso.",
      "Combinamos evaluación médica completa, plan nutricional personalizado, soporte psicológico, y —cuando corresponde— tratamiento farmacológico de última generación o procedimientos endoscópicos como el balón intragástrico. El objetivo: pérdida de peso sostenible sin necesidad de cirugía mayor.",
    ],
    highlights: [
      {
        title: "Sin cirugía mayor",
        description:
          "Opciones ambulatorias o endoscópicas. Sin incisiones quirúrgicas.",
        icon: "Shield",
      },
      {
        title: "Acompañamiento integral",
        description:
          "Médico, nutricionista y psicóloga. No estás solo en el proceso.",
        icon: "Users",
      },
      {
        title: "Personalizado",
        description:
          "Cada plan se ajusta a tu IMC, hábitos, comorbilidades y objetivos.",
        icon: "Settings",
      },
    ],
    subServices: [
      {
        slug: "tratamiento-multidisciplinario",
        name: "Tratamiento Multidisciplinario",
        shortDescription:
          "Programa integral con cirujano bariatra, nutricionista, psicóloga y endocrinólogo. La base de cualquier transformación sostenible.",
        description: [
          "El tratamiento multidisciplinario es la base de cualquier abordaje serio del sobrepeso y la obesidad. Combina la mirada de varios especialistas para entender tu caso desde lo médico, lo nutricional, lo conductual y lo metabólico.",
          "Este programa puede ser un tratamiento definitivo en pacientes con sobrepeso leve, o el complemento indispensable antes y después de cualquier intervención (farmacológica, balón o cirugía). Los pacientes que mejor acompañamiento reciben son los que mejor sostienen los resultados.",
        ],
        image: "/images/paso-evaluacion-inicial.jpg",
        imageAlt:
          "Evaluación multidisciplinaria para manejo de obesidad en Exilus Trujillo",
        benefits: [
          {
            title: "Evaluación 360°",
            description: "Médica, nutricional, psicológica y metabólica.",
            icon: "Search",
          },
          {
            title: "Plan personalizado",
            description: "Adaptado a tu cuerpo, hábitos y objetivos.",
            icon: "Settings",
          },
          {
            title: "Acompañamiento continuo",
            description: "Controles periódicos. No te dejamos solo.",
            icon: "Users",
          },
          {
            title: "Resultados sostenibles",
            description: "Cambios duraderos, no solo bajada rápida.",
            icon: "Clock",
          },
        ],
        candidateProfile: [
          "Sobrepeso u obesidad leve a moderada (IMC 25-35)",
          "Pacientes que prefieren empezar sin cirugía ni fármacos",
          "Preparación previa a cirugía bariátrica o balón intragástrico",
          "Pacientes post-quirúrgicos en fase de mantenimiento",
        ],
        stats: [
          { label: "Pérdida de peso esperada", value: "5-15%" },
          { label: "Duración del programa", value: "3-12 meses" },
          { label: "Especialistas", value: "4+" },
          { label: "Frecuencia controles", value: "Mensual" },
        ],
      },
      {
        slug: "tratamiento-farmacologico",
        name: "Tratamiento Farmacológico",
        shortDescription:
          "Última generación de medicamentos GLP-1 (semaglutida, liraglutida, tirzepatida) para pérdida de peso clínicamente significativa.",
        description: [
          "Los nuevos medicamentos análogos de GLP-1 —como semaglutida, liraglutida y tirzepatida— han revolucionado el tratamiento médico de la obesidad. Son fármacos inyectables que actúan sobre el centro del apetito y mejoran la sensibilidad a la insulina, logrando pérdidas de peso del 10-20% en pacientes adecuadamente seleccionados.",
          "El Dr. Salazar evalúa la indicación, tolerancia, contraindicaciones y combinación óptima con tu plan nutricional. La farmacoterapia no reemplaza el cambio de hábitos: los potencia. Funciona mejor cuando se combina con seguimiento nutricional y conductual.",
        ],
        image: "/images/doctor-terno.jpg",
        imageAlt:
          "Tratamiento farmacológico para obesidad con análogos GLP-1 — Dr. Augusto Salazar Trujillo",
        benefits: [
          {
            title: "Pérdida del 10-20% del peso",
            description: "Resultados clínicamente significativos.",
            icon: "TrendingDown",
          },
          {
            title: "Sin cirugía",
            description: "Tratamiento ambulatorio inyectable.",
            icon: "Shield",
          },
          {
            title: "Mejora metabólica",
            description: "Reduce riesgo cardiovascular y diabetes tipo 2.",
            icon: "Activity",
          },
          {
            title: "Reduce el apetito",
            description: "Acción directa sobre el centro del hambre.",
            icon: "Utensils",
          },
        ],
        candidateProfile: [
          "IMC ≥ 27 con comorbilidades, o IMC ≥ 30",
          "Pacientes que no son candidatos o no desean cirugía",
          "Adolescentes y adultos con prediabetes o diabetes tipo 2",
          "Como puente o complemento a cirugía bariátrica",
        ],
        stats: [
          { label: "Pérdida de peso", value: "10-20%" },
          { label: "Forma de uso", value: "Inyección semanal" },
          { label: "Duración mínima", value: "12 meses" },
          { label: "Vía", value: "Subcutánea" },
        ],
      },
      {
        slug: "balon-intragastrico",
        name: "Balón Intragástrico",
        shortDescription:
          "Opción no quirúrgica colocada por endoscopía en solo 20 minutos. Pérdida de 10-15% del peso total.",
        description: [
          "El balón intragástrico es un dispositivo de silicona que se coloca en el estómago por vía endoscópica y se llena con solución salina. Ocupa espacio dentro del estómago, generando saciedad temprana y ayudando al paciente a reducir las porciones.",
          "Se mantiene de 6 a 12 meses según el tipo y se retira por endoscopía. Es excelente como tratamiento definitivo para obesidad leve, como puente hacia una cirugía en pacientes de alto riesgo, o como motivador inicial para quienes necesitan ver resultados rápidos antes de comprometerse con un programa más extenso.",
        ],
        image: "/images/paso-estudios-preop.jpg",
        imageAlt:
          "Balón intragástrico — procedimiento endoscópico ambulatorio para pérdida de peso",
        benefits: [
          {
            title: "Sin cirugía",
            description: "Procedimiento endoscópico de 20 minutos.",
            icon: "Shield",
          },
          {
            title: "Completamente reversible",
            description: "Se retira sin dejar cambios anatómicos.",
            icon: "RotateCcw",
          },
          {
            title: "Recuperación inmediata",
            description: "Vuelves a tus actividades en 24-48 horas.",
            icon: "Zap",
          },
          {
            title: "Pérdida del 10-15%",
            description: "Del peso total durante el tratamiento.",
            icon: "TrendingDown",
          },
        ],
        candidateProfile: [
          "IMC entre 27 y 35 (sobrepeso u obesidad grado I)",
          "Pacientes que no califican o no desean cirugía",
          "Preparación previa a cirugía bariátrica (puente)",
          "Personas que buscan opción temporal y reversible",
        ],
        stats: [
          { label: "Pérdida de peso total", value: "10-15%" },
          { label: "Duración procedimiento", value: "20 min" },
          { label: "Tiempo del balón", value: "6 meses" },
          { label: "Retorno a actividades", value: "24-48h" },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cuál es la diferencia entre el tratamiento multidisciplinario y el farmacológico?",
        answer:
          "El multidisciplinario es la base: nutrición, psicología, evaluación médica y cambios de hábitos. El farmacológico SUMA medicamentos GLP-1 cuando esos cambios no son suficientes o cuando hay comorbilidades severas. El mejor resultado se logra combinando ambos.",
      },
      {
        question: "¿Los medicamentos GLP-1 son seguros a largo plazo?",
        answer:
          "Sí. Tienen más de una década de datos clínicos en diabetes y casi 10 años en obesidad. El Dr. Salazar evalúa contraindicaciones específicas (antecedentes de pancreatitis, cáncer medular de tiroides) y monitoriza efectos adversos durante el tratamiento.",
      },
      {
        question: "¿Cuándo se prefiere balón intragástrico sobre fármacos?",
        answer:
          "El balón es ideal cuando se buscan resultados rápidos en menos de un año, cuando hay contraindicación a fármacos GLP-1, o cuando el paciente quiere una opción reversible y temporal. El fármaco es mejor para tratamientos prolongados o pacientes con diabetes tipo 2 severa.",
      },
      {
        question: "¿Necesito ser operado después del balón intragástrico?",
        answer:
          "No necesariamente. Si durante los 6-12 meses del balón el paciente cambia sus hábitos y mantiene el peso perdido, no requiere cirugía. En algunos casos sí se decide pasar a manga o bypass para resultados a largo plazo.",
      },
    ],
    stats: [
      { label: "Sin cirugía mayor", value: "100%" },
      { label: "Especialistas", value: "4+" },
      { label: "Pérdida promedio", value: "10-20%" },
      { label: "Recuperación", value: "24-48h" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. CIRUGÍA LAPAROSCÓPICA (general / no bariátrica)
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "cirugia-laparoscopica",
    name: "Cirugía Laparoscópica",
    tag: "Laparoscópica",
    shortDescription:
      "Técnica mínimamente invasiva para el tratamiento de patologías abdominales. Menos dolor, recuperación más rápida y mejores resultados estéticos.",
    heroSubtitle:
      "Cirugía abdominal de mínima invasión: vesícula, hernias, apéndice, reflujo, colon y más. Incisiones milimétricas, alta hospitalaria en 24-48 horas.",
    image: "/images/doctor-cirugia-laparoscopica.jpg",
    imageAlt:
      "Cirugía laparoscópica abdominal — Dr. Augusto Salazar, Trujillo",
    intro: [
      "La cirugía laparoscópica es una técnica de mínima invasión que permite operar el abdomen a través de pequeñas incisiones de 5 a 12 milímetros, utilizando una cámara de alta definición y instrumental especializado.",
      "Las ventajas sobre la cirugía abierta tradicional son enormes: menor dolor postoperatorio, estancia hospitalaria más corta, recuperación más rápida, menos riesgo de infección y mejores resultados estéticos. El Dr. Salazar es especialista en cirugía laparoscópica avanzada con más de 16 años de experiencia en procedimientos abdominales.",
    ],
    highlights: [
      {
        title: "Incisiones de 5-12mm",
        description:
          "En lugar de una incisión grande. Cicatrices casi imperceptibles.",
        icon: "Minimize2",
      },
      {
        title: "Alta en 24-48 horas",
        description:
          "La mayoría de procedimientos requieren solo 1-2 días de hospitalización.",
        icon: "Clock",
      },
      {
        title: "Menos dolor postop",
        description:
          "Menor necesidad de analgésicos comparado con cirugía abierta.",
        icon: "HeartPulse",
      },
    ],
    subServices: [
      {
        slug: "vesicula",
        name: "Cirugía de Vesícula (Colecistectomía)",
        shortDescription:
          "Extracción de la vesícula biliar por laparoscopía. La cirugía abdominal más frecuente en el mundo.",
        description: [
          "La colecistectomía laparoscópica es el tratamiento estándar para los cálculos biliares (litiasis vesicular) y la inflamación de la vesícula (colecistitis). Se realiza a través de 3-4 incisiones milimétricas en el abdomen.",
          "Es uno de los procedimientos en los que el Dr. Salazar tiene mayor volumen de experiencia. La mayoría de pacientes se van de alta al día siguiente y retoman sus actividades normales en una semana.",
        ],
        image: "/images/paso-cirugia.jpg",
        imageAlt:
          "Cirugía de vesícula laparoscópica — colecistectomía mínimamente invasiva en Trujillo",
        benefits: [
          {
            title: "Cirugía ambulatoria o 1 día",
            description: "Alta el mismo día o al día siguiente.",
            icon: "Clock",
          },
          {
            title: "3-4 incisiones milimétricas",
            description: "Cicatrices mínimas casi imperceptibles.",
            icon: "Minimize2",
          },
          {
            title: "Retorno laboral en 1 semana",
            description: "Para trabajos de oficina y actividad ligera.",
            icon: "Zap",
          },
          {
            title: "Resuelve cólicos biliares",
            description: "Eliminación definitiva del problema.",
            icon: "ShieldCheck",
          },
        ],
        candidateProfile: [
          "Cálculos en la vesícula (litiasis) sintomáticos o silentes",
          "Colecistitis aguda o crónica",
          "Pólipos vesiculares mayores de 1 cm",
          "Pancreatitis biliar previa",
        ],
        stats: [
          { label: "Tiempo de cirugía", value: "30-60 min" },
          { label: "Estancia", value: "Ambulatoria/1 día" },
          { label: "Incisiones", value: "3-4 (5-10mm)" },
          { label: "Retorno laboral", value: "5-7 días" },
        ],
      },
      {
        slug: "apendice",
        name: "Cirugía de Apéndice (Apendicectomía)",
        shortDescription:
          "Extracción del apéndice por laparoscopía. Procedimiento de urgencia en apendicitis aguda.",
        description: [
          "La apendicectomía laparoscópica es el tratamiento de elección para la apendicitis aguda. La cirugía se realiza por 3 pequeñas incisiones en el abdomen y permite confirmar el diagnóstico, evaluar otras causas de dolor abdominal y resolver el cuadro en un solo tiempo.",
          "Comparada con la cirugía abierta, reduce significativamente el dolor postoperatorio, el riesgo de infección de herida y el tiempo de recuperación. La mayoría de pacientes son dados de alta a las 24 horas.",
        ],
        image: "/images/doctor-scrubs-2.jpg",
        imageAlt:
          "Cirugía laparoscópica de apéndice — apendicectomía de urgencia",
        benefits: [
          {
            title: "Recuperación más rápida",
            description: "Vs cirugía abierta tradicional.",
            icon: "Zap",
          },
          {
            title: "Menos riesgo de infección",
            description: "Incisiones pequeñas reducen complicaciones.",
            icon: "ShieldCheck",
          },
          {
            title: "Diagnóstico exploratorio",
            description: "Permite ver órganos vecinos en el mismo acto.",
            icon: "Eye",
          },
          {
            title: "Cicatrices mínimas",
            description: "Mejor resultado estético, especialmente en jóvenes.",
            icon: "Minimize2",
          },
        ],
        candidateProfile: [
          "Apendicitis aguda confirmada",
          "Sospecha de apendicitis con dolor abdominal agudo",
          "Apéndice complicado (peritonitis, plastrón)",
          "Pacientes pediátricos y adultos en general",
        ],
        stats: [
          { label: "Tiempo de cirugía", value: "30-60 min" },
          { label: "Estancia", value: "1-2 días" },
          { label: "Incisiones", value: "3 (5-12mm)" },
          { label: "Retorno actividades", value: "1-2 semanas" },
        ],
      },
      {
        slug: "hernia",
        name: "Cirugía de Hernia (Hernioplastía)",
        shortDescription:
          "Reparación de hernias abdominales (inguinales, umbilicales, incisionales) por laparoscopía con malla.",
        description: [
          "La hernioplastía laparoscópica es la técnica moderna para reparar hernias inguinales, umbilicales, ventrales e incisionales. Se coloca una malla biocompatible que refuerza la pared abdominal desde el interior, sin necesidad de hacer una gran incisión.",
          "Comparada con la cirugía abierta, ofrece menor dolor crónico, menor tasa de recurrencia, recuperación más rápida y la posibilidad de tratar hernias bilaterales en un solo acto.",
        ],
        image: "/images/paso-seguimiento.jpg",
        imageAlt:
          "Cirugía laparoscópica de hernia inguinal con malla — hernioplastía",
        benefits: [
          {
            title: "Menor dolor crónico",
            description: "Riesgo significativamente menor a largo plazo.",
            icon: "HeartPulse",
          },
          {
            title: "Reparación con malla",
            description: "Refuerza la pared abdominal y previene recidiva.",
            icon: "ShieldCheck",
          },
          {
            title: "Bilateral en un solo acto",
            description: "Trata hernias en ambos lados sin nueva cirugía.",
            icon: "Award",
          },
          {
            title: "Retorno laboral 1-2 semanas",
            description: "Para trabajos de oficina y actividad ligera.",
            icon: "Zap",
          },
        ],
        candidateProfile: [
          "Hernia inguinal uni o bilateral sintomática",
          "Hernia umbilical o ventral",
          "Hernia incisional post-cirugía abierta",
          "Pacientes que buscan menor dolor postoperatorio",
        ],
        stats: [
          { label: "Tiempo de cirugía", value: "60-90 min" },
          { label: "Estancia", value: "1 día" },
          { label: "Tasa de recidiva", value: "<2%" },
          { label: "Retorno laboral", value: "1-2 semanas" },
        ],
      },
      {
        slug: "reflujo",
        name: "Cirugía de Reflujo (Funduplicatura)",
        shortDescription:
          "Tratamiento quirúrgico definitivo del reflujo gastroesofágico severo y hernia hiatal por laparoscopía.",
        description: [
          "La funduplicatura de Nissen laparoscópica es el tratamiento quirúrgico estándar para el reflujo gastroesofágico (ERGE) severo y la hernia hiatal sintomática. Consiste en envolver la parte superior del estómago alrededor del esófago para crear una válvula antirreflujo.",
          "Está indicada cuando los medicamentos antiácidos pierden efectividad, cuando aparecen complicaciones (esofagitis severa, esófago de Barrett) o cuando el paciente prefiere una solución definitiva al uso crónico de fármacos.",
        ],
        image: "/images/doctor-pacientes.jpg",
        imageAlt:
          "Funduplicatura laparoscópica — cirugía de reflujo gastroesofágico Trujillo",
        benefits: [
          {
            title: "Resuelve el reflujo definitivamente",
            description: "Sin necesidad de medicación crónica.",
            icon: "ShieldCheck",
          },
          {
            title: "Repara la hernia hiatal",
            description: "Causa anatómica del reflujo.",
            icon: "Wrench",
          },
          {
            title: "Previene complicaciones",
            description: "Esofagitis severa, esófago de Barrett, cáncer esofágico.",
            icon: "HeartPulse",
          },
          {
            title: "Mejora calidad de vida",
            description: "Sin acidez, sin regurgitaciones nocturnas.",
            icon: "Award",
          },
        ],
        candidateProfile: [
          "Reflujo gastroesofágico severo de larga data",
          "Falla o dependencia crónica de inhibidores de bomba (omeprazol)",
          "Hernia hiatal sintomática",
          "Esofagitis erosiva o esófago de Barrett",
        ],
        stats: [
          { label: "Tiempo de cirugía", value: "90-120 min" },
          { label: "Estancia", value: "2-3 días" },
          { label: "Resolución reflujo", value: ">90%" },
          { label: "Retorno laboral", value: "2-3 semanas" },
        ],
      },
      {
        slug: "colon",
        name: "Cirugía de Colon",
        shortDescription:
          "Resecciones de colon por laparoscopía: tumores benignos, cáncer colorrectal en estadios tempranos, diverticulitis complicada.",
        description: [
          "La cirugía laparoscópica de colon (colectomía) permite resecar segmentos del intestino grueso afectados por tumores, diverticulitis complicada o enfermedad inflamatoria intestinal, a través de incisiones de mínima invasión.",
          "Aporta los mismos resultados oncológicos que la cirugía abierta en cáncer colorrectal de estadios tempranos, pero con recuperación significativamente más rápida, menor dolor, menor sangrado intraoperatorio y reincorporación más temprana al tránsito intestinal normal.",
        ],
        image: "/images/paso-evaluacion-multi.jpg",
        imageAlt:
          "Cirugía laparoscópica de colon — colectomía mínimamente invasiva",
        benefits: [
          {
            title: "Resultados oncológicos equivalentes",
            description: "A la cirugía abierta en estadios tempranos.",
            icon: "Award",
          },
          {
            title: "Recuperación más rápida",
            description: "Tránsito intestinal normaliza antes.",
            icon: "Zap",
          },
          {
            title: "Menos sangrado",
            description: "Visualización amplificada y precisión.",
            icon: "ShieldCheck",
          },
          {
            title: "Menor estancia hospitalaria",
            description: "3-5 días vs 7-10 de cirugía abierta.",
            icon: "Clock",
          },
        ],
        candidateProfile: [
          "Cáncer colorrectal en estadios tempranos",
          "Diverticulitis complicada o recurrente",
          "Pólipos grandes no resecables por colonoscopía",
          "Enfermedad inflamatoria intestinal seleccionada",
        ],
        stats: [
          { label: "Tiempo de cirugía", value: "2-4 horas" },
          { label: "Estancia", value: "3-5 días" },
          { label: "Recuperación", value: "3-4 semanas" },
          { label: "Retorno laboral", value: "4-6 semanas" },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Toda cirugía abdominal puede hacerse por laparoscopía?",
        answer:
          "La gran mayoría sí, aunque hay casos donde la cirugía abierta es más segura (urgencias complejas, adherencias extensas previas, cierto tipo de tumores avanzados). El Dr. Salazar evalúa cada caso individualmente y recomienda la mejor técnica.",
      },
      {
        question: "¿Es más cara la cirugía laparoscópica que la abierta?",
        answer:
          "El costo del procedimiento puede ser similar o ligeramente mayor por el instrumental especializado, pero se compensa con menor estancia hospitalaria, menos días de incapacidad laboral y menor necesidad de medicamentos postoperatorios.",
      },
      {
        question: "¿Qué pasa si durante la laparoscopía se necesita convertir a cirugía abierta?",
        answer:
          "En casos excepcionales (menos del 2-3%), puede ser necesario convertir a cirugía abierta por seguridad del paciente. Esto no es un fracaso: es una decisión profesional para garantizar el mejor resultado. El Dr. Salazar está preparado para ambas técnicas en cada intervención.",
      },
      {
        question: "¿Cuándo puedo retomar el ejercicio después de una cirugía laparoscópica?",
        answer:
          "Para procedimientos sencillos (vesícula, apéndice), 2-3 semanas. Para hernias y reflujo, 4-6 semanas. Para cirugía de colon, 6-8 semanas. El Dr. Salazar te dará indicaciones específicas según tu cirugía y evolución.",
      },
    ],
    stats: [
      { label: "Incisiones", value: "5-12 mm" },
      { label: "Estancia hospitalaria", value: "24-48h" },
      { label: "Retorno actividades", value: "1-2 sem" },
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
