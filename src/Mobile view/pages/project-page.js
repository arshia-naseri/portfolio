import { useRef } from "react";
import FloppyDisk from "../../Componants/_floppyDisk";

const ProjectsPage = ({ projectsSectionRef }) => {
  const projectCarouselRef = useRef();

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

    navigator.vibrate(200);
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

  return (
    <>
      <section
        ref={projectsSectionRef}
        className="flex h-screen items-end justify-center bg-mainWhite font-vcr"
      >
        <main className="h-[90%] w-full">
          <div className="boldTextFont ml-auto mr-auto w-fit text-3xl tracking-[0.5rem]">
            PROJECTS
          </div>

          <section className="mt-20 flex flex-col gap-5">
            {/* Buttons */}
            <section className="ml-auto flex h-fit w-fit gap-1 text-5xl">
              <div
                className="cursor-pointer"
                onClick={preProjectPage}
                onTouchStart={(e) => {
                  e.currentTarget.style.transform = "scale(1.5)";
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                ◄
              </div>
              <div
                className="cursor-pointer"
                onClick={nextProjectPage}
                onTouchStart={(e) => {
                  e.currentTarget.style.transform = "scale(1.5)";
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                ►
              </div>
            </section>

            {/* Carosel container */}
            <section
              ref={projectCarouselRef}
              className="relative flex gap-16 overflow-x-scroll p-5"
              style={{ scrollbarWidth: "none" }}
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
          </section>
        </main>
      </section>
    </>
  );
};

export default ProjectsPage;
