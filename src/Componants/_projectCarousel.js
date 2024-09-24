import FloppyDisk from "./_floppyDisk";
import Win98Window from "./_win98Window";

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
        />
        <Win98Window id="Kavosh-Dialog" windowTitle="Kavosh">
          <div>Hello Kavosh</div>
        </Win98Window>
      </>
    </>
  );
};

export default ProjectCarousel;
