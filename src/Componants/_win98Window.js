import { useState } from "react";

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
        className={`win98-window max-h-[80vh] min-w-[max(30vw,fit-content)] max-w-[60vw] flex-col overflow-hidden bg-[rgb(192,192,192)] outline-none backdrop:bg-black/50 ${!isEasyToRead && "font-vcr"}`}
      >
        <nav className="absolute left-0 top-0 flex h-6 w-full items-center gap-3 bg-gradient-to-r from-[rgb(0,0,125)] to-[rgb(60,130,300)] px-1">
          <div className="text-white">{windowTitle}</div>
          <button
            className="win98-window ml-auto flex h-3 select-none items-center justify-center bg-[rgb(192,192,192)] px-1 text-sm hover:bg-[rgb(160,160,160)]"
            onClick={() => setIsEasyToRead(!isEasyToRead)}
          >
            {isEasyToRead ? "Make it Window98 Style" : "Make it Easy 2 Read"}
          </button>
          <button
            className="win98-window flex aspect-square h-3 items-center justify-center bg-[rgb(192,192,192)] p-0 text-sm hover:bg-[rgb(160,160,160)]"
            onClick={closeDialog}
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
          className="win98-scrollbar m-3 mr-0 max-h-[70vh] overflow-y-auto pr-5"
        >
          {children}
        </main>
      </dialog>
    </>
  );
};

export default Win98Window;
