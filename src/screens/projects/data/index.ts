interface Project {
  language: string;
  name: string;
  descripcion: string;
  url: string;
}

export const dataProjects: Project[] = [
  {
    language: "Typescripts - React - Redux",
    name: "Helebba",
    descripcion:
      "Helebba es la herramienta en la nube que tiene todo lo que necesitas para gestionar tu empresa donde quieras y cuando quieras.",
    url: "https://www.helebba.com/es",
  },
  {
    language: "Typescripts - Redux Toolkit - React",
    name: "Partiaf",
    descripcion:
      "¡Una solución segura y exclusiva donde lo conectamos con los sitios de Restaurantes, Bares y Discotecas que mas les guste!",
    url: "https://partiaf-monorepo-landing-mmypqdfz3-partiaf.vercel.app/",
  },
  {
    language: "Nodejs - Typescript - Fastify - MongoDB",
    name: "Finaenza API",
    descripcion:
      "Finanzea es una aplicación de seguimiento de gastos que te permite registrar tus gastos diarios, crear categorías de gastos y planes de ahorros.",
    url: "https://github.com/matosr96/finanzea-backend",
  },
];
