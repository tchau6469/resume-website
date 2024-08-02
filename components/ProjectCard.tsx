import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  name,
  codeLanguages,
  imageURL,
  URL,
  children,
  hovered,
  anyHovered,
  handleMouseEnter,
  handleMouseLeave,
}: {
  name: string;
  codeLanguages: string[];
  imageURL: string;
  URL: string;
  children: React.ReactNode;
  hovered: boolean;
  anyHovered: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}) {
  return (
    <Link href={URL} target="_blank">
      <div
        className={
          "-mx-6 mt-4 flex flex-col rounded-md px-6 py-4 transition-all ease-in sm:flex-row" +
          ` ${hovered ? "bg-slate-200 bg-opacity-5" : "bg-transparent"}` +
          ` ${!hovered && anyHovered ? "opacity-50" : "opacity-100"}`
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="hidden h-20 w-full lg:rounded lg:border-2 lg:border-slate-700 sm:flex sm:w-[25%]">
          <Image
            src={imageURL}
            alt="project image"
            width={150}
            height={100}
            onClick={() => window.open(imageURL)}
          />
        </div>

        <div className="w-full sm:w-[75%] sm:pl-3">
          <h3
            id="projName"
            className={
              "font-semibold" +
              ` ${hovered ? "text-teal-300" : "text-slate-200"}`
            }
          >
            {name}
          </h3>
          <p className="mt-2 text-sm tracking-tighter text-slate-400">
            {children}
          </p>

          <ul className="mt-3 mb-1 sm:mb-0">
            {codeLanguages.map((language) => (
              <li
                className="badge mr-3 border-0 bg-teal-700 bg-opacity-25 text-xs text-teal-300"
                key={language}
              >
                {language}
              </li>
            ))}
          </ul>
        </div>
        <div
          id="years"
          className="flex h-28 w-[35%] border-2 border-slate-700 rounded sm:hidden"
        >
          <Image
            src={imageURL}
            alt="project image"
            width={200}
            height={100}
          />
        </div>
      </div>
    </Link>
  );
}
