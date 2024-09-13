import warningLogo from "../../Assets/images/warning-logo.webp";

const ArcadePage = ({ arcadeSectionRef, mainSectionRef }) => {
  return (
    <>
      <section
        ref={arcadeSectionRef}
        className="flex h-screen items-end justify-center bg-mainWhite font-vcr"
      >
        <main className="h-[90%] w-full">
          <div className="boldTextFont ml-auto mr-auto flex w-fit text-3xl tracking-[0.5rem]">
            ARCAD<div className="tracking-normal">E</div>
          </div>

          <section className="mt-20 flex flex-col items-center gap-5">
            <img src={warningLogo} alt="warning logo" className="w-32" />
            <div
              className="px-4 text-center text-lg"
              style={{
                textShadow: `
      0.2px 0px 0px rgb(29, 31, 34),
      -0.2px 0px 0px rgb(29, 31, 34),
      0px 0.2px 0px rgb(29, 31, 34),
      0px -0.2px 0px rgb(29, 31, 34)
    `,
              }}
            >
              This Feature is not compatible with mobile devices
            </div>
            <div className="text-center">Open Using Desktop Computer</div>
            <section
              className="mt-20 flex gap-3 text-4xl"
              onClick={() =>
                mainSectionRef.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
              onTouchStart={(e) => {
                e.currentTarget.style.transform = "scale(1.5)";
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div className="font-minecraft text-5xl">⇑</div>
              <div className="translate-y-[5px]">Go To Top</div>
            </section>
          </section>
        </main>
      </section>
    </>
  );
};

export default ArcadePage;
