const ProjectsPage = ({ projectsSectionRef }) => {
  return (
    <>
      <section
        ref={projectsSectionRef}
        className="flex h-dvh items-end justify-center border-b border-vcrBlack/20 bg-mainWhite font-vcr"
      >
        <main className="h-[90%] w-full bg-blue-300">
          <div className="ml-auto mr-auto w-fit text-2xl tracking-[0.5rem]">
            PROJECTS
          </div>
        </main>
      </section>
    </>
  );
};

export default ProjectsPage;
