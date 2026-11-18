export type SummaryStyle = "mixed" | "bullets" | "arrows" | "free";

export type BlueprintSection = {
  id: number;
  title: string;
  guidance: string;
};

export const styles: {
  id: SummaryStyle;
  name: string;
  shortName: string;
  description: string;
  symbol: string;
  accent: string;
}[] = [
  {
    id: "mixed",
    name: "Mixto",
    shortName: "Mixto",
    description: "Combiná subtítulos, bullets y relaciones entre ideas.",
    symbol: "✦",
    accent: "purple",
  },
  {
    id: "bullets",
    name: "Bullet points",
    shortName: "Bullets",
    description: "Organizá los conceptos en listas claras y jerarquizadas.",
    symbol: "☷",
    accent: "yellow",
  },
  {
    id: "arrows",
    name: "Flechas",
    shortName: "Flechas",
    description: "Conectá procesos y explicaciones visualmente.",
    symbol: "→",
    accent: "green",
  },
  {
    id: "free",
    name: "Libre",
    shortName: "Libre",
    description: "Empezá con una hoja limpia y decidí cómo estructurarla.",
    symbol: "✎",
    accent: "pink",
  },
];

const templates: Record<SummaryStyle, Omit<BlueprintSection, "id">[]> = {
  mixed: [
    {
      title: "Idea principal",
      guidance: "Definí el tema con tus palabras y señalá qué es lo más importante.",
    },
    {
      title: "Conceptos clave",
      guidance: "Elegí las ideas esenciales. Podés usar bullets y subtítulos.",
    },
    {
      title: "Relaciones y ejemplos",
      guidance: "Explicá conexiones entre ideas, procesos o ejemplos útiles.",
    },
  ],
  bullets: [
    {
      title: "Conceptos importantes",
      guidance: "Escribí una idea por punto y agregá su explicación.",
    },
    {
      title: "Detalles y ejemplos",
      guidance: "Usá subpuntos para desarrollar las ideas principales.",
    },
    {
      title: "Ideas para recordar",
      guidance: "Anotá los conceptos que necesitás repasar.",
    },
  ],
  arrows: [
    {
      title: "Punto de partida",
      guidance: "¿Cuál es la idea o situación inicial del tema?",
    },
    {
      title: "Conexiones",
      guidance: "Relacioná causas, procesos y resultados con flechas.",
    },
    {
      title: "Conclusiones",
      guidance: "¿Qué muestran esas relaciones? Explicalo con tus palabras.",
    },
  ],
  free: [
    {
      title: "Mi primer apartado",
      guidance: "Elegí cómo empezar tu resumen.",
    },
  ],
};

// Etapa 2: plantillas locales. No analizan ni resumen automáticamente la fuente.
// En la etapa de IA, este esquema se reemplazará por una estructura basada en el texto.
export function templateFor(style: SummaryStyle): BlueprintSection[] {
  return templates[style].map((section, index) => ({
    ...section,
    id: index + 1,
  }));
}

export function countWords(value: string): number {
  return value.trim() ? value.trim().split(/\s+/u).length : 0;
}
