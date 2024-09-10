import { useRef, useState } from "react";
import MainPage from "./pages/main-page";
import ProjectsPage from "./pages/projects-page";
import Navbar from "./_navbar";

const Mobile = () => {
  const mainSectionRef = useRef();
  const projectsSectionRef = useRef();
  const aboutSectionRef = useRef();
  const arcadeSectionRef = useRef();

  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      <Navbar
        showNavbar={showNavbar}
        setShowNavbar={setShowNavbar}
        mainSectionRef={mainSectionRef}
        projectsSectionRef={projectsSectionRef}
        aboutSectionRef={aboutSectionRef}
        arcadeSectionRef={arcadeSectionRef}
      />
      <main>
        <div
          id="btnBurgerMenu"
          onClick={() => setShowNavbar(true)}
          className="noHighlightClicked fixed z-20 m-2 cursor-pointer text-4xl text-mainWhite blur-[.5px]"
        >
          ☰
        </div>

        <section>
          <MainPage
            mainSectionRef={mainSectionRef}
            projectsSectionRef={projectsSectionRef}
          />
          <ProjectsPage projectsSectionRef={projectsSectionRef} />
          <section ref={aboutSectionRef} className="h-dvh bg-red-200"></section>
          <section
            ref={arcadeSectionRef}
            className="h-dvh bg-blue-200"
          ></section>
        </section>
      </main>
    </>
  );
};

export default Mobile;
