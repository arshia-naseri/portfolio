import { createContext } from "react";
import Desktop from "./Desktop view/desktop";
import ProfilePic from "./Assets/images/profile-pic.webp";
import UniversityLogo from "./Assets/images/university-logo.webp";
import EmailLogo from "./Assets/images/email-logo.webp";
import LinkedInLogo from "./Assets/images/linkedin-logo.webp";
import GithubLogo from "./Assets/images/github-logo.webp";
// import PcPixelatedPic from "./Assets/images/pc-pixelated.webp";
import PcPixelatedPic from "./Assets/images/pc-blink-pixelated.webp";

export const materialContext = createContext();

function App() {
  const material = {
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

  return (
    <>
      <materialContext.Provider value={material}>
        <Desktop />
      </materialContext.Provider>
    </>
  );
}

export default App;
