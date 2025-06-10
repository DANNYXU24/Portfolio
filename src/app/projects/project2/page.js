'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Project2() {
  // State to control the visibility of the projects dropdown menu
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  // Ref for the dropdown container to handle mouse events
  const dropdownRef = useRef(null);
  // Timeout ref to manage the delay before closing
  const timeoutRef = useRef(null);
  
  // Add new state for the image modal
  const [selectedImage, setSelectedImage] = useState(null);

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

  // Add new handler for image clicks
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // Add handler to close the modal
  const closeModal = () => {
    setSelectedImage(null);
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
      <div className="flex flex-col gap-4 items-start w-full">
        <h1 className="text-4xl font-semibold">Inch Scale Design</h1>
        
        {/* Project details with dashed border */}
        <div className="bg-[#0D1B2A] custom-dashed-border shadow-md p-6 mb-6 w-full">
          {/* Project hero image with progression layout */}
          <div className="w-full mb-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-8">
              {/* First image - reduced size and clickable */}
              <div 
                className="w-1/2 md:w-1/6 aspect-square relative mx-auto cursor-pointer overflow-hidden border-3 border-transparent hover:border-[#FFFDD0] shadow hover:shadow-lg transition-all duration-300"
                onClick={() => handleImageClick('/images/inchscale1.png')}
              >
                <Image 
                  src="/images/inchscale1.png" 
                  alt="Initial design" 
                  fill
                  className="object-contain"
                />
                {/* Overlay with title that appears on hover */}
                <div 
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(13, 27, 42, 0)', // Transparent navy blue initially
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
                  <h3 className="text-sm font-semibold text-white">Initial Design</h3>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="flex items-center justify-center text-4xl text-[#FFFDD0] transform rotate-90 md:rotate-0 my-4 md:my-0">
                →
              </div>
              
              {/* Second image - reduced size and clickable */}
              <div 
                className="w-1/2 md:w-1/6 aspect-square relative mx-auto cursor-pointer overflow-hidden border-3 border-transparent hover:border-[#FFFDD0] shadow hover:shadow-lg transition-all duration-300"
                onClick={() => handleImageClick('/images/inchscale2.png')}
              >
                <Image 
                  src="/images/inchscale2.png" 
                  alt="Design iteration" 
                  fill
                  className="object-contain"
                />
                {/* Overlay with title that appears on hover */}
                <div 
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(13, 27, 42, 0)',
                    opacity: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(13, 27, 42, 0.6)';
                    e.currentTarget.style.opacity = 1;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(13, 27, 42, 0)';
                    e.currentTarget.style.opacity = 0;
                  }}
                >
                  <h3 className="text-sm font-semibold text-white">Design Iteration</h3>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="flex items-center justify-center text-4xl text-[#FFFDD0] transform rotate-90 md:rotate-0 my-4 md:my-0">
                →
              </div>
              
              {/* Third image - reduced size and clickable */}
              <div 
                className="w-1/2 md:w-1/6 aspect-square relative mx-auto cursor-pointer overflow-hidden border-3 border-transparent hover:border-[#FFFDD0] shadow hover:shadow-lg transition-all duration-300"
                onClick={() => handleImageClick('/images/inchscale3.png')}
              >
                <Image 
                  src="/images/inchscale3.png" 
                  alt="Final design" 
                  fill
                  className="object-contain"
                />
                {/* Overlay with title that appears on hover */}
                <div 
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(13, 27, 42, 0)',
                    opacity: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(13, 27, 42, 0.6)';
                    e.currentTarget.style.opacity = 1;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(13, 27, 42, 0)';
                    e.currentTarget.style.opacity = 0;
                  }}
                >
                  <h3 className="text-sm font-semibold text-white">Final Design</h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project info */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              The purpose of this project was to create a design that would fit on an inch scale display such as an Apple Watch.
              Essentially, the design needed to be simple but effective, allowing users to gains as much information as possible.
              For this project, I used Figma to create the designs of a display of a transit app that would be used by frequent
              public transport commuters to new users of public transport.
            </p>
          </div>
          
          {/* Process section - moved up, before challenge/solution */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Design Process</h2>
            
            <div className="flex flex-col gap-8 mt-4">
              {/* Research row */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Research</h3>
                <p>Description of the research methods used, insights gathered, and how they informed the design.</p>
              </div>
              
              {/* Design row */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Design</h3>
                <p>Explanation of the design process, from sketches to wireframes to final designs.</p>
              </div>
              
              {/* Feedback row */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Feedback</h3>
                <p>Details on how the design was tested, feedback received, and iterations made.</p>
              </div>
            </div>
          </div>
          
          {/* Challenge/Solution section - moved down, after process */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          
          {/* Results section - keep as is */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Final Design</h2>
            <p className="mb-4">
              The outcomes and impact of the project, including any metrics, user feedback, or business results 
              that demonstrate the success of the solution.
            </p>
          </div>
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Enlarged design"
              fill
              className="object-contain"
            />
            <button 
              className="absolute top-2 right-2 bg-[#0D1B2A] text-white p-2 rounded-full"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}