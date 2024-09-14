import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = ({
  navBarRef,
  mainSectionRef,
  projectsSectionRef,
  aboutSectionRef,
  arcadeSectionRef,
}) => {
  const { scrollY } = useScroll();

  // Transform scroll position to rotate and translateY
  // Assuming 1000px is the height of the page for simplicity
  // Scroll progress will be 0 at the top and 1 at the bottom
  const rotate = useTransform(scrollY, [0, 1000 * 0.3], [0, 90]); // Rotate from 0 to 90 degrees
  const translateY = useTransform(scrollY, [0, 1000 * 0.25], [0, "-100%"]); // Translate Y from 0 to -100%
  return (
    <>
      <motion.ul
        ref={navBarRef}
        // id="DesktopNavBar"
        className="fixed z-10 ml-8 mt-8 flex justify-evenly gap-3 font-vcr text-xl tracking-[.3rem] text-mainWhite blur-[.6px] transition-all"
        style={{ rotate }}
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
