import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./_navbar";
import MainPage from "./pages/main-page";
import ProjectsPage from "./pages/project-page";
import AboutPage from "./pages/about-page";
import ArcadePage from "./pages/arcade-page";
import { phonetBtnClick } from "../Componants/_globalFunc";

const Mobile = () => {
  const mainSectionRef = useRef();
  const projectsSectionRef = useRef();
  const aboutSectionRef = useRef();
  const arcadeSectionRef = useRef();
  const { scrollY } = useScroll();
  const colorVCR = "rgb(29, 31, 34)";
  const colorMainWhite = "rgb(240, 234, 214)";
  const [showNavbar, setShowNavbar] = useState(false);

  const color = useTransform(
    scrollY,
    [0, document.documentElement.scrollHeight * 0.2],
    [colorMainWhite, colorVCR],
  );

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
        <motion.div
          id="btnBurgerMenu"
          onClick={() => setShowNavbar(true)}
          className="noHighlightClicked fixed z-20 m-2 cursor-pointer text-4xl text-mainWhite blur-[.5px]"
          style={{ color }}
          {...phonetBtnClick}
        >
          ☰
        </motion.div>

        <section className="bg-mainWhite">
          <MainPage
            mainSectionRef={mainSectionRef}
            projectsSectionRef={projectsSectionRef}
          />
          <div className="h-10 -translate-y-1 bg-gradient-to-b from-vcrBlack to-mainWhite" />
          <ProjectsPage projectsSectionRef={projectsSectionRef} />
          <AboutPage aboutSectionRef={aboutSectionRef} />
          <ArcadePage
            arcadeSectionRef={arcadeSectionRef}
            mainSectionRef={mainSectionRef}
          />
        </section>
      </main>
    </>
  );
};

export default Mobile;
