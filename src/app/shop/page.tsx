"use client";

import Image from "next/image";
import Link from 'next/link';

export default function About() {
  return (
<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:pt-14 font-[family-name:var(--font-geist-sans)]">
<header className="text-gray-600 body-font w-full flex flex-wrap flex-col md:flex-row items-center">
  <div className="w-full flex flex-wrap p-3 flex-col md:flex-row items-center justify-end" style={{ backgroundColor: "#133630" }}>
  <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    Button
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </button>
</div>

<div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center p-3">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link href="/" className="ml-8 mr-8 hover:text-gray-900">Home</Link>
            <Link href="/about" className="ml-8 mr-8 hover:text-gray-900">About Us</Link>
            <Link href="/shop" className="ml-8 mr-8 hover:text-gray-900">Shop</Link>
          </nav>

          <Link href="/" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb- md:mb-0">
            <Image src="/logo/image.png" alt="Logo" className="w-100 h-12 object-cover" />
          </Link>

          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
              <Link href="/collections" className="mr-8 hover:text-gray-900">Collections</Link>
              <Link href="/contact" className="ml-8 mr-2 hover:text-gray-900">Contact Us</Link>
            </nav>
          </div>
        </div>
</header>



<br></br>

<footer className="text-gray-600 body-font w-full flex flex-wrap flex-col md:flex-row items-center border-t border-black">
<div className="container px-5 py-24 pt-30 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image src="/logo/logo2.png" alt="Logo" className="w-100 h-16 object-cover" />
      </a>
      <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>

  <div className="bg-[#133630] w-full py-4">
  <div className="container mx-auto flex flex-wrap items-center justify-between px-6">
  
    {/* Left Side - Text */}
    <p className="text-gray-500 text-sm text-center sm:text-left">
      ©2025 DarkModeSolutions
      <a href="https://twitter.com/knyttneve" className="text-gray-400 ml-1" target="_blank" rel="noopener noreferrer">
        @darkmodesolutions
      </a>
    </p>

    {/* Right Side - Social Icons */}
    <span className="inline-flex space-x-4">
      <a className="text-gray-400 hover:text-white transition">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="text-gray-400 hover:text-white transition">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="text-gray-400 hover:text-white transition">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="text-gray-400 hover:text-white transition">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>

  </div>
</div>
</footer>
    </div>
  );
}
