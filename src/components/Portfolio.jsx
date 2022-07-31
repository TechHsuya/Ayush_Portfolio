import React from "react";

import visualizer from "../assets/portfolio/visualizer.jpg";
import pneumonia from "../assets/portfolio/sample.png";
import food from "../assets/portfolio/food_website.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: visualizer,
      title: "Sorting Visualizer",
      
      callOnclick(){
        let a = document.createElement('a'); 
        a.href= "https://github.com/TechHsuya/SortingVisualizer";
      }
    },
    {
      id: 2,
      src: food,
      title: "Food Website",
      callOnclick(){
        let a = document.createElement('a'); 
        a.href= "https://github.com/TechHsuya/SortingVisualizer";
        
      }
    },
    {
      id: 3,
      src: pneumonia,
      title: "Pneumonia prediction using chest x-rays",
      
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, callOnclick }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onclick={callOnclick} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
