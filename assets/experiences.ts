interface Experience {
  id: number;
  dateStart: string;
  dateEnd: string;
  URL: string;
  name: string;
  codeLanguages: string[];
  description: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    dateStart: "July 2021",
    dateEnd: "July 2022",
    URL: "https://www.linkedin.com/company/tata-consultancy-services/",
    name: "Software Engineer • TCS",
    codeLanguages: ["JavaScript", "TypeScript", "HTML", "CSS"],
    description:
      "Worked on the migration of Google's codebase from JavaScript to TypeScript in order to enhance type safety and reduce runtime errors as a contractor at Tata Consultancy Services. Collaborated with cross-functional teams, including developers and product managers, to refactor and optimize existing code, enhancing application performance and maintainability.",
  },
];
