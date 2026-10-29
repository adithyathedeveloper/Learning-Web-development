import React from 'react';

const Navbar = () => {
  return (
    <nav className="
      navbar
      w-full
      min-h-16 sm:min-h-18
      bg-black text-white
      flex items-center
      px-4 sm:px-8 lg:px-12
      shadow-md
    ">

      {/* Logo */}
      <div className="logoname flex items-center">
        <a
          href="/"
          aria-label="A_Task home"
          className="
            font-mono
            font-extrabold
            text-2xl sm:text-3xl
            tracking-tight
            cursor-pointer
            select-none
            transition-transform duration-200
            hover:scale-105
          "
        >
          A<span className="text-blue-400">_</span>Task
        </a>
      </div>

      {/* Decorative accent */}
      <div className="ml-auto flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-blue-400"></span>
        <span className="font-mono text-xs sm:text-sm text-gray-400">
          Stay on track.
        </span>
      </div>

    </nav>
  );
};

export default Navbar;