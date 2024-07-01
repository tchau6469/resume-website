"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ResumeButton() {
  const [hover, setHover] = useState<boolean | null>(null);

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  return (
    <Link
      href="/resume.pdf"
      target="_blank"
      className="mx-0 inline-block text-slate-200 transition-colors duration-150 ease-out hover:text-teal-300 relative"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      View Full Resume
      {hover ? (
        <Image
          src="/svgs/link-svg-teal.svg"
          alt="link svg"
          width={20}
          height={20}
          className={`ml-1 inline transition-colors duration-150 ease-out relative bottom-1 left-1 `}
        />
      ) : (
        <Image
          src="/svgs/link-svg.svg"
          alt="link svg"
          width={20}
          height={20}
          className={`ml-1 inline transition-colors duration-150 ease-out`}
        />
      )}
    </Link>
  );
}
