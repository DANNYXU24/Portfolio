'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed((prev) => !prev);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="portfolio">
          <h2 className="text-2xl font-semibold mb-4">Danny Xu</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="p-4 border rounded shadow hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-medium">Project 1</h3>
              <p className="text-sm text-gray-600">Description of Project 1</p>
              <Link
                href="/projects/project1/"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Project
              </Link>
            </li>
            <li className="p-4 border rounded shadow hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-medium">Project 2</h3>
              <p className="text-sm text-gray-600">Description of Project 2</p>
              <Link
                href="/projects/project2/"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Project
              </Link>
            </li>
            <li className="p-4 border rounded shadow hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-medium">Project 3</h3>
              <p className="text-sm text-gray-600">Description of Project 3</p>
              <Link
                href="/projects/project3/"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Project
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
