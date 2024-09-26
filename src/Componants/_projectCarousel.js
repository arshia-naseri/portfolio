import FloppyDisk from "./_floppyDisk";
import Win98Window from "./_win98Window";

// Images
import worldChampionPic from "../Assets/images/world-champion.jpeg";
import superTeamPic from "../Assets/images/super-team.jpeg";
import bestPresentaitionPic from "../Assets/images/best-presentation.jpeg";

// Logos
import certificateLogo from "../Assets/images/certificate-logo.webp";
import toolsLogo from "../Assets/images/tools-logo.webp";

/* 
    FloppyDisk Atrr:
        - floppyColor: String 
        - lineColor: String
        - width: String
        - windowID: String (Must be equal to wind98Window's id)
    
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
          {/* image */}
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
            />
            <div className="boldTextFont text-xl">Certificates</div>
          </section>
          <br />
          <section className="flex w-full gap-2">
            {/* World Champion Award */}
            <figure className="flex-1">
              <img
                src={worldChampionPic}
                alt="world championship certificate"
                className="w-full"
              />
              <figcaption className="text-[.7rem]">
                World Champion award for individual team RoboCup Nagoya Japan
                2017
              </figcaption>
            </figure>

            {/* Best Presentation Award */}
            <figure className="flex-1">
              <img
                src={bestPresentaitionPic}
                alt="Best Presentation certificate"
                className="w-full"
              />
              <figcaption className="text-[.7rem]">
                Best Presentation of work RoboCup Nagoya Japan 2017
              </figcaption>
            </figure>

            {/* Super Team Award */}
            <figure className="flex-1">
              <img
                src={superTeamPic}
                alt="Super Team certificate"
                className="w-full"
              />
              <figcaption className="text-[.7rem]">
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
    </>
  );
};

export default ProjectCarousel;
