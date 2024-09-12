import { useContext } from "react";
import { materialContext } from "../../main";

const AboutPage = ({ aboutSectionRef }) => {
  const { about } = useContext(materialContext);
  return (
    <>
      <section
        ref={aboutSectionRef}
        className="flex h-svh items-end justify-center border-b border-vcrBlack/20 bg-mainWhite font-vcr"
      >
        <main className="h-[90%] w-full">
          <div className="boldTextFont ml-auto mr-auto w-fit text-3xl tracking-[0.5rem]">
            ABOUT ME
          </div>

          <section className="mt-7 flex flex-col items-center">
            <img src={about.profilePic} alt="profile pic" className="w-[40%]" />
            <div className="mt-8 text-2xl">ARSHIA NASERI</div>
            <div className="px-10 text-center">{about.detail}</div>
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
                className="w-14"
              />
              <section>
                <div
                  className="w-fit text-base tracking-[0.2rem]"
                  style={{ WebkitTextStroke: "1px black" }}
                >
                  WESTERN UNIVERSITY
                </div>
                <div className="w-fit text-sm">B.Sc. Computer Science</div>
              </section>
            </a>
            <section className="mt-5 flex gap-2">
              <a
                href={about.githubURL}
                title={about.githubURL}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={about.githubLogo}
                  alt="github logo"
                  className="mt-auto w-10"
                />
              </a>
              <a href={"mailto:" + about.emailURL} title={about.emailURL}>
                <img src={about.emailLogo} alt="email logo" className="w-10" />
              </a>
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
    </>
  );
};

export default AboutPage;
