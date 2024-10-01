import floppyTop from "../Assets/images/floppy-top.png";
import { phonetBtnClick } from "./_globalFunc";

const FloppyDisk = ({
  floppyColor,
  lineColor,
  width,
  diskTitle,
  windowID,
  summaryText,
}) => {
  return (
    <>
      <section style={{ width }} className="flex shrink-0 flex-col font-sans">
        <img
          alt="Floppy top"
          src={floppyTop}
          className="w-full translate-y-[1%] border-none"
        />
        <section className="relative flex aspect-[472.98/235] w-full border-none bg-[rgb(29,31,34)]">
          {/* Left */}
          <section className="h-full flex-1 bg-[rgb(29,31,34)]"></section>

          {/* Centre */}
          <section className="flex h-full flex-grow-[7] basis-0 flex-col overflow-hidden rounded-lg">
            <section
              className={` ${floppyColor} flex h-1/3 w-full items-center justify-end px-4`}
            >
              <div className="w-3/5 rounded-xl bg-[rgb(235,234,230)] p-0.5 text-center text-xl">
                {diskTitle}
              </div>
            </section>
            <section className="h-2/3 bg-[rgb(235,234,230)] p-3">
              <div className="relative line-clamp-4 text-ellipsis text-sm font-thin leading-5">
                {summaryText}
                {/* Lines */}
                <section className="absolute left-0 top-0 h-full w-full">
                  <div
                    className={`left-0 top-0 w-full border-b ${lineColor} h-1/4`}
                  />
                  <div
                    className={`left-0 top-1/4 w-full border-b ${lineColor} h-1/4`}
                  />
                  <div
                    className={`left-0 top-2/4 w-full border-b ${lineColor} h-1/4`}
                  />
                  <div
                    className={`left-0 top-3/4 w-full border-b ${lineColor} h-1/4`}
                  />
                </section>
              </div>
              <button
                className="noHighlightClicked win98-project-shadow mt-1 bg-slate-300 p-0.5 text-xs hover:bg-slate-400"
                onClick={() => {
                  document.body.style.overflowY = "hidden";
                  document.getElementById(windowID).showModal();
                }}
                {...phonetBtnClick}
              >
                <u>C</u>lick for More...
              </button>
            </section>
          </section>

          {/* Right */}
          <section className="flex h-full flex-1 bg-[rgb(29,31,34)]">
            <div className="mx-auto mb-[20%] mt-auto aspect-[2/1.5] w-3 rounded-sm bg-mainWhite"></div>
          </section>
        </section>

        {/* Bottom */}
        <section className="aspect-[472.98/20] w-full -translate-y-[3%] rounded-b-xl bg-[rgb(29,31,34)]"></section>
      </section>
    </>
  );
};

export default FloppyDisk;
