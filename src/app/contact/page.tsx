"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhone] = useState("");
  const [Reason, setReason] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess("");
  
    const formData = {
      Name,
      Email,
      PhoneNumber,
      Reason,
    };
  
    try {
      const res = await fetch("http://localhost:1337/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });
      const json = await res.json();
      if (res.status === 201) {
        setSuccess("Form submitted successfully!");
      } else {
        throw new Error(json.error?.message || "Failed to submit enquiry");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };
  
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:pt-14 font-[family-name:var(--font-geist-sans)]">

      {/* Banner for Success Message */}
      {success && (
        <div className="fixed top-0 left-0 w-full bg-[#052715] text-white p-4 text-center z-50">
          {success}
        </div>
      )}
      
      <header className="text-gray-600 body-font w-full flex flex-wrap flex-col md:flex-row items-center">
        <div className="w-full flex flex-wrap p-3 flex-col md:flex-row items-center justify-end font-bloverly" style={{ backgroundColor: "#4a0600" }}>
          <Link href="/login" className="hover:text-gray-900 text-2xl">Home</Link>
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

      {/* Hero Section */}
      <section className="text-gray-600 body-font w-full flex flex-wrap flex-col md:flex-row items-center">
        <div className="w-full flex items-center justify-center bg-white">
          <div className="relative w-full h-[950px] bg-white flex items-center justify-center shadow-lg overflow-hidden">
            <Image src="/slides/slide3.jpeg" alt="Slide 1" fill className="w-full rounded-lg" />
          </div>
        </div>

        {/* About & Contact Section */}
        <div className="min-h-screen bg-white flex items-center justify-center py-16 px-4 p-10 pl-20 pr-20 w-full">
          <div className="w-full p-20 grid grid-cols-1 md:grid-cols-2 gap-40">
            <div className="bg-white text-gray-800">
              <div className="mb-6">
                <h3 className="text-[#4a0600] uppercase tracking-wide text-sm font-semibold mb-1">Contact Information</h3>
                <h1 className="text-4xl font-bold font-cormorant">Srimaya</h1>
                <p className="text-gray-700 mt-3 font-cormorant font-semibold">
                  B-3, Spring Valley, Spring Lane, Green Avenue, 
                  <br />
                  Vasant Kunj, New Delhi -110070
                </p>
              </div>
              <div className="mb-6">
                <p className="font-semibold">
                  <span className="mr-2">Phone Number:</span>+91 9899900486
                </p>
                <p className="mt-2 font-semibold">
                  <span className="mr-2">Email:</span>contact@Srimaya.in
                </p>
              </div>
              <hr className="my-6 border-gray-500" />
              <div className="text-center">
                <h2 className="text-3xl font-bold font-cormorant tracking-wide">Srimaya</h2>
                <p className="italic text-gray-700 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, repellendus.
                </p>
                <p className="text-gray-700 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, repellendus.
                </p>
                <p className="text-gray-700 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, repellendus.
                </p>
              </div>
            </div>

            <div className="bg-[#4a0600] text-white p-8 rounded-lg shadow-lg w-full">
              <h3 className="text-sm text-gray-400 uppercase tracking-wide font-semibold mb-2 font-cormorant">Contact Form</h3>
              <h2 className="text-3xl font-semibold mb-6 font-cormorant">Let's Start A Conversation</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded text-black"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded text-black"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full p-3 border border-gray-300 rounded text-black"
                    value={PhoneNumber}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-1">Reason</label>
                  <input
                    type="text"
                    placeholder="Reason for enquiry"
                    className="w-full p-3 border border-gray-300 rounded text-black"
                    value={Reason}
                    onChange={(e) => setReason(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  onClick={() => console.log("Button clicked!")}
                  className="w-full bg-[#c1ab8f] text-black py-3 rounded-md text-lg font-semibold transition hover:bg-[#b49a7e]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

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
