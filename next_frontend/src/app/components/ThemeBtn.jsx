"use client"
import React, { useState, useEffect } from 'react';

function ThemeBtn() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(()=>{
    const theme = JSON.parse(localStorage.getItem('todo'));
    if(theme) setIsDarkTheme(theme)
  },[])
  useEffect(() => {
        localStorage.setItem('todo',JSON.stringify(isDarkTheme))
        document.documentElement.classList.toggle('dark', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <label className="relative inline-block w-20 h-8">
      <input
        type="checkbox"
        className="sr-only"
        checked={isDarkTheme}
        onChange={handleToggle}
      />
      <div
        className={`absolute inset-0 rounded-full transition-colors duration-300 ${
          isDarkTheme ? 'bg-[var(--powerful-color)]' : 'bg-[var(--secondary-color)]'
        }`}
      >
        <span
          className={`absolute text-xs font-semibold ${
            isDarkTheme ? 'text-[var(--primary-color-dark)] left-2' : 'text-[var(--primary-color-dark)] right-2'
          } top-2`}
        >
          {isDarkTheme ? 'Dark' : 'Light'}
        </span>
        <div
          className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isDarkTheme ? 'translate-x-12' : 'translate-x-1'
          } top-1`}
        />
      </div>
    </label>
  );
}

export default ThemeBtn;