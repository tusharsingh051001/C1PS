"use client";

import { useState, useEffect, useCallback} from "react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";


export default function Home() {

  const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
    "/images/slide4.jpg",
  ];
  
  const slides = [
    "/slides/slide1.jpeg",
    "/slides/slide2.jpeg",
    "/slides/slide3.jpeg",
    "/slides/slide4.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);



  return (
<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:pt-14 font-[family-name:var(--font-geist-sans)]">
<header className="text-gray-600 body-font w-full flex flex-wrap flex-col md:flex-row items-center">
  <div className="w-full flex flex-wrap p-3 flex-col md:flex-row items-center justify-end font-bloverly" style={{ backgroundColor: "#4a0600" }}>
  <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    Button
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </button>
</div>

<div className="container mx-auto flex items-center justify-between bg-white p-3 font-bloverly">
  {/* Left Navigation */}
  <nav className="flex items-center space-x-12">
    <Link href="/" className="hover:text-gray-900 text-2xl">Home</Link>
    <Link href="/about" className="hover:text-gray-900 text-2xl">About Us</Link>
    <Link href="/shop" className="hover:text-gray-900 text-2xl">Shop</Link>
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
    <Link href="/collections" className="hover:text-gray-900 text-2xl">Collections</Link>
    <Link href="/contact" className="hover:text-gray-900 text-2xl">Contact Us</Link>
  </nav>
</div>
</header>

<section className="text-gray-600 body-font w-full flex flex-wrap flex-col md:flex-row items-center">
<div className="w-full flex items-center justify-center bg-white">
  <div className="relative w-full h-[850px] bg-white flex items-center justify-center shadow-lg overflow-hidden">
    {slides.map((slide, index) => (
      <Image
        key={index}
        src={slide}
        alt="Slide"
        fill
        className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-1000 ease-in-out ${
          index === currentIndex ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}

    {/* View All Button */}
    <div className="absolute bottom-10 right-10 bg-[#052715] text-white text-2xl px-7 py-5 rounded-xl font-cormorant">
      View All Collections
    </div>
  </div>
</div>

<div className="w-full h-screen flex items-center justify-center bg-white pt-8">
  <div className="relative w-full h-full bg-white flex items-center justify-center shadow-lg">
    {/* Watermark Background */}
    <div className="absolute inset-0 flex items-center justify-center opacity-50 pointer-events-none font-snell">
  <div className="text-gray-300 text-18xl font-bold tracking-widest whitespace-nowrap animate-scroll">
    Srimaya
  </div>
</div>
    {/* Slideshow Container */}
    <div className="relative w-[400px] md:w-[500px] lg:w-[600px] h-full overflow-hidden">
      {slides.map((slide, index) => (
        <Image
          key={index}
          src={slide}
          alt="Slide"
          fill
          className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

  {/* View All Button */}
  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-[#052715] text-white px-7 py-4 rounded-lg font-cormorant text-xl font-cormorant">
    View All
  </div>
  </div>

    {/* Navigation Buttons */}
    <button
      onClick={prevSlide}
      className="absolute left-10 text-gray-600 bg-white border border-gray-400 p-3 rounded-full shadow-md hover:bg-gray-100 transition"
    >
      ←
    </button>
    <button
      onClick={nextSlide}
      className="absolute right-10 text-gray-600 bg-white border border-gray-400 p-3 rounded-full shadow-md hover:bg-gray-100 transition"
    >
      →
    </button>

    {/* Pagination Dots */}
    <div className="absolute bottom-8 flex space-x-2">
      {images.map((_, index) => (
        <div
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`w-3 h-3 rounded-full cursor-pointer ${
            currentIndex === index ? "bg-gray-800" : "bg-gray-400"
          }`}
        />
      ))}
    </div>
  </div>
</div>

<div className="flex flex-col md:flex-row items-center justify-center bg-white py-12 px-6 relative">
  <div className="min-h-screen flex justify-center items-center w-full bg-cover bg-center bg-red relative z-0">
  <Image src="/slides/slide3.jpeg" alt="Slide 1" fill className="w-full rounded-lg" />
   </div>
  <div className="md:w-3/4 w-full flex flex-col bg-white items-center md:items-start text-center md:text-left px-10 py-16 rounded-lg relative z-10 md:-ml-12 border">
  <h2 className="text-6xl font-semibold mb-4 text-black font-snell text-center md:self-center">
    About Us
  </h2>
  <p className="text-black mb-7 font-cormorant text-2xl">
    Timeless Elegance, Crafted for the Modern Woman:
    <br />
    Based out of New delhi, Srimaya celebrates the fusion of rich heritage and contemporary style. Our collection of jewelry is designed to captivate and empower the modern woman, blending traditional ethnic artistry with the sophistication of modern trends. Each piece is a masterpiece—handcrafted by skilled artisans using high-quality materials, with intricate detailing that echoes Indias vibrant culture and contemporary elegance.
    <br />
    From statement-making necklaces and earrings to delicately crafted bangles and rings, every piece in our collection is a reflection of timeless beauty and modern sensibility. Whether you are looking for the grandeur of traditional Indian designs or the sleek simplicity of minimalist modern jewelry, we offer a diverse range that complements every occasion and personal style.
    <br />
    At Srimaya, we believe that jewelry is not just an accessory, but a form of self-expression. Our creations are made for women who embrace both tradition and innovation, exuding confidence and grace with every wear.
    <br />
    Explore the perfect balance of the past and the future, with jewelry that transcends time and trends, designed to be cherished for generations.
  </p>
  <button className="bg-[#052715] text-white py-2 px-6 rounded-md hover:bg-gray-800 transition font-cormorant">
    BROWSE
  </button>
</div>

</div>

<div className="relative w-full overflow-hidden">
<div className="text-black-500 bg-white text-3xl font-snell tracking-widest whitespace-nowrap animate-scroll">
    Srimaya For the divine feminine in you...
  </div>
  </div>




  <div className="py-12 bg-gray-50 w-full">
    <div className="flex w-full">
      <div className="w-1/2">
        <h2 className="text-6xl font-semibold mb-4 text-black font-snell text-center md:self-center">
          Testimonials
        </h2>
      </div>
      <div className="w-1/2 px-30 pr-10">
        <p className="text-2xl mb-4 text-black font-snell text-center md:self-center">
          Cum culpa iure minima doloremque nam natus assumenda error alias aliquid saepe.<br/>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias debitis numquam minus, 
          repellendus qui saepe ut inventore exercitationem molestiae
        </p>
      </div>
    </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8 w-7/8 mx-auto">
        {/* Block 1 - Large Header Block */}
        <div className="bg-[#4a0600] text-white p-10 md:p-16 flex items-center justify-center text-center md:col-span-1 col-span-2 rounded-lg">
          <h2 className="text-4xl font-light font-cormorant">Sriyama</h2>
        </div>

        {/* Block 2 - Quote Block */}
        <div className="bg-[#4a0600] text-white p-6 md:p-10 flex items-center justify-center text-center rounded-lg shadow-lg">
          <p className="text-lg font-cormorant">
          &quot;Embrace timeless elegance with our exclusive collection.&quot;
          </p>
        </div>

        {/* Block 3 - Tall Centerpiece Block */}
        <div className="bg-[#4a0600] text-white p-8 flex items-center justify-center text-center md:row-span-2 min-h-[15rem] md:h-auto rounded-lg">
          <h2 className="text-3xl font-light font-cormorant">
          &quot;Cum culpa iure minima doloremque nam natus assumenda error alias aliquid saepe.&quot;
          </h2>
        </div>

        {/* Block 4 - Additional Tall Centerpiece Block */}
        <div className="bg-[#4a0600] text-white p-8 flex items-center justify-center text-center md:row-span-2 min-h-[15rem] md:h-auto rounded-lg">
          <h2 className="text-3xl font-light font-cormorant">
          &quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, ut illum.&quot;
          </h2>
        </div>

        {/* Block 5 - Minimalist Quote Block */}
        <div className="bg-[#4a0600] text-white p-4 md:p-8 flex items-center justify-center text-center rounded-lg min-h-[15rem] ">
          <h2 className="text-2xl font-light font-cormorant">
          &quot;Indulge in luxurious handcrafted jewelry designed for special moments.&quot;
          </h2>
        </div>

        {/* Block 6 - Newly Added Middle Block */}
        <div className="bg-[#4a0600] text-white p-6 md:p-12 flex items-center justify-center text-center rounded-lg shadow-md col-span-2 md:col-span-3">
          <p className="text-xl font-medium font-cormorant">
          &quot;Discover unique craftsmanship where tradition meets modern artistry.&quot;
          </p>
        </div>

        {/* Block 7 - Wide Featured Text Block */}
        <div className="bg-[#4a0600] text-white p-12 flex items-center justify-center text-center md:col-span-2 rounded-lg">
          <h2 className="text-3xl font-cormorant">
            Weddings Style Lorem Ipsum Eveniet iste beatae minus omnis dolor recusandae.
          </h2>
        </div>

        {/* Block 8 - Square Decorative Block */}
        <div className="bg-[#4a0600] text-white p-6 flex items-center justify-center text-center rounded-lg shadow-lg">
          <p className="text-lg font-cormorant">
          &quot;Indulge in luxurious handcrafted jewelry designed for special moments.&quot;
          </p>
        </div>
      </div>
    </div>


  <style jsx>{`
    @keyframes scroll-left-to-right {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }

    .animate-scroll-left {
      animation: scroll-left-to-right 30s linear infinite;
    }

    @keyframes scroll {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }

    .animate-scroll {
      animation: scroll 30s linear infinite;
    }
  `}</style>
</section>

<br></br>

<footer className="text-gray-600 body-font w-full flex flex-wrap flex-col md:flex-row items-center border-t border-black">
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
