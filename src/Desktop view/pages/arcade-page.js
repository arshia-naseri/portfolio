import { useContext, useEffect, useRef } from "react";
import { materialContext } from "../../App";
import arcadeMachinePic from "../../Assets/images/arcade-machine.png";

const ArcadePage = ({ arcadeSectionRef, mainSectionRef }) => {
  const { arcade } = useContext(materialContext);
  const arcadePicRef = useRef();
  const arcadeFrameRef = useRef();

  useEffect(() => {
    const img = arcadePicRef.current;

    const getRectDetail = () => {
      let point_x;
      let point_y;
      let width;
      let height;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const data = imageData.data;

      let foundRed = false;
      let foundGreen = false;
      let foundBlue = false;

      for (let i = 0; i < data.length; i += 4) {
        const red = data[i];
        const green = data[i + 1];
        const blue = data[i + 2];

        // Check if the pixel is pure red
        if (red === 255 && green === 0 && blue === 0 && !foundRed) {
          const red_pixelIndex = i / 4;
          const red_x = red_pixelIndex % img.width;
          const red_y = Math.floor(red_pixelIndex / img.width);
          point_x = red_x;
          point_y = red_y;

          foundRed = true;
        } else if (red === 0 && green === 255 && blue === 0 && !foundGreen) {
          const green_pixelIndex = i / 4;
          const green_x = green_pixelIndex % img.width;

          width = green_x - point_x;
          foundGreen = true;
        } else if (red === 0 && green === 0 && blue === 255 && !foundBlue) {
          const blue_pixelIndex = i / 4;
          const blue_y = Math.floor(blue_pixelIndex / img.width);

          height = blue_y - point_y;
          foundBlue = true;
        }
        if (foundRed && foundGreen && foundBlue) {
          arcadeFrameRef.current.style.left = `${point_x}px`;
          arcadeFrameRef.current.style.top = `${point_y - 1}px`;
          arcadeFrameRef.current.style.width = `${width + 3}px`;
          arcadeFrameRef.current.style.height = `${height + 3}px`;
          break;
        }
      }
    };

    if (img) {
      if (img.complete) {
        getRectDetail();
      } else {
        // Add an event listener to run when the image is loaded
        img.addEventListener("load", getRectDetail);
      }
    }

    return () => {
      // Clean up the event listener if the effect is re-run
      if (img) {
        img.removeEventListener("load", getRectDetail);
      }
    };
  }, [arcadePicRef]);

  return (
    <>
      <section
        ref={arcadeSectionRef}
        className="relative h-screen bg-mainWhite p-8 pl-20 font-vcr"
      >
        <section className="absolute right-0 top-0 h-full">
          <iframe
            src="https://www.retrogames.cc/embed/42476-mortal-kombat-rev-5-0-t-unit-03-19-93.html"
            // width="600"
            // height="450"
            frameBorder="no"
            allowFullScreen={true}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            scrolling="no"
            title="arcade frame"
            className="absolute"
            ref={arcadeFrameRef}
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
      </section>
    </>
  );
};

export default ArcadePage;
