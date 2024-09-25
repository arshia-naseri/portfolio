const Win98Window = ({ id, windowTitle = "Default", children }) => {
  return (
    <>
      <dialog
        data-popup-dialog
        id={id}
        className="win98-window relative max-h-[80vh] min-w-[30vw] max-w-[60vw] overflow-hidden bg-[rgb(192,192,192)] font-minecraft outline-none backdrop:bg-black/50"
      >
        <nav className="flex h-fit w-full items-center bg-gradient-to-r from-[rgb(0,0,125)] to-[rgb(60,130,300)] px-1">
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
        {children}
      </dialog>
    </>
  );
};

export default Win98Window;
