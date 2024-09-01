import { useContext, useRef } from "react";
import { materialContext } from "../../App";

const AboutPage = ({ aboutSectionRef, arcadeSectionRef }) => {
  const { about } = useContext(materialContext);
  const copyDialog = useRef();
  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.log(err);
    }
  };

  const closeDialog = () => {
    document.body.style.overflow = "auto";
    copyDialog.current.close();
  };
  return (
    <>
      <section
        ref={aboutSectionRef}
        className="h-screen bg-mainWhite p-8 pl-20 font-vcr"
      >
        <main className="mt-7 flex h-full flex-col">
          <div className="px-10 text-5xl tracking-[1rem]">ABOUT ME</div>
          <section className="my-auto flex items-center gap-3">
            <img src={about.profilePic} alt="my profile pic" className="w-80" />
            <section className="flex h-full flex-col justify-around">
              <section className="flex flex-col gap-3">
                <div className="text-4xl tracking-[.7rem]">ARSHIA NASERI</div>
                <div className="text-xl">{about.detail}</div>
              </section>
              <a
                target="_blank"
                rel="noreferrer"
                href={about.universityURL}
                title={about.universityURL}
                className="flex items-center gap-3"
              >
                <img
                  src={about.universityLogo}
                  alt="university logo"
                  className="w-24"
                />
                <section>
                  <div
                    className="text-xl tracking-[0.5rem]"
                    style={{ WebkitTextStroke: "1px black" }}
                  >
                    WESTERN UNIVERSITY
                  </div>
                  <div className="text-lg">B.Sc. Computer Science</div>
                </section>
              </a>
            </section>
          </section>
          <section className="flex items-center">
            <div
              className="noHighlightClicked animate-[bounce_1s_infinite] cursor-pointer font-minecraft text-5xl"
              onClick={() =>
                arcadeSectionRef.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              ↓
            </div>
            <section className="ml-auto flex gap-2 pb-10">
              <a
                href={about.githubURL}
                title={about.githubURL}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={about.githubLogo}
                  alt="github logo"
                  className="w-10"
                />
              </a>
              <div
                href={about.emailURL}
                title={about.emailURL}
                onClick={(e) => {
                  copyText(about.emailURL);
                  copyDialog.current.showModal();
                  document.body.style.overflow = "hidden";
                }}
              >
                <img src={about.emailLogo} alt="email logo" className="w-10" />
              </div>
              <a
                href={about.linkedInURL}
                title={about.linkedInURL}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={about.linkedInLogo}
                  alt="linkedIn logo"
                  className="w-10"
                />
              </a>
            </section>
          </section>
        </main>
      </section>
      <dialog
        ref={copyDialog}
        id="copyDialog"
        className="noHighlightClicked mt-[20vh] h-2/5 w-2/5"
        onClick={(e) => (e.target.id === "copyDialog" ? closeDialog() : null)}
      >
        <main className="win98-project-shadow h-full w-full">
          <div>{about.emailURL}</div>
        </main>
      </dialog>
    </>
  );
};

export default AboutPage;
