import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#180D49] text-white p-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Internship</div>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Features</a></li>
          <li><a href="#" className="hover:text-gray-300">Develop</a></li>
          <li><a href="#" className="hover:text-gray-300 relative">
            Community
          </a></li>
          <li><a href="#" className="hover:text-gray-300">Blog</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;