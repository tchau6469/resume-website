"use client";

import { projects as projectsData } from "@/assets/projects";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function CardContainer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      {projectsData.map((child, index) => (
        <ProjectCard
          key={child.id}
          name={child.name}
          codeLanguages={child.codeLanguages}
          imageURL={child.imageURL}
          hovered={index === hoveredIndex}
          anyHovered={hoveredIndex !== null}
          handleMouseEnter={() => handleMouseEnter(index)}
          handleMouseLeave={() => handleMouseLeave()}
        >
          {child.description}
        </ProjectCard>
      ))}
    </div>
  );
}
