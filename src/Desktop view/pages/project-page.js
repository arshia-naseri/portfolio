import { useRef } from "react";
import FloppyDisk from "../../Componants/_floppyDisk";

const ProjectPage = ({ projectsSectionRef, aboutSectionRef }) => {
  const projectCarouselRef = useRef();
  const btnNextProject = useRef();
  const btnPreProject = useRef();

  const getScrollPercentage = (elm) => {
    return (elm.scrollLeft / (elm.scrollWidth - elm.clientWidth)) * 100;
  };

  const isProjectInView = (
    projectElm,
    parentElm = projectCarouselRef.current,
  ) => {
    let leftValue =
      projectElm.getBoundingClientRect().left -
      parentElm.getBoundingClientRect().left;

    let rightValue =
      parentElm.getBoundingClientRect().right -
      projectElm.getBoundingClientRect().right;

    if (
      leftValue >= 0 &&
      leftValue <= parentElm.getBoundingClientRect().width &&
      rightValue >= 0 &&
      rightValue <= parentElm.getBoundingClientRect().width
    ) {
      return true;
    }
    return false;
  };

  const nextProjectPage = (e) => {
    let alreadyPushed = false;
    let pushLeftValue;

    if (getScrollPercentage(projectCarouselRef.current) > 75) {
      alreadyPushed = true;
      pushLeftValue =
        projectCarouselRef.current.scrollWidth -
        projectCarouselRef.current.clientWidth;
    }

    for (
      let index = 0;
      index < projectCarouselRef.current.children.length && !alreadyPushed;
      index++
    ) {
      let currentProject = projectCarouselRef.current.children[index];

      if (
        isProjectInView(currentProject) ||
        currentProject.getBoundingClientRect().left < 0
      ) {
        continue;
      }

      pushLeftValue =
        currentProject.getBoundingClientRect().left -
        projectCarouselRef.current.getBoundingClientRect().left +
        projectCarouselRef.current.scrollLeft;

      break;
    }

    projectCarouselRef.current.scrollTo({
      left: pushLeftValue,
      behavior: "smooth",
    });
  };

  const preProjectPage = (e) => {
    let alreadyPushed = false;
    let pushLeftValue;

    if (getScrollPercentage(projectCarouselRef.current) < 25) {
      alreadyPushed = true;
      pushLeftValue = 0;
    }

    for (
      let index = projectCarouselRef.current.children.length - 1;
      index > -1 && !alreadyPushed;
      index--
    ) {
      let currentProject = projectCarouselRef.current.children[index];
      if (
        isProjectInView(currentProject) ||
        currentProject.getBoundingClientRect().left > 0
      ) {
        continue;
      }

      pushLeftValue =
        currentProject.getBoundingClientRect().left -
        projectCarouselRef.current.getBoundingClientRect().left +
        projectCarouselRef.current.scrollLeft;

      break;
    }

    projectCarouselRef.current.scrollTo({
      left: pushLeftValue,
      behavior: "smooth",
    });
  };

  const changeBtnOpacity = (e) => {
    if (getScrollPercentage(e.currentTarget) < 10) {
      btnPreProject.current.style.opacity = 0.4;
      btnNextProject.current.style.opacity = 1;
    } else if (getScrollPercentage(e.currentTarget) > 90) {
      btnNextProject.current.style.opacity = 0.4;
      btnPreProject.current.style.opacity = 1;
    } else {
      btnPreProject.current.style.opacity = 1;
      btnNextProject.current.style.opacity = 1;
    }
  };

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
            <section className="noHighlightClicked ml-auto mr-5 flex gap-1 font-vcr text-7xl">
              <div
                ref={btnPreProject}
                onClick={preProjectPage}
                className="cursor-pointer opacity-40"
              >
                ◄
              </div>
              <div
                ref={btnNextProject}
                onClick={nextProjectPage}
                className="cursor-pointer"
              >
                ►
              </div>
            </section>
            <section className="win98-project-shadow flex">
              <div
                className="mt-auto flex aspect-square h-[1.2rem] cursor-pointer select-none items-center justify-center border-2 border-[rgb(192,192,192)] bg-[rgb(224,224,224)] font-vcr hover:bg-[rgb(208,208,208)]"
                onClick={btnWind98PreClicked}
              >
                ◄
              </div>
              <section
                ref={projectCarouselRef}
                onScroll={changeBtnOpacity}
                className="win98-scrollbar relative ml-auto mr-auto flex gap-16 overflow-x-scroll p-10 pb-6"
              >
                <FloppyDisk
                  floppyColor={"bg-red-400"}
                  lineColor={"border-b-red-300"}
                  width={"23rem"}
                />
                <FloppyDisk
                  floppyColor={"bg-orange-400"}
                  lineColor={"border-b-orange-300"}
                  width={"23rem"}
                />
                <FloppyDisk
                  floppyColor={"bg-blue-400"}
                  lineColor={"border-b-blue-300"}
                  width={"23rem"}
                />
                <FloppyDisk
                  floppyColor={"bg-cyan-400"}
                  lineColor={"border-b-cyan-300"}
                  width={"23rem"}
                />
                <FloppyDisk
                  floppyColor={"bg-green-400"}
                  lineColor={"border-b-green-300"}
                  width={"23rem"}
                />
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
