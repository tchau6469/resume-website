import Link from "next/link";
import BottomLinks from "./BottomLinks";
import ResumeButton from "./ResumeButton";

const items = ["about", "experience", "projects"];

export default function LeftSide({ className }: { className: string }) {
  return (    
    <div className={"relative "+ className}>
      <header>
        <h1 className="mb-2 text-5xl font-bold tracking-tight text-slate-200">
          <Link href="/">Tony Chau</Link>
        </h1>
        <h2 className="mb-2 text-xl text-slate-200">Software Engineer</h2>
        <ResumeButton ></ResumeButton>

        <p className="max-w-xs text-slate-400 text-">
          If you
          need a programmer who’s great at solving problems (current problem:
          unemployment), then I’m your guy!
        </p>

        <nav className="my-14 hidden lg:inline-block">
          <ul>
          
            {items.map((item) => (
              <li key={item} className="my-4">
                <Link className="nav-text-with-line" href={`#${item}`}>
                  <div className="nav-line"></div>
                  <div className="nav-text text-xs font-bold uppercase tracking-wide">
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
