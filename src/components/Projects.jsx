import React from "react";
import NameThatTune from "../assets/NameThatTune.png";
import MusicAndMemories from "../assets/MusicAndMemories.png";
import PotionMaster from "../assets/PotionMaster.png";
import MoodBoost from "../assets/MoodBoost.png";

const Projects = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-black-300 bg-[#d9baee] pb-40"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div className="py-10">
          <p className="text-4xl font-bold inline border-b-4 text-black-300 border-[#f3e0ff] ">
            My Projects
          </p>
          {/* <p className="py-10">Check out some of my recent projects!</p> */}
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item 1 - Name That Tune */}
          <div
            style={{ backgroundImage: `url(${NameThatTune})` }}
            className="shadow-lg shadow-[#5f3f74] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects Below */}

            <div className="opacity-0 group-hover:opacity-100 text-center p-4">
              <span className="text-center text-1xl font-bold text-black tracking-whiter">
                Technologies Used: HTML, CSS, and JavaScript
              </span>
              <div className="pt-8 text-center">
                <a href="https://nicbrou.github.io/Name-That-Tune/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-md">
                    See Application
                  </button>
                </a>
                <a href="https://github.com/nicbrou/Name-That-Tune">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-md">
                    Application Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item 2 - Music and Memories */}
          <div
            style={{ backgroundImage: `url(${MusicAndMemories})` }}
            className="shadow-lg shadow-[#5f3f74] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects Below */}

            <div className="opacity-0 group-hover:opacity-100 text-center p-4">
              <span className="text-center text-1xl font-bold text-black tracking-whiter">
                Technologies Used: Spotify API,Node.js, Express, MongoDB
              </span>
              <div className="pt-8 text-center">
                <a href="https://music-and-memories-sei48.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-md">
                    See Application
                  </button>
                </a>
                <a href="https://github.com/nicbrou/Music-And-Memories">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-md">
                    Application Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item 3 - Potion Master  */}
          <div
            style={{ backgroundImage: `url(${PotionMaster})` }}
            className="shadow-lg shadow-[#5f3f74] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects Below */}

            <div className="opacity-0 group-hover:opacity-100 text-center p-4">
              <span className="text-center text-1xl font-bold text-black tracking-whiter">
                Technologies Used: HTML, CSS, JavaScript, Python, NoSQL,
                Materialize, and Django
              </span>
              <div className="pt-8 text-center">
                <a href="https://potionnmasterr.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-md">
                    See Application
                  </button>
                </a>
                <a href="https://github.com/Runite-Drill/potionmaster">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-md">
                    Application Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item 4 - Mood Boost  */}
          <div
            style={{ backgroundImage: `url(${MoodBoost})` }}
            className="shadow-lg shadow-[#5f3f74] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects Below */}

            <div className="opacity-0 group-hover:opacity-100 text-center p-4">
              <span className="text-center text-1xl font-bold text-black tracking-whiter">
                Technologies Used: React, Node.js, Express.js, HTML, CSS,
                JavaScript, Mongoose, Bootstrap
              </span>
              <div className="pt-8 text-center">
                <a href="https://moodboosted.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-md">
                    See Application
                  </button>
                </a>
                <a href="https://github.com/natetmmueller/Mood-Boost">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-md">
                    Application Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
