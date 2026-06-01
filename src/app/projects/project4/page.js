'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Project4() {
  // State to control the visibility of the projects dropdown menu
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  // Ref for the dropdown container to handle mouse events
  const dropdownRef = useRef(null);
  // Timeout ref to manage the delay before closing
  const timeoutRef = useRef(null);

  // Function to handle mouse enter on dropdown
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowProjectsDropdown(true);
  };

  // Function to handle mouse leave with a delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowProjectsDropdown(false);
    }, 100);
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
    const sectionIds = ['overview', 'what-is', 'importance', 'objective', 'segmentation', 'unity', 'sam-3d', 'challenges', 'conclusion'];
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
                <Link href="/projects/project3"><div className="p-3 hover:bg-[#28FFE5] hover:text-[#0D1B2A] hover:font-bold transition-all duration-300 cursor-pointer border-b border-[#FFFDD0]/30">Dogo App Redesign</div></Link>
                <Link href="/projects/project4"><div className="p-3 bg-[#28FFE5] text-[#0D1B2A] font-bold cursor-pointer border-b border-[#FFFDD0]/30">Gaussian Splat Exploration</div></Link>
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
          <li><a href="#what-is" className={`transition-colors duration-300 inline-block transform ${activeSection === 'what-is' ? 'text-[#28FFE5] font-bold translate-x-2' : 'hover:text-[#28FFE5] hover:translate-x-1'}`}>What is 3DGS?</a></li>
          <li><a href="#importance" className={`transition-colors duration-300 inline-block transform ${activeSection === 'importance' ? 'text-[#28FFE5] font-bold translate-x-2' : 'hover:text-[#28FFE5] hover:translate-x-1'}`}>Why it Matters</a></li>
          <li><a href="#objective" className={`transition-colors duration-300 inline-block transform ${activeSection === 'objective' ? 'text-[#28FFE5] font-bold translate-x-2' : 'hover:text-[#28FFE5] hover:translate-x-1'}`}>Objective</a></li>
          <li><a href="#segmentation" className={`transition-colors duration-300 inline-block transform ${activeSection === 'segmentation' ? 'text-[#28FFE5] font-bold translate-x-2' : 'hover:text-[#28FFE5] hover:translate-x-1'}`}>Segmentation</a></li>
          <li><a href="#unity" className={`transition-colors duration-300 inline-block transform ${activeSection === 'unity' ? 'text-[#28FFE5] font-bold translate-x-2' : 'hover:text-[#28FFE5] hover:translate-x-1'}`}>Unity Integration</a></li>
          <li><a href="#sam-3d" className={`transition-colors duration-300 inline-block transform ${activeSection === 'sam-3d' ? 'text-[#28FFE5] font-bold translate-x-2' : 'hover:text-[#28FFE5] hover:translate-x-1'}`}>SAM 3D</a></li>
          <li><a href="#challenges" className={`transition-colors duration-300 inline-block transform ${activeSection === 'challenges' ? 'text-[#28FFE5] font-bold translate-x-2' : 'hover:text-[#28FFE5] hover:translate-x-1'}`}>Challenges & Learnings</a></li>
          <li><a href="#conclusion" className={`transition-colors duration-300 inline-block transform ${activeSection === 'conclusion' ? 'text-[#28FFE5] font-bold translate-x-2' : 'hover:text-[#28FFE5] hover:translate-x-1'}`}>Conclusion</a></li>
        </ul>
      </aside>

      <main className="w-full max-w-6xl mx-auto flex flex-col gap-8 pb-20 relative">
        <section id="overview" className="flex flex-col items-start w-full gap-4 pt-4 scroll-mt-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#FFFDD0]">Gaussian Splat Exploration</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-2">
            Bringing photorealistic environments into VR using 3D Gaussian Splatting and segmentation models.
          </p>
        </section>

        {/* Hero Image Placeholder */}
        <div className="w-full h-[500px] border-3 border-[#FFFDD0] bg-[#112236] flex flex-col items-center justify-center relative overflow-hidden group mb-8">
          <span className="text-xl text-[#28FFE5] font-bold mb-2">HERO IMAGE / VIDEO PLACEHOLDER</span>
          <span className="text-md text-[#FFFDD0]/70 max-w-lg text-center px-4">
            Show a stunning, high-quality render of a Gaussian Splat scene you created or explored. A side-by-side or a smooth camera pan video works best to instantly &quot;wow&quot; the viewer.
          </span>
        </div>

        {/* =========================================
            WHAT IS GAUSSIAN SPLATTING
        ========================================= */}
        <section id="what-is" className="w-full flex flex-col gap-6 scroll-mt-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-[#FFFDD0] mb-4">What is Gaussian Splatting?</h2>
            <div className="text-lg leading-relaxed text-gray-200 space-y-4">
              <p>
                How I like to explain it is that Gaussian Splatting is a way of turning real-life photos into a 3D scene—but instead of building a solid model with polygons, it builds the scene out of thousands (or even millions) of tiny, soft &quot;blobs&quot; in space.
              </p>
              <p>
                These blobs are based on something called a Gaussian distribution, which is basically a smooth, bell-shaped function. In this case, each Gaussian acts like a little fuzzy point in 3D space that has a position, size, color, and transparency.
              </p>
              
              <div className="my-6 p-6 border-l-4 border-[#28FFE5] bg-[#FFFDD0]/5">
                <p className="italic text-xl">
                  So instead of saying: <span className="font-bold text-[#FFFDD0]">&quot;this is a triangle surface,&quot;</span><br/>
                  Gaussian Splatting says: <span className="font-bold text-[#FFFDD0]">&quot;this part of space softly glows with this color and shape.&quot;</span>
                </p>
              </div>

              <p>
                When you render the scene, the system &quot;splats&quot; (projects) all of these Gaussians onto the screen and blends them together. When enough of them are combined, they recreate the appearance of the original real-world scene from different angles.
              </p>
              <p>
                So a cleaner way to think about it is: It&apos;s a method for reconstructing and rendering 3D scenes from images using a cloud of soft, overlapping Gaussians rather than a traditional mesh.
              </p>
              <p>
                Compared to older methods like photogrammetry (which builds rigid geometry) or things like Neural Radiance Fields (which rely on neural networks), Gaussian Splatting is more direct and much faster to render, which is why it&apos;s gotten so popular.
              </p>

              <div className="my-6 p-6 border-3 border-[#FFFDD0]/30 rounded-xl">
                <h3 className="text-[#28FFE5] font-bold text-xl mb-2">A simple mental image:</h3>
                <p>Instead of building a statue, you&apos;re filling the space with colored fog—and when you look at that fog from the right angle, it looks exactly like the real object.</p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="w-full max-w-4xl h-[300px] border-3 border-[#FFFDD0]/50 bg-[#112236] flex flex-col items-center justify-center relative mt-4 rounded-xl border-dashed">
            <span className="text-lg text-[#28FFE5] font-bold mb-2">IMAGE BOX: COMPARISON</span>
            <span className="text-sm text-gray-400 max-w-md text-center px-4">
              Show a side-by-side image: Left side showing a traditional 3D polygon mesh wireframe, Right side showing the soft, overlapping Gaussian splat points (the &quot;colored fog&quot;).
            </span>
          </div>
        </section>

        <div className="w-full border-b border-[#FFFDD0]/20 my-4"></div>

        {/* =========================================
            THE IMPORTANCE OF GAUSSIAN SPLATTING
        ========================================= */}
        <section id="importance" className="w-full flex flex-col gap-6 scroll-mt-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-[#FFFDD0] mb-4">The Importance of Gaussian Splatting</h2>
            <div className="text-lg leading-relaxed text-gray-200 space-y-4">
              <p>
                Why Gaussian Splatting is important is that the 3dgs scenes are absolutely beautiful or to put it in order words, very photo-realistic. Right now everything we envision to be in VR is rather more &quot;roblox&quot; quality instead of real life but with 3dgs it is capable of making real life scenes which is extremely important for VR.
              </p>
              <p>
                A lot of current VR experiences still rely on traditional 3D models, which often simplify geometry and textures to keep performance high. This can sometimes make environments feel less realistic. Gaussian Splatting changes that by reconstructing scenes directly from real-world images, preserving fine details, lighting, and subtle visual cues that are hard to model by hand.
              </p>
              <p>
                Because of this, it has strong potential for VR. It allows for environments that feel more like you&apos;re actually inside a real place rather than inside a rendered approximation. That level of realism is important for things like virtual tourism, training simulations, and immersive storytelling.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="w-full max-w-4xl h-[350px] border-3 border-[#FFFDD0]/50 bg-[#112236] flex flex-col items-center justify-center relative mt-4 rounded-xl border-dashed">
            <span className="text-lg text-[#28FFE5] font-bold mb-2">IMAGE BOX: REALISM IN VR</span>
            <span className="text-sm text-gray-400 max-w-md text-center px-4">
              Show a comparison or a split screen: &quot;Typical VR (Roblox/Low Poly)&quot; vs &quot;3DGS VR (Photorealistic details)&quot;. This visually anchors your point about why 3DGS is a game changer for immersion.
            </span>
          </div>
        </section>

        <div className="w-full border-b border-[#FFFDD0]/20 my-4"></div>

        {/* =========================================
            OBJECTIVE
        ========================================= */}
        <section id="objective" className="w-full flex flex-col gap-6 scroll-mt-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-[#FFFDD0] mb-4">Objective</h2>
            <div className="text-xl leading-relaxed text-[#28FFE5] p-6 border-3 border-[#28FFE5]/30 rounded-xl bg-[#28FFE5]/5 font-medium">
              <p>
                My main objective with 3DGS was to take an existing model from the web (specifically, a 3DGS model of a teddy bear) and figure out how to implement it into our existing VR environment in Unity. I wanted to see if it would work performance-wise and how we could segment it.
              </p>
            </div>
          </div>
        </section>

        <div className="w-full border-b border-[#FFFDD0]/20 my-4"></div>

        {/* =========================================
            SEGMENTATION
        ========================================= */}
        <section id="segmentation" className="w-full flex flex-col gap-6 scroll-mt-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-[#FFFDD0] mb-4">Segmentation</h2>
            <div className="text-lg leading-relaxed text-gray-200 space-y-4">
              <p>
                [Placeholder Text: Explain the challenge of cutting out a specific object from a massive cloud of overlapping splats. Since you used a teddy bear model from the web, talk about how you approached isolating the teddy bear from its background environment.]
              </p>
            </div>
          </div>
          
          {/* Image Placeholder */}
          <div className="w-full max-w-4xl h-[300px] border-3 border-[#FFFDD0]/50 bg-[#112236] flex flex-col items-center justify-center relative mt-2 rounded-xl border-dashed">
            <span className="text-lg text-[#28FFE5] font-bold mb-2">IMAGE BOX: THE TEDDY BEAR</span>
            <span className="text-sm text-gray-400 max-w-md text-center px-4">
              Show the original 3DGS scene you found on the web, and then show the isolated/segmented teddy bear extracted from it.
            </span>
          </div>
        </section>

        {/* =========================================
            UNITY INTEGRATION
        ========================================= */}
        <section id="unity" className="w-full flex flex-col gap-6 scroll-mt-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-[#FFFDD0] mb-4">Unity Integration</h2>
            <div className="text-lg leading-relaxed text-gray-200 space-y-4">
              <p>
                [Placeholder Text: Detail the process of importing the segmented teddy bear into Unity. Did it work performance-wise like you hoped? Talk about any framerate issues, optimizations you had to do, or how it felt to see the photorealistic bear in a VR headset.]
              </p>
            </div>
          </div>

          {/* GIF / Video Placeholder */}
          <div className="w-full max-w-4xl h-[400px] border-3 border-[#FFFDD0]/50 bg-[#112236] flex flex-col items-center justify-center relative mt-2 rounded-xl border-dashed">
            <span className="text-lg text-[#28FFE5] font-bold mb-2">VIDEO / GIF BOX: TEDDY BEAR IN UNITY VR</span>
            <span className="text-sm text-gray-400 max-w-md text-center px-4">
              A short video or looping GIF of the teddy bear splat model successfully sitting inside the Unity VR scene. Showing it from different angles proves that it works well in a 3D spatial environment.
            </span>
          </div>
        </section>

        {/* =========================================
            SAM 3D
        ========================================= */}
        <section id="sam-3d" className="w-full flex flex-col gap-6 scroll-mt-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-[#FFFDD0] mb-4">Sam 3D Custom Models</h2>
            <div className="text-lg leading-relaxed text-gray-200 space-y-4">
              <p>
                [Placeholder Text: After experimenting with the pre-made teddy bear, you shifted to making your own models using SAM 3D (Segment Anything Model). Explain how SAM 3D works and how you used it to generate or segment your own custom splats instead of relying on internet assets.]
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="w-full max-w-4xl h-[300px] border-3 border-[#FFFDD0]/50 bg-[#112236] flex flex-col items-center justify-center relative mt-2 rounded-xl border-dashed">
            <span className="text-lg text-[#28FFE5] font-bold mb-2">IMAGE BOX: YOUR CUSTOM MODEL</span>
            <span className="text-sm text-gray-400 max-w-md text-center px-4">
              Show an image of the custom model you made with SAM 3D. Highlight the UI or the selection mask to show your progression from using a pre-made asset to generating your own.
            </span>
          </div>
        </section>

        <div className="w-full border-b border-[#FFFDD0]/20 my-4"></div>

        {/* =========================================
            CHALLENGES & LEARNINGS
        ========================================= */}
        <section id="challenges" className="w-full flex flex-col gap-6 scroll-mt-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-[#FFFDD0] mb-4">Challenges & Learnings</h2>
            <p className="text-lg leading-relaxed text-gray-200 mb-6">
              [Placeholder Text: Talk about the core performance insights you gained from pulling the teddy bear into Unity VR. What were the biggest hurdles when trying to transition from the teddy bear asset to making your own models with SAM 3D?]
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-3 border-[#FFFDD0]/30 p-6 rounded-xl">
                <h3 className="text-[#28FFE5] font-bold text-xl mb-2">Performance Optimization</h3>
                <p className="text-gray-300">
                  [Placeholder: E.g., Testing the teddy bear in VR revealed that rendering X million splats at 90fps is heavy. I had to learn how to aggressively cull unseen splats...]
                </p>
              </div>
              <div className="border-3 border-[#FFFDD0]/30 p-6 rounded-xl">
                <h3 className="text-[#28FFE5] font-bold text-xl mb-2">Generating Custom Models</h3>
                <p className="text-gray-300">
                  [Placeholder: E.g., The workflow shift from downloading a premade asset to mapping 2D segmentations in SAM 3D space was a massive technical hurdle...]
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full border-b border-[#FFFDD0]/20 my-4"></div>

        {/* =========================================
            CONCLUSION
        ========================================= */}
        <section id="conclusion" className="w-full flex flex-col gap-6 scroll-mt-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-[#FFFDD0] mb-4">Conclusion</h2>
            <div className="text-lg leading-relaxed text-gray-200 space-y-4">
              <p>
                [Placeholder Text: Wrap up the exploration. Did you successfully achieve the objective? How does this workflow impact the lab&apos;s future VR projects? Reflect on the future of 3DGS in spatial computing.]
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="w-full max-w-4xl h-[450px] border-3 border-[#FFFDD0] bg-[#112236] flex flex-col items-center justify-center relative mt-4 group">
            <span className="text-xl text-[#28FFE5] font-bold mb-2">IMAGE BOX: FINAL DEMO SHOWCASE</span>
            <span className="text-sm text-gray-400 max-w-md text-center px-4">
              A large, beautiful high-res image or video showing the final result. You can show the teddy bear running smoothly in VR, or show off the custom SAM 3D model you created.
            </span>
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
              <Image src={lightboxSrc} alt="Enlarged view" width={800} height={1720} className="w-full h-auto rounded-[2rem] bg-white object-contain max-h-[80vh]" />
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">Click anywhere to close</p>
          </div>
        </div>
      )}
    </div>
  );
}