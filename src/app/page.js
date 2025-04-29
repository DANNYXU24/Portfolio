'use client';

import { useState } from 'react';

export default function Home() {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed((prev) => !prev);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-semibold">Hello World</h1>
        <h2 className="text-2xl font-normal">My name is Danny Xu</h2>
        <h3 className="text-xl font-light">This is my github page</h3>
        <h4 className="text-lg font-thin">I am a software engineer</h4>
        <h5 className="text-base font-extralight">I am a software engineer</h5>

        <button
          className={`px-4 py-2 text-white rounded ${
            isRed ? 'bg-red-500' : 'bg-blue-500'
          }`}
          onClick={toggleColor}
        >
          Click me
        </button>
      </main>
    </div>
  );
}
