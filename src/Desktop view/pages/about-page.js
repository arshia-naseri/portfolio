import { useContext } from "react";
import { materialContext } from "../../main";
import checkLogo from "../../Assets/logos/check-1.png";

import Win98Window from "../../Componants/_win98Window";
import { openDialog, phonetBtnClick } from "../../Componants/_globalFunc.ts";

const AboutPage = ({ aboutSectionRef, arcadeSectionRef }) => {
  const { about } = useContext(materialContext);
  // const copyDialog = useRef();
  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.log(err);
    }
  };

  // const closeDialog = () => {
  //   document.body.style.overflow = "auto";
  //   copyDialog.current.close();
  // };
  return (
    <>
      <section
        ref={aboutSectionRef}
        className="h-screen border-b border-vcrBlack/20 bg-mainWhite p-8 pl-20 font-vcr"
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
                className="flex w-fit items-center gap-3"
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
                {...phonetBtnClick}
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
                  openDialog("copyConfirm-Dialog");
                }}
                className="hover:cursor-pointer"
                {...phonetBtnClick}
              >
                <img src={about.emailLogo} alt="email logo" className="w-10" />
              </div>
              <a
                href={about.linkedInURL}
                title={about.linkedInURL}
                target="_blank"
                rel="noreferrer"
                {...phonetBtnClick}
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

      <Win98Window id="copyConfirm-Dialog" windowTitle="Email Copied">
        <div>You just copied MY email!</div>
        <br />
        <section className="flex gap-2">
          <div>{about.emailURL}</div>
          <br />
          <img src={checkLogo} alt="check logo" className="aspect-square h-6" />
        </section>
      </Win98Window>
    </>
  );
};
// rgb => 0,0,125, 60, 130, 200
export default AboutPage;
