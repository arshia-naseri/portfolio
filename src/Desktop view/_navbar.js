const Navbar = ({
  navBarRef,
  mainSectionRef,
  projectsSectionRef,
  aboutSectionRef,
  arcadeSectionRef,
}) => {
  return (
    <>
      <ul
        ref={navBarRef}
        id="DesktopNavBar"
        className="fixed z-10 ml-8 mt-8 flex justify-evenly gap-3 font-vcr text-xl tracking-[.3rem] text-mainWhite blur-[.6px] transition-all"
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
      </ul>
    </>
  );
};

export default Navbar;
