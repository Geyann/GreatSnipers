'use client';
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

// Imports (Ensure these paths are correct in your project)
import gian from "../assets/gian.png";
=======
import React, { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react';
import gian from "../assets/Gian.png";
>>>>>>> 117f25e080f26ba03f7da162f3cb5596af1ef94a
import joris from "../assets/joris.png";
import jerame from "../assets/jerame.png";
import jeramePopUp from "../assets/jeramePopUp.jpg";
import jorisPopUp from "../assets/joirsPopUp.png";
import gianPopUp from "../assets/gianPopUp.png";

const Cards = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    if (selectedMember) {
      const element = document.getElementById('details');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [selectedMember]);

  const members = [
    {
      name: "Gian Carlo Lintag",
      role: "Lead Developer",
      imageUrl: gian,
      popUpImage: gianPopUp,
      bio: "Architecting innovative digital solutions and driving strategic development for GreatSnipers.",
      skills: ['React', 'Node.js', 'Project Management', 'PHP', 'Mysql', 'Java', 'GIT', 'Tailwind CSS', 'Bootstrap'],
      socials: {
        Github: 'https://github.com/Geyann',
        Instagram: 'https://www.instagram.com/eyowwmi/',
        Telegram: 'https://t.me/Giannnlin',
        Facebook: 'https://www.facebook.com/carlo.lintag.1'
      },
      academicBackground: {
        degree: 'Bachelor of Science in Information Technology',
        institution: 'Cavite State University - Naic Campus'
      }
    },
    {
      name: "Joris Fabi",
      role: "UI/UX Designer",
      imageUrl: joris,
      popUpImage: jorisPopUp,
      bio: "Crafting intuitive user experiences through meticulous interface design and high-fidelity prototyping.",
      skills: ['UI/UX Design', 'Figma', 'Adobe XD', 'Prototyping'],
      socials: {
        github: '#'
      },
      academicBackground: {
        degree: 'Bachelor of Science in Information Technology',
        institution: 'Cavite State University - Naic Campus'
      }
    },
    {
      name: "Jerame Labid",
      role: "Documentation",
      imageUrl: jerame,
      popUpImage: jeramePopUp,
      bio: "Specialist in synthesizing complex technical concepts into clear, comprehensive, and structured documentation.",
      skills: ['Documentation', 'Technical Writing', 'Content Strategy'],
      socials: {
        Instagram: '#',
        Github: '#',
        Telegram: '#',
        Facebook: '#'
      },
      academicBackground: {
        degree: 'Bachelor of Science in Information Technology',
        institution: 'Cavite State University - Naic Campus'
      }
    },
  ];

  return (
    <div id="About-Us" className="py-20">
      <div className="grid grid-cols-1 gap-30 pb-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-15 lg:m-15">
        <div className="col-span-full">
          <h2 className="text-center font-semibold text-white sm:text-5xl">Members:</h2>
        </div>

        {members.map((member, index) => (
          <div key={index} className="container" onClick={() => setSelectedMember(member)}>
            <div className="canvas w-80 h-90">
              {[...Array(25)].map((_, i) => (
                <div key={i} className={`tracker tr-${i + 1}`} />
              ))}
              <div
                id="card"
                style={{
                  backgroundImage: `url(${member.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="title">{member.name}</div>
                <div className="subtitle">{member.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="px-10 pt-25 text-white animate-in fade-in duration-500" id="details">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src={selectedMember.popUpImage}
              className="w-full md:w-1/3 rounded-xl object-cover shadow-lg"
              alt={selectedMember.name}
            />

            <div className="flex-1">
              <h3 className="text-3xl font-bold">{selectedMember.name}</h3>
              <p className="text-indigo-400 text-lg mb-4">{selectedMember.role}</p>
              <p className="text-white leading-relaxed mb-4">{selectedMember.bio}</p>
              <span className="block text-sm text-gray-400 mb-2">
                {selectedMember.academicBackground.degree}  
              </span>
              <span className="block text-sm text-gray-400 mb-6"> {selectedMember.academicBackground.institution}</span>
           

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white">Skills:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedMember.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-indigo-300 border border-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white">Socials:</h4>
                  <div className="flex gap-4 mt-2">
                    {Object.entries(selectedMember.socials).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-indigo-400 transition capitalize"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedMember(null)}
                className="mt-8 px-6 py-2 bg-gray-800 rounded-lg hover:bg-indigo-500 transition text-sm font-semibold"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
