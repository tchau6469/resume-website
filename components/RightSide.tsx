import ProjectCardContainer from "./ProjectCardContainer";
import ExperienceCardContainer from "./ExperienceCardContainer";
import Footer from "./Footer";

export default function RightSide({ className }: { className: string }) {
  return (
    <div className={` ${className}`}>

      <section id="about" className="mb-24 scroll-mt-24 text-slate-400">
        <h2 className="mb-4 uppercase font-bold tracking-wide text-slate-200 text-sm lg:hidden">about</h2>
        <p className="mb-4">
          From prenursing to programming, my journey to computer science was a
          natural evolution. Having spent most of my life using computers and
          playing video games, the transition made sense.
        </p>
        <p className="mb-4">
          I have a particular interest in backend work, but my first job
          introduced me to full stack development, and I’ve grown to prefer it,
          with a strong inclination towards the backend. After my first job, I
          took a long break to recharge and focus on other interests.
        </p>
        <p className="mb-4">
          Most of my personal projects are created for personal use, driven by
          my interests. When Im not coding or gaming, you’ll likely
          find me walking my dog, Momo, or hitting the gym.
        </p>
      </section>

      <section id="experience" className="mb-24 scroll-mt-[5rem]">
      <h2 className="mb-4 uppercase font-bold tracking-wide text-slate-200 text-sm lg:hidden">experience</h2>
        <ExperienceCardContainer></ExperienceCardContainer>
      </section>

      <section id="projects" className="mb-24 scroll-mt-[5rem]">
      <h2 className="mb-4 uppercase font-bold tracking-wide text-slate-200 text-sm lg:hidden">projects</h2>
        <ProjectCardContainer></ProjectCardContainer>
      </section>
      <Footer></Footer>
    </div>
  );
}
