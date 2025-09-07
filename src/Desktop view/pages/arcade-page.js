import { useContext } from "react";
import { materialContext } from "../../main";
import Win98Window from "../../Componants/_win98Window";
import { phonetBtnClick, openDialog } from "../../Componants/_globalFunc.ts";
// Logos
import controlsLogo from "../../Assets/logos/input-devices-logo.webp";
import gameControllerLogo from "../../Assets/logos/game-controller-logo.webp";
// Images
import arcadeMachinePic from "../../Assets/images/arcade-machine.png";

const CtrlItem = ({ move, keyboard }) => {
  return (
    <>
      <section className="flex gap-0">
        <div className="pr-2">{move}</div>
        <div className="relative flex-grow">
          <div className="absolute left-0 top-1/2 my-auto h-[1px] w-full border-t-2 border-dotted border-t-vcrBlack"></div>
        </div>
        <div className="ml-auto pl-2">{keyboard}</div>
      </section>
    </>
  );
};

const ArcadePage = ({ arcadeSectionRef, mainSectionRef }) => {
  const { arcade } = useContext(materialContext);
  console.log(window.innerWidth * 5.62782);
  return (
    <>
      <section
        ref={arcadeSectionRef}
        className="relative min-h-screen bg-mainWhite p-8 pl-20 font-vcr"
      >
        <section className="absolute right-0 top-0 h-full">
          <iframe
            src="https://archive.org/embed/arcade_mk"
            width="800"
            height="500"
            loading="lazy"
            allowFullScreen={true}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            title="arcade frame"
            ref={arcade.arcadeFrame}
            className="absolute left-[17.2%] top-[15.5%] origin-top-left"
          />
          <img
            src={arcadeMachinePic}
            alt="arcade machine pic"
            className="h-full"
          />
        </section>
        <main className="mt-7 flex h-full flex-col">
          <div className="px-10 text-5xl tracking-[1rem]">ARCADE</div>
          <section className="mt-28 flex items-center gap-3">
            <img
              src={arcade.pcPixelatedPic}
              alt="pc pixelated pic"
              className="w-8"
            />
            <div className="w-72 text-xl">
              Use <span className="boldTextFont">Desktop</span> for an Awesome
              Experience!
            </div>
          </section>
          <br />
          <br />
          <section>
            <div className="boldTextFont text-2xl">Start Arcade Game</div>
            <ol type="1" className="w-80 list-inside list-decimal">
              <li>Press ⏻ to start emulator</li>
              <li>Wait for emulator to start up</li>
              <li>Press X when I asked to press a button</li>
              <li>
                Press <span className="underline">9</span> for inserting coin
                into Machine
              </li>
              <li>
                Press <span className="underline">1</span> for single player/
                Press <span className="underline">2</span> for two player
              </li>
              <li>
                Select character unsing arrow keys and Press{" "}
                <span className="underline">X</span>
              </li>
            </ol>
          </section>
          <br />
          <br />
          <section
            className="flex items-center gap-3 text-lg hover:cursor-pointer"
            onClick={() => openDialog("arcadeInput-Dialog")}
            {...phonetBtnClick}
          >
            <img src={controlsLogo} alt="controls logo" className="w-10" />
            <div className="scale-100 underline hover:scale-105">
              Click for Game Controls
            </div>
          </section>

          <section
            className="mt-24 flex cursor-pointer items-center gap-3"
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
          {/* Title */}
          <section className="flex gap-3">
            <img
              src={gameControllerLogo}
              alt="game controller logo"
              className="w-16"
            />
            <div className="items-center text-xl">Game Ctrls</div>
          </section>
          <br />
          <section className="flex w-full flex-col gap-2 px-3">
            <div className="boldTextFont text-2xl">Player1</div>
            <CtrlItem move="Up" keyboard="UP" />
            <CtrlItem move="Down" keyboard="DOWN" />
            <CtrlItem move="Left" keyboard="LEFT" />
            <CtrlItem move="Right" keyboard="RIGHT" />
            <CtrlItem move="HighPunch" keyboard="LCONTROL or Mouse B1" />
            <CtrlItem move="Block" keyboard="LALT or Mouse B3" />
            <CtrlItem move="HighKick" keyboard="SPACE or Mouse B2" />
            <CtrlItem move="LowPunch" keyboard="LSHIFT" />
            <CtrlItem move="LowKick" keyboard="Z" />
            <CtrlItem move="Block2" keyboard="X" />
            <br />
            <div className="boldTextFont text-2xl">Player2</div>
            <CtrlItem move="Up" keyboard="R" />
            <CtrlItem move="Down" keyboard="F" />
            <CtrlItem move="Left" keyboard="D" />
            <CtrlItem move="Right" keyboard="G" />
            <CtrlItem move="HighPunch" keyboard="A" />
            <CtrlItem move="Block" keyboard="S" />
            <CtrlItem move="HighKick" keyboard="Q" />
            <CtrlItem move="LowPunch" keyboard="W" />
            <CtrlItem move="LowKick" keyboard="E" />
            <CtrlItem move="Block2" keyboard="n/a" />
            <br />

            <div className="boldTextFont text-2xl">System</div>
            <CtrlItem move="Player1Start" keyboard="1" />
            <CtrlItem move="Player2Start" keyboard="2" />
            <CtrlItem move="Coin1" keyboard="5" />
            <CtrlItem move="Coin2" keyboard="6" />
            <CtrlItem move="Coin3" keyboard="7" />
            <CtrlItem move="Coin4" keyboard="8" />
            <CtrlItem move="Service1" keyboard="9" />
            <CtrlItem move="Tilt" keyboard="T" />
          </section>
        </Win98Window>
      </section>
    </>
  );
};

export default ArcadePage;
