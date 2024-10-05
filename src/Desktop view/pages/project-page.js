import { useRef, useEffect } from "react";
import ProjectCarousel from "../../Componants/_projectCarousel";
import { projectCarouselClass } from "../../Componants/_globalFunc.ts";

const ProjectPage = ({ projectsSectionRef, aboutSectionRef }) => {
  const projectCarouselRef = useRef();
  const btnNextProject = useRef();
  const btnPreProject = useRef();

  // Initilize CarouselObj
  const carouselObj = useRef(null);
  useEffect(() => {
    if (
      projectCarouselRef.current &&
      btnNextProject.current &&
      btnPreProject.current &&
      !carouselObj.current
    ) {
      carouselObj.current = new projectCarouselClass(
        projectCarouselRef.current,
        btnNextProject.current,
        btnPreProject.current,
      );
      // carouselObj.current.printCarouselElm(); // Call your method after initialization
    }
  }, []);

  const btnWind98NextClicked = () => {
    projectCarouselRef.current.scrollBy({
      left: projectCarouselRef.current.scrollHeight * 0.3,
    });
  };

  const btnWind98PreClicked = () => {
    projectCarouselRef.current.scrollBy({
      left: projectCarouselRef.current.scrollHeight * -0.3,
    });
  };

  return (
    <>
      <section
        ref={projectsSectionRef}
        className="h-screen border-b border-vcrBlack/20 bg-mainWhite p-8 pl-20"
      >
        <section className="mt-7 flex h-full w-full flex-col">
          <div className="px-10 font-vcr text-5xl tracking-[1rem]">
            PROJECTS
          </div>
          <section className="relative flex flex-col gap-3">
            {/* Main Button */}
            <section className="noHighlightClicked ml-auto mr-5 flex gap-1 font-vcr text-7xl">
              <div
                ref={btnPreProject}
                onClick={(e) =>
                  carouselObj.current.btnLeftClicked(e.currentTarget)
                }
                className="cursor-pointer opacity-40"
              >
                ◄
              </div>
              <div
                ref={btnNextProject}
                onClick={(e) =>
                  carouselObj.current.btnRightClicked(e.currentTarget)
                }
                className="cursor-pointer"
              >
                ►
              </div>
            </section>

            {/* Project Container */}
            <section className="win98-project-shadow flex">
              <div
                className="mt-auto flex aspect-square h-[1.2rem] cursor-pointer select-none items-center justify-center border-2 border-[rgb(192,192,192)] bg-[rgb(224,224,224)] font-vcr hover:bg-[rgb(208,208,208)]"
                onClick={btnWind98PreClicked}
              >
                ◄
              </div>
              <section
                ref={projectCarouselRef}
                onScroll={() => carouselObj.current.changeBtnOpacity()}
                data-scroll-dir="x"
                className="win98-scrollbar relative ml-auto mr-auto flex gap-16 overflow-x-auto p-10 pb-6"
              >
                <ProjectCarousel />
              </section>
              <div
                className="mt-auto flex aspect-square h-[1.2rem] cursor-pointer select-none items-center justify-center border-2 border-[rgb(192,192,192)] bg-[rgb(224,224,224)] font-vcr hover:bg-[rgb(208,208,208)]"
                onClick={btnWind98NextClicked}
              >
                ►
              </div>
            </section>
          </section>
          <div
            className="noHighlightClicked mt-auto animate-[bounce_1s_infinite] cursor-pointer font-minecraft text-5xl"
            onClick={() =>
              aboutSectionRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            ↓
          </div>
        </section>
      </section>
    </>
  );
};

export default ProjectPage;
