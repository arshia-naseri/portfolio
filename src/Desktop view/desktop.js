import { useRef, useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import Navbar from "./_navbar";
import MainPage from "./pages/main-page";
import ProjectPage from "./pages/project-page";
import AboutPage from "./pages/about-page";
import ArcadePage from "./pages/arcade-page";

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
        <ProjectPage
          projectsSectionRef={projectsSectionRef}
          aboutSectionRef={aboutSectionRef}
        />

        <AboutPage
          aboutSectionRef={aboutSectionRef}
          arcadeSectionRef={arcadeSectionRef}
        />

        <ArcadePage
          arcadeSectionRef={arcadeSectionRef}
          mainSectionRef={mainSectionRef}
        />
      </section>
    </main>
  );
};

export default Desktop;
