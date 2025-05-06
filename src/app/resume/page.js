'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Resume() {
  // State to control the visibility of the projects dropdown menu
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);

  return (
    // Main container with dark blue background and light text
    <div className="flex flex-col items-start min-h-screen p-5 space-y-10 w-full bg-[#0D1B2A] text-gray-100">
      {/* Header section with logo and navigation */}
      <div className="flex justify-between items-center w-full">
        {/* Logo/brand mark with link to homepage */}
        <Link href="/">
          <h2 className="text-6xl font-semibold border-4 border-[#FFFDD0] p-4 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300 cursor-pointer">DX</h2>
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
          {/* Resume navigation button - currently active */}
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
        {/* Page title */}
        <h1 className="text-3xl font-bold mb-6">Resume</h1>
        
        {/* Resume content card */}
        <div className="bg-[#0D1B2A] border-4 border-[#FFFDD0] shadow-md p-6 mb-6">
          {/* Experience section */}
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          
          {/* Senior Developer experience entry */}
          <div className="mb-6">
            <h3 className="text-xl font-medium">Senior Developer</h3>
            <p className="text-gray-300">Company Name | 2022 - Present</p>
            <ul className="list-disc pl-5 mt-2 text-gray-100">
              <li>Responsible for developing and maintaining web applications</li>
              <li>Led a team of 5 developers on various projects</li>
              <li>Implemented new features and optimized existing systems</li>
            </ul>
          </div>
          
          {/* Web Developer experience entry */}
          <div className="mb-6">
            <h3 className="text-xl font-medium">Web Developer</h3>
            <p className="text-gray-300">Previous Company | 2018 - 2022</p>
            <ul className="list-disc pl-5 mt-2 text-gray-100">
              <li>Developed responsive websites for clients</li>
              <li>Collaborated with design and marketing teams</li>
              <li>Maintained and updated existing web applications</li>
            </ul>
          </div>
          
          {/* Education section */}
          <h2 className="text-2xl font-semibold mb-4 mt-8">Education</h2>
          
          {/* Education entry */}
          <div className="mb-6">
            <h3 className="text-xl font-medium">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-300">University Name | 2014 - 2018</p>
          </div>
          
          {/* Skills section */}
          <h2 className="text-2xl font-semibold mb-4 mt-8">Skills</h2>
          
          {/* Two-column skills layout (stacked on mobile, side-by-side on larger screens) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Technical skills column */}
            <div>
              <h3 className="text-xl font-medium mb-2">Technical Skills</h3>
              <ul className="list-disc pl-5 text-gray-100">
                <li>JavaScript/TypeScript</li>
                <li>React/Next.js</li>
                <li>Node.js</li>
                <li>HTML/CSS/Tailwind</li>
              </ul>
            </div>
            
            {/* Soft skills column */}
            <div>
              <h3 className="text-xl font-medium mb-2">Soft Skills</h3>
              <ul className="list-disc pl-5 text-gray-100">
                <li>Team Leadership</li>
                <li>Project Management</li>
                <li>Problem Solving</li>
                <li>Communication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}