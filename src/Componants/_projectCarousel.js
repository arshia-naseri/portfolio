/* 
    FloppyDisk:
        - floppyColor: String 
        - lineColor: String
        - width: String
        - diskTitle: String
        - disKTitleFontSize: String (in Tailwind language, default is set to 'text-xl')
        - windowID: String (Must be equal to wind98Window's id !!!)
        - summaryText: String (It is also added in children part of Window98Window)
    
    Win98Window: 
        -id: String
        -windowTitle: String 
    
    PROJECT_LINK_COMP:
        - url: String
        - img_src: image source (import)
        - img_width: String (in px) Optional
        - text: String Optional
      
    GITHUB_LINK_COMP:
        - url: String
        - text: String Optional
    
    FIGMA_LINK_COMP:
        - url: String
        - text: String Optional
*/

import FloppyDisk from "./_floppyDisk";
import Win98Window from "./_win98Window";
import { urlLink } from "./_globalFunc.ts";

// Images
import worldChampionPic from "../Assets/images/world-champion.jpeg";
import superTeamPic from "../Assets/images/super-team.jpeg";
import bestPresentaitionPic from "../Assets/images/best-presentation.jpeg";
import weatherAppScreenshot from "../Assets/images/weather-app-screenshot.jpeg";
import chessMastersAcademyScreenshot from "../Assets/images/Desktop-ChessMastersAcademy.webp";
import NfcExamplePic from "../Assets/images/exampleNFC.webp";
import portfolioDsktScreenshot from "../Assets/images/portfolioCover-dskt-screeenshot.jpg";
import portfolioPhoneScreenshot from "../Assets/images/portfolioCover-phone-screeenshot.jpg";
import ideaBoardScreenshot from "../Assets/images/idea-board-screenshot.webp";

// Logos
import certificateLogo from "../Assets/logos/certificate-logo.webp";
import toolsLogo from "../Assets/logos/tools-logo.webp";
import FigmaLogo from "../Assets/logos/figma-logo.webp";
import weatherLogo from "../Assets/logos/weather-logo.webp";
import githubLogo from "../Assets/logos/github-logo.webp";
import contactPageLogo from "../Assets/logos/contact-page-logo.webp";
import cdLogo from "../Assets/logos/cd-logo.webp";

/* 
  URL to project componants
*/
const PROJECT_LINK_COMP = ({
  url,
  img_src,
  img_width = "40px",
  text = "Click 2 see the Website",
}) => {
  return (
    <>
      <section className="flex items-center gap-3">
        <img
          src={img_src}
          loading="lazy"
          alt="weather logo"
          style={{ width: img_width }}
        />
        <a
          target="_blank"
          rel="noreferrer"
          href={url}
          className="text-url underline"
          {...urlLink}
        >
          {text}
        </a>
      </section>
    </>
  );
};

const GITHUB_LINK_COMP = ({ url, text = "Click 2 see Github Repository" }) => {
  return (
    <>
      <section className="flex items-center gap-3">
        <img
          src={githubLogo}
          loading="lazy"
          alt="github logo"
          className="w-8"
        />
        <a
          target="_blank"
          rel="noreferrer"
          href={url}
          className="text-url underline"
          {...urlLink}
        >
          {text}
        </a>
      </section>
    </>
  );
};

const FIGMA_LINK_COMP = ({ url, text = "Click 2 see Figma Design" }) => {
  return (
    <>
      <section className="flex items-center gap-3">
        <img src={FigmaLogo} loading="lazy" alt="figma logo" className="w-8" />
        <a
          target="_blank"
          rel="noreferrer"
          href={url}
          className="text-url underline"
          {...urlLink}
        >
          {text}
        </a>
      </section>
    </>
  );
};

