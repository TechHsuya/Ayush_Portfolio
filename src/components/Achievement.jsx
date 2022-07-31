import React from "react";
import qwiklab from "../assets/qwiklab.jpg";
import nda from "../assets/nda.jpg";
import jax from "../assets/jax.jpg";
import safaiwale from "../assets/safaiwala.jpg";


const Achievement = () => {
  const techs = [
    {
      id: 1,
      src: nda,
      title: "Cleared NDA exam and faced 5 day NDA Airforce SSB",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: qwiklab,
      title: "Got hands on experience on Google Cloud and earned some skill badges",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: jax,
      title: "Volunteeed at JAX Foundation",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: safaiwale,
      title: "Created team with some friends known as Team Safaiwala and started cleanliness drive in our locality",
      style: "shadow-blue-500",
    }
  ];

  return (
    <div
      name="achievement"
      className=" bg-gradient-to-b from-gray-900 to-black w-full h-1000 flex space-x-4 "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-1 inline">
            Achievement
          </p>
          <p className="py-6">Some of my Achievements</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-21 h-25 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};






export default Achievement;
