import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { phonetBtnClick } from "../Componants/_globalFunc.ts";

const Navbar = ({
  navBarRef,
  mainSectionRef,
  projectsSectionRef,
  aboutSectionRef,
  arcadeSectionRef,
}) => {
  const { scrollY } = useScroll();
  const colorVCR = "rgb(29, 31, 34)";
  const colorMainWhite = "rgb(240, 234, 214)";
  const textShadowWidth = "1px";

  const isMainPageInView = useInView(mainSectionRef, {
    margin: "-20% 0px -40% 0px",
  });
  const isProjectPageInView = useInView(projectsSectionRef, {
    margin: "-20% 0px -40% 0px",
  });
  const isAboutPageInView = useInView(aboutSectionRef, {
    margin: "-20% 0px -40% 0px",
  });
  const isArcadePageInView = useInView(arcadeSectionRef, {
    margin: "-10% 0px -40% 0px",
  });

  const rotate = useTransform(
    scrollY,
    [0, document.documentElement.scrollHeight * 0.2],
    [0, 90],
  );
  const translateX = useTransform(
    scrollY,
    [0, document.documentElement.scrollHeight * 0.2],
    [0, 10],
  );
  const color = useTransform(
    scrollY,
    [0, document.documentElement.scrollHeight * 0.2],
    [colorMainWhite, colorVCR],
  );

  const fontSize = useTransform(
    scrollY,
    [0, document.documentElement.scrollHeight * 0.2],
    ["1.25rem", "1rem"],
  );

  const textShadowVCR = `${textShadowWidth} 0 ${colorVCR},
        -${textShadowWidth} 0 ${colorVCR},
        0 ${textShadowWidth} ${colorVCR},
        0 -${textShadowWidth} ${colorVCR}`;

  const textShadowMainWhite = `${textShadowWidth} 0 ${colorMainWhite},
        -${textShadowWidth} 0 ${colorMainWhite},
        0 ${textShadowWidth} ${colorMainWhite},
        0 -${textShadowWidth} ${colorMainWhite}`;

  return (
    <>
      <motion.ul
        ref={navBarRef}
        onClick={() => console.log(isProjectPageInView)}
        className="text-red fixed z-10 ml-8 mt-8 flex origin-top-left justify-evenly gap-3 font-vcr text-xl tracking-[.3rem] text-mainWhite blur-[.6px] transition-all"
        style={{ rotate, translateX, color, fontSize }}
      >
        <li
          onClick={() =>
            mainSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="noHighlightClicked cursor-pointer stroke-red-600 stroke-[3px] shadow-mainWhite"
          style={{
            textShadow: isMainPageInView ? textShadowMainWhite : "none",
          }}
          {...phonetBtnClick}
        >
          TITLE
        </li>
        <li>|</li>
        <li
          onClick={() =>
            projectsSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="noHighlightClicked cursor-pointer"
          style={{
            textShadow: isProjectPageInView ? textShadowVCR : "none",
          }}
          {...phonetBtnClick}
        >
          PROJECTS
        </li>
        <li>|</li>
        <li
          onClick={() =>
            aboutSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="noHighlightClicked cursor-pointer"
          style={{
            textShadow: isAboutPageInView ? textShadowVCR : "none",
          }}
          {...phonetBtnClick}
        >
          ABOUT ME
        </li>
        <li>|</li>
        <li
          onClick={() =>
            arcadeSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="noHighlightClicked cursor-pointer"
          style={{
            textShadow: isArcadePageInView ? textShadowVCR : "none",
          }}
          {...phonetBtnClick}
        >
          ARCADE
        </li>
      </motion.ul>
    </>
  );
};

export default Navbar;
