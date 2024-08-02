interface Project {
  id: number;
  name: string;
  codeLanguages: string[];
  imageURL: string;
  URL: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "RuneScape Bots",
    codeLanguages: ["Java"],
    imageURL: "/pics/rs_pic.png",
    URL: "https://github.com/tchau6469/RuneScape-Scripts/tree/main/src/scripts",
    description:
      "Developed automation scripts for RuneScape using Java and the botting software's API. Leveraged event-driven programming to efficiently handle in-game events and tasks, enhancing gameplay and maximizing in-game currency acquisition.",
  },
  {
    id: 2,
    name: "Check Off Calendar",
    codeLanguages: ["TypeScript", "HTML", "CSS"],
    imageURL: "/pics/pillpopperpic.png",
    URL: "https://pillpopper.vercel.app/",
    description:
      "A calendar web app built using Next.js, allowing users to easily toggle dates on and off for tracking events or tasks. The app features a user-friendly interface and utilizes Next.js for efficient server-side rendering, ensuring a smooth and responsive experience.",
  },
  {
    id: 3,
    name: "Baccarat",
    codeLanguages: ["Java"],
    imageURL: "/pics/baccarat.png",
    URL: "https://github.com/tchau6469/BaccaratGame",
    description:
      "Baccarat game using JavaFX with a visually appealing and interactive UI. Implemented game logic, including card dealing, hand comparison, and scoring per Baccarat rules. Designed features like betting options, animations, and player statistics. Optimized performance and incorporated responsive design for a smooth user experience.",
  },
  {
    id: 4,
    name: "Job Tracker",
    codeLanguages: ["JavaScript", "HTML", "CSS"],
    imageURL: "/pics/jobapp.png",
    URL: "https://tchau6469.github.io/jobApp/",
    description:
      "A web app that enables users to add and remove job cards to track job applications and associated job portals. The app features easy-to-manage options, including filtering by rating, to help users efficiently organize and monitor their job search.",
  },
  {
    id: 5,
    name: "Tic-Tac-Toe",
    codeLanguages: ["Java"],
    imageURL: "/pics/tictactoe.png",
    URL: "https://github.com/tchau6469/Tic-Tac-Toe",
    description:
      "Classic game of Tic-Tac-Toe. Built by using JavaFX and Java sockets with separate server and client UIs. Supports multiple users connecting via ports, real-time score updates, and game synchronization. Includes built-in AI with three difficulty levels (easy, medium, hard) for an enhanced gameplay experience.",
  },
];
