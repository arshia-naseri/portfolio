import FloppyDisk from "./_floppyDisk";
import Win98Window from "./_win98Window";
import { urlLink } from "./_globalFunc";

// Images
import worldChampionPic from "../Assets/images/world-champion.jpeg";
import superTeamPic from "../Assets/images/super-team.jpeg";
import bestPresentaitionPic from "../Assets/images/best-presentation.jpeg";
import weatherAppScreenshot from "../Assets/images/weather-app-screenshot.jpeg";

// Logos
import certificateLogo from "../Assets/logos/certificate-logo.webp";
import toolsLogo from "../Assets/logos/tools-logo.webp";
import FigmaLogo from "../Assets/logos/figma-logo.webp";
import weatherLogo from "../Assets/logos/weather-logo.webp";
import githubLogo from "../Assets/logos/github-logo.webp";

/* 
    FloppyDisk Atrr:
        - floppyColor: String 
        - lineColor: String
        - width: String
        - windowID: String (Must be equal to wind98Window's id !!!)
        - summaryText: String (It is also added in children part of Window98Window)
    
    Win98Window Attr: 
        -id: String
        -windowTitle: String 
*/

const ProjectCarousel = () => {
  const floppyWidth = "25rem";
  return (
    <>
      {/* Kavosh */}
      <>
        <FloppyDisk
          floppyColor={"bg-red-400"}
          lineColor={"border-b-red-300"}
          width={floppyWidth}
          diskTitle="Kavosh"
          windowID="Kavosh-Dialog"
          summaryText="Kavosh Robotics Team is one of the best junior robotics teams in the world. Kavosh has multiple honours in Germany, China, Brazil, Netherlands, Mexico and many first-place awards in Junior Rescue Leagues of Robocup 2019 Australia, 2018 Canada, and 2017 Japan."
        />
        <Win98Window id="Kavosh-Dialog" windowTitle="Kavosh">
          {/* Summary Text */}
          <div>
            Kavosh Robotics Team is one of the best junior robotics teams in the
            world. Kavosh has multiple honours in Germany, China, Brazil,
            Netherlands, Mexico and many first-place awards in Junior Rescue
            Leagues of Robocup 2019 Australia, 2018 Canada, and 2017 Japan.
          </div>
          <br />
          <div>
            During my time as a high school student, I decided to join a
            renounce robotics team with many national and international awards
            and trophies to expand my knowledge of robotics and programming. I
            learned so much, not just in the technical field but also in
            transferable skills which have been detrimental to my day-to-day
            life.
          </div>
          {/* Robot image */}
          <br />
          <div>
            After a long night of coding and debugging and many burned
            resistors, we managed to earn multiple first-place awards at the
            national and also international level in Nagoya Japan 2017 Robocup.
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
                World Champion award for individual team RoboCup Nagoya Japan
                2017
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
                World Championship award for SuperTeam RoboCup Nagoya Japan
                2017. Collaboration of teams from various countries.
              </figcaption>
            </figure>
          </section>
          <br />
          <div>
            The purpose of the robots was to rescue injured victims using many
            different methods such as colour detection, heat detection,
            algorithm mapping, computer vision and compass navigation.
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
      {/* Weather App */}
      <>
        <FloppyDisk
          floppyColor={"bg-blue-400"}
          lineColor={"border-b-blue-300"}
          width={floppyWidth}
          diskTitle="Weather App"
          windowID="WeatherApp-Dialog"
          summaryText="My aim was to craft a charming weather application that seamlessly integrates API requests and leverages React to showcase locations that hold personal significance to me, aptly labeled as 'Residences.'"
        />
        <Win98Window id="WeatherApp-Dialog" windowTitle="Weather App">
          <div>
            In this pet project, my aim was to craft a charming weather
            application that seamlessly integrates API requests and leverages
            React to showcase locations that hold personal significance to me,
            aptly labeled as "Residences"
          </div>
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
            across various devices, boasting distinct designs tailored for
            phones, laptops, and tablets. You can even explore the envisioned
            design through the provided Figma link
          </div>
          <br />
          <div>
            (P.S. This project used to be hosted by Heroku, however since the
            free version was slow, later free tier removed, it was moved to
            GitHub pages)
          </div>
          <br />
          <div>
            With free trial of the api account, there could be only limited
            amounts of requests in 24-hour period. Thus the program has access
            to 3 different account which the program switches between to get a
            result
          </div>
          <br />
          {/* Website */}
          <section className="flex items-center gap-3">
            <img
              src={weatherLogo}
              loading="lazy"
              alt="weather logo"
              className="w-10"
            />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://arshia-naseri.github.io/weather-app/"
              className="text-url underline"
              {...urlLink}
            >
              Click 2 see the Website
            </a>
          </section>
          <br />
          {/* Figma */}
          <section className="flex items-center gap-3">
            <img
              src={FigmaLogo}
              loading="lazy"
              alt="figma logo"
              className="w-8"
            />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.figma.com/design/YWbyzjhQV0NlmX0LLmnC1y/Weather-App"
              className="text-url underline"
              {...urlLink}
            >
              Click 2 see Figma Design
            </a>
          </section>
          <br />
          {/* Github */}
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
              href="https://github.com/arshia-naseri/weather-app"
              className="text-url underline"
              {...urlLink}
            >
              Click 2 see Github Repository
            </a>
          </section>
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
    </>
  );
};

export default ProjectCarousel;
