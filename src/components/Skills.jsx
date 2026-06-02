'use client';
import React from 'react';
import React1 from "../assets/reacticon.png"


const skills = [
  { name: 'REACT.JS'},
  { name: 'TAILWIND CSS'},
  { name: 'JAVASCRIPT'},
  { name: 'NODE.JS' },
  { name: 'GIT'},
  { name: 'HTML5'},
  { name: 'CSS 3'},
  { name: 'PHP'},
  { name: 'JAVA'},
];

const Skills = () => {
  return (
    <div className="w-full py-40  overflow-hidden" id="Skills">
      <h2 className="text-center  text-3xl font-bold text-white mb-10">Skills</h2>
      
      {/* Carousel Container */}
      <div className="flex bg-black overflow-hidden relative p-10">
        <div className="flex animate-marquee gap-16 whitespace-nowrap px-10">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center min-w-[120px]">
              <div className="text-5xl">
                <img src={skills.imageUrl} alt="" />
              </div>
              <span className="text-white mt-2 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;