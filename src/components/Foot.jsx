import React from 'react';

const Foot = () => {
  return (
    <footer className="text-white py-12">
      <div className="max-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-indigo-400">GreatSnipers</h2>
            <p className="mt-4 text-gray-400 text-sm ">
              Building clean, accessible web solutions for the next generation.
            </p>
          </div>

          {/* Links Sections */}
          <div className='grid grid-cols-3 gap-40'>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Solutions</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Marketing</a></li>
              <li><a href="#" className="hover:text-white transition">Analytics</a></li>
              <li><a href="#" className="hover:text-white transition">Commerce</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Guides</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Claim</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
            </ul>
          </div>
        </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; 2026 GreatSnipers Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Replace with actual Icon components (e.g., Lucide or FontAwesome) */}
            <span className="text-gray-400 hover:text-white cursor-pointer transition">FB</span>
            <span className="text-gray-400 hover:text-white cursor-pointer transition">IG</span>
            <span className="text-gray-400 hover:text-white cursor-pointer transition">X</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foot;