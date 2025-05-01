'use client';

import Link from 'next/link';

export default function Project1() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Project 1</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
        <p className="mb-4">
          Detailed description of Project 1. This is where you can provide information
          about the project, including its purpose, technologies used, challenges faced,
          and solutions implemented.
        </p>
        
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Technologies Used</h3>
          <ul className="list-disc pl-5">
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Other technologies...</li>
          </ul>
        </div>
        
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Key Features</h3>
          <ul className="list-disc pl-5">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}