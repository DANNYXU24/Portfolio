'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function About() {
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
        {/* Logo/brand mark with link to homepage */}
        <Link href="/">
          <h2 className="text-xl font-semibold border-3 border-[#FFFDD0] p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300 cursor-pointer">DX</h2>
        </Link>
        
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
              className="text-xl font-semibold border-3 border-[#FFFDD0] p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300"
            >
              Projects
            </button>
            {/* Dropdown menu with improved hover behavior */}
            {showProjectsDropdown && (
              <div 
                className="absolute top-full right-0 mt-1 bg-[#0D1B2A] border-3 border-[#FFFDD0] w-40 z-10"
              >
                {/* Project links in dropdown with bold text on hover */}
                <Link href="/projects/project1">
                  <div className="p-2 hover:bg-[#28FFE5] hover:text-[#0D1B2A] hover:font-bold transition-all duration-300 cursor-pointer">SD Bike Coalition</div>
                </Link>
                <Link href="/projects/project2">
                  <div className="p-2 hover:bg-[#28FFE5] hover:text-[#0D1B2A] hover:font-bold transition-all duration-300 cursor-pointer">Inch Scale Design</div>
                </Link>
                <Link href="/projects/project3">
                  <div className="p-2 hover:bg-[#28FFE5] hover:text-[#0D1B2A] hover:font-bold transition-all duration-300 cursor-pointer">Project 3</div>
                </Link>
              </div>
            )}
          </div>
          {/* Resume navigation button */}
          <Link href="/resume">
            <button className="text-xl font-semibold border-3 border-[#FFFDD0] p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300">
              Resume
            </button>
          </Link>
          {/* About navigation button - currently active */}
          <Link href="/about">
            <button className="text-xl font-semibold border-3 border-[#FFFDD0] p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300">
              About
            </button>
          </Link>
        </div>
      </div>
      
      {/* Main content section - make sure this maintains the same spacing as homepage */}
      <main className="flex flex-col gap-4 items-start w-full">
        {/* Page title - similar position to "Danny Xu" on homepage */}
        <h1 className="text-5xl font-semibold mb-6">About Me</h1>
        
        {/* About content with border */}
        <div className="bg-[#0D1B2A] custom-dashed-border shadow-md p-6 mb-6 w-full">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile image placeholder */}
            <div className="w-full md:w-1/3 bg-gray-400 aspect-square flex items-center justify-center text-gray-700 font-bold">
              PROFILE IMAGE
            </div>
            
            {/* About text content (&apos;) */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4 text-[#d0d2ff]">Danny Xu</h2>
              <p className="mb-4">
                I&apos;m a UI/UX designer from San Francisco.
              </p>
              <p className="mb-4">
                My journey in UI/UX design started at UCSD, where I am currently earning my degree in Cognitive Science with specialization in Design and Interaction. I have a design ethos that embodies the essence of an Oasis: Optimal functionality, Addictive engagement, Simple interaction, Intuitive usability, Satisfying outcomes.
              </p>
              <p className="mb-4">
                During my free time, I enjoy watching sports, my favorite teams being the Warriors, SF Giants, 49ers, and Manchester United. My other interests lie in playing games and learning languages. In addition to my B.S. in Cognitive Science, I am also working towards a B.A. in Language Studies, specifically for French.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}