import React from 'react';
import imglogo from '../assets/dark-mode-logo.png';

const links = [
  { name: 'Open roles', href: '#roles' },
  { name: 'Internship program', href: '#internship' },
  { name: 'Our values', href: '#values' },
  { name: 'Meet our leadership', href: '#leadership' },
];

const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
];

const Title = () => {
  return (
    <div className="relative items-center isolate overflow-hidden py-24 sm:py-32 " id="Home">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Content */}
        <div className="flex flex-col items-center max-w-2xl mx-auto mb-16">
          <img src={imglogo} alt="Logo" className="h-25" />
          <h1 className="text-4xl text-center lg:text-6xl font-bold tracking-tight text-white">
            WE BUILD THE FUTURE
          </h1>
          <h1 className="text-4xl text-center lg:text-6xl font-bold tracking-tight text-white">
            <span className="text-change">
              <span className="gradient-text">GREAT SNIPERS</span>
              <span className="gradient-text">ACTIVE SNIPERS</span>
              <span className="gradient-text">LEGEND SNIPERS</span>
              </span>
          </h1>
          <h2 className="mt-6 text-xl md:text-2xl text-gray-300 text-center">
            Building clean, accessible web solutions for the next generation
          </h2>
          
        
        </div>

      </div>
    </div>
  );
};

export default Title;