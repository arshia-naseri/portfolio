import { useContext } from "react";
import { materialContext } from "../../main";
const MainPage = ({ mainSectionRef, projectsSectionRef }) => {
  const { main } = useContext(materialContext);

  return (
    <>
      <section
        ref={mainSectionRef}
        className="h-screen bg-vcrBlack p-8 blur-[.5px]"
      >
        <div
          data-overlay
          className="mainVhsStaticDiv pointer-events-none absolute left-0 top-0 -z-10 h-full w-full"
        />
        <section className="inline-flex h-full w-full flex-col">
          <nav className="ml-auto flex flex-col items-end font-vcr text-xl text-mainWhite">
            <section className="flex gap-2">
              <div>PLAY</div>
              <div>►</div>
            </section>
            <section className="flex items-center gap-2">
              <div>REC</div>
              <div className="animate-rec-button size-3 rounded-full bg-red-500"></div>
            </section>
          </nav>
          <section className="animate-text-flicker mx-auto my-auto flex font-vcr text-9xl tracking-[3rem] text-mainWhite opacity-90">
            ARSHI<div className="tracking-normal">A</div>
          </section>
          <section className="flex justify-between text-mainWhite">
            <div
              onClick={() =>
                projectsSectionRef.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="noHighlightClicked animate-text-flicker ml-8 animate-[bounce_1s_infinite,textflicker_0.06s_infinite_alternate] cursor-pointer font-minecraft text-8xl"
            >
              ↓
            </div>
            <section className="animate-text-flicker flex flex-col items-end font-vcr text-xl">
              <div>{main.getFormatedTime()}</div>
              <div>{main.getFormatedDate()}</div>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default MainPage;
