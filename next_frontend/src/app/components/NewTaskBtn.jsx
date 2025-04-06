"use client"
import React from 'react'
import { UseFormVisibilityContext } from '../context'

function NewTaskBtn() {
    const {toggleInputForm} = UseFormVisibilityContext()
  return (
    <button 
      onClick={toggleInputForm} 
      className="fixed bottom-8 right-8 p-3 bg-[var(--powerful-color)] text-[var(--primary-color)] rounded-full shadow-lg hover:bg-[var(--secondary-color)] hover:text-[var(--powerful-color)] transition-all duration-300 flex items-center justify-center w-14 h-14 animate-pulse"
    >
      <span className="material-icons text-3xl">add</span>
    </button>
  )
}

export default NewTaskBtn