interface project {
  id: number;
  dateStart: string;
  dateEnd: string;
  name: string;
  codeLanguages: string[];
  description: string
}

export const projects: project[] = [
  {
    id: 1,
    dateStart: "Jun 021",
    dateEnd: "Jun 2022",
    name: "Project Alpha",
    codeLanguages: ["JavaScript", "TypeScript", "React"],
    description: "A web application for managing tasks and projects with real-time collaboration features."
  },
  {
    id: 2,
    dateStart: "Jul 2021",
    dateEnd: "Dec 2021",
    name: "Project Beta",
    codeLanguages: ["Python", "Django", "PostgreSQL"],
    description: "An e-commerce platform with a custom recommendation engine and secure payment processing."
  },
  {
    id: 3,
    dateStart: "Jan 2022",
    dateEnd: "Mar 2022",
    name: "Project Gamma",
    codeLanguages: ["Java", "Spring Boot", "MySQL"],
    description: "A backend service for a social media application with RESTful API endpoints and user authentication."
  },
  { 
    id:4,
    dateStart: "Apr 2022",
    dateEnd: "Aug 2022",
    name: "Project Delta",
    codeLanguages: ["C#", "ASP.NET Core", "Microsoft SQL Server"],
    description: "An internal tool for automating business processes and generating detailed reports."
  },
  {
    id: 5,
    dateStart: "Sept 2022",
    dateEnd: "Dec 2022",
    name: "Project Epsilon",
    codeLanguages: ["Go", "GraphQL", "MongoDB"],
    description: "A high-performance microservices architecture for a financial technology application."
  }
];