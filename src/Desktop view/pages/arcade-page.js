import { useContext, useRef } from "react";
import { materialContext } from "../../main";
import arcadeMachinePic from "../../Assets/images/arcade-machine.png";
import controlsLogo from "../../Assets/logos/input-devices-logo.webp";
import Win98Window from "../../Componants/_win98Window";
import { phonetBtnClick, openDialog } from "../../Componants/_globalFunc.ts";

const ArcadePage = ({ arcadeSectionRef, mainSectionRef }) => {
  const { arcade } = useContext(materialContext);
  const arcadePicRef = useRef();
  const arcadeFrameRef = useRef();

  return (
    <>
      <section
        ref={arcadeSectionRef}
        className="relative h-screen bg-mainWhite p-8 pl-20 font-vcr"
      >
        <section className="absolute right-0 top-0 h-full">
          <iframe
            src="https://www.retrogames.cc/embed/42476-mortal-kombat-rev-5-0-t-unit-03-19-93.html"
            frameBorder="no"
            allowFullScreen={true}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            scrolling="no"
            title="arcade frame"
            className="absolute left-[17.3%] top-[15.4%] h-[56%] w-[79.5%]"
            ref={arcadeFrameRef}
            loading="lazy"
          />
          <img
            src={arcadeMachinePic}
            ref={arcadePicRef}
            alt="arcade machine pic"
            className="h-full"
          />
        </section>
        <main className="mt-7 flex h-full flex-col">
          <div className="px-10 text-5xl tracking-[1rem]">ARCADE</div>
          <section className="mt-32 flex items-center gap-3">
            <img
              src={arcade.pcPixelatedPic}
              alt="pc pixelated pic"
              className="w-8"
            />
            <div className="w-72 text-xl">
              Use Desktop for an Awesome Experience!
            </div>
          </section>
          <br />
          <br />
          <section
            className="flex items-center gap-3 text-lg hover:cursor-pointer"
            onClick={() => openDialog("arcadeInput-Dialog")}
            {...phonetBtnClick}
          >
            <img src={controlsLogo} alt="controls logo" className="w-10" />
            <div className="pointer-events-none">Click for Controls</div>
          </section>
          <section
            className="mb-10 mt-auto flex cursor-pointer items-center gap-3"
            onClick={() =>
              mainSectionRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <div className="font-minecraft text-5xl">⇑</div>
            <div className="text-3xl">Go To Top</div>
          </section>
        </main>
        <Win98Window id="arcadeInput-Dialog" windowTitle="Game Controls">
          <section>hello</section>
        </Win98Window>
      </section>
    </>
  );
};

export default ArcadePage;
