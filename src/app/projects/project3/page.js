'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    <div className="flex flex-col items-start min-h-screen p-5 space-y-10 w-full bg-[#0D1B2A] text-gray-100 font-sans">
      
      {/* =========================================
          HEADER & NAVIGATION 
      ========================================= */}
      <div className="flex justify-between items-center w-full mb-8">
        {/* Logo/brand mark with link to homepage */}
        <Link href="/">
          <h2 className="text-xl font-semibold border-3 border-[#FFFDD0] p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300 cursor-pointer">DX</h2>
        </Link>
        
        {/* Navigation buttons */}
        <div className="flex gap-4">
          {/* Projects dropdown */}
          <div 
            className="relative" 
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-xl font-semibold border-3 border-[#FFFDD0] p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300">
              Projects
            </button>
            {showProjectsDropdown && (
              <div className="absolute top-full right-0 mt-1 bg-[#0D1B2A] border-3 border-[#FFFDD0] w-64 z-20">
                <Link href="/projects/project1"><div className="p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] hover:font-bold transition-all duration-300 cursor-pointer border-b border-[#FFFDD0]/30">SD Bike Coalition</div></Link>
                <Link href="/projects/project2"><div className="p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] hover:font-bold transition-all duration-300 cursor-pointer border-b border-[#FFFDD0]/30">Inch Scale Design</div></Link>
                <Link href="/projects/project3"><div className="p-3 bg-[#28FFE5] text-[#0D1B2A] font-bold cursor-pointer border-b border-[#FFFDD0]/30">Dogo App Redesign</div></Link>
                <Link href="/projects/project4"><div className="p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] hover:font-bold transition-all duration-300 cursor-pointer border-b border-[#FFFDD0]/30">Gaussian Splat Exploration</div></Link>
                <Link href="/projects/project5"><div className="p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] hover:font-bold transition-all duration-300 cursor-pointer border-b border-[#FFFDD0]/30">Heart Rate Research</div></Link>
                <Link href="/projects/project6"><div className="p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] hover:font-bold transition-all duration-300 cursor-pointer border-b border-[#FFFDD0]/30">Cogs 187B</div></Link>
                <Link href="/projects/project7"><div className="p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] hover:font-bold transition-all duration-300 cursor-pointer">Adaptive Preference Interface</div></Link>
              </div>
            )}
          </div>
          <Link href="/resume">
            <button className="text-xl font-semibold border-3 border-[#FFFDD0] p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300">Resume</button>
          </Link>
          <Link href="/about">
            <button className="text-xl font-semibold border-3 border-[#FFFDD0] p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] transition-all duration-300">About</button>
          </Link>
        </div>
      </div>
      
      {/* =========================================
          HERO SECTION 
      ========================================= */}
      <main className="w-full max-w-6xl mx-auto flex flex-col gap-12 pb-20">
        <div className="flex flex-col items-start w-full gap-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#FFFDD0]">Dogo App Redesign</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-4">
            Transforming a basic training tracker into an essential, all-in-one daily companion for dog owners.
          </p>
        </div>

        {/* Hero Image Placeholder */}
        <div className="w-full h-[500px] border-3 border-[#FFFDD0] bg-gray-800 flex items-center justify-center relative overflow-hidden group">
          {/* Replace this div with your actual next/image component */}
          <span className="text-xl text-[#FFFDD0]/50 tracking-widest uppercase">Insert High-Fidelity Hero Mockup Here</span>
        </div>

{/* =========================================
            OVERVIEW SECTION 
        ========================================= */}
        <section className="w-full pt-10 flex w-full">
          <div className="flex flex-col gap-8 text-lg leading-relaxed text-gray-200 max-w-4xl w-full">
            <div>
              <h2 className="text-3xl font-bold text-[#FFFDD0] mb-4">Overview</h2>
              <p>
                Managing a dog&apos;s life shouldn&apos;t require juggling five different apps. I helped redesign Dogo to bridge the gap between daily activity tracking and critical health management, transforming it from a simple training tool into an essential, all-in-one companion for pet owners.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-[#FFFDD0] mb-4">The Problem: Disconnected Tools</h2>
              <p>
                While daily dog care is generally manageable, the logistics behind the scenes are a mess. Dog owners struggle to access scattered health records, safely navigate unfamiliar walking routes, and track time-sensitive tasks like medications. The reliance on fragmented tools leads to disorganization and unnecessary stress when reliable information is needed most.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#FFFDD0] mb-4">The Impact</h2>
              <p>
                By removing the friction of finding safe walking spots and centralizing medical records, this redesign reduces pet ownership anxiety. For the business, this pivots Dogo from a &quot;use-once-a-week&quot; training app into a trusted, daily-habit ecosystem that supports healthier, more active lifestyles for pets.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full border-b border-[#FFFDD0]/30 my-8"></div>

        {/* =========================================
            USER RESEARCH SECTION 
        ========================================= */}
        <section className="flex flex-col gap-10 w-full">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-[#FFFDD0] mb-4">User Research</h2>
            <p className="text-lg leading-relaxed text-gray-200">
              As someone who actively manages the daily walking routes and health records for a Siberian Husky/German Shepherd mix, I went into these interviews assuming I understood the baseline struggles of pet care. But talking to other owners revealed that the real friction wasn&apos;t in the daily routines—it was in the <span className="italic text-[#28FFE5]">exceptions</span>. 
              Here is what surprised us the most:
            </p>
          </div>

          {/* Findings 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="border-3 border-[#FFFDD0] p-6 flex flex-col gap-4">
              <div className="text-[#28FFE5] text-3xl font-bold">01</div>
              <h3 className="text-xl font-bold text-[#FFFDD0]">The &quot;Scattered Data&quot; Crisis</h3>
              <p className="text-gray-300">
                We expected minor disorganization, but the reality was chaotic. Critical records were buried in camera rolls, lost in emails, or sitting in physical booklets. To recall a deworming date, users were often forced to dig through old bank statements just to find the vet payment.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border-3 border-[#FFFDD0] p-6 flex flex-col gap-4">
              <div className="text-[#28FFE5] text-3xl font-bold">02</div>
              <h3 className="text-xl font-bold text-[#FFFDD0]">The Unfamiliar Environment</h3>
              <p className="text-gray-300">
                The original app assumed users always knew where they were walking. When navigating new areas, owners felt immense anxiety about local wildlife, off-leash dogs, and crowd levels. A simple &quot;Start Walk&quot; button wasn&apos;t enough, they needed environmental context.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border-3 border-[#FFFDD0] p-6  flex flex-col gap-4">
              <div className="text-[#28FFE5] text-3xl font-bold">03</div>
              <h3 className="text-xl font-bold text-[#FFFDD0]">The Trust Deficit</h3>
              <p className="text-gray-300">
                There is a glaring lack of trust in existing dog-care services. From safety concerns on Rover to clunky, inaccessible records on the Petco app, users are exhausted by tools that don&apos;t prioritize their peace of mind or make vital information easily accessible.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}