const ProjectPage = ({ projectsSectionRef }) => {
  return (
    <>
      <section
        ref={projectsSectionRef}
        className=" p-8 bg-mainWhite h-screen pl-20"
      >
        <section className=" bg-red-400 flex flex-col w-full h-full">
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
    </>
  );
};

export default ProjectPage;
