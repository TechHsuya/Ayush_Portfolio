import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-500 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          A dedicated software developer who is patient, a team player, and a
          quick learner, and an attentive listener. Love to work in the field of
          cloud computing (AWS) and web development, have a keen interest in
          networking field, and also open to exploring new technical fields. I
          enjoy playing football, and during my time in school I have leaded (vice captain)
          our squad at regional competitions. I participated in the NDA SSB
          (Conference Out), where I had to go through a 5-day selection process
          for the Air Force.
        </p>

        <br />

        <p className="text-xl"></p>
      </div>
    </div>
  );
};

export default About;
