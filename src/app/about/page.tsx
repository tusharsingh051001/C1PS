"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:pt-14 bg-white font-[family-name:var(--font-geist-sans)]">
<header className="text-gray-600 body-font w-full flex flex-wrap flex-col md:flex-row items-center">
  <div className="w-full flex flex-wrap p-3 flex-col md:flex-row items-center justify-end font-bloverly" style={{ backgroundColor: "#4a0600" }}>
  <div className="flex space-x-6 pr-10">
      {/* Profile Icon */}
      <button aria-label="Profile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Head */}
          <circle cx="12" cy="8" r="3" />
          {/* Shoulders */}
          <path d="M6 20c0-3 3-5 6-5s6 2 6 5" />
        </svg>
      </button>

      {/* Search Icon */}
      <button aria-label="Search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Circle lens */}
          <circle cx="11" cy="11" r="7" />
          {/* Handle */}
          <line x1="16.5" y1="16.5" x2="20" y2="20" />
        </svg>
      </button>

      {/* Bag Icon */}
      <button aria-label="Cart/Bag">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Bag Body */}
          <path d="M6 7h12v12H6z" />
          {/* Handle */}
          <path d="M9 7a3 3 0 0 1 6 0" />
        </svg>
      </button>
    </div>
</div>

<div className="container mx-auto flex items-center justify-between bg-white p-3 font-bloverly">
  {/* Left Navigation */}
  <nav className="flex items-center space-x-12">
    <Link href="/" className="hover:text-gray-900 font-cormorant font-bold text-2xl">Home</Link>
    <Link href="/about" className="hover:text-gray-900 font-cormorant font-bold text-2xl">About Us</Link>
    <Link href="/shop" className="hover:text-gray-900 font-cormorant font-bold text-2xl">Shop</Link>
  </nav>

  {/* Logo (Centered) */}
  <Link href="/" className="flex justify-center">
    <div className="relative w-48 h-16">
      <Image 
        src="/logo/image.png"
        alt="Logo"
        layout="intrinsic"
        width={200}
        height={70}
        className="object-contain"
      />
    </div>
  </Link>

  {/* Right Navigation */}
  <nav className="flex items-center space-x-12">
    <Link href="/collections" className="hover:text-gray-900 font-cormorant font-bold text-2xl">Collections</Link>
    <Link href="/contact" className="hover:text-gray-900 font-cormorant font-bold text-2xl">Contact Us</Link>
  </nav>