/*
  Project Componants
*/
const PrKavosh = ({ floppyWidth, ProjectID = "Kavosh-Dialog" }) => {
  const summaryText =
    "Kavosh Robotics Team is one of the best junior robotics teams in the world. Kavosh has multiple honours in Germany, China, Brazil, Netherlands, and Mexico and many first-place awards in Junior Rescue Leagues of Robocup 2019 Australia, 2018 Canada, and 2017 Japan.";
  return (
    <>
      <FloppyDisk
        floppyColor={"bg-red-400"}
        lineColor={"border-b-red-300"}
        width={floppyWidth}
        diskTitle="Kavosh"
        windowID={ProjectID}
        summaryText={summaryText}
      />
      <Win98Window id={ProjectID} windowTitle="Kavosh">
        {/* Summary Text */}
        <div>{summaryText}</div>
        <br />
        <div>
          During my time as a high school student, I decided to join a renounce
          robotics team with many national and international awards and trophies
          to expand my knowledge of robotics and programming. I learned so much,
          not just in the technical field but also in transferable skills which
          have been detrimental to my day-to-day life.
        </div>
        {/* Robot image */}
        <br />
        <div>
          After a long night of coding and debugging and many burned resistors,
          we managed to earn multiple first-place awards at the national and
          international level in Nagoya Japan 2017 Robocup.
        </div>
        <br />
        <section className="flex items-center gap-3">
          <img
            src={certificateLogo}
            alt="certificate log"
            className="aspect-auto w-10"
            loading="lazy"
          />
          <div className="boldTextFont text-xl">Certificates</div>
        </section>
        <br />
        {/* Certificates */}
        <section className="mb-2 flex w-full max-w-full flex-wrap gap-2 *:min-w-40 *:flex-1">
          {/* World Champion Award */}
          <figure>
            <img
              src={worldChampionPic}
              alt="world championship certificate"
              className="win98-window w-full"
              loading="lazy"
            />
            <figcaption className="mt-1 text-[.7rem]">
              World Champion award for individual team RoboCup Nagoya Japan 2017
            </figcaption>
          </figure>

          {/* Best Presentation Award */}
          <figure>
            <img
              src={bestPresentaitionPic}
              alt="Best Presentation certificate"
              className="win98-window w-full"
            />
            <figcaption className="mt-1 text-[.7rem]">
              Best Presentation of work RoboCup Nagoya Japan 2017
            </figcaption>
          </figure>

          {/* Super Team Award */}
          <figure>
            <img
              src={superTeamPic}
              alt="Super Team certificate"
              className="win98-window w-full"
              loading="lazy"
            />
            <figcaption className="mt-1 text-[.7rem]">
              World Championship award for SuperTeam RoboCup Nagoya Japan 2017.
              Collaboration of teams from various countries.
            </figcaption>
          </figure>
        </section>
        <br />
        <div>
          The purpose of the robots was to rescue injured victims using many
          different methods such as colour detection, heat detection, algorithm
          mapping, computer vision and compass navigation.
        </div>
        <br />
        <section className="flex items-center gap-3">
          <img
            src={toolsLogo}
            alt="tools logo"
            className="aspect-auto w-10"
            loading="lazy"
          />
          <div className="boldTextFont text-xl">Tools</div>
        </section>
        <br />
        <div>
          AVR Atmel, C++, C, Assembly, Python, Machine Learning, Electronics &
          board design (Altium: PCB Design Software), SolidWorks (Mechanical
          Design Software)
        </div>
      </Win98Window>
    </>
  );
};

const PrWeatherApp = ({ floppyWidth, ProjectID = "WeatherApp-Dialog" }) => {
  const summaryText = `In this pet project, I aimed to craft a charming weather application that seamlessly integrates API requests and leverages React to showcase locations that hold personal significance to me, aptly labelled as "Residences"`;
  return (
    <>
      <FloppyDisk
        floppyColor={"bg-blue-400"}
        lineColor={"border-b-blue-300"}
        width={floppyWidth}
        diskTitle="Weather App"
        windowID={ProjectID}
        summaryText={summaryText}
      />
      <Win98Window id={ProjectID} windowTitle="Weather App">
        <div>{summaryText}</div>
        <br />
        {/* Website Screenshot */}
        <figure className="mx-auto w-[90%]">
          <img
            src={weatherAppScreenshot}
            alt="weather app screenshot"
            className="win98-window w-full"
          />
          <figcaption className="mt-1 text-sm">
            Screenshot of the Project
          </figcaption>
        </figure>
        <br />
        <div>
          Moreover, I took great care to ensure that this app is user-friendly
          across various devices, boasting distinct designs tailored for phones,
          laptops, and tablets. You can even explore the envisioned design
          through the provided Figma link
        </div>
        <br />
        <div>
          (P.S. This project used to be hosted by Heroku; however, since the
          free version was slow, the free tier was removed, and it was moved to
          GitHub pages)
        </div>
        <br />
        <div>
          With a free trial of the API account, there could be only limited
          requests in 24 hours. Thus, the program has access to 3 different
          accounts, which the program switches between to get a result
        </div>
        <br />
        <PROJECT_LINK_COMP
          url="https://arshia-naseri.github.io/weather-app/"
          img_src={weatherLogo}
        />
        <br />
        <FIGMA_LINK_COMP url="https://www.figma.com/design/YWbyzjhQV0NlmX0LLmnC1y/Weather-App" />
        <br />
        <GITHUB_LINK_COMP url="https://github.com/arshia-naseri/weather-app" />
        <br />
        <br />
        <section className="flex items-center gap-3">
          <img
            src={toolsLogo}
            alt="tools logo"
            className="aspect-auto w-10"
            loading="lazy"
          />
          <div className="boldTextFont text-xl">Tools</div>
        </section>
        <br />
        <div>React, JavaScript, CSS, HTML, REST API, Figma</div>
      </Win98Window>
    </>
  );
};

