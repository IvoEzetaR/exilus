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
    relatedPosts: [
      "cuanto-cuesta-la-cirugia-bariatrica",
      "soy-candidato-a-cirugia-bariatrica",
      "recuperacion-manga-gastrica-semana-a-semana",
    ],
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
    relatedPosts: [
      "manga-gastrica-vs-bypass-gastrico",
      "soy-candidato-a-cirugia-bariatrica",
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // Artículo 3 — Cluster B5 (informacional, recuperación)
  // KW principal: "recuperacion manga gastrica"
  // Experiencia de primera mano: citas verbatim Dr. Salazar (transcript 2026-07-08)
  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "recuperacion-manga-gastrica-semana-a-semana",
    category: "Recuperación",
    title: "Recuperación de la manga gástrica: qué esperar semana a semana",
    metaTitle: "Recuperación de la manga gástrica semana a semana",
    metaDescription:
      "Cómo es la recuperación real tras una manga gástrica: primera semana, segunda semana, primer mes y tercer mes, explicado por el Dr. Augusto Salazar, cirujano bariatra en Trujillo.",
    excerpt:
      "La recuperación de la manga gástrica suele ser más rápida de lo que la mayoría imagina. El Dr. Augusto Salazar explica qué pasa cada semana, qué es normal sentir y cuándo la cirugía deja de ser la protagonista.",
    heroImage: "/images/doctor-pacientes.jpg",
    heroImageAlt:
      "Dr. Augusto Salazar acompañando a pacientes en el seguimiento posoperatorio en Trujillo",
    dateISO: "2026-07-13",
    dateDisplay: "13 de julio de 2026",
    updatedISO: "2026-07-13",
    readingMinutes: 7,
    keyTakeaways: [
      "Con cirugía laparoscópica y siguiendo las indicaciones, la recuperación suele ser más rápida de lo que la mayoría imagina.",
      "Primera semana: controlar el dolor, caminar varias veces al día, hidratarse y adaptarse a la dieta líquida.",
      "Al primer mes la recuperación física suele ser casi completa; el reto pasa a ser crear hábitos sostenibles.",
      "A partir del tercer mes, la cirugía deja de ser la protagonista: alimentación, ejercicio y seguimiento médico determinan el éxito.",
      "La operación es una herramienta muy poderosa, pero necesita del compromiso del paciente.",
    ],
    sections: [
      {
        id: "mas-rapida-de-lo-que-imaginas",
        heading: "Más rápida de lo que imaginas (con una condición)",
        paragraphs: [
          "Si estás evaluando una manga gástrica, probablemente la recuperación sea una de tus preocupaciones principales: cuánto dolor vas a sentir, cuándo puedes volver a trabajar, cuándo tu vida vuelve a ser tu vida.",
          "La experiencia del **Dr. Víctor Augusto Salazar**, cirujano bariatra en Trujillo, es directa: “la recuperación tras una manga gástrica suele ser mucho más rápida de lo que la mayoría imagina cuando el procedimiento se realiza por laparoscopía y el paciente sigue las indicaciones”.",
          "Ahí están las dos condiciones que importan: **técnica laparoscópica** (incisiones pequeñas en lugar de una cirugía abierta) y **compromiso con las indicaciones** del equipo médico. Cada caso es individual y los tiempos exactos varían según el paciente, pero el mapa general se ve así.",
        ],
      },
      {
        id: "primera-semana",
        heading: "Primera semana: dolor controlado y caminar",
        paragraphs: [
          "Durante los primeros días, el objetivo no es “hacer vida normal”, sino sentar las bases:",
        ],
        list: {
          type: "check",
          items: [
            "**Controlar el dolor** con la medicación indicada.",
            "**Caminar varias veces al día** — moverse temprano es parte del tratamiento, no un extra.",
            "**Mantenerse hidratado.**",
            "**Adaptarse a la dieta líquida** indicada por el equipo.",
          ],
        },
      },
      {
        id: "cansancio-normal",
        heading: "¿Y el cansancio de los primeros días?",
        paragraphs: [
          "Es normal. Como explica el Dr. Salazar, “el cansancio es normal, pero la mayoría de pacientes puede desplazarse por sí sola” desde esta primera etapa.",
          "Sentirte con menos energía en los primeros días no significa que algo vaya mal: tu cuerpo está atravesando el posoperatorio inmediato mientras se adapta a una alimentación líquida. Lo que sí importa es no saltarte los controles ni las indicaciones.",
        ],
      },
      {
        id: "segunda-semana",
        heading: "Segunda semana: el cuerpo empieza a colaborar",
        paragraphs: [
          "En la segunda semana el panorama cambia visiblemente:",
        ],
        list: {
          type: "bullet",
          items: [
            "Disminuye el dolor.",
            "Mejora la movilidad.",
            "Comienza la fase de alimentación indicada por el equipo de nutrición (la dieta avanza por etapas, siempre guiada — no por cuenta propia).",
          ],
        },
      },
      {
        id: "volver-a-trabajar",
        heading: "¿Cuándo se vuelve al trabajo?",
        paragraphs: [
          "Muchos pacientes **retoman actividades administrativas o de oficina** alrededor de la segunda semana, cuando el dolor cede y la movilidad mejora. Si tu trabajo es físico, la pauta la marca tu control médico, no el calendario.",
        ],
      },
      {
        id: "primer-mes",
        heading: "Primer mes: la recuperación física casi completa",
        paragraphs: [
          "Al llegar al primer mes, “la recuperación física suele ser casi completa”, señala el Dr. Salazar. Además:",
        ],
        list: {
          type: "check",
          items: [
            "Ya se percibe una **pérdida importante de peso**.",
            "Suelen mejorar enfermedades asociadas como **diabetes, hipertensión o apnea del sueño** (cada caso es individual; la evolución la evalúa tu médico en los controles).",
          ],
        },
        callout: {
          type: "info",
          title: "El giro que pocos esperan",
          text: "A partir de este punto el reto principal deja de ser físico: “el reto pasa a ser crear hábitos sostenibles”.",
        },
      },
      {
        id: "tercer-mes",
        heading: "A partir del tercer mes: los hábitos toman el control",
        paragraphs: [
          "La frase del Dr. Salazar resume la filosofía de todo el proceso: “La cirugía deja de ser la protagonista y los hábitos toman el control. Alimentación, ejercicio y seguimiento médico determinan el éxito a largo plazo”.",
          "La manga gástrica no es la meta: es el punto de partida. Lo que construyes de ahí en adelante —con tu equipo de nutrición y tus controles— es lo que define el resultado a años vista. Si todavía estás decidiendo entre procedimientos, te ayudará nuestra [guía comparativa manga vs. bypass](/blog/manga-gastrica-vs-bypass-gastrico).",
        ],
      },
      {
        id: "mitos",
        heading: "Lo que los pacientes esperan vs. lo que realmente pasa",
        paragraphs: [
          "En consulta, el Dr. Salazar encuentra dos mitos una y otra vez.",
          "**Mito 1: “La cirugía va a resolver todo automáticamente.”** — “Muchos creen que la cirugía resolverá todos sus problemas automáticamente. La realidad es que la operación es una herramienta muy poderosa, pero necesita del compromiso del paciente”.",
          "**Mito 2: “Voy a sentir hambre intensa siempre / nunca volveré a comer normal.”** — “Otro mito frecuente es pensar que siempre sentirán hambre intensa o que nunca volverán a comer alimentos normales. Con una adecuada adaptación nutricional, la gran mayoría logra una alimentación saludable y una excelente calidad de vida”.",
          "De hecho, el error más frecuente que ve en su práctica se resume en una línea: **llegar pensando que la cirugía reemplaza los hábitos saludables.** No los reemplaza — los hace posibles.",
        ],
      },
      {
        id: "caso-real",
        heading: "Un caso que marcó su práctica",
        paragraphs: [
          "*(Caso real, compartido por el Dr. Salazar sin datos que identifiquen al paciente.)*",
          "“Recuerdo a un paciente con obesidad severa y diabetes de muchos años que había perdido la esperanza de controlar su enfermedad. Tras una evaluación integral decidimos intervenirlo. En pocos meses dejó de requerir varios medicamentos, recuperó movilidad y volvió a realizar actividades familiares que había abandonado. Más que la pérdida de peso, lo más gratificante fue ver cómo recuperó su calidad de vida”.",
          "Nota lo que el Dr. destaca: no los kilos — la calidad de vida. Es un caso individual y los resultados varían según el paciente, pero ilustra hacia dónde apunta todo el proceso de recuperación. Puedes leer más [historias de pacientes en Trujillo](/testimonios).",
        ],
      },
      {
        id: "seguimiento",
        heading: "El seguimiento: tan importante como la cirugía",
        paragraphs: [
          "¿Qué papel juega el seguimiento después de la manga? Para el Dr. Salazar, no es un accesorio: “Es tan importante como la cirugía. Permite detectar deficiencias nutricionales, reforzar hábitos y mantener los resultados”.",
          "Por eso el acompañamiento en Exilus es integral: cirujano, nutrición y controles programados, antes y después de la cirugía — en Trujillo, sin viajar a Lima.",
        ],
        callout: {
          type: "cta",
          title: "¿Estás evaluando la manga gástrica?",
          text: "[Agenda una evaluación](/contacto) con el Dr. Augusto Salazar en Trujillo. La información de este artículo no reemplaza la consulta médica presencial.",
        },
      },
    ],
    faqs: [
      {
        question: "¿Cuándo puedo volver a trabajar después de una manga gástrica?",
        answer:
          "Muchos pacientes retoman actividades administrativas o de oficina alrededor de la segunda semana, cuando disminuye el dolor y mejora la movilidad. Si tu trabajo exige esfuerzo físico, el momento lo define tu médico en los controles. Cada caso es individual.",
      },
      {
        question: "¿Es normal sentirse cansado la primera semana?",
        answer:
          "Sí. El cansancio es normal en los primeros días; aun así, la mayoría de pacientes puede desplazarse por sí sola. La pauta de la primera semana es controlar el dolor, caminar varias veces al día, hidratarse y seguir la dieta líquida indicada.",
      },
      {
        question: "¿Voy a pasar hambre o dejar de comer normal para siempre?",
        answer:
          "Es uno de los mitos más frecuentes. Con una adecuada adaptación nutricional guiada por el equipo, la gran mayoría logra una alimentación saludable y una excelente calidad de vida.",
      },
      {
        question: "¿Cuándo se ven los resultados de la manga gástrica?",
        answer:
          "Al primer mes ya suele percibirse una pérdida importante de peso y mejora de enfermedades asociadas como diabetes, hipertensión o apnea del sueño. A partir del tercer mes, el resultado a largo plazo depende de los hábitos y del seguimiento. Los resultados varían según el paciente.",
      },
      {
        question: "¿Qué pasa si no sigo el seguimiento médico?",
        answer:
          "El seguimiento es tan importante como la cirugía: permite detectar deficiencias nutricionales a tiempo, reforzar hábitos y mantener los resultados. Saltárselo pone en riesgo justamente lo que la cirugía hizo posible.",
      },
    ],
    sources: [
      {
        label: "ASMBS — Información para pacientes",
        url: "https://asmbs.org/patients/",
      },
      {
        label: "IFSO — International Federation for the Surgery of Obesity",
        url: "https://www.ifso.com/",
      },
    ],
    relatedServices: [
      {
        label: "Manejo integral de obesidad",
        href: "/servicios/manejo-obesidad",
        description:
          "Nutrición, psicología y seguimiento: el acompañamiento que sostiene el resultado.",
      },
      {
        label: "Cirugía Bariátrica en Trujillo",
        href: "/servicios/cirugia-bariatrica",
        description:
          "Manga gástrica, bypass y cirugía revisional con el Dr. Augusto Salazar.",
      },
      {
        label: "Agenda tu evaluación",
        href: "/contacto",
        description: "Resuelve tus dudas sobre la recuperación con el equipo.",
      },
    ],
    relatedPosts: [
      "manga-gastrica-vs-bypass-gastrico",
      "cuanto-cuesta-la-cirugia-bariatrica",
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // Artículo 4 — Cluster B4 (informacional, elegibilidad)
  // KW principal: "soy candidato a cirugia bariatrica"
  // Experiencia de primera mano: citas verbatim Dr. Salazar (transcript 2026-07-08)
  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "soy-candidato-a-cirugia-bariatrica",
    category: "Evaluación y decisión",
    title:
      "¿Soy candidato a cirugía bariátrica? Los factores que evalúa el especialista",
    metaTitle: "¿Soy candidato a cirugía bariátrica? Cómo se evalúa",
    metaDescription:
      "El peso no decide solo: el Dr. Augusto Salazar, cirujano bariatra en Trujillo, explica los 10 factores que evalúa para saber si eres candidato y cómo se elige entre manga y bypass.",
    excerpt:
      "“La decisión nunca debe basarse únicamente en el peso.” El Dr. Augusto Salazar explica qué se evalúa realmente para saber si eres candidato a cirugía bariátrica, a quién no operaría y por qué no existe una cirugía ideal para todos.",
    heroImage: "/images/paso-evaluacion-inicial.jpg",
    heroImageAlt:
      "Evaluación inicial de candidato a cirugía bariátrica con el Dr. Augusto Salazar en Trujillo",
    dateISO: "2026-07-13",
    dateDisplay: "13 de julio de 2026",
    updatedISO: "2026-07-13",
    readingMinutes: 7,
    keyTakeaways: [
      "La decisión nunca debe basarse únicamente en el peso: se evalúan 10 factores, del IMC al estado psicológico y la capacidad de seguimiento.",
      "No existe una cirugía ideal para todos — cada paciente recibe una estrategia personalizada.",
      "Hay casos donde la cirugía que el paciente quiere no es la que más le conviene (y un buen especialista lo explica antes de operar).",
      "También hay pacientes a los que un cirujano responsable NO opera — o todavía no.",
      "El miedo es normal: una buena evaluación, información clara y un equipo experimentado permiten decidir con tranquilidad.",
    ],
    sections: [
      {
        id: "el-peso-no-decide-solo",
        heading: "El peso no decide solo",
        paragraphs: [
          "“¿Peso demasiado poco para la cirugía? ¿Demasiado? ¿Mi diabetes me descalifica?” Si te haces estas preguntas, empieza por la regla que ordena todo, en palabras del **Dr. Víctor Augusto Salazar**, cirujano bariatra en Trujillo: “La decisión nunca debe basarse únicamente en el peso”.",
          "Ser candidato a cirugía bariátrica no es un número en la balanza: es una **evaluación integral** de tu salud, tu historia y tu momento de vida. Por eso dos personas con el mismo peso pueden recibir recomendaciones distintas — y las dos correctas.",
        ],
      },
      {
        id: "diez-factores",
        heading: "Los 10 factores que evalúa el especialista",
        paragraphs: [
          "En la evaluación de candidato, el Dr. Salazar revisa:",
        ],
        list: {
          type: "check",
          items: [
            "Índice de masa corporal (IMC).",
            "Enfermedades asociadas (las llamadas comorbilidades: diabetes, hipertensión, apnea del sueño, entre otras).",
            "Presencia de diabetes.",
            "Reflujo gastroesofágico.",
            "Hábitos alimentarios.",
            "Antecedentes quirúrgicos.",
            "Edad.",
            "Estado psicológico.",
            "Expectativas.",
            "Capacidad para mantener seguimiento a largo plazo.",
          ],
        },
        callout: {
          type: "info",
          title: "¿Quieres una primera orientación?",
          text: "El [test de candidato](/#soy-candidato) de Exilus te da un punto de partida en minutos. No reemplaza la evaluación médica — la ordena.",
        },
      },
      {
        id: "estrategia-personalizada",
        heading: "No existe una cirugía ideal para todos",
        paragraphs: [
          "La conclusión del Dr. Salazar tras revisar esos factores es siempre la misma: “**Cada paciente recibe una estrategia personalizada; no existe una cirugía ideal para todos**”.",
          "Eso significa que la pregunta correcta no es “¿cuál es la mejor cirugía?”, sino “¿cuál es la mejor cirugía **para mi historia clínica**?”. Y esa respuesta solo aparece después de la evaluación. Conoce el detalle de los procedimientos en [cirugía bariátrica](/servicios/cirugia-bariatrica).",
        ],
      },
      {
        id: "cuando-la-cirugia-que-quieres-no-conviene",
        heading: "Cuando la cirugía que quieres no es la que te conviene",
        paragraphs: [
          "*(Caso real, compartido por el Dr. Salazar sin datos que identifiquen a la paciente.)*",
          "“Una paciente presentaba obesidad, diabetes y reflujo gastroesofágico importante. Inicialmente deseaba una manga gástrica por ser menos compleja. Sin embargo, tras revisar su historia clínica, estudios y conversar ampliamente sobre riesgos y beneficios, optamos por un bypass gástrico porque ofrecía mejores resultados para controlar tanto el reflujo como la diabetes. Hoy mantiene excelente evolución”.",
          "Este caso muestra cómo funciona la evaluación en la práctica: la paciente llegó con una preferencia razonable, y la historia clínica reveló que otra opción protegía mejor su salud. La decisión se conversó —riesgos y beneficios sobre la mesa— y se tomó en conjunto. ¿Quieres entender las diferencias entre ambas cirugías? Lee la [guía comparativa manga vs. bypass](/blog/manga-gastrica-vs-bypass-gastrico).",
        ],
      },
      {
        id: "a-quien-no-operaria",
        heading: "A quién NO operaría",
        paragraphs: [
          "Tan importante como saber quién es candidato es saber quién no lo es — o no todavía. El Dr. Salazar es explícito: “No operaría a un paciente que no comprende el procedimiento, que no está dispuesto a realizar cambios permanentes en su estilo de vida o que presenta una enfermedad médica o psicológica no controlada que incremente el riesgo. En algunos casos es mejor esperar, optimizar al paciente y operar en el momento adecuado”.",
          "Que un cirujano tenga claro a quién no opera es una **señal de seguridad, no de rechazo**. “No ser candidato hoy” muchas veces significa: primero estabilizamos esa condición, ajustamos el terreno y operamos cuando sea seguro.",
        ],
      },
      {
        id: "error-mas-frecuente",
        heading: "El error más frecuente al llegar a consulta",
        paragraphs: [
          "¿Qué es lo que más corrige el Dr. Salazar en la primera conversación? “Llegar pensando que la cirugía reemplaza los hábitos saludables”.",
          "La cirugía bariátrica es una herramienta muy poderosa — pero es eso: una herramienta. El compromiso con la alimentación, el ejercicio y los controles es parte del tratamiento desde el día uno. Por eso la “capacidad para mantener seguimiento a largo plazo” es uno de los 10 factores de la evaluación: el Dr. no solo evalúa si **puedes** operarte, sino si el plan completo va a **funcionar** para ti. Puedes ver cómo se vive ese proceso en la [recuperación semana a semana](/blog/recuperacion-manga-gastrica-semana-a-semana).",
        ],
      },
      {
        id: "y-si-tengo-miedo",
        heading: "¿Y si tengo miedo?",
        paragraphs: [
          "El miedo a la cirugía es una de las razones más comunes para postergar la evaluación durante años. La respuesta del Dr. Salazar a sus pacientes: “El miedo es normal. Una buena evaluación, información clara y un equipo experimentado disminuyen riesgos y permiten tomar una decisión con tranquilidad”.",
          "Nadie decide bien desde la desinformación. La evaluación de candidato es exactamente eso: información clara sobre **tu** caso, para decidir con calma — operarte o no, ahora o después.",
        ],
        callout: {
          type: "cta",
          title: "Da el primer paso sin compromiso",
          text: "[Agenda tu evaluación](/contacto) con el Dr. Augusto Salazar en Trujillo, sin viajar a Lima. La información de este artículo no reemplaza la consulta médica presencial.",
        },
      },
    ],
    faqs: [
      {
        question: "¿Existe un peso o IMC mínimo para la cirugía bariátrica?",
        answer:
          "El IMC es uno de los factores — no el único ni el decisivo por sí solo. La indicación se define en una evaluación integral que incluye enfermedades asociadas, hábitos, edad, estado psicológico y capacidad de seguimiento. Las guías internacionales (ASMBS/IFSO) orientan los criterios; la decisión final es individual y la toma el especialista contigo.",
      },
      {
        question: "Tengo diabetes, ¿puedo operarme?",
        answer:
          "La diabetes no descalifica — de hecho es una de las condiciones que la evaluación considera con más atención, porque puede influir en qué cirugía conviene más. Lo que sí debe estar controlado antes de operar es cualquier enfermedad médica o psicológica que incremente el riesgo.",
      },
      {
        question: "¿Qué pasa si no soy candidato hoy?",
        answer:
          "En algunos casos es mejor esperar, optimizar al paciente y operar en el momento adecuado. “No hoy” no siempre es “nunca”: puede significar estabilizar primero una condición médica o trabajar la preparación.",
      },
      {
        question: "¿Manga o bypass: cuál me toca?",
        answer:
          "Depende de tu caso — no existe una cirugía ideal para todos. Factores como el reflujo gastroesofágico o la diabetes pueden inclinar la decisión hacia una u otra. La guía comparativa manga vs. bypass explica las diferencias; la evaluación define cuál corresponde a tu historia clínica.",
      },
      {
        question: "¿La evaluación me compromete a operarme?",
        answer:
          "No. La evaluación es información sobre tu caso: qué opciones tienes, con qué riesgos y beneficios. La decisión se toma en conjunto y con tranquilidad.",
      },
    ],
    sources: [
      {
        label: "ASMBS — Información para pacientes",
        url: "https://asmbs.org/patients/",
      },
      {
        label: "IFSO — International Federation for the Surgery of Obesity",
        url: "https://www.ifso.com/",
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
        label: "Manejo integral de obesidad",
        href: "/servicios/manejo-obesidad",
        description:
          "Tratamiento multidisciplinario, farmacológico y balón intragástrico.",
      },
      {
        label: "Agenda tu evaluación",
        href: "/contacto",
        description: "El punto de partida para saber si eres candidato.",
      },
    ],
    relatedPosts: [
      "manga-gastrica-vs-bypass-gastrico",
      "recuperacion-manga-gastrica-semana-a-semana",
    ],
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
