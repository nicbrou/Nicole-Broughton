import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#d9baee] text-black">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="lg:text-left sm:text-left text-4xl font-bold inline border-b-4 border-[#f3e0ff]">
            About
          </p>
        </div>

        <div>
          <p className="py-10">
            I graduated from the Software Engineering Immersive course at
            General Assembly in May 2022 and continue to build upon my skills.
            During my course at General Assembly, I gained hands-on coding
            experience by independently building a web-browser game with HTML,
            CSS and JavaScript, a music playlist organization application with a
            Spotify API, Node.js, Express, and MongoDB. I worked effectively in
            a group to create a project utilizing Python, NoSQL, Materialize and
            Django, and another group project using React. Other skills include
            Tailwind CSS and PostgreSQL.
          </p>
          <p>
            My diverse work experience in health care, music therapy, and music
            allowed me to develop my interpersonal and communication skills and
            the ability to work effectively within a team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
