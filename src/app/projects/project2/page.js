'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Project2() {
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
    }, 100); // 100ms delay before closing (shorter than Project1)
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
          <h2 className="text-xl font-semibold border-4 border-[#FFFDD0] p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300 cursor-pointer">DX</h2>
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
              className="text-xl font-semibold border-4 border-[#FFFDD0] p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300"
            >
              Projects
            </button>
            {/* Dropdown menu with improved hover behavior */}
            {showProjectsDropdown && (
              <div 
                className="absolute top-full right-0 mt-1 bg-[#0D1B2A] border-4 border-[#FFFDD0] w-40 z-10"
              >
                {/* Project links in dropdown - Project 2 is current page */}
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
      <div className="container mx-auto px-4 py-12">
        {/* Project title */}
        <h1 className="text-3xl font-bold mb-6">Project 2 Under Construction</h1>
        
        {/* Project details card */}
        <div className="bg-[#0D1B2A] border-4 border-[#FFFDD0] shadow-md p-6 mb-6">
          {/* Project details heading */}
          <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          {/* Project description */}
          {/* REMINDER: Use &apos; instead of ' for apostrophes in JSX text */}
          <p className="mb-4 text-gray-100">
            Detailed description of Project 2. This is where you can provide information
            about the project, including its purpose, technologies used, challenges faced,
            and solutions implemented.
          </p>
          
          {/* Technologies used section */}
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Technologies Used</h3>
            {/* REMINDER: Use &apos; instead of ' for apostrophes in JSX text */}
            <ul className="list-disc pl-5 text-gray-100">
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Other technologies...</li>
            </ul>
          </div>
          
          {/* Key features section */}
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Key Features</h3>
            {/* REMINDER: Use &apos; instead of ' for apostrophes in JSX text */}
            <ul className="list-disc pl-5 text-gray-100">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
        </div>
        
        {/* Back to portfolio button with hover effects */}
        <div className="flex justify-between">
          <Link href="/" className="bg-[#28FFE5] hover:bg-[#FFFDD0] text-[#0D1B2A] font-medium px-4 py-2 rounded border-2 border-[#FFFDD0] transition-all duration-300">
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}