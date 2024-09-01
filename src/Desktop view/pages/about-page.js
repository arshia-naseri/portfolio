import { useContext } from "react";
import { materialContext } from "../../App";

const AboutPage = ({ aboutSectionRef, arcadeSectionRef }) => {
  const { about } = useContext(materialContext);

  return (
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
        <section>
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
        </section>
      </main>
    </section>
  );
};

export default AboutPage;
