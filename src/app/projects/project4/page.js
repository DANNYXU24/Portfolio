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
    const sectionIds = ['overview', 'what-is', 'importance', 'objective', 'segmentation', 'unity', 'sam-3d', 'conclusion'];
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
            <div className="text-xl leading-relaxed text-[#FFFDD0] p-6 border-3 border-[#28FFE5]/30 rounded-xl bg-[#28FFE5]/5 font-medium">
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
                The first major challenge with using any downloaded 3DGS model is that it comes as a complete scene — background, foreground, and everything in between — all packed into a single <span className="text-[#FFFDD0] font-semibold">.ply file</span>. To place just the teddy bear into Unity, I needed to cleanly extract it from the surrounding environment without destroying any of the fine splat detail that makes 3DGS look so good.
              </p>
              <p>
                To do this, I used the <span className="text-[#FFFDD0] font-semibold">Kiri Engine Blender Extension</span>, which lets you import and export .ply files directly inside Blender and renders the Gaussian splats as a visible point cloud. In this view, the entire scene appears as a dense cloud of <span className="italic text-[#FFFDD0]">orange dots</span>, where each dot represents one Gaussian point.
              </p>
              <p>
                My workflow had two main passes:
              </p>
            </div>

            {/* Step Cards */}
            <div className="flex flex-col gap-4 mt-6">
              <div className="border-3 border-[#FFFDD0]/30 p-6 rounded-xl flex gap-6 items-start">
                <div className="text-[#28FFE5] text-3xl font-bold shrink-0">01</div>
                <div>
                  <h3 className="text-xl font-bold text-[#FFFDD0] mb-2">The Big Crop</h3>
                  <p className="text-gray-300">
                    First, I did a rough, broad selection around the teddy bear — essentially boxing in the model and cutting away everything clearly outside of it. This immediately eliminated the bulk of the background points and gave me a much smaller, more manageable point cloud to work with.
                  </p>
                </div>
              </div>
              <div className="border-3 border-[#FFFDD0]/30 p-6 rounded-xl flex gap-6 items-start">
                <div className="text-[#28FFE5] text-3xl font-bold shrink-0">02</div>
                <div>
                  <h3 className="text-xl font-bold text-[#FFFDD0] mb-2">Fine-Grain Cleanup</h3>
                  <p className="text-gray-300">
                    After the initial crop, I zoomed in and manually deleted the remaining stray dots clinging to the edges of the model. This step was more intuitive than I expected — it&apos;s usually very clear which orange dots belong to the bear and which are leftover background noise. Throughout this process I regularly flipped back to the rendered view in Blender to verify that I hadn&apos;t accidentally removed any points that were part of the actual model.
                  </p>
                </div>
              </div>
              <div className="border-3 border-[#FFFDD0]/30 p-6 rounded-xl flex gap-6 items-start">
                <div className="text-[#28FFE5] text-3xl font-bold shrink-0">03</div>
                <div>
                  <h3 className="text-xl font-bold text-[#FFFDD0] mb-2">Export</h3>
                  <p className="text-gray-300">
                    Once I was satisfied with the segmentation, Kiri Engine allowed me to export the cleaned model back out as a <span className="text-[#FFFDD0] font-semibold">.ply file</span> — ready to be imported into Unity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Placeholder */}
          <div className="w-full max-w-4xl h-[300px] border-3 border-[#FFFDD0]/50 bg-[#112236] flex flex-col items-center justify-center relative mt-2 rounded-xl border-dashed">
            <span className="text-lg text-[#28FFE5] font-bold mb-2">IMAGE BOX: SEGMENTED TEDDY BEAR</span>
            <span className="text-sm text-gray-400 max-w-md text-center px-4">
              Show the cleaned point cloud with only the teddy bear remaining, or the final rendered result.
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
                With the teddy bear cleanly segmented into a standalone <span className="text-[#FFFDD0] font-semibold">.ply file</span>, the next challenge was getting it into Unity — where our lab&apos;s entire VR environment lived. This turned out to be a significant technical hurdle right from the start: <span className="font-semibold text-[#FFFDD0]">Unity has no native support for 3D Gaussian Splatting.</span> The engine doesn&apos;t know what a splat is, how to sort them by depth, or how to composite them correctly against the rest of the scene.
              </p>
              <p>
                That meant I needed an external renderer — a custom Unity package that could take a .ply splat file and handle all of that work: loading the Gaussian data, sorting splats back-to-front relative to the camera each frame, and blending them into the scene with the correct alpha compositing. I evaluated several community-built renderers and ultimately landed on{' '}
                <a
                  href="https://github.com/wuyize25/gsplat-unity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#28FFE5] font-semibold underline underline-offset-4 hover:text-[#FFFDD0] transition-colors duration-200"
                >
                  wuyize25&apos;s gsplat-unity
                </a>
                , which proved to be the most stable and visually accurate of the options I tried.
              </p>
            </div>

            {/* Performance Results */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-[#FFFDD0] mb-4">Performance Results</h3>
              <p className="text-lg leading-relaxed text-gray-200 mb-6">
                Once the renderer was set up and the teddy bear was loaded into the VR scene, I ran a series of stress tests to understand exactly where the performance ceiling was. The results were revealing:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Good performance card */}
                <div className="border-3 border-[#28FFE5] bg-[#28FFE5]/5 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-[#28FFE5]"></div>
                    <span className="text-[#28FFE5] font-bold text-lg uppercase tracking-wider">Smooth</span>
                  </div>
                  <div className="text-5xl font-bold text-[#FFFDD0] mb-1">10 <span className="text-2xl">models</span></div>
                  <div className="text-gray-400 text-base mb-3">150,000 splats each</div>
                  <div className="text-3xl font-bold text-[#28FFE5] mb-2">1,500,000 <span className="text-lg font-normal">total splats</span></div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Runs without any noticeable lag in VR. Frame rate stays comfortable and the experience feels fully immersive.
                  </p>
                </div>
                {/* Bad performance card */}
                <div className="border-3 border-red-500/60 bg-red-950/20 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-red-400 font-bold text-lg uppercase tracking-wider">Heavy Lag</span>
                  </div>
                  <div className="text-5xl font-bold text-[#FFFDD0] mb-1">100 <span className="text-2xl">models</span></div>
                  <div className="text-gray-400 text-base mb-3">150,000 splats each</div>
                  <div className="text-3xl font-bold text-red-400 mb-2">15,000,000 <span className="text-lg font-normal">total splats</span></div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Significant frame drops and lag. At this splat count, real-time VR rendering becomes infeasible without major optimization strategies.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-gray-200 mt-6">
                The core bottleneck is the per-frame depth sorting that Gaussian Splatting requires. Unlike traditional meshes, splats can&apos;t be pre-sorted at load time — every single frame, all visible splats must be re-sorted by distance from the current camera position so they blend correctly. At 1.5 million splats, the GPU handles this without issue. At 15 million, the sorting overhead alone overwhelms real-time rendering budgets, particularly at the 90fps target that VR demands to avoid motion sickness.
              </p>
              <p className="text-lg leading-relaxed text-gray-200">
                This finding was an important data point for the lab: 3DGS is absolutely viable for VR — but scene complexity needs to be carefully managed. Sparse, focused object placement (rather than room-scale splat environments) is the practical path forward at this stage.
              </p>

              {/* LOD Callout */}
              <div className="mt-6 p-6 border-l-4 border-[#FFFDD0]/40 bg-[#FFFDD0]/5 rounded-r-xl">
                <h4 className="text-lg font-bold text-[#FFFDD0] mb-2">Exploring LOD as a Solution</h4>
                <p className="text-gray-300 leading-relaxed">
                  One optimization I explored was <span className="text-[#FFFDD0] font-semibold">Level of Detail (LOD)</span> — the idea of rendering a lower-splat-count version of an object when it&apos;s far from the camera, and only loading the full-resolution version up close. This is a well-established technique in traditional 3D rendering and would theoretically cut the active splat count dramatically in a busy scene.
                </p>
                <p className="text-gray-300 leading-relaxed mt-3">
                  The problem: <span className="font-semibold text-[#FFFDD0]">Unity&apos;s built-in LOD system only works on meshes.</span> It has no awareness of Gaussian Splat objects at all, so there&apos;s no out-of-the-box way to hook into it. Implementing LOD for 3DGS would require building a custom system from scratch — managing multiple .ply files at different splat densities and writing logic to swap between them based on camera distance. That&apos;s a meaningful engineering effort and a natural next step for anyone looking to push 3DGS further into real-time VR at scale.
                </p>
              </div>
            </div>
          </div>

          {/* GIF / Video Placeholder */}
          <div className="w-full max-w-4xl h-[400px] border-3 border-[#FFFDD0]/50 bg-[#112236] flex flex-col items-center justify-center relative mt-2 rounded-xl border-dashed">
            <span className="text-lg text-[#28FFE5] font-bold mb-2">VIDEO / GIF BOX: TEDDY BEAR IN UNITY VR</span>
            <span className="text-sm text-gray-400 max-w-md text-center px-4">
              A short video or looping GIF of the teddy bear splat model sitting inside the Unity VR scene. Showing it from multiple angles proves the renderer is working correctly in 3D space.
            </span>
          </div>
        </section>

        {/* =========================================
            SAM 3D
        ========================================= */}
        <section id="sam-3d" className="w-full flex flex-col gap-6 scroll-mt-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-[#FFFDD0] mb-4">SAM3D — Training Our Own Models</h2>
            <div className="text-lg leading-relaxed text-gray-200 space-y-4">
              <p>
                The performance ceiling we hit in Unity led us to a new question: instead of downloading pre-made 3DGS models from the internet, what if we <span className="text-[#FFFDD0] font-semibold">trained our own</span>? If we could control the training process, we could deliberately cap the splat count — producing lighter models that would run smoothly at scale in VR without the lag issues we encountered.
              </p>
              <p>
                This is what brought us to <span className="text-[#FFFDD0] font-semibold">SAM3D</span>. SAM3D extends Meta&apos;s Segment Anything Model into 3D space, combining 2D segmentation masks with depth information to help isolate and reconstruct specific objects within a scene. Rather than treating the entire captured environment as one monolithic splat cloud, it uses SAM&apos;s powerful zero-shot segmentation to identify what belongs to the subject and what is background — giving the downstream 3DGS training process cleaner, more focused data to work with.
              </p>
            </div>

            {/* Workflow */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-[#FFFDD0] mb-4">The Workflow</h3>
              <p className="text-lg leading-relaxed text-gray-200 mb-6">
                I set up and integrated SAM3D directly onto the lab computer. The pipeline worked roughly like this:
              </p>
              <div className="flex flex-col gap-4">
                <div className="border-3 border-[#FFFDD0]/30 p-6 rounded-xl flex gap-6 items-start">
                  <div className="text-[#28FFE5] text-3xl font-bold shrink-0">01</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#FFFDD0] mb-2">Capture & Segmentation</h3>
                    <p className="text-gray-300">
                      We captured a set of images of the subject — in our case, a water bottle — from multiple angles. SAM3D then processed these frames, using its segmentation capability to separate the subject we wanted to model from the rest of the scene. This step produced a set of clean, masked image frames containing only the target object.
                    </p>
                  </div>
                </div>
                <div className="border-3 border-[#FFFDD0]/30 p-6 rounded-xl flex gap-6 items-start">
                  <div className="text-[#28FFE5] text-3xl font-bold shrink-0">02</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#FFFDD0] mb-2">Training in the Terminal</h3>
                    <p className="text-gray-300">
                      With the segmented frames ready, we kicked off the 3DGS training process via the terminal. Under the hood this runs an optimization loop — initializing a sparse point cloud from Structure-from-Motion, then progressively densifying and refining the Gaussian parameters (position, scale, rotation, color, and opacity) over thousands of iterations until the rendered views converge with the input images. Training ran directly on the lab machine&apos;s GPU.
                    </p>
                  </div>
                </div>
                <div className="border-3 border-[#FFFDD0]/30 p-6 rounded-xl flex gap-6 items-start">
                  <div className="text-[#28FFE5] text-3xl font-bold shrink-0">03</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#FFFDD0] mb-2">Evaluating the Output</h3>
                    <p className="text-gray-300">
                      The trained model was exported as a .ply file and reviewed in Blender. Here we ran into the core limitation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results & Honest Assessment */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-[#FFFDD0] mb-4">Honest Assessment</h3>
              <p className="text-lg leading-relaxed text-gray-200 mb-4">
                SAM3D, for our use case, was not the right tool. The output models were inconsistent — the reconstructed water bottle, for example, lost fine surface details that were clearly visible in the original photos. Highlights, labels, and subtle curvature that make an object look real were blurred or missing entirely. The renders looked like 3DGS, but not like the object.
              </p>

              <div className="p-6 border-3 border-red-500/40 bg-red-950/20 rounded-xl mb-6">
                <h4 className="text-lg font-bold text-[#FFFDD0] mb-2">The Core Trade-off We Discovered</h4>
                <p className="text-gray-300 leading-relaxed">
                  Our original goal was to train models with a <span className="font-semibold text-[#FFFDD0]">capped splat count</span> — fewer Gaussians means less GPU overhead in Unity, which would solve our VR performance problem. But we quickly realized this creates a fundamental contradiction: <span className="text-red-400 font-semibold">reducing splat count directly reduces quality.</span> Fewer Gaussians means less capacity to represent fine surface detail, subtle lighting variation, and sharp edges. The model becomes an approximation of the object rather than a faithful reconstruction.
                </p>
                <p className="text-gray-300 leading-relaxed mt-3">
                  That defeats the entire point of using 3DGS in the first place. The technology&apos;s value proposition is photorealism — the ability to place something that looks indistinguishable from reality into a VR environment. A low-splat model just gives you another low-quality 3D asset, something traditional mesh-based workflows already do far more efficiently.
                </p>
              </div>

              <p className="text-lg leading-relaxed text-gray-200">
                This was a genuinely useful finding. It confirmed that the performance-quality trade-off in 3DGS is not something you can engineer around simply by limiting training parameters — it requires a fundamentally different approach, whether that&apos;s hardware improvements, better real-time splat culling algorithms, or the custom LOD system discussed earlier.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="w-full max-w-4xl h-[300px] border-3 border-[#FFFDD0]/50 bg-[#112236] flex flex-col items-center justify-center relative mt-2 rounded-xl border-dashed">
            <span className="text-lg text-[#28FFE5] font-bold mb-2">IMAGE BOX: TRAINED SAM3D OUTPUT</span>
            <span className="text-sm text-gray-400 max-w-md text-center px-4">
              Show the trained 3DGS output of the water bottle. The imperfections (blurry label, lost detail) actually tell a great story here.
            </span>
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
                This exploration confirmed something important: <span className="text-[#FFFDD0] font-semibold">3D Gaussian Splatting works.</span> We successfully segmented a real 3DGS model, imported it into Unity using a community renderer, and verified that it rendered correctly inside our VR environment. At a modest scale — 10 models, 1.5 million total splats — the experience was smooth and the photorealism was exactly what we hoped 3DGS could bring to VR.
              </p>
              <p>
                But the performance wall we hit at scale, and the dead end we reached with SAM3D, led us to a clear conclusion: <span className="text-[#FFFDD0] font-semibold">we could not continue with 3DGS at this time.</span> The bottleneck was not the technology itself — 3DGS is genuinely capable of producing real-time, photorealistic results. The bottleneck was Unity.
              </p>
            </div>

            {/* Key Takeaway Box */}
            <div className="mt-8 p-6 border-3 border-[#28FFE5]/40 bg-[#28FFE5]/5 rounded-xl">
              <h3 className="text-xl font-bold text-[#28FFE5] mb-3">A Unity Problem, Not a 3DGS Problem</h3>
              <p className="text-gray-300 leading-relaxed">
                Unity&apos;s rendering pipeline was not designed with Gaussian Splatting in mind. There is no native support — no built-in splat loader, no depth sorter, no LOD integration, and no optimized GPU path for the per-frame sorting that 3DGS demands. Every capability we used had to be sourced from community-built tools and bolted on. At low splat counts this works fine, but as scene complexity grows, the lack of engine-level support becomes the ceiling.
              </p>
              <p className="text-gray-300 leading-relaxed mt-3">
                By contrast, dedicated 3DGS viewers and web-based renderers handle millions of splats fluidly because they are architected specifically for this workload. Unity simply is not there yet — and until it is, deploying 3DGS at the scale a full VR environment demands is not practical within our lab&apos;s existing pipeline.
              </p>
            </div>

            <div className="text-lg leading-relaxed text-gray-200 space-y-4 mt-8">
              <p>
                This is not a permanent conclusion — it&apos;s a timing one. The 3DGS ecosystem is moving fast. Engine support is improving, community renderers are getting more performant, and hardware is catching up. When Unity ships first-class Gaussian Splat support — whether natively or through a mature, optimized plugin — the workflow we established here becomes immediately viable at full scale.
              </p>
              <p>
                For the lab, this exploration was still valuable. We now understand exactly where the limits are, what the data looks like at different splat budgets, and what a full integration pipeline from segmentation to VR actually involves. When the time is right to revisit 3DGS, we will have a significant head start.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="w-full max-w-4xl h-[450px] border-3 border-[#FFFDD0] bg-[#112236] flex flex-col items-center justify-center relative mt-4 group">
            <span className="text-xl text-[#28FFE5] font-bold mb-2">IMAGE BOX: FINAL DEMO SHOWCASE</span>
            <span className="text-sm text-gray-400 max-w-md text-center px-4">
              Show the teddy bear running smoothly inside your Unity VR environment. A clean, well-lit screenshot of the splat model in-scene is the best visual capstone for this case study.
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