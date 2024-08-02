"use client";

import { experiences as experiencesData } from "@/assets/experiences";
import { useState } from "react";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceCardContainer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      {experiencesData.map((child, index) => (
        <ExperienceCard
          key={child.id}
          dateStart={child.dateStart}
          dateEnd={child.dateEnd}
          name={child.name}
          URL={child.URL}
          codeLanguages={child.codeLanguages}
          hovered={index === hoveredIndex}
          anyHovered={hoveredIndex !== null}
          handleMouseEnter={() => handleMouseEnter(index)}
          handleMouseLeave={() => handleMouseLeave()}
        >
          {child.description}
        </ExperienceCard>
      ))}
    </div>
  );
}