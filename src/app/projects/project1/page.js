'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Project1() {
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
        <h1 className="text-5xl font-semibold">SD Bike Coalition</h1>

        {/* Project details with dashed border */}
        <div className="bg-[#0D1B2A] custom-dashed-border shadow-md p-6 mb-6 w-full">
          {/* Project hero image with progression layout */}
          <div className="w-full mb-6">
            {/* Removed the images from here as per the change request */}
          </div>
          
          {/* Project info */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#d0d2ff]">Overview</h2>
            
            <p className="mb-4">
              SD Bike Coalition is a non-profit organization that aims to build the bike community in San Diego through advocacy, education, and events. For this
              project me and my team worked with the coalition to help redesign their home page to better reflect their mission and values. 
              The goal was to create a more engaging and user-friendly experience for visitors, encouraging them to get involved with the coalition&apos;s initiatives.
            </p>
          </div>
          
          {/* Divider after Overview */}
          <hr className="border-t border-[#FFFEEC] opacity-20 my-6" />
          
          {/* Design Process Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#d0d2ff]">Design Process</h2>
            
            <div className="flex flex-col gap-4 mt-4">
              {/* Identifying Key Features */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Research</h3>
                <p>
                  For research we looked at other non-profit organizations such as the California Bike Coalition and San Diego Bike Club.
                  We noticed that their websites really put an emphazis our their mission statement, a strong push for donations, and a clear way to see upcoming events.
                  We then focus on the SD Bike Coalition&apos;s current website to see what they were doing well and what could be improved by doing heuristic testing.
                  We noticed a lot of text cluster, inconsistent button and text sizes, and a lot of unnecessary elements and animations such as a text ticker. 
                </p>
              </div>
              
              {/* Design and Feedback */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Design</h3>
                <p className="ml-0">
      
                </p>
                {/* Moved the images under Low-Fidelity description */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-8">
                  {/* First image */}
                  <div 
                    className="w-full md:w-2/3 aspect-square relative mx-auto cursor-pointer overflow-hidden border-3 border-transparent hover:border-[#FFFDD0] shadow hover:shadow-lg transition-all duration-300"
                    onClick={() => handleImageClick('/images/Lofi.png')}
                  >
                    <Image 
                      src="/images/Lofi.png" 
                      alt="Low-Fidelity Design" 
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
                      <h3 className="text-sm font-semibold text-white">Low-Fidelity Design</h3>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="flex items-center justify-center text-4xl text-[#FFFDD0] transform rotate-90 md:rotate-0 my-4 md:my-0">
                    →
                  </div>
                  {/* Second image */}
                  <div 
                    className="w-full md:w-2/3 aspect-square relative mx-auto cursor-pointer overflow-hidden border-3 border-transparent hover:border-[#FFFDD0] shadow hover:shadow-lg transition-all duration-300"
                    onClick={() => handleImageClick('/images/midfi.png')}
                  >
                    <Image 
                      src="/images/midfi.png" 
                      alt="Mid-Fidelity Design" 
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
                      <h3 className="text-sm font-semibold text-white">Mid-Fidelity Design</h3>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="flex items-center justify-center text-4xl text-[#FFFDD0] transform rotate-90 md:rotate-0 my-4 md:my-0">
                    →
                  </div>
                  {/* Third image */}
                  <div 
                    className="w-full md:w-2/3 aspect-square relative mx-auto cursor-pointer overflow-hidden border-3 border-transparent hover:border-[#FFFDD0] shadow hover:shadow-lg transition-all duration-300"
                    onClick={() => handleImageClick('/images/hifi final.png')}
                  >
                    <Image 
                      src="/images/hifi final.png" 
                      alt="High-Fidelity Design" 
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
                      <h3 className="text-sm font-semibold text-white">High-Fidelity Design</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Divider after Design Process */}
          <hr className="border-t border-[#FFFEEC] opacity-20 my-6" />
          
          {/* Future Directions Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#d0d2ff]">Future Directions</h2>
            <p className="mb-4">
              In the future, if we had the time, we would like to conduct user testing to gather feedback on the new design and identify areas for improvement.
              We then could start implementing these real changes into the actual website of the SD Bike Coalition. Also we could start looking at other areas of the homepage such as the
              event page to create a more user friendly calender and upcoming events design. 
            </p>
          </div>
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-[#0D1B2A] bg-opacity-30 flex items-center justify-center z-50 p-4"
          onClick={closeModal} // Close modal when clicking outside the image
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <Image
              src={selectedImage}
              alt="Enlarged design"
              fill
              className="object-contain"
            />
            <button 
              className="absolute top-2 right-2 bg-[#0D1B2A] text-white p-2 rounded-full"
              onClick={closeModal} // Close modal when clicking the close button
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}