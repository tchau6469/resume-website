import Link from "next/link";
import BottomLinks from "./BottomLinks";
import ResumeButton from "./ResumeButton";

const items = ["about", "experience", "projects"];

export default function LeftSide({ className }: { className: string }) {
  return (
    <div className={"relative " + className}>
      <header>
        <h1 className="mb-2 text-5xl font-bold tracking-tight text-slate-200">
          <Link href="/">Tony Chau</Link>
        </h1>
        <h2 className="mb-2 text-xl text-slate-200">Software Engineer</h2>
        <ResumeButton></ResumeButton>

        <p className="text- max-w-xs text-slate-400">
          If you need a programmer who’s great at solving problems (current
          problem: unemployment), then I’m your guy!
        </p>

        <nav className="my-14 hidden lg:inline-block">
          <ul>
            {items.map((item) => (
              <li key={item} className="my-4">
                <Link className="group flex items-center" href={`#${item}`}>
                  <div className="mr-4 h-[1px] w-8 bg-slate-500 transition-[width] duration-300 group-hover:w-16 group-hover:bg-slate-200 group-focus:w-16 group-focus:bg-slate-200"></div>
                  <div className="text-xs font-bold uppercase tracking-wide text-slate-500 transition-colors duration-300 group-hover:text-slate-200 group-focus:text-slate-200">
                    {item}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <BottomLinks></BottomLinks>
    </div>
  );
}