const PrChessMastersAcademy = ({
  floppyWidth,
  ProjectID = "ChessMastersAcademy-Dialog",
}) => {
  const summaryText =
    "This project is intended to create a digital card for a business contact list. This action would make a lasting impression on said clients and have a more professional appeal.";
  return (
    <>
      <FloppyDisk
        floppyColor={"bg-orange-400"}
        lineColor={"border-b-orange-300"}
        width={floppyWidth}
        diskTitle="Chess Masters Academy"
        // disKTitleFontSize="text-base"
        windowID={ProjectID}
        summaryText={summaryText}
      />
      <Win98Window id={ProjectID} windowTitle="Chess Masters Academy">
        <div>{summaryText}</div>
        <br />
        <div>
          This particular project is custom-made for Chess Masters Academy,
          focusing on the private education of K12 students.
        </div>
        <br />
        {/* Screenshot */}
        <figure className="mx-auto w-[60%]">
          <img
            src={chessMastersAcademyScreenshot}
            alt="cma screenshot"
            loading="lazy"
            className="win98-window"
          />
          <figcaption className="mt-1 text-sm">
            Chess Masters Academy Screenshot (Desktop)
          </figcaption>
        </figure>
        <br />
        <div>
          The website is only the first step. The next step is to write the url
          for the website into a NFC card, so it could be activated when tapped
          by phone
        </div>
        <br />
        <figure className="mx-auto w-[70%]">
          <img
            src={NfcExamplePic}
            alt="nfc example"
            loading="lazy"
            className="win98-window"
          />
          <figcaption className="mt-1 text-sm">
            Example of an NFC Business Card
          </figcaption>
        </figure>
        <br />
        <PROJECT_LINK_COMP
          url="https://www.thechessmastersacademy.com"
          img_src={contactPageLogo}
          img_width="35px"
        />
        <br />
        <GITHUB_LINK_COMP url="https://github.com/arshia-naseri/chess-masters-academy-2.0" />
        <br />
        <section className="flex items-center gap-3">
          <img
            src={toolsLogo}
            alt="tools logo"
            className="aspect-auto w-10"
            loading="lazy"
          />
          <div className="boldTextFont text-xl">Tools</div>
        </section>
        <br />
        <div>React, JavaScript, CSS, HTML</div>
      </Win98Window>
    </>
  );
};

const PrPortfolio = ({ floppyWidth, ProjectID = "Portfolio-Dialog" }) => {
  const summaryText =
    "This website, the one that you are currently on, is to showcase my technical projects more desirably. The surprise at the end of the website is mostly for fun.";
  return (
    <>
      <FloppyDisk
        floppyColor={"bg-purple-400"}
        lineColor={"border-b-purple-300"}
        width={floppyWidth}
        diskTitle="Portfolio"
        // disKTitleFontSize="text-base"
        windowID={ProjectID}
        summaryText={summaryText}
      />
      <Win98Window id={ProjectID} windowTitle="Portfolio">
        <div>{summaryText}</div>
        <br />
        <section className="flex gap-10">
          <figure>
            <img
              src={portfolioDsktScreenshot}
              alt="portfolio screenshot (desktop)"
              className="win98-window"
            />
            <figcaption className="mt-1 text-sm">
              Portfolio Desktop Screenshot
            </figcaption>
          </figure>
          <figure>
            <img
              src={portfolioPhoneScreenshot}
              alt="portfolio screenshot (phone)"
              className="win98-window"
            />
            <figcaption className="mt-1 text-sm">
              Portfolio Phone Screenshot
            </figcaption>
          </figure>
        </section>
        <br />
        <div>
          The inspiration for this project stems from the nostalgic, yet pillar,
          technology of their time.
        </div>
        <br />
        <figure className="mx-auto w-[60%]">
          <img
            src={ideaBoardScreenshot}
            alt="idea Board screenshot"
            className="win98-window"
          />
          <figcaption className="mt-1 text-sm">
            Idea Board Screenshot
          </figcaption>
        </figure>
        <br />
        <PROJECT_LINK_COMP
          url="arshia-naseri.com"
          img_src={cdLogo}
          text="Click 2 see the Website but You are Already on it ;)"
        />
        <br />
        <GITHUB_LINK_COMP url="https://github.com/arshia-naseri/portfolio" />
        <br />
        <FIGMA_LINK_COMP url="https://www.figma.com/design/AI8q3XtUCFU2XWjEpjBFl3/Portfolio-%F0%9F%92%BC?m=auto&t=ioEQFQqsU8UZ05bW-1" />
        <br />
        <section className="flex items-center gap-3">
          <img
            src={toolsLogo}
            alt="tools logo"
            className="aspect-auto w-10"
            loading="lazy"
          />
          <div className="boldTextFont text-xl">Tools</div>
        </section>
        <br />
        <div>React, JavaScript, CSS, HTML, Figma, Framer Motion</div>
      </Win98Window>
    </>
  );
};

const ProjectCarousel = () => {
  const floppyWidth = "25rem";
  return (
    <>
      <PrKavosh floppyWidth={floppyWidth} />
      <PrWeatherApp floppyWidth={floppyWidth} />
      <PrChessMastersAcademy floppyWidth={floppyWidth} />
      <PrPortfolio floppyWidth={floppyWidth} />
    </>
  );
};

export default ProjectCarousel;
