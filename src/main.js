import { createContext, useEffect, useState } from "react";
import Desktop from "./Desktop view/desktop";
import Mobile from "./Mobile view/mobile";
import ProfilePic from "./Assets/images/profile-pic.webp";
import UniversityLogo from "./Assets/images/university-logo.webp";
import EmailLogo from "./Assets/images/email-logo.webp";
import LinkedInLogo from "./Assets/images/linkedin-logo.webp";
import GithubLogo from "./Assets/images/github-logo.webp";
import PcPixelatedPic from "./Assets/images/pc-blink-pixelated.webp";

export const materialContext = createContext();

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
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <materialContext.Provider value={material}>
        {showMobileView ? <Mobile /> : <Desktop />}
      </materialContext.Provider>
    </>
  );
}

export default Main;
