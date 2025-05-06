'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function About() {
  // State to control the visibility of the projects dropdown menu
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);

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
          {/* Projects dropdown with hover functionality */}
          <div className="relative">
            <button 
              className="text-xl font-semibold border-4 border-[#FFFDD0] p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300"
              onMouseEnter={() => setShowProjectsDropdown(true)}
              onMouseLeave={() => setShowProjectsDropdown(false)}
            >
              Projects
            </button>
            {/* Dropdown menu that appears on hover */}
            {showProjectsDropdown && (
              <div 
                className="absolute top-full right-0 mt-1 bg-[#0D1B2A] border-4 border-[#FFFDD0] w-40 z-10"
                onMouseEnter={() => setShowProjectsDropdown(true)}
                onMouseLeave={() => setShowProjectsDropdown(false)}
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
          {/* About navigation button - currently active */}
          <Link href="/about">
            <button className="text-xl font-semibold border-4 border-[#FFFDD0] p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300">
              About
            </button>
          </Link>
        </div>
      </div>
      
      {/* Main content section */}
      <div className="container mx-auto px-4 py-12">
        {/* Page title */}
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        
        {/* About me content card */}
        <div className="bg-[#0D1B2A] border-4 border-[#FFFDD0] shadow-md p-6 mb-6">
          {/* Two-column layout (stacked on mobile, side-by-side on larger screens) */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left column - Image placeholder */}
            <div className="md:w-1/3">
              <div className="bg-[#1B263B] w-full aspect-square mb-4 flex items-center justify-center">
                <p className="text-gray-300">Profile Image</p>
              </div>
            </div>
            
            {/* Right column - Bio and info */}
            <div className="md:w-2/3">
              {/* Name heading */}
              <h2 className="text-2xl font-semibold mb-4">Danny Xu</h2>
              {/* Bio paragraphs */}
              {/* REMINDER: Use &apos; instead of ' for apostrophes in JSX text */}
              <p className="mb-4 text-gray-100">
                I&apos;m a UI/UX designer from San Francisco.
              </p>
              {/* REMINDER: Use &apos; instead of ' for apostrophes in JSX text */}
              <p className="mb-4 text-gray-100">
                My journey in UI/UX design started at [UCSD], where I earned my 
                degree in Cognitive Science w/specialization in Design and Interaction.
                I have a design ethos that embodies the essense of an Oasis, 
                Optimal functionality, Addictive engagement, Simple interaction, Intuitive usability, Satisfying outcomes.
              </p>
              {/* REMINDER: Use &apos; instead of ' for apostrophes in JSX text */}
              <p className="mb-4 text-gray-100">
                During my free time, I enjoy watching sports, my favorite teams being the Warriors,SF Giants, 49ers, and Manchester United.
                I also love to learn the language, French, as during my time at UCSD, I was able to also double major in French.
              </p>
              
              {/* Contact information section */}
              <div className="mt-6">
                <h3 className="text-xl font-medium mb-3">Get in Touch</h3>
                {/* Social/contact links with hover effects */}
                <div className="flex gap-4">
                  <a href="mailto:email@example.com" className="text-[#28FFE5] hover:text-[#FFFDD0] transition-all duration-300">
                    dax002@ucsd.edu
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-[#28FFE5] hover:text-[#FFFDD0] transition-all duration-300">
                    LinkedIn
                  </a>
                  <a href="tel: +14156063787" target="_blank" rel="noopener noreferrer" className="text-[#28FFE5] hover:text-[#FFFDD0] transition-all duration-300">
                    Call/Text Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}