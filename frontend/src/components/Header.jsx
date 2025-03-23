import React from 'react';
import {ThemeBtn} from './index.js'

function Header() {
  return (
    <div className="flex items-center justify-between p-4 bg-[var(--primary-color)] shadow-md">
      <div className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="Todo Logo"
          className="w-12 h-12 sm:w-16 sm:h-16"
        />
        <h1 className="text-xl sm:text-2xl font-bold text-[var(--secondary-color)]">
          Samba
        </h1>
      </div>
      <div>
        <ThemeBtn/>
      </div>
    </div>
  );
}

export default Header;