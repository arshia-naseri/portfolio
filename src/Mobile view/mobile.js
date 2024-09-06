import { useRef } from "react";
import MainPage from "./pages/main-page";

const Mobile = () => {
  const mainSectionRef = useRef();
  //   const projectsSectionRef = useRef();
  //   const aboutSectionRef = useRef();
  //   const arcadeSectionRef = useRef();
  return (
    <>
      <main>
        <div className="fixed z-20 m-2 cursor-pointer text-4xl text-mainWhite blur-[.5px]">
          ☰
        </div>

        <section>
          <MainPage mainSectionRef={mainSectionRef} />
        </section>
      </main>
    </>
  );
};

export default Mobile;
