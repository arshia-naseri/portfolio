import { useEffect, useRef } from "react";
import ProjectCarousel from "../../Componants/_projectCarousel";
import {
  phonetBtnClick,
  projectCarouselClass,
} from "../../Componants/_globalFunc.ts";

const ProjectsPage = ({ projectsSectionRef }) => {
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

  return (
    <>
      <section
        ref={projectsSectionRef}
        className="flex h-screen items-end justify-center bg-mainWhite font-vcr"
      >
        <main className="h-[90%] w-full">
          <div className="boldTextFont ml-auto mr-auto flex w-fit text-3xl tracking-[0.5rem]">
            PROJECT<div className="tracking-normal">S</div>
          </div>

          <section className="mt-20 flex flex-col gap-5">
            {/* Buttons */}
            <section className="flex h-fit w-screen justify-between gap-1 px-4 text-6xl">
              <div
                className="cursor-pointer opacity-40"
                onClick={(e) =>
                  carouselObj.current.btnLeftClicked(e.currentTarget)
                }
                ref={btnPreProject}
                {...phonetBtnClick}
              >
                ◄
              </div>
              <div
                className="cursor-pointer"
                onClick={(e) =>
                  carouselObj.current.btnRightClicked(e.currentTarget)
                }
                ref={btnNextProject}
                {...phonetBtnClick}
              >
                ►
              </div>
            </section>

            {/* Carosel container */}
            <section
              className="relative flex gap-16 overflow-x-scroll p-5"
              ref={projectCarouselRef}
              onScroll={() => carouselObj.current.changeBtnOpacity()}
              style={{ scrollbarWidth: "none" }}
            >
              <ProjectCarousel />
            </section>
          </section>
        </main>
      </section>
    </>
  );
};

export default ProjectsPage;
