import { useState } from "react";
import { phonetBtnClick } from "./_phoneAttr";

/*
  NavHeight:
    Desktop => h-6 (24px)
    Phone => 
*/

const Win98Window = ({ id, windowTitle = "Default", children }) => {
  const [isEasyToRead, setIsEasyToRead] = useState(false);
  // const navBarHeight = "24px"; //Tailwind => 6

  const closeDialog = () => {
    setIsEasyToRead(false);
    document.body.style.overflow = "scroll";
    document.getElementById(id).close();
  };

  return (
    <>
      <dialog
        data-popup-dialog
        id={id}
        className={`win98-window h-full w-full flex-col overflow-hidden bg-[rgb(192,192,192)] outline-none backdrop:bg-black/50 sm:max-h-[80vh] sm:min-w-[max(30vw,fit-content)] sm:max-w-[60vw] ${!isEasyToRead && "font-vcr"}`}
      >
        <nav className="absolute left-0 top-0 flex h-6 w-full items-center gap-3 bg-gradient-to-r from-[rgb(0,0,125)] to-[rgb(60,130,300)] px-1">
          <div className="text-white">{windowTitle}</div>
          <button
            className="noHighlightClicked win98-window ml-auto flex h-3 items-center justify-center bg-[rgb(192,192,192)] px-1 text-sm hover:bg-[rgb(160,160,160)]"
            onClick={() => setIsEasyToRead(!isEasyToRead)}
            {...phonetBtnClick}
          >
            {isEasyToRead ? "Make it Window98 Style" : "Make it Easy 2 Read"}
          </button>
          <button
            className="noHighlightClicked win98-window flex aspect-square h-3 items-center justify-center bg-[rgb(192,192,192)] p-0 text-sm hover:bg-[rgb(160,160,160)]"
            onClick={closeDialog}
            {...phonetBtnClick}
          >
            X
          </button>
        </nav>

        {/* Dummy nav for space */}
        <nav className="flex h-6 w-full items-center bg-gradient-to-r from-[rgb(0,0,125)] to-[rgb(60,130,300)] px-1">
          <div className="text-white">{windowTitle}</div>
          <button className="win98-window ml-auto flex aspect-square h-3 items-center justify-center bg-[rgb(192,192,192)] p-0 font-vcr text-sm hover:bg-[rgb(160,160,160)]">
            X
          </button>
        </nav>

        <main
          data-scroll-dir="y"
          className="win98-scrollbar m-3 mr-0 max-h-[90vh] overflow-y-auto pr-5 sm:max-h-[70vh]"
        >
          {children}
        </main>
      </dialog>
    </>
  );
};

export default Win98Window;
