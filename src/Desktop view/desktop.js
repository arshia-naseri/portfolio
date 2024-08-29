import { useRef, useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import Navbar from "./_navbar";
import MainPage from "./pages/main-page";
import ProjectPage from "./pages/project-page";

window.__forceSmoothScrollPolyfill__ = true;

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

        <section ref={aboutSectionRef} className="h-screen bg-green-200 p-3">
          About
        </section>
        <section ref={arcadeSectionRef} className="h-screen bg-orange-200 p-3">
          Game
        </section>
      </section>
    </main>
  );
};

export default Desktop;