</div>
</header>
<div className="w-screen bg-white">
  <div className="w-full mx-auto items-center">
    <section className="w-full pb-10">
              <div className="relative w-full h-screen overflow-hidden">
                <Image
                  src="/slides/slide1.jpeg"
                  alt="Slide 1"
                  layout="fill"
                  className="object-cover"
                />
              </div>
            </section>
    <div className="text-center w-full md:text-left p-10">
    <h2 className="text-center font-cormorant text-3xl md:text-4xl font-semibold my-12">About Us</h2>
      <p className="text-gray-700 text-2xl font-cormorant leading-relaxed mb-4">
        <strong>Srimaya</strong> is a player-based brand established in 2004 with an aim to unearth beauty in the heart of the city of luxury and wearability. With designs inspired by monuments, historical literature, and heritage, it is a collection of femininity in all its glory. 
      </p>
      <p className="text-gray-700 text-2xl font-cormorant leading-relaxed mb-4">
        Our product collection is an experience—straying from design trends into precious works of art that are <em>“Majestic, Timeless”</em>, says Pankaj Lakhotia, CEO.
      </p>
      <p className="text-gray-700 text-2xl font-cormorant leading-relaxed">
        With an in-house manufacturing unit, every piece is not only elegant, handcrafted, and quality-checked at least thrice, but curated for one’s individual taste. Our services go beyond the present times, with an entire range of Bridal, Wedding, Casual, Work-wear, Customisation, Re-Designing, Vintage Restorations, and Gold Conversions. 
        <br/>
        <em>Read more about our service here.</em>
      </p>
    </div>
    <div className="flex flex-col md:flex-row">
  {/* Left Block (Image) */}
  <div className="relative w-full md:w-1/2 h-80 md:h-screen overflow-hidden rounded-lg p-10">
    <Image
      src="/slides/slide1.jpeg"
      alt="Slide 1"
      fill
      className="object-cover"
    />
  </div>

  {/* Right Block (Text) */}
  <div className="w-full md:w-1/2 text-center md:text-left p-10">
    <h2 className="text-center font-cormorant text-3xl md:text-4xl font-bold my-12">
      Ideology
    </h2>
    <p className="text-gray-700 text-2xl font-cormorant leading-relaxed mb-4">
      <strong>Srimaya</strong> is a player-based brand established in 2004 with an aim to unearth beauty in the heart of the city of luxury and wearability. With designs inspired by monuments, historical literature, and heritage, it is a collection of femininity in all its glory.
    </p>
    <p className="text-gray-700 text-2xl font-cormorant leading-relaxed mb-4">
      Our product collection is an experience—straying from design trends into precious works of art that are <em>“Majestic, Timeless”</em>, says Pankaj Lakhotia, CEO.
    </p>
    <p className="text-gray-700 text-2xl font-cormorant leading-relaxed">
      With an in-house manufacturing unit, every piece is not only elegant, handcrafted, and quality-checked at least thrice, but curated for one’s individual taste. Our services go beyond the present times, with an entire range of Bridal, Wedding, Casual, Work-wear, Customisation, Re-Designing, Vintage Restorations, and Gold Conversions.
      <br />
      <em>Read more about our service here.</em>
    </p>
  </div>
</div>
  </div>
</div>



<br></br>

<footer className="text-gray-600 bg-white body-font w-full flex flex-wrap flex-col md:flex-row items-center border-t border-black">
<div className="container mx-auto px-5 py-8 flex flex-wrap md:flex-nowrap items-center justify-between">
  <div className="w-[320px] h-[260px] flex items-center justify-center mb-4 md:mb-0">
    <a className="flex items-center justify-center">
    <Image 
      src="/logo/logo2.png" 
      alt="Logo" 
      width={320} 
      height={260} 
      className="object-contain" 
    />    
    </a>
  </div>
  <div className="flex flex-grow justify-evenly w-full items-center font-cormorant">
    <div className="text-center md:text-left">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 font-bloverly">CATEGORIES</h2>
      <nav className="list-none space-y-1">
        <li><a href="#" className="text-gray-600 hover:text-gray-800">First Link</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-800">Second Link</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-800">Third Link</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-800">Fourth Link</a></li>
      </nav>
    </div>

    <div className="text-center md:text-left font-cormorant">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 font-bloverly">CATEGORIES</h2>
      <nav className="list-none space-y-1">
        <li><a href="#" className="text-gray-600 hover:text-gray-800">First Link</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-800">Second Link</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-800">Third Link</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-800">Fourth Link</a></li>
      </nav>
    </div>

    <div className="text-center md:text-left max-w-xs pt-8">
      <h1 className="title-font font-semibold text-gray-900 tracking-widest text-xl mb-5 font-bloverly">Contact Us</h1>
      
      <div className="mb-4">
        <h3 className="text-black font-semibold text-lg font-bloverly">Address</h3>
        <p className="text-gray-600 text-sm font-cormorant">Our goal is to deliver high-quality solutions for our clients.</p>
      </div>
      
      <div className="mb-4">
        <h3 className="text-black font-semibold text-lg font-bloverly">Phone</h3>
        <p className="text-gray-600 text-sm font-cormorant">987654321</p>
      </div>
      
      <div className="mb-4">
        <h3 className="text-black font-semibold text-lg font-bloverly">Email</h3>
        <p className="text-gray-600 text-sm font-cormorant">gbwetgwetbwetbv</p>
      </div>
    </div>
  </div>
</div>
  <div className="bg-[#4a0600] w-full py-4">
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
