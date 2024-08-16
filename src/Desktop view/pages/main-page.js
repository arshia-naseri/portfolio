const MainPage = ({ mainSectionRef, projectsSectionRef }) => {
  const getFormatedTime = () => {
    const now = new Date();
    let hours = now.getHours() % 12 ? now.getHours() % 12 : 12;
    let minuts =
      now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();

    let period = now.getHours() >= 12 ? "PM" : "AM";
    return `${period} ${hours}:${minuts}`;
  };

  const getFormatedDate = () => {
    const now = new Date();
    const monthNames = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    return `${
      monthNames[now.getMonth()]
    } ${now.getDate()} ${now.getFullYear()}`;
  };
  return (
    <>
      <section
        ref={mainSectionRef}
        className=" p-8 bg-vcrBlack h-screen blur-[.5px] "
      >
        <div
          data-overlay
          className=" mainVhsStaticDiv pointer-events-none z-20 absolute left-0 top-0 w-full h-full"
        />
        <section className=" w-full h-full inline-flex flex-col">
          <nav className=" ml-auto font-vcr flex flex-col items-end text-xl text-mainWhite">
            <section className=" flex gap-2">
              <div>PLAY</div>
              <div>►</div>
            </section>
            <section className="flex items-center gap-2 ">
              <div>REC</div>
              <div className="animate-rec-button size-3 bg-red-500 rounded-full"></div>
            </section>
          </nav>
          <section className="animate-text-flicker mx-auto my-auto text-mainWhite font-vcr tracking-[3rem] text-9xl">
            ARSHIA
          </section>
          <section className=" flex justify-between text-mainWhite">
            <div
              onClick={() =>
                projectsSectionRef.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="noHighlightClicked cursor-pointer animate-text-flicker ml-8 text-8xl font-minecraft animate-[bounce_1s_infinite,textflicker_0.06s_infinite_alternate]"
            >
              ↓
            </div>
            <section className="animate-text-flicker flex flex-col items-end font-vcr text-xl">
              <div>{getFormatedTime()}</div>
              <div>{getFormatedDate()}</div>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default MainPage;
