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

  // Active section state for sidebar
  const [activeSection, setActiveSection] = useState('overview');

  // Lightbox state for image popups
  const [lightboxSrc, setLightboxSrc] = useState(null);

  // Intersection Observer for scroll spy
  useEffect(() => {
    const sectionIds = ['overview', 'research', 'design'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    // Main container with dark blue background and light text
    <div className="flex flex-col items-start min-h-screen p-5 space-y-6 w-full bg-[#0D1B2A] text-gray-100 font-sans">

      {/* =========================================
          HEADER & NAVIGATION 
      ========================================= */}
      <div className="flex justify-between items-center w-full mb-4">
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
          HERO & CONTENT CONTAINER
      ========================================= */}
      {/* Fixed Sidebar Navigation (Under Logo) */}
      <aside className="hidden xl:flex flex-col w-48 fixed left-5 top-32 h-fit bg-transparent border-l-2 border-[#FFFDD0]/30 hover:border-[#28FFE5] transition-colors duration-300 pl-4 py-2 z-10">
        <h3 className="text-sm font-bold text-[#FFFDD0] mb-4 uppercase tracking-widest">Contents</h3>
        <ul className="flex flex-col gap-4 text-sm text-gray-400">
          <li><a href="#overview" className={`transition-colors duration-300 inline-block transform ${activeSection === 'overview' ? 'text-[#28FFE5] font-bold translate-x-2' : 'hover:text-[#28FFE5] hover:translate-x-1'}`}>Overview</a></li>
          <li><a href="#research" className={`transition-colors duration-300 inline-block transform ${activeSection === 'research' ? 'text-[#28FFE5] font-bold translate-x-2' : 'hover:text-[#28FFE5] hover:translate-x-1'}`}>User Research</a></li>
          <li><a href="#design" className={`transition-colors duration-300 inline-block transform ${activeSection === 'design' ? 'text-[#28FFE5] font-bold translate-x-2' : 'hover:text-[#28FFE5] hover:translate-x-1'}`}>Designing the Solution</a></li>
        </ul>
      </aside>

      <main className="w-full max-w-6xl mx-auto flex flex-col gap-6 pb-10 relative">
        <div className="flex flex-col items-start w-full gap-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#FFFDD0]">Dogo App Redesign</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-2">
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
        <section id="overview" className="w-full pt-4 flex w-full scroll-mt-20">
          <div className="flex flex-col gap-4 text-lg leading-relaxed text-gray-200 max-w-4xl w-full">
            <div>
              <h2 className="text-3xl font-bold text-[#FFFDD0] mb-2">Overview</h2>
              <p>
                Managing a dog&apos;s life shouldn&apos;t require juggling between five different apps. I helped redesign Dogo to bridge the gap between daily activity tracking and critical health information management. Transforming it from a simple training tool into an essential, all-in-one companion for pet owners.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#FFFDD0] mb-2">The Problem: Disconnected Tools</h2>
              <p>
                While daily dog care is generally manageable, the logistics behind the scenes are a mess. Dog owners struggle to access scattered health records, safely navigate in unfamiliar neighborhoods, and track time-sensitive tasks like medications. The reliance on fragmented tools leads to disorganization and unnecessary stress when reliable information is needed most.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#FFFDD0] mb-2">The Impact</h2>
              <p>
                By removing the friction of finding safe walking spots and centralizing medical records, this redesign reduces pet ownership anxiety. For the business, this pivots Dogo from a &quot;use once in a while&quot; training app into a trusted, daily buddy that supports a healthier and more active lifestyles for pets.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full border-b border-[#FFFDD0]/30 my-4"></div>

        {/* =========================================
            USER RESEARCH SECTION 
        ========================================= */}
        <section id="research" className="flex flex-col gap-6 w-full scroll-mt-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-[#FFFDD0] mb-4">User Research</h2>
            <p className="text-lg leading-relaxed text-gray-200">
              Before conducting user interviews, we assumed the general struggles of pet care were centered around managing daily routines like walking and feeding. However, speaking to dog owners, revealed a completely different perspective. The true friction doesn&apos;t exist in the daily tasks, it lives in the <span className="italic text-[#28FFE5]">exceptions</span>.
              Here is what we found:
            </p>
          </div>

          {/* Findings 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="border-3 border-[#FFFDD0] p-6 flex flex-col gap-4">
              <div className="text-[#28FFE5] text-3xl font-bold">01</div>
              <h3 className="text-xl font-bold text-[#FFFDD0]">The Scattered Information</h3>
              <p className="text-gray-300">
                We expected minor disorganization, but in reality it was chaotic. Important records were buried in camera rolls, lost in emails, or sitting in physical notes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border-3 border-[#FFFDD0] p-6 flex flex-col gap-4">
              <div className="text-[#28FFE5] text-3xl font-bold">02</div>
              <h3 className="text-xl font-bold text-[#FFFDD0]">The Unfamiliar Environment</h3>
              <p className="text-gray-300">
                The original app assumed users always knew where they were walking. When navigating in new areas, owners felt a lot of anxiety about local wildlife, off-leash dogs, and crowd levels. A simple &quot;Start Walk&quot; button wasn&apos;t enough, they needed help.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border-3 border-[#FFFDD0] p-6  flex flex-col gap-4">
              <div className="text-[#28FFE5] text-3xl font-bold">03</div>
              <h3 className="text-xl font-bold text-[#FFFDD0]">The Trust Concern</h3>
              <p className="text-gray-300">
                There is a glaring lack of trust in existing dog-care services. From safety concerns on Rover, users don&apos;t trust tools that don&apos;t prioritize their peace of mind or dog&apos;s safety.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full border-b border-[#FFFDD0]/30 my-4"></div>

        {/* =========================================
            HIGH-FIDELITY PROTOTYPES SECTION 
        ========================================= */}
        <section id="design" className="flex flex-col gap-10 w-full scroll-mt-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-[#FFFDD0] mb-4">Designing the Solution</h2>
            <p className="text-lg leading-relaxed text-gray-200">
              Armed with our research insights, we knew we had to pivot Dogo from a simple activity tracker into a reliable daily companion. We focused our design efforts on solving the anxiety surrounding the &quot;exceptions&quot; in dog care. This meant refining the core walk experience to help owners navigate unfamiliar environments safely, and completely redesigning the profile flow to act as a centralized, trustworthy hub for vital health information.
            </p>
          </div>

          {/* Screen Breakdown 1 — Walk Flow (GIF) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-3 border-[#FFFDD0]/50 p-6">
            <div className="w-full h-[450px] bg-[#0D1B2A] flex items-center justify-center border-3 border-[#FFFDD0] overflow-hidden">
              {/* Replace with: <Image src="/project3/walk-flow.gif" alt="Walk flow prototype" fill className="object-contain" /> */}
              <span className="text-lg text-[#FFFDD0]/50 uppercase text-center px-4">Walk Flow GIF Here</span>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-[#28FFE5]">Reimagining the Walk</h3>
              <div>
                <h4 className="text-lg font-bold text-[#FFFDD0] mb-1">Design Intent</h4>
                <p className="text-gray-300">
                  The original Dogo walk screen was built around a leaderboard and social comparison, treating walks like a competition. But walking your dog isn&apos;t a race&mdash;it&apos;s a daily routine. We stripped that away and rebuilt the screen around what actually matters: getting out the door quickly with a familiar route, or discovering a new one with confidence. The redesigned walk screen opens to your recent and favorite walks, letting you re-walk a saved route with a single tap or start a new one immediately. For owners looking to explore, a map icon leads to a discovery view inspired by Google Maps, where trails, parks, waterfronts, and urban paths are tagged and filterable. Tapping any walk surfaces detailed trail info complete with reviews and community photos, so owners know exactly what to expect before they leash up.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#FFFDD0] mb-1">What This Solves</h4>
                <p className="text-gray-300">
                  This flow directly addresses the anxiety our research uncovered around navigating unfamiliar areas. Instead of guessing whether a trail is safe, crowded, or off-leash friendly, owners can now preview real information from other dog walkers before committing. By anchoring the experience in personal history and local discovery rather than social competition, the walk screen becomes something owners open every single day&mdash;not just when they feel like competing. It transforms Dogo from a feature you forget about into the first thing you check before grabbing the leash.
                </p>
              </div>
            </div>
          </div>

          {/* Screen Breakdown 2 — Profile & Health (Static Screens) */}
          <div className="flex flex-col gap-6 border-3 border-[#FFFDD0]/50 p-6">
            <div className="flex flex-col gap-4 max-w-3xl">
              <h3 className="text-2xl font-bold text-[#28FFE5]">A Smarter Profile</h3>
              <div>
                <h4 className="text-lg font-bold text-[#FFFDD0] mb-1">Design Intent</h4>
                <p className="text-gray-300">
                  The original profile was little more than a name and a photo. We redesigned it into a three-layer health hub. The main profile screen now surfaces a Health Score Trend that visualizes your dog&apos;s wellness over time, giving owners an at-a-glance understanding of how their pet is doing month to month. Below that, two clear entry points&mdash;Vet Mode and Documents&mdash;branch into deeper functionality. Vet Mode is designed for the moments that matter most: it pulls up your dog&apos;s breed, weight, microchip number, and a shareable QR code alongside current vaccinations, so everything a vet or emergency contact needs is accessible in seconds. The Documents screen acts as a filterable vault where vaccination records, antiparasitic treatments, and vet visit files are organized with expiration tracking and &ldquo;due in&rdquo; alerts, replacing the chaos of buried PDFs and camera-roll screenshots.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#FFFDD0] mb-1">What This Solves</h4>
                <p className="text-gray-300">
                  Our research revealed that owners had critical records scattered across emails, photos, and physical paperwork&mdash;a nightmare in any time-sensitive situation. This redesign eliminates that entirely. When an owner walks into an unfamiliar vet clinic or handles an emergency, they no longer have to dig through their phone. Vet Mode puts shareable, verified information one tap away, and the document vault ensures nothing expires without warning. By transforming the profile from a static page into a living health dashboard, Dogo becomes the single source of truth for a dog&apos;s wellbeing&mdash;the kind of tool owners trust enough to rely on every day.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
              <div onClick={() => setLightboxSrc('/project3/profile-1.png')} className="cursor-pointer group w-full max-w-[260px]">
                <div className="bg-[#1B2838] rounded-[2rem] p-2 sm:p-3 shadow-lg shadow-black/40 transition-transform duration-300 group-hover:scale-[1.03]">
                  <Image src="/project3/profile-1.png" alt="Profile main screen with health score trend" width={400} height={860} className="w-full h-auto rounded-[1.4rem] bg-white object-contain" />
                </div>
              </div>
              <div onClick={() => setLightboxSrc('/project3/profile-2.png')} className="cursor-pointer group w-full max-w-[260px]">
                <div className="bg-[#1B2838] rounded-[2rem] p-2 sm:p-3 shadow-lg shadow-black/40 transition-transform duration-300 group-hover:scale-[1.03]">
                  <Image src="/project3/profile-2.png" alt="Vet Mode screen with microchip and vaccinations" width={400} height={860} className="w-full h-auto rounded-[1.4rem] bg-white object-contain" />
                </div>
              </div>
              <div onClick={() => setLightboxSrc('/project3/profile-3.png')} className="cursor-pointer group w-full max-w-[260px]">
                <div className="bg-[#1B2838] rounded-[2rem] p-2 sm:p-3 shadow-lg shadow-black/40 transition-transform duration-300 group-hover:scale-[1.03]">
                  <Image src="/project3/profile-3.png" alt="Documents screen with filterable health records" width={400} height={860} className="w-full h-auto rounded-[1.4rem] bg-white object-contain" />
                </div>
              </div>
            </div>
          </div>

        </section>

      </main>

      {/* Lightbox Modal */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8 cursor-pointer"
          onClick={() => setLightboxSrc(null)}
        >
          <div className="relative max-w-[400px] w-full max-h-[90vh] animate-[fadeIn_0.2s_ease-out] flex flex-col items-center">
            <div className="bg-[#1B2838] rounded-[2.5rem] p-3 shadow-2xl shadow-black/60 w-full">
              <Image src={lightboxSrc} alt="Enlarged screen view" width={800} height={1720} className="w-full h-auto rounded-[2rem] bg-white object-contain max-h-[80vh]" />
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">Click anywhere to close</p>
          </div>
        </div>
      )}
    </div>
  );
}