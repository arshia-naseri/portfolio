import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = ({
  navBarRef,
  mainSectionRef,
  projectsSectionRef,
  aboutSectionRef,
  arcadeSectionRef,
}) => {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 3360 * 0.2], [0, 90]);
  const translateX = useTransform(scrollY, [0, 3360 * 0.2], [0, 10]);
  const color = useTransform(
    scrollY,
    [0, 3360 * 0.2],
    ["rgb(240, 234, 214)", "rgb(29, 31, 34)"],
  );

  return (
    <>
      <motion.ul
        ref={navBarRef}
        onClick={() => console.log(translateX.current)}
        // id="DesktopNavBar"
        className="text-red fixed z-10 ml-8 mt-8 flex origin-top-left justify-evenly gap-3 font-vcr text-xl tracking-[.3rem] text-mainWhite blur-[.6px] transition-all"
        style={{ rotate, translateX, color }}
      >
        <li
          onClick={() =>
            mainSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="noHighlightClicked cursor-pointer stroke-red-600 stroke-[3px] shadow-mainWhite"
        >
          TITLE
        </li>
        <li>|</li>
        <li
          onClick={() =>
            projectsSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="noHighlightClicked cursor-pointer"
        >
          PROJECTS
        </li>
        <li>|</li>
        <li
          onClick={() =>
            aboutSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="noHighlightClicked cursor-pointer"
        >
          ABOUT ME
        </li>
        <li>|</li>
        <li
          onClick={() =>
            arcadeSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="noHighlightClicked cursor-pointer"
        >
          ARCADE
        </li>
      </motion.ul>
    </>
  );
};

export default Navbar;
