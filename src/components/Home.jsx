import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#d9baee]">
      {/* Container */}
      <div className="text-left max-w-[1000px] mx-auto flex flex-col justify-center h-full px-4">
        <div>
          <p
            className="
          text-4xl
          font-bold
          inline
          border-b-4
          border-[#f3e0ff]"
          >
            Welcome
          </p>
        </div>
        {/* <h1 className="lg:text-7xl sm:text-4xl font-bold textShadow2">
          Welcome, my name is Nicole Broughton
        </h1> */}
        <div className="divide-y divide-solid divide-black">
          <h2 className="lg:text-3xl sm:text-1xl py-10 text-[#726a95] textShadow2">
            My name is Nicole Broughton. I am a creative and curious Software
            Developer dedicated to continuous improvement.
          </h2>

          <h2 className="text-[#726a95] lg:text-3xl sm:text-1xl textShadow2 text-center p-10">
            Scroll down to learn more!
          </h2>
        </div>

        <div>
          {/* <button className="p-3 text-[#0a192f] rounded bg-pink-500 shadow-md shadow-cyan-50/100">
            See Projects
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
