
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  name,
  codeLanguages,
  children,
  hovered,
  anyHovered,
  handleMouseEnter,
  handleMouseLeave,
}: {
  name: string;
  codeLanguages: string[];
  children: React.ReactNode;
  hovered: boolean;
  anyHovered: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}) {
  return (
    <Link href="https://youtube.com" target="_blank">
      <div
        className={
          "-mx-6 mt-4 flex flex-col sm:flex-row  rounded-md px-6 py-4 transition-all ease-in" +
          ` ${hovered ? "bg-slate-200 bg-opacity-5" : "bg-transparent"}` +
          ` ${!hovered && anyHovered ? "opacity-50" : "opacity-100"}`
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div id="years" className="hidden sm:flex w-full sm:w-[25%] h-20 ">
          <Image src="/pics/pillpopperpic.png" alt="project image" width={150} height={100} />

        </div>

        <div className="w-full sm:w-[75%] pl-3">
          <h3
            id="projName"
            className={
              "font-semibold" + ` ${hovered ? "text-teal-300" : "text-slate-200"}`
            }
          >
            {name}
          </h3>
          <p className="text-sm tracking-tighter text-slate-400 mt-2">{children}</p>

          <ul className="mt-3">
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
      </div>

      <div id="years" className="flex sm:hidden w-[35%] h-28 border-2 border-teal-300">
          <Image src="/pics/pillpopperpic.png" alt="project image" width={200} height={100} />

        </div>
    </Link>
  );
}
