// Blog Exilus — fuente única de contenido editorial SEO
// Estructura FIJA para todos los artículos: key takeaways → secciones → FAQs → fuentes.
// Los párrafos soportan inline markdown-lite: [texto](href) para links y **negrita**.
// Compliance YMYL: sin promesas de resultado, sin precios, claims cuantitativos siempre con fuente.

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface BlogCallout {
  type: "info" | "cta";
  title?: string;
  text: string;
}

export interface BlogSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  list?: { type: "bullet" | "check"; items: string[] };
  table?: BlogTable;
  callout?: BlogCallout;
}

export interface BlogSource {
  label: string;
  url: string;
}

export interface RelatedLink {
  label: string;
  href: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string; // H1 en página
  metaTitle: string; // <title> (el template agrega "| Exilus Cirugía Bariátrica")
  metaDescription: string;
  excerpt: string; // para cards del índice
  heroImage: string;
  heroImageAlt: string;
  dateISO: string;
  dateDisplay: string;
  updatedISO: string;
  readingMinutes: number;
  keyTakeaways: string[];
  sections: BlogSection[];
  faqs: BlogFAQ[];
  sources: BlogSource[];
  relatedServices: RelatedLink[];
  relatedPosts: string[]; // slugs
}

export const BLOG_POSTS: BlogPost[] = [
  // ────────────────────────────────────────────────────────────────────────
  // Artículo 1 — Cluster B2 (comparativa, AI-Overview friendly)
  // KW principal: "manga gastrica o bypass cual es mejor"
  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "manga-gastrica-vs-bypass-gastrico",
    category: "Guía comparativa",
    title: "Manga gástrica o bypass gástrico: ¿cuál es mejor para ti?",
    metaTitle: "Manga gástrica o bypass: ¿cuál es mejor?",
    metaDescription:
      "Manga gástrica vs. bypass gástrico: diferencias, tabla comparativa, ventajas de cada cirugía y cómo se decide. Guía del Dr. Augusto Salazar, cirujano bariatra en Trujillo.",
    excerpt:
      "Las dos cirugías bariátricas más realizadas del mundo, comparadas sin tecnicismos: cómo funciona cada una, sus diferencias reales y cómo se decide cuál te conviene.",
    heroImage: "/images/doctor-cirugia-laparoscopica.jpg",
    heroImageAlt:
      "Dr. Augusto Salazar realizando cirugía laparoscópica en Trujillo",
    dateISO: "2026-06-12",
    dateDisplay: "12 de junio de 2026",
    updatedISO: "2026-06-12",
    readingMinutes: 8,
    keyTakeaways: [
      "La manga gástrica reduce el estómago en forma de tubo sin alterar el intestino; el bypass gástrico crea un reservorio pequeño y redirige parte del intestino delgado.",
      "Ambas logran una pérdida importante del exceso de peso: la ASMBS reporta promedios de 50–70% para la manga y 60–80% para el bypass, con variación según cada paciente.",
      "El bypass suele tener ventaja en pacientes con diabetes tipo 2 o reflujo severo; la manga es técnicamente menos compleja y conserva el tránsito intestinal.",
      "No existe un “mejor” universal: la elección correcta depende de tu IMC, tus comorbilidades y la evaluación de un equipo especializado.",
    ],
    sections: [
      {
        id: "que-es-manga",
        heading: "¿Qué es la manga gástrica?",
        paragraphs: [
          "La **manga gástrica** (gastrectomía vertical en manga) es una cirugía en la que se retira aproximadamente el 75–80% del estómago, dejándolo con forma de tubo o “manga”. Se realiza por **vía laparoscópica**: incisiones pequeñas, menos dolor y una recuperación más rápida que la cirugía abierta.",
          "Su efecto es doble. Por un lado, el estómago más pequeño limita la cantidad de comida que puedes ingerir. Por otro, al retirar la porción del estómago que produce la mayor parte de la **grelina** —la hormona del hambre—, el apetito disminuye de forma notable durante los primeros meses.",
          "Hoy es el procedimiento bariátrico más realizado en el mundo. Puedes ver cómo lo trabajamos en Trujillo en nuestra página de [manga gástrica](/servicios/cirugia-bariatrica#manga-gastrica).",
        ],
      },
      {
        id: "que-es-bypass",
        heading: "¿Qué es el bypass gástrico?",
        paragraphs: [
          "El **bypass gástrico** (bypass en Y de Roux) combina dos acciones: primero se crea un reservorio gástrico pequeño —del tamaño aproximado de un huevo— y luego se conecta directamente a un segmento del intestino delgado, “saltando” el resto del estómago y la primera porción intestinal.",
          "Esto lo convierte en un procedimiento **restrictivo y malabsortivo a la vez**: comes menos y, además, el cuerpo absorbe una parte menor de las calorías. También produce cambios hormonales que mejoran el control del azúcar en sangre, razón por la cual es muy valorado en pacientes con **diabetes tipo 2**.",
          "Es una cirugía técnicamente más compleja que la manga y se realiza igualmente por vía laparoscópica. Conoce el detalle del procedimiento en nuestra página de [bypass gástrico](/servicios/cirugia-bariatrica#bypass-gastrico).",
        ],
      },
      {
        id: "tabla-comparativa",
        heading: "Manga vs. bypass: tabla comparativa",
        paragraphs: [
          "Esta tabla resume las diferencias que más pesan al momento de decidir. Tómala como punto de partida para conversar con tu cirujano, no como una respuesta definitiva:",
        ],
        table: {
          caption:
            "Promedios de pérdida del exceso de peso reportados por la ASMBS. Los resultados varían según cada paciente y dependen del seguimiento médico y nutricional.",
          headers: ["Criterio", "Manga gástrica", "Bypass gástrico"],
          rows: [
            [
              "Técnica",
              "Se retira ~75–80% del estómago; el tránsito intestinal no cambia",
              "Reservorio gástrico pequeño conectado directo al intestino delgado",
            ],
            [
              "Mecanismo",
              "Restrictivo + hormonal (menos grelina)",
              "Restrictivo + malabsortivo + hormonal",
            ],
            [
              "Pérdida del exceso de peso (promedio ASMBS)",
              "50–70%",
              "60–80%",
            ],
            [
              "Diabetes tipo 2",
              "Mejora significativa en muchos casos",
              "Suele ser el de mayor impacto metabólico",
            ],
            [
              "Reflujo (ERGE)",
              "Puede empeorarlo en algunos pacientes",
              "Suele mejorarlo",
            ],
            [
              "Suplementación",
              "Vitaminas y controles periódicos",
              "Más estricta, de por vida",
            ],
            [
              "Reversibilidad",
              "No reversible (se retira parte del estómago)",
              "Potencialmente reversible, aunque es una cirugía compleja",
            ],
          ],
        },
      },
      {
        id: "cuando-manga",
        heading: "¿Cuándo suele recomendarse la manga gástrica?",
        paragraphs: [
          "Aunque la decisión final siempre sale de una evaluación individual, la manga suele considerarse una buena primera opción en escenarios como estos:",
        ],
        list: {
          type: "check",
          items: [
            "Pacientes que buscan un procedimiento efectivo con menor complejidad técnica y sin alterar el recorrido del intestino.",
            "Personas con obesidad sin reflujo gastroesofágico severo.",
            "Pacientes con riesgo quirúrgico que aconseja un tiempo de cirugía más corto.",
            "Quienes prefieren una suplementación vitamínica menos estricta a largo plazo.",
            "Casos en los que se quiere conservar la opción de una cirugía revisional futura (una manga puede convertirse en bypass si fuera necesario).",
          ],
        },
      },
      {
        id: "cuando-bypass",
        heading: "¿Cuándo suele recomendarse el bypass gástrico?",
        paragraphs: [
          "El bypass tiende a ser la recomendación cuando el objetivo no es solo el peso, sino también el control metabólico:",
        ],
        list: {
          type: "check",
          items: [
            "Pacientes con diabetes tipo 2, donde el efecto metabólico del bypass está ampliamente documentado por la ASMBS y la IFSO.",
            "Personas con reflujo gastroesofágico moderado o severo, que la manga podría empeorar.",
            "IMC muy elevado, donde se busca el mayor porcentaje de pérdida del exceso de peso.",
            "Pacientes con síndrome metabólico (hipertensión, dislipidemia, resistencia a la insulina).",
            "Casos de re-ganancia de peso después de otra cirugía bariátrica (cirugía revisional).",
          ],
        },
      },
      {
        id: "resultados-largo-plazo",
        heading: "¿Cuál da mejores resultados a largo plazo?",
        paragraphs: [
          "La pregunta honesta no es “¿qué cirugía es mejor?” sino “¿qué cirugía es mejor **para este paciente**?”. Los estudios de largo plazo recogidos por la IFSO muestran que ambas cirugías mantienen pérdidas de peso clínicamente relevantes a 5 y 10 años, con diferencias que dependen más del perfil del paciente que del procedimiento en sí.",
          "Hay un factor que pesa más que la elección de la técnica: el **seguimiento**. Ninguna cirugía bariátrica funciona sola. La adherencia al plan nutricional, los controles médicos y el acompañamiento psicológico durante el primer año son los que consolidan el resultado. Por eso en Exilus el programa incluye seguimiento multidisciplinario, no solo la operación.",
          "Si quieres ver cómo se vive ese proceso, te invitamos a conocer las [historias de nuestros pacientes en Trujillo](/testimonios).",
        ],
      },
      {
        id: "como-se-decide",
        heading: "¿Cómo se decide cuál te conviene?",
        paragraphs: [
          "En la práctica, la elección entre manga y bypass se define en la **evaluación preoperatoria**, donde se analizan tu índice de masa corporal, tus enfermedades asociadas (diabetes, hipertensión, reflujo, apnea del sueño), tus cirugías previas, tu relación con la comida y tus objetivos.",
          "El [Dr. Augusto Salazar](/), cirujano bariatra y laparoscopista con más de 16 años de experiencia en Trujillo, realiza esta evaluación junto a un equipo multidisciplinario —nutrición, psicología y medicina interna— para recomendarte el procedimiento con mejor relación beneficio-riesgo **en tu caso específico**.",
          "Y si la inversión también es parte de tu decisión, te puede servir nuestra guía sobre [cuánto cuesta la cirugía bariátrica en el Perú](/blog/cuanto-cuesta-la-cirugia-bariatrica).",
        ],
        callout: {
          type: "cta",
          title: "¿No sabes por dónde empezar?",
          text: "Responde nuestro [test de 1 minuto](/#soy-candidato) para saber si eres candidato a cirugía bariátrica, o [agenda tu evaluación](/contacto) con el Dr. Salazar en Trujillo.",
        },
      },
    ],
    faqs: [
      {
        question: "¿La manga gástrica es más segura que el bypass?",
        answer:
          "Ambas son cirugías seguras cuando las realiza un equipo especializado por vía laparoscópica y con una evaluación preoperatoria completa. La manga es técnicamente menos compleja, pero el riesgo real depende de cada paciente: IMC, comorbilidades y estado general. Esa comparación se hace en consulta, no con una regla general.",
      },
      {
        question: "¿Cuál tiene la recuperación más rápida?",
        answer:
          "Las dos se realizan por laparoscopía, con hospitalización corta (habitualmente 1 a 3 días) y retorno progresivo a las actividades en 2 a 4 semanas. La diferencia de recuperación entre manga y bypass suele ser pequeña; pesa más la condición de cada paciente y el cumplimiento de las indicaciones postoperatorias.",
      },
      {
        question: "¿Se puede convertir una manga gástrica en bypass después?",
        answer:
          "Sí. Cuando hay re-ganancia de peso o reflujo severo después de una manga, existe la cirugía revisional, que puede convertirla en un bypass gástrico. Es un procedimiento más complejo que la cirugía primaria y requiere un cirujano bariatra con experiencia en revisiones.",
      },
      {
        question: "¿Cuál es mejor si tengo diabetes tipo 2?",
        answer:
          "El bypass gástrico suele tener el mayor impacto metabólico y es el más estudiado para mejorar el control de la diabetes tipo 2, según la ASMBS. La manga también logra mejoras importantes en muchos pacientes. La elección depende de la severidad de la diabetes, los años de evolución y el resto de tu evaluación.",
      },
      {
        question: "¿El balón intragástrico es una alternativa a estas cirugías?",
        answer:
          "El balón intragástrico es una opción no quirúrgica y temporal para casos seleccionados, generalmente con IMC menores o como preparación para una cirugía. No reemplaza a la manga ni al bypass en obesidad moderada a severa, pero puede ser el primer paso adecuado para algunos pacientes.",
      },
      {
        question: "¿Puedo volver a subir de peso después de la cirugía?",
        answer:
          "Sí, la re-ganancia es posible si no hay seguimiento. La cirugía es una herramienta poderosa, pero el resultado a largo plazo se consolida con el plan nutricional, los controles médicos y los nuevos hábitos. Por eso el programa de Exilus incluye acompañamiento multidisciplinario durante los primeros 12 meses.",
      },
    ],
    sources: [
      {
        label: "ASMBS — Bariatric Surgery Procedures",
        url: "https://asmbs.org/patients/bariatric-surgery-procedures/",
      },
      {
        label: "IFSO — International Federation for the Surgery of Obesity",
        url: "https://www.ifso.com/",
      },
      {
        label: "Mayo Clinic — Gastric bypass (Roux-en-Y)",
        url: "https://www.mayoclinic.org/tests-procedures/gastric-bypass-surgery/about/pac-20385189",
      },
      {
        label: "NIDDK — Types of Weight-loss Surgery",
        url: "https://www.niddk.nih.gov/health-information/weight-management/bariatric-surgery/types",
      },
    ],
    relatedServices: [
      {
        label: "Cirugía Bariátrica en Trujillo",
        href: "/servicios/cirugia-bariatrica",
        description:
          "Manga gástrica, bypass y cirugía revisional con el Dr. Augusto Salazar.",
      },
      {
        label: "Balón intragástrico",
        href: "/servicios/manejo-obesidad#balon-intragastrico",
        description: "La alternativa no quirúrgica para casos seleccionados.",
      },
      {
        label: "Testimonios de pacientes",
        href: "/testimonios",
        description: "Historias reales de transformación en Trujillo.",
      },
    ],
    relatedPosts: ["cuanto-cuesta-la-cirugia-bariatrica"],
  },

  // ────────────────────────────────────────────────────────────────────────
  // Artículo 2 — Cluster B3 (intención de precio, SIN publicar precios)
  // KW principal: "cuanto cuesta la cirugia bariatrica"
  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "cuanto-cuesta-la-cirugia-bariatrica",
    category: "Costos y decisión",
    title: "¿Cuánto cuesta la cirugía bariátrica en el Perú? Guía honesta",
    metaTitle: "¿Cuánto cuesta la cirugía bariátrica en Perú?",
    metaDescription:
      "Qué determina el costo de una cirugía bariátrica en el Perú, qué debe incluir un presupuesto serio y cómo conocer la inversión real de tu caso. Guía del Dr. Salazar, Trujillo.",
    excerpt:
      "El precio varía más de lo que imaginas — y comparar cifras sueltas es un error. Qué define el costo, qué debe incluir un presupuesto serio y cómo conocer la inversión de tu caso.",
    heroImage: "/images/doctor-consulta.jpg",
    heroImageAlt:
      "Dr. Augusto Salazar en consulta de evaluación bariátrica en Trujillo",
    dateISO: "2026-06-12",
    dateDisplay: "12 de junio de 2026",
    updatedISO: "2026-06-12",
    readingMinutes: 7,
    keyTakeaways: [
      "El costo de una cirugía bariátrica en el Perú varía ampliamente según el procedimiento, la complejidad del caso, la clínica y lo que incluye el programa.",
      "Un presupuesto serio debe detallar la evaluación preoperatoria, los honorarios del equipo completo, la clínica con sus insumos y el seguimiento posoperatorio.",
      "Comparar solo el número final es un error frecuente: dos presupuestos con cifras distintas casi nunca incluyen lo mismo.",
      "La única forma responsable de conocer el costo real de tu caso es una evaluación médica personalizada.",
    ],
    sections: [
      {
        id: "por-que-varia",
        heading: "¿Por qué varía tanto el costo de la cirugía bariátrica?",
        paragraphs: [
          "Si has buscado precios de cirugía bariátrica en el Perú, ya lo notaste: las cifras que circulan son muy distintas entre sí. No es marketing — es que el costo depende de variables reales que cambian de paciente a paciente:",
        ],
        list: {
          type: "bullet",
          items: [
            "**El procedimiento:** una manga gástrica, un bypass y un balón intragástrico tienen complejidad, tiempo de quirófano e insumos diferentes. Si aún no sabes cuál te corresponde, empieza por nuestra guía de [manga gástrica vs. bypass](/blog/manga-gastrica-vs-bypass-gastrico).",
            "**La complejidad de tu caso:** el IMC, las enfermedades asociadas (diabetes, hipertensión, apnea) y las cirugías abdominales previas pueden requerir más estudios, más tiempo quirúrgico o cuidados adicionales.",
            "**La clínica y su equipamiento:** operarse en una clínica con quirófanos acreditados, UCI disponible y tecnología laparoscópica moderna tiene un costo distinto al de un centro sin esa infraestructura.",
            "**El equipo médico:** una cirugía bariátrica segura involucra cirujano bariatra, anestesiólogo, instrumentista y, alrededor, nutricionista, psicólogo e internista.",
            "**Lo que incluye el programa:** hay presupuestos que solo cubren la operación, y programas integrales que incluyen la evaluación completa y el seguimiento del primer año.",
          ],
        },
      },
      {
        id: "que-debe-incluir",
        heading: "¿Qué debe incluir un presupuesto serio?",
        paragraphs: [
          "Antes de comparar números, compara **contenidos**. Un presupuesto responsable de cirugía bariátrica debería detallar por escrito, como mínimo:",
        ],
        list: {
          type: "check",
          items: [
            "**Evaluación preoperatoria completa:** análisis de laboratorio, endoscopía, evaluación cardiológica, valoración nutricional y psicológica.",
            "**Honorarios de todo el equipo:** cirujano, anestesiólogo y personal de quirófano — no solo el cirujano principal.",
            "**Clínica e insumos:** derecho de sala, hospitalización, material laparoscópico (engrapadoras y cartuchos, que son un componente importante del costo real).",
            "**Seguimiento posoperatorio:** controles médicos y nutricionales del primer año, que son los que consolidan el resultado.",
            "**Plan ante imprevistos:** qué cobertura existe si se presenta una complicación y cómo se maneja.",
          ],
        },
        callout: {
          type: "info",
          title: "La pregunta que ordena todo",
          text: "Cuando recibas un presupuesto, pregunta: “¿qué pasa exactamente si algo no sale según lo planeado?”. Un programa serio tiene una respuesta clara y por escrito. Si la respuesta es vaga, esa cifra baja puede salir muy cara.",
        },
      },
      {
        id: "precio-bajo",
        heading: "¿Por qué el precio más bajo puede salir caro?",
        paragraphs: [
          "En una cirugía mayor, el precio nunca debería ser el primer filtro. No se trata de pagar más por pagar más — se trata de saber **qué estás pagando**. Cuando una cifra está muy por debajo del resto del mercado, casi siempre hay algo recortado: la evaluación preoperatoria, la calidad de los insumos, la infraestructura de la clínica o el seguimiento.",
          "Antes de decidir por costo, verifica lo que sí es innegociable:",
        ],
        list: {
          type: "check",
          items: [
            "Que el cirujano sea **especialista en cirugía bariátrica**, con colegiatura y registro de especialidad verificables.",
            "Que opere en una **clínica con quirófanos acreditados y UCI** disponible.",
            "Que exista un **equipo multidisciplinario** real: nutrición, psicología y medicina interna.",
            "Que el programa incluya **seguimiento estructurado** durante el primer año.",
            "Que te entreguen el presupuesto **detallado y por escrito**.",
          ],
        },
      },
      {
        id: "inversion-salud",
        heading: "¿Gasto o inversión en salud?",
        paragraphs: [
          "Vale la pena mirar el otro lado de la ecuación: el costo de **no tratar** la obesidad. La OMS la reconoce como una enfermedad crónica asociada a diabetes tipo 2, hipertensión, apnea del sueño, enfermedad articular y varios tipos de cáncer. Esas condiciones también cuestan — en medicamentos de por vida, consultas, hospitalizaciones y calidad de vida.",
          "En pacientes correctamente seleccionados, la evidencia recogida por la ASMBS muestra que la cirugía bariátrica mejora o lleva a remisión varias de estas comorbilidades, reduciendo la necesidad de medicación crónica en muchos casos. Cada caso es individual y los resultados varían según el paciente — pero plantear la cirugía solo como un gasto es mirar la mitad de la foto.",
          "Las [historias de nuestros pacientes](/testimonios) cuentan mejor que nadie lo que significa recuperar salud, movilidad y energía.",
        ],
      },
      {
        id: "financiamiento",
        heading: "¿Existen opciones de financiamiento?",
        paragraphs: [
          "Sí. En el Perú es cada vez más común financiar procedimientos médicos mediante cuotas con tarjeta, préstamos de salud de entidades financieras o planes de pago acordados directamente con la clínica.",
          "Sobre los seguros: la cobertura de cirugía bariátrica depende de cada póliza y de la indicación médica documentada. Algunas EPS y seguros privados evalúan la cobertura cuando existe obesidad con comorbilidades — vale la pena revisar tu póliza y consultarlo.",
          "En tu evaluación con el equipo de Exilus te orientamos sobre las alternativas disponibles para tu caso, sin compromiso.",
        ],
      },
      {
        id: "costo-tu-caso",
        heading: "¿Cómo saber cuánto costaría en tu caso?",
        paragraphs: [
          "A esta altura ya lo sabes: ningún cirujano serio puede darte un precio real sin evaluarte primero — sería como cotizar una construcción sin ver el terreno. Lo que sí podemos darte es un camino claro, en tres pasos:",
        ],
        list: {
          type: "check",
          items: [
            "**Paso 1 —** Responde el [test “¿Soy candidato?”](/#soy-candidato): en 1 minuto sabrás si la cirugía bariátrica es una opción para ti.",
            "**Paso 2 —** [Agenda tu evaluación](/contacto) con el Dr. Augusto Salazar en Trujillo: revisión completa de tu caso y resolución de todas tus dudas, incluidas las económicas.",
            "**Paso 3 —** Recibe tu **presupuesto personalizado, detallado y por escrito**, con todo lo que incluye tu programa.",
          ],
        },
        callout: {
          type: "cta",
          title: "Da el primer paso sin compromiso",
          text: "La evaluación es el único punto de partida honesto para hablar de costos. [Agenda tu cita](/contacto) o escríbenos por WhatsApp — atendemos en Trujillo, en la Clínica Sanna Sánchez Ferrer.",
        },
      },
    ],
    faqs: [
      {
        question: "¿Por qué no publican los precios en la página web?",
        answer:
          "Porque sería impreciso y poco serio. El costo real depende del procedimiento indicado, la complejidad de tu caso y lo que incluye el programa — variables que solo se conocen después de una evaluación médica. Publicar una cifra única llevaría a comparaciones engañosas entre presupuestos que no incluyen lo mismo.",
      },
      {
        question: "¿Qué incluye la evaluación inicial con el Dr. Salazar?",
        answer:
          "La evaluación inicial incluye la revisión de tu historia clínica, examen físico, análisis de tu caso (IMC, comorbilidades, cirugías previas), la indicación del procedimiento más adecuado y un espacio para resolver todas tus dudas — incluida la inversión y las formas de pago. De ahí sale el plan de estudios preoperatorios.",
      },
      {
        question: "¿Los seguros o EPS cubren la cirugía bariátrica en el Perú?",
        answer:
          "Depende de tu póliza y de la indicación médica. Cuando la obesidad está documentada como enfermedad con comorbilidades, algunas aseguradoras evalúan cobertura parcial o total. Te recomendamos revisar tu plan y consultarlo en tu evaluación: te orientamos sobre qué documentación suele requerirse.",
      },
      {
        question: "¿Hay opciones de pago en cuotas?",
        answer:
          "Sí. Existen alternativas como cuotas con tarjeta, préstamos de salud y planes de pago. Las opciones concretas para tu caso se conversan en la evaluación, junto con el presupuesto detallado.",
      },
      {
        question: "¿La manga gástrica y el bypass cuestan lo mismo?",
        answer:
          "No necesariamente. Son procedimientos con diferente complejidad, tiempo quirúrgico e insumos, por lo que su costo puede diferir. La buena noticia: la elección entre uno y otro no debería ser económica, sino médica — el procedimiento correcto es el que mejor resuelve tu caso.",
      },
      {
        question: "¿Qué riesgos tiene elegir solo por el precio más bajo?",
        answer:
          "Un presupuesto muy bajo suele recortar evaluación preoperatoria, calidad de insumos, infraestructura o seguimiento. En cirugía mayor, esos recortes se pagan en seguridad y en resultados. Verifica siempre credenciales del cirujano, la clínica donde se opera y qué incluye exactamente el programa.",
      },
    ],
    sources: [
      {
        label: "OMS — Obesidad y sobrepeso (datos y cifras)",
        url: "https://www.who.int/es/news-room/fact-sheets/detail/obesity-and-overweight",
      },
      {
        label: "ASMBS — Benefits of Metabolic and Bariatric Surgery",
        url: "https://asmbs.org/patients/benefits-of-metabolic-and-bariatric-surgery/",
      },
      {
        label: "NIDDK — Bariatric Surgery",
        url: "https://www.niddk.nih.gov/health-information/weight-management/bariatric-surgery",
      },
    ],
    relatedServices: [
      {
        label: "Cirugía Bariátrica en Trujillo",
        href: "/servicios/cirugia-bariatrica",
        description:
          "Conoce los procedimientos del programa bariátrico de Exilus.",
      },
      {
        label: "Manejo integral de obesidad",
        href: "/servicios/manejo-obesidad",
        description:
          "Tratamiento multidisciplinario, farmacológico y balón intragástrico.",
      },
      {
        label: "Agenda tu evaluación",
        href: "/contacto",
        description: "El primer paso para conocer el costo real de tu caso.",
      },
    ],
    relatedPosts: ["manga-gastrica-vs-bypass-gastrico"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedPosts
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p));
}
