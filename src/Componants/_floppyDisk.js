import floppyTop from "../Assets/images/floppy-top.png";

const FloppyDisk = ({ floppyColor, lineColor, width }) => {
  return (
    <>
      <section
        style={{ width }}
        className=" flex flex-col ease-linear hover:cursor-pointer shrink-0"
      >
        <img
          alt="Floppy top"
          src={floppyTop}
          className=" border-none w-full translate-y-[1%]"
        />
        <section className="border-none aspect-[472.98/235] w-full flex relative bg-[rgb(29,31,34)] ">
          <section className=" bg-[rgb(29,31,34)] h-full flex-1"></section>
          <section className=" bg-[rgb(235,234,230)] h-full flex-grow-[7] basis-0 rounded-lg flex flex-col relative overflow-hidden">
            <section
              className={` ${floppyColor} w-full flex-1 px-4 flex justify-end items-center`}
            >
              <div className=" bg-[rgb(235,234,230)] w-3/5 h-fit rounded-xl p-0.5 text-xl text-center">
                Kavosh
              </div>
            </section>
            <section className=" border-none w-full flex-[2] relative h-full px-3 flex">
              <div
                className={` overflow-hidden text-sm font-thin w-11/12 leading-5 text-ellipsis line-clamp-4 mt-auto absolute top-[50%] -translate-y-[50%] bg-transparent `}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tincidunt blandit elementum. Nunc sit amet lorem ex.
                Duis a massa vel lorem feugiat ornare. Fusce porttitor rutrum
                luctus. Donec a arcu a tortor luctus venenatis et quis tellus.
                <div
                  className={`w-full top-0 absolute left-0 border-b-2 ${lineColor} -z-10 h-1/4`}
                />
                <div
                  className={`w-full top-1/4 absolute left-0 border-b-2 ${lineColor} -z-10 h-1/4`}
                />
                <div
                  className={`w-full top-2/4 absolute left-0 border-b-2 ${lineColor} -z-10 h-1/4`}
                />
                <div
                  className={`w-full top-3/4 absolute left-0 border-b-2 ${lineColor} -z-10 h-1/4`}
                />
              </div>
            </section>
          </section>
          <section className=" bg-[rgb(29,31,34)] h-full flex-1 flex">
            <div className=" aspect-[2/1.5] w-3 bg-mainWhite mx-auto mt-auto mb-[20%] rounded-sm"></div>
          </section>
        </section>
        <section className=" bg-[rgb(29,31,34)] aspect-[472.98/20] w-full -translate-y-[3%] rounded-b-xl"></section>
      </section>
    </>
  );
};

export default FloppyDisk;
