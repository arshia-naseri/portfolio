import { useRef } from "react";

const Desktop = () => {
  const navBarRef = useRef();
  const mainSectionRef = useRef();
  const projectsSectionRef = useRef();
  const aboutSectionRef = useRef();
  const arcadeSectionRef = useRef();

  const arrowClicked = (e) => {
    navBarRef.current.classList.toggle("navRotate");
  };
  return (
    <main className="">
      <ul
        ref={navBarRef}
        className=" mt-8 ml-3 flex justify-evenly blur-[.6px] z-10 w-6/12 fixed font-vcr text-xl text-mainWhite tracking-[.3rem] transition-all"
      >
        <li
          onClick={() =>
            mainSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className=" navBarStrokeEffect cursor-pointer shadow-mainWhite stroke-red-600 stroke-[3px]"
        >
          TITLE
        </li>
        <li>|</li>
        <li
          onClick={() =>
            projectsSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className=" cursor-pointer"
        >
          PROJECTS
        </li>
        <li>|</li>
        <li
          onClick={() =>
            aboutSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className=" cursor-pointer"
        >
          ABOUT ME
        </li>
        <li>|</li>
        <li
          onClick={() =>
            arcadeSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className=" cursor-pointer"
        >
          ARCADE
        </li>
      </ul>
      <section>
        {/* Main Section */}
        <section
          ref={mainSectionRef}
          className=" p-8 bg-vcrBlack h-screen blur-[.5px] "
        >
          <div
            data-overlay
            className=" bg-black/10 pointer-events-none z-10 absolute left-0 top-0 w-full h-full"
          ></div>
          <section className=" w-full h-full inline-flex flex-col">
            <nav className=" ml-auto font-vcr flex flex-col items-end text-xl text-mainWhite">
              <section className=" flex gap-2">
                <div>PLAY</div>
                <div>►</div>
              </section>
              <section className="flex items-center gap-2 ">
                <div>REC</div>
                <div className="animate-rec-button size-3 bg-red-500 rounded-full"></div>
              </section>
            </nav>
            <section className="animate-text-flicker mx-auto my-auto text-mainWhite font-vcr tracking-[3rem] text-9xl">
              ARSHIA
            </section>
            <section className=" flex justify-between text-mainWhite">
              <div
                onClick={arrowClicked}
                className=" animate-text-flicker ml-8 text-8xl font-minecraft animate-[bounce_1s_infinite,textflicker_0.06s_infinite_alternate]"
              >
                ↓
              </div>
              <section className="animate-text-flicker flex flex-col items-end font-vcr text-xl">
                <div>AM 12:24</div>
                <div>APR 14 2024</div>
              </section>
            </section>
          </section>
        </section>

        <section ref={projectsSectionRef} className=" p-3 bg-blue-200 h-screen">
          Projects
        </section>
        <section ref={aboutSectionRef} className=" p-3 bg-green-200 h-screen">
          About
        </section>
        <section ref={arcadeSectionRef} className=" p-3 bg-orange-200 h-screen">
          Game
        </section>
      </section>
    </main>
  );
};

export default Desktop;
