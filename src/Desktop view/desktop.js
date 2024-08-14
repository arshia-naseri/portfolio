const Desktop = () => {
  return (
    <main className="">
      <ul className=" m-3 flex justify-evenly w-7/12 bg-cyan-200 fixed text-base">
        <li className=" font-bold cursor-pointer">TITLE</li>
        <li>|</li>
        <li className=" cursor-pointer">PROJECTS</li>
        <li>|</li>
        <li className=" cursor-pointer">ABOUT ME</li>
        <li>|</li>
        <li className=" cursor-pointer">ARCADE</li>
      </ul>
      <section>
        {/* Main Section */}
        <section className=" p-3 bg-red-200 h-screen">
          <section className=" bg-green-300 w-full h-full inline-flex flex-col">
            <nav className=" ml-auto bg-white">nav</nav>
            <section className=" mx-auto my-auto">ARSHIA</section>
            <section className=" bg-blue-500 flex justify-between">
              <div>↓</div>
              <section className=" flex flex-col items-end">
                <div>AM 12:24</div>
                <div>APR 14 2024</div>
              </section>
            </section>
          </section>
        </section>

        <section className=" p-3 bg-blue-200 h-screen">Projects</section>
        <section className=" p-3 bg-green-200 h-screen">About</section>
        <section className=" p-3 bg-orange-200 h-screen">Game</section>
      </section>
    </main>
  );
};

export default Desktop;
