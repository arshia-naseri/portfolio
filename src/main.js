import { createContext, useEffect, useState } from "react";
import smoothscroll from "smoothscroll-polyfill";
import Desktop from "./Desktop view/desktop";
import Mobile from "./Mobile view/mobile";
import ProfilePic from "./Assets/images/profile-pic.webp";
import UniversityLogo from "./Assets/logos/university-logo.webp";
import EmailLogo from "./Assets/logos/email-logo.webp";
import LinkedInLogo from "./Assets/logos/linkedin-logo.webp";
import GithubLogo from "./Assets/logos/github-logo.webp";
import PcPixelatedPic from "./Assets/logos/pc-blink-pixelated.webp";
import Win98Window from "./Componants/_win98Window";

// Resources
import constructionLogo from "./Assets/logos/construction-logo.webp";

export const materialContext = createContext();
window.__forceSmoothScrollPolyfill__ = true;
function Main() {
  const [showMobileView, SetShowMobileView] = useState();
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

  const material = {
    main: {
      getFormatedTime,
      getFormatedDate,
    },
    about: {
      profilePic: ProfilePic,
      detail:
        "Passionate Tech Enthusiast | Proficient in Software and Web Development, Robotics and Data Science | Transforming Ideas into Innovative Solutions",
      universityLogo: UniversityLogo,
      universityURL: "https://www.uwo.ca/index.html",
      emailLogo: EmailLogo,
      emailURL: "arshia.naseri.w@outlook.com",
      linkedInLogo: LinkedInLogo,
      linkedInURL: "https://www.linkedin.com/in/arshia-naseri/",
      githubLogo: GithubLogo,
      githubURL: "https://github.com/arshia-naseri",
    },
    arcade: {
      pcPixelatedPic: PcPixelatedPic,
    },
  };

  // ? For checking if device is not desktop
  // ! is not widely used yet ↓
  // const isMobile = () =>
  //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  //     navigator.userAgent,
  //   );

  useEffect(() => {
    const handleResize = () => {
      SetShowMobileView(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    smoothscroll.polyfill();

    document.getElementById("starupMessage-Dialog").showModal();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <materialContext.Provider value={material}>
        {showMobileView ? <Mobile /> : <Desktop />}
        {/* Popup start message */}
        {/* <Win98Window id="starupMessage-Dialog" windowTitle="Welcome...">
          <section className="flex items-center gap-2">
            <img
              src={constructionLogo}
              alt="construction logo"
              className="w-10"
            />
            <div className="text-xl">This Page is under Construction!!!</div>
          </section>
          <div className="mt-5">
            Close this window (Press X in the navigation bar) to view this page
            pre-production
          </div>
        </Win98Window> */}
      </materialContext.Provider>
    </>
  );
}

export default Main;
