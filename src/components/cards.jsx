'use client';
import React, { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react';
import gian from "../assets/Gian.png";
import joris from "../assets/joris.png";
import jerame from "../assets/jerame.png";
import jeramePopUp from "../assets/jeramePopUp.jpg"
import jorisPopUp from "../assets/joirsPopUp.png"
import gianPopUp from "../assets/gianPopUp.png"


const Cards = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    { name: "Gian Carlo Lintag", role: "Lead Developer", imageUrl: gian, popUpImage: gianPopUp, bio: "The visionary behind GreatSnipers, leading strategic growth." },
    { name: "Joris Fabi", role: "UI/UX Designer", imageUrl: joris, popUpImage: jorisPopUp, bio: "Architect of our technical infrastructure and innovation." },
    { name: "Jerame Labid", role: "Documentation", imageUrl: jerame, popUpImage: jeramePopUp, bio: "Expert in building scalable and accessible user interfaces." },
  ];

  return (
    <div className="grid grid-cols-1 gap-30 md:grid-cols-2 lg:grid-cols-3 lg:gap-15 lg:m-15 py-30" id="About-Us">
      <div className="col-span-full">
        <h2 className="text-center font-semibold text-white sm:text-5xl">Members:</h2>
        <p className="text-center mt-2 text-lg/8 text-gray-400"></p>
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

      {/* Popup Modal */}
      <Dialog open={!!selectedMember} onClose={() => setSelectedMember(null)} className=" relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/70" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="max-w-sm w-full bg-black  p-8 rounded-2xl border border-gray-700 text-white">
            <img src={selectedMember?.popUpImage} className='rounded-xl' />
            <DialogTitle className="text-2xl font-bold">{selectedMember?.name}</DialogTitle>
            <p className="text-indigo-400 mb-4">{selectedMember?.role}</p>
            <p className="text-gray-300">{selectedMember?.bio}</p>
            <button 
              className="cursor-none mt-6 w-full py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition"
              onClick={() => setSelectedMember(null)}
            >
              Close
            </button>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default Cards;
