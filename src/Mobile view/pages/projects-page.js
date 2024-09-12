import FloppyDisk from "../../Componants/_floppyDisk";

const ProjectsPage = ({ projectsSectionRef }) => {
  return (
    <>
      <section
        ref={projectsSectionRef}
        className="flex h-dvh items-end justify-center border-b border-vcrBlack/20 bg-mainWhite font-vcr"
      >
        <main className="h-[90%] w-full">
          <div className="boldTextFont ml-auto mr-auto w-fit text-3xl tracking-[0.5rem]">
            PROJECTS
          </div>

          <section className="mt-20 flex flex-col gap-5">
            {/* Buttons */}
            <section className="ml-auto flex h-fit w-fit gap-1 text-5xl">
              <div className="cursor-pointer">◄</div>
              <div className="cursor-pointer">►</div>
            </section>

            {/* Carosel container */}
            <section className="relative flex gap-16 overflow-x-scroll p-10 pb-6">
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
