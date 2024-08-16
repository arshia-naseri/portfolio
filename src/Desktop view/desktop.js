import { useRef, useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import Navbar from "./_navbar";
import MainPage from "./pages/main-page";
import ProjectPage from "./pages/project-page";

const Desktop = () => {
  const navBarRef = useRef();
  const mainSectionRef = useRef();
  const projectsSectionRef = useRef();
  const aboutSectionRef = useRef();
  const arcadeSectionRef = useRef();

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <main className="DesktopMain">
      <Navbar
        navBarRef={navBarRef}
        mainSectionRef={mainSectionRef}
        projectsSectionRef={projectsSectionRef}
        aboutSectionRef={aboutSectionRef}
        arcadeSectionRef={arcadeSectionRef}
      />
      <section>
        <MainPage
          mainSectionRef={mainSectionRef}
          projectsSectionRef={projectsSectionRef}
        />
        <ProjectPage projectsSectionRef={projectsSectionRef} />

        <section ref={aboutSectionRef} className=" p-3 bg-green-200 h-screen">
          About
        </section>
        <section ref={arcadeSectionRef} className=" p-3 bg-orange-200 h-screen">
          Game
        </section>
      </section>
    </main>
  );
};

export default Desktop;
