const Win98Window = ({ id, windowTitle = "Default", children }) => {
  const navBarHeight = "24px"; //Tailwind => 6

  return (
    <>
      <dialog
        data-popup-dialog
        id={id}
        className="win98-window max-h-[80vh] min-w-[30vw] max-w-[60vw] flex-col overflow-hidden bg-[rgb(192,192,192)] font-minecraft outline-none backdrop:bg-black/50"
      >
        <nav className="absolute left-0 top-0 flex h-6 w-full items-center bg-gradient-to-r from-[rgb(0,0,125)] to-[rgb(60,130,300)] px-1">
          <div className="text-white">{windowTitle}</div>
          <button
            className="win98-window ml-auto flex aspect-square h-3 items-center justify-center bg-[rgb(192,192,192)] p-0 font-vcr text-sm hover:bg-[rgb(160,160,160)]"
            onClick={() => {
              document.body.style.overflow = "scroll";
              document.getElementById(id).close();
            }}
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
          className="win98-scrollbar ml-3 mr-0 max-h-[70vh] overflow-y-auto pr-5"
        >
          {children}
        </main>
      </dialog>
    </>
  );
};

export default Win98Window;
