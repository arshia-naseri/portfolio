import { useRef } from "react";
import FloppyDisk from "../../Componants/_floppyDisk";

const ProjectPage = ({ projectsSectionRef }) => {
  const projectCarouselRef = useRef();

  const nextProjectPage = () => {
    const notSeenProject = projectCarouselRef.current.children[2];
    // console.log(notSeenProject);

    // window.__forceSmoothScrollPolyfill__ = false;
    // console.log(window.__forceSmoothScrollPolyfill__);
    notSeenProject.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });

    // setTimeout(() => {
    //   document.body.style.overflowY = "auto";
    // }, 500);
  };
  return (
    <>
      <section
        ref={projectsSectionRef}
        className=" p-8 bg-mainWhite h-screen pl-20"
      >
        <section className=" bg-red-400 flex flex-col w-full h-full">
          <div className=" font-vcr text-4xl tracking-[1rem]">PROJECTS</div>
          <section className=" bg-green-400 flex flex-col ">
            <section className=" flex text-7xl gap-1 ml-auto mr-5 font-vcr noHighlightClicked">
              <div className=" cursor-pointer opacity-40">◄</div>
              <div onClick={nextProjectPage} className=" cursor-pointer">
                ►
              </div>
            </section>
            <section
              ref={projectCarouselRef}
              className=" flex gap-16 w-full overflow-scroll"
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
          <div className="noHighlightClicked mt-auto cursor-pointer text-3xl font-minecraft animate-[bounce_1s_infinite]">
            ↓
          </div>
        </section>
      </section>
    </>
  );
};

export default ProjectPage;
