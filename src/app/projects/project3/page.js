'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Project3() {
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
          {/* About navigation button */}
          <Link href="/about">
            <button className="text-xl font-semibold border-3 border-[#FFFDD0] p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300">
              About
            </button>
          </Link>
        </div>
      </div>
      
      {/* Project content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Project 3</h1>
        
        {/* Project details with border */}
        <div className="bg-[#0D1B2A] border-3 border-[#FFFDD0] shadow-md p-6 mb-6">
          {/* Project hero image */}
          <div className="w-full h-[400px] bg-gray-400 mb-6 flex items-center justify-center text-gray-700 font-bold">
            PROJECT HERO IMAGE
          </div>
          
          {/* Project info */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="mb-4">
              This is a detailed description of Project 3. It explains the challenge, approach, and solution 
              of this particular project. The text provides insights into the design process, methodologies used, 
              and key decisions made throughout the project.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Challenge</h3>
                <p>
                  The specific problem or challenge that this project aimed to solve. This includes the context, 
                  the users affected, and the scope of the challenge.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Solution</h3>
                <p>
                  The solution developed to address the challenge, highlighting the key features and how they 
                  benefit the users or solve the identified problems.
                </p>
              </div>
            </div>
          </div>
          
          {/* Process section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              {/* Research */}
              <div className="border-3 border-[#FFFDD0] p-4">
                <h3 className="text-xl font-semibold mb-2">Research</h3>
                <p>Description of the research methods used, insights gathered, and how they informed the design.</p>
              </div>
              
              {/* Design */}
              <div className="border-3 border-[#FFFDD0] p-4">
                <h3 className="text-xl font-semibold mb-2">Design</h3>
                <p>Explanation of the design process, from sketches to wireframes to final designs.</p>
              </div>
              
              {/* Testing */}
              <div className="border-3 border-[#FFFDD0] p-4">
                <h3 className="text-xl font-semibold mb-2">Testing</h3>
                <p>Details on how the design was tested, feedback received, and iterations made.</p>
              </div>
            </div>
          </div>
          
          {/* Results section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Results</h2>
            <p className="mb-4">
              The outcomes and impact of the project, including any metrics, user feedback, or business results 
              that demonstrate the success of the solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}