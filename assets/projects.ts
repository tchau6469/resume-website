interface Project {
  id: number;
  name: string;
  codeLanguages: string[],
  imageURL: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "RuneScape Bots",
    codeLanguages: ["Java"],
    imageURL: "/pics/rs_pic.png",
    description: "Wrote game automation scripts for the medieval clicker game RuneScape for in-game currency"
  },
  {
    id: 2,
    name: "Check Off Calendar",
    codeLanguages: ["JavaScript", "HTML", "CSS"],
    imageURL: "/pics/pillpopperpic.png",
    description: "Wrote game automation scripts for the medieval clicker game RuneScape for in-game currency"
    
  },
  {
    id: 3,
    name: "Baccarat Game",
    codeLanguages: ["Java"],
    imageURL: "/pics/baccarat.png",
    description: "Wrote game automation scripts for the medieval clicker game RuneScape for in-game currency"
    
  }
]