import { useRef } from "react";
import MainPage from "./pages/main-page";
import ProjectsPage from "./pages/projects-page";

const Mobile = () => {
  const mainSectionRef = useRef();
  const projectsSectionRef = useRef();
  //   const aboutSectionRef = useRef();
  //   const arcadeSectionRef = useRef();
  return (
    <>
      <main>
        <div
          id="btnBurgerMenu"
          className="fixed z-20 m-2 cursor-pointer text-4xl text-mainWhite blur-[.5px]"
        >
          ☰
        </div>

        <section>
          <MainPage mainSectionRef={mainSectionRef} />
          <ProjectsPage projectsSectionRef={projectsSectionRef} />
          <section className="h-dvh bg-red-200"></section>
          <section className="h-dvh bg-blue-200"></section>
        </section>
      </main>
    </>
  );
};

export default Mobile;
