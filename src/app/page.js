'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  // State to control the visibility of the projects dropdown menu
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  // Ref for the dropdown container to handle mouse events
  const dropdownRef = useRef(null);
  // Timeout ref to manage the delay before closing
  const timeoutRef = useRef(null);

  // Function to handle mouse enter on dropdown
  const handleMouseEnter = () => {
    // Clear any existing timeout to prevent the dropdown from closing
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowProjectsDropdown(true);
  };

  // Function to handle mouse leave with a delay
  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown after a delay to allow for some movement gap
    timeoutRef.current = setTimeout(() => {
      setShowProjectsDropdown(false);
    }, 100); // 100ms delay before closing
  };

  // Cleanup effect for the timeout
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    // Main container with dark blue background and light text
    <div className="flex flex-col items-start min-h-screen p-5 space-y-10 w-full bg-[#0D1B2A] text-gray-100">
      {/* Header section with logo and navigation */}
      <div className="flex justify-between items-center w-full">
        {/* Logo/brand mark with hover effect */}
        <h2 className="text-xl font-semibold border-4 border-[#FFFDD0] p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300">DX</h2>
        
        {/* Navigation buttons */}
        <div className="flex gap-4">
          {/* Projects dropdown with improved hover functionality */}
          <div 
            className="relative" 
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="text-xl font-semibold border-4 border-[#FFFDD0] p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300"
            >
              Projects
            </button>
            {/* Dropdown menu with improved hover behavior */}
            {showProjectsDropdown && (
              <div 
                className="absolute top-full right-0 mt-1 bg-[#0D1B2A] border-4 border-[#FFFDD0] w-40 z-10"
              >
                {/* Project links in dropdown */}
                <Link href="/projects/project1">
                  <div className="p-2 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300 cursor-pointer">Project 1</div>
                </Link>
                <Link href="/projects/project2">
                  <div className="p-2 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300 cursor-pointer">Project 2</div>
                </Link>
                <Link href="/projects/project3">
                  <div className="p-2 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300 cursor-pointer">Project 3</div>
                </Link>
              </div>
            )}
          </div>
          {/* Resume navigation button */}
          <Link href="/resume">
            <button className="text-xl font-semibold border-4 border-[#FFFDD0] p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300">
              Resume
            </button>
          </Link>
          {/* About navigation button */}
          <Link href="/about">
            <button className="text-xl font-semibold border-4 border-[#FFFDD0] p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300">
              About
            </button>
          </Link>
        </div>
      </div>
      
      {/* Main content section */}
      <main className="flex flex-col gap-4 items-start w-full">
        {/* User name/title */}
        <h2 className="text-4xl font-semibold">Danny Xu</h2>
        {/* Portfolio grid container */}
        <div className="portfolio w-full">
          {/* Project grid with responsive columns (1 on mobile, 2 on tablet, 3 on desktop) */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Project 1 card */}
            {/* REMINDER: Use &apos; instead of ' for apostrophes in JSX text */}
            <Link href="/projects/project1/" className="block w-full h-full">
              <li className="p-4 border-4 border-[#FFFDD0] shadow hover:shadow-lg transition-shadow hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300 cursor-pointer min-h-[200px] flex flex-col justify-start">
                <h3 className="text-3xl font-semibold mb-2">Project 1</h3>
                <p className="text-2xl text-gray-600">Put a description here</p>
              </li>
            </Link>
            {/* Project 2 card */}
            {/* REMINDER: Use &apos; instead of ' for apostrophes in JSX text */}
            <Link href="/projects/project2/" className="block w-full h-full">
              <li className="p-4 border-4 border-[#FFFDD0] shadow hover:shadow-lg transition-shadow hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300 cursor-pointer min-h-[200px] flex flex-col justify-start">
                <h3 className="text-3xl font-semibold mb-2">Project 2</h3>
                <p className="text-2xl text-gray-600">Put a description here</p>
              </li>
            </Link>
            {/* Project 3 card */}
            {/* REMINDER: Use &apos; instead of ' for apostrophes in JSX text */}
            <Link href="/projects/project3/" className="block w-full h-full">
              <li className="p-4 border-4 border-[#FFFDD0] shadow hover:shadow-lg transition-shadow hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300 cursor-pointer min-h-[200px] flex flex-col justify-start">
                <h3 className="text-3xl font-semibold mb-2">Project 3</h3>
                <p className="text-2xl text-gray-600">Put a description here</p>
              </li>
            </Link>
          </ul>
        </div>
      </main>
    </div>
  );
}
