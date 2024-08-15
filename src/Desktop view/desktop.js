import { useRef, useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";

const Desktop = () => {
  const navBarRef = useRef();
  const mainSectionRef = useRef();
  const projectsSectionRef = useRef();
  const aboutSectionRef = useRef();
  const arcadeSectionRef = useRef();

  useEffect(() => {
    smoothscroll.polyfill();
    window.__forceSmoothScrollPolyfill__ = true;
  }, []);

  return (
    <main className="DesktopMain">
      <ul
        ref={navBarRef}
        id="DesktopNavBar"
        className=" mt-8 ml-8 flex justify-evenly blur-[.6px] z-10 gap-3 fixed font-vcr text-xl text-mainWhite tracking-[.3rem] transition-all"
      >
        <li
          onClick={() =>
            mainSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="noHighlightClicked navBarStrokeEffect cursor-pointer shadow-mainWhite stroke-red-600 stroke-[3px]"
        >
          TITLE
        </li>
        <li>|</li>
        <li
          onClick={() =>
            projectsSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="noHighlightClicked cursor-pointer"
        >
          PROJECTS
        </li>
        <li>|</li>
        <li
          onClick={() =>
            aboutSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="noHighlightClicked cursor-pointer"
        >
          ABOUT ME
        </li>
        <li>|</li>
        <li
          onClick={() =>
            arcadeSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="noHighlightClicked cursor-pointer"
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
            className=" mainVhsStaticDiv pointer-events-none z-20 absolute left-0 top-0 w-full h-full"
          />
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
                onClick={() =>
                  projectsSectionRef.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="noHighlightClicked cursor-pointer animate-text-flicker ml-8 text-8xl font-minecraft animate-[bounce_1s_infinite,textflicker_0.06s_infinite_alternate]"
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

        <section
          ref={projectsSectionRef}
          className=" p-8 bg-mainWhite h-screen"
        >
          <section className=" bg-red-400 flex flex-col w-full h-full ml-8">
            <div className=" font-vcr text-4xl tracking-[1rem]">PROJECTS</div>
            <section className=" bg-green-400 flex flex-col">
              <section className=" flex text-7xl gap-1 ml-auto mr-5 font-vcr noHighlightClicked">
                <div className=" cursor-pointer opacity-40">◄</div>
                <div className=" cursor-pointer">►</div>
              </section>
              <section></section>
            </section>
            <div className="noHighlightClicked mt-auto cursor-pointer text-3xl font-minecraft animate-[bounce_1s_infinite]">
              ↓
            </div>
          </section>
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
