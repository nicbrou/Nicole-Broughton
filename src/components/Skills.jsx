import React from "react";
import html from "../assets/htmlLOGO.png";
import cssLOGO from "../assets/cssLOGO.png";
import JavaScript from "../assets/JavaScript.png";
import MongoDB from "../assets/MongoDB.png";
import Nodejs from "../assets/Node.js.png";
import Python from "../assets/Python.png";
import reacttt from "../assets/reacttt.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#d9baee] text-black-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto py-10 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#f3e0ff]">
            Skills
          </p>
          <p></p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-10">
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="HTML icon" />
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={cssLOGO} alt="CSS icon" />
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MongoDB} alt="MongoDB icon" />
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Nodejs} alt="Nodejs icon" />
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="Python icon" />
          </div>

          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={reacttt} alt="CSS icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
