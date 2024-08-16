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
        className=" mt-8 ml-8 flex justify-evenly blur-[.6px] z-10 gap-3 fixed font-vcr text-xl text-mainWhite tracking-[.3rem] transition-all"
      >
        <li
          onClick={() =>
            mainSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="noHighlightClicked cursor-pointer shadow-mainWhite stroke-red-600 stroke-[3px]"
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
