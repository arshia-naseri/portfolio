import { useRef, useState } from "react";
import Navbar from "./_navbar";
import MainPage from "./pages/main-page";
import ProjectsPage from "./pages/projects-page";
import AboutPage from "./pages/about-page";

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
          onTouchStart={(e) => {
            e.currentTarget.style.transform = "scale(1.5)";
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          ☰
        </div>

        <section>
          <MainPage
            mainSectionRef={mainSectionRef}
            projectsSectionRef={projectsSectionRef}
          />
          <ProjectsPage projectsSectionRef={projectsSectionRef} />
          <AboutPage aboutSectionRef={aboutSectionRef} />
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
