const Navbar = ({
  showNavbar,
  setShowNavbar,
  mainSectionRef,
  projectsSectionRef,
  aboutSectionRef,
  arcadeSectionRef,
}) => {
  const closeNavbar = () => {
    setShowNavbar(false);
  };

  const goToPage = (pageRef) => {
    pageRef.current.scrollIntoView({
      behavior: "smooth",
    });
    closeNavbar();
  };
  return (
    <>
      <main
        className={`${showNavbar ? "left-0" : "-left-full"} fixed z-50 h-dvh w-dvw overflow-hidden bg-vcrBlack/85 font-vcr text-mainWhite transition-all`}
      >
        <section className="m-4 h-fit w-full">
          <div
            onClick={closeNavbar}
            className="noHighlightClicked mt-auto cursor-pointer text-3xl"
          >
            X
          </div>
          <section className="ml-[10%] mt-[10%] flex w-fit flex-col gap-6 text-2xl tracking-[0.3rem]">
            <section
              onClick={() => goToPage(mainSectionRef)}
              className="flex cursor-pointer gap-4"
            >
              <div className="tracking-normal">P.1</div>
              <div>TITLE</div>
            </section>
            <section
              onClick={() => goToPage(projectsSectionRef)}
              className="flex cursor-pointer gap-4"
            >
              <div className="tracking-normal">P.2</div>
              <div>PROJECTS</div>
            </section>
            <section
              onClick={() => goToPage(aboutSectionRef)}
              className="flex cursor-pointer gap-4"
            >
              <div className="tracking-normal">P.3</div>
              <div>ABOUT ME</div>
            </section>
            <section
              onClick={() => goToPage(arcadeSectionRef)}
              className="flex cursor-pointer gap-4"
            >
              <div className="tracking-normal">P.4</div>
              <div>ARCADE</div>
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default Navbar;
