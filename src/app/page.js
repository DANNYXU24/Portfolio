'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Add this import

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
        <h2 className="text-xl font-semibold border-3 border-[#FFFDD0] p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300">DX</h2>
        
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
                  <div className="p-2 hover:bg-[#28FFE5] hover:text-[#0D1B2A] hover:font-bold transition-all duration-300 cursor-pointer">Project 2</div>
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
      
      {/* Main content section */}
      <main className="flex flex-col gap-4 items-start w-full">
        {/* User name/title */}
        <h2 className="text-4xl font-semibold">Danny Xu</h2>
        {/* Portfolio grid container */}
        <div className="portfolio w-full">
          {/* Project grid with responsive columns (1 on mobile, 2 on tablet, 3 on desktop) */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Project 1 card - with hover overlay and title */}
            <Link href="/projects/project1/" className="block w-full">
              <li className="aspect-square border-3 border-transparent hover:border-[#FFFDD0] shadow hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden">
                {/* Project image with improved fitting */}
                <Image 
                  src="/images/sdbike.png" 
                  alt="SD Bike Coalition" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay with title that appears on hover */}
                <div 
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(13, 27, 42, 0)', // Transparent navy blue initially (0 opacity)
                    opacity: 0 // Entire overlay starts invisible
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(13, 27, 42, 0.6)'; // 60% opacity on hover
                    e.currentTarget.style.opacity = 1; // Make overlay visible
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(13, 27, 42, 0)'; // Back to transparent
                    e.currentTarget.style.opacity = 0; // Hide overlay
                  }}
                >
                  <h3 className="text-xl font-semibold text-white">SD Bike Coalition</h3>
                </div>
              </li>
            </Link>
            
            {/* Project 2 card - with hover overlay and title */}
            <Link href="/projects/project2/" className="block w-full">
              <li className="aspect-square border-3 border-transparent hover:border-[#FFFDD0] shadow hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden">
                {/* Project image */}
                <Image 
                  src="/images/project2.jpg" 
                  alt="Project 2" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay with title that appears on hover */}
                <div 
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(13, 27, 42, 0)', // Transparent navy blue initially (0 opacity)
                    opacity: 0 // Entire overlay starts invisible
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(13, 27, 42, 0.6)'; // 60% opacity on hover
                    e.currentTarget.style.opacity = 1; // Make overlay visible
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(13, 27, 42, 0)'; // Back to transparent
                    e.currentTarget.style.opacity = 0; // Hide overlay
                  }}
                >
                  <h3 className="text-xl font-semibold text-white">Project 2</h3>
                </div>
              </li>
            </Link>
            
            {/* Project 3 card - with hover overlay and title */}
            <Link href="/projects/project3/" className="block w-full">
              <li className="aspect-square border-3 border-transparent hover:border-[#FFFDD0] shadow hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden">
                {/* Project image */}
                <Image 
                  src="/images/project3.jpg" 
                  alt="Project 3" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay with title that appears on hover */}
                <div 
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(13, 27, 42, 0)', // Transparent navy blue initially (0 opacity)
                    opacity: 0 // Entire overlay starts invisible
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(13, 27, 42, 0.6)'; // 60% opacity on hover
                    e.currentTarget.style.opacity = 1; // Make overlay visible
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(13, 27, 42, 0)'; // Back to transparent
                    e.currentTarget.style.opacity = 0; // Hide overlay
                  }}
                >
                  <h3 className="text-xl font-semibold text-white">Project 3</h3>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </main>
    </div>
  );
}
