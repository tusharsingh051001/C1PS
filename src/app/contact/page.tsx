"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhone] = useState("");
  const [Reason, setReason] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess("");

    const formData = { Name, Email, PhoneNumber, Reason };

    try {
      const res = await fetch("http://localhost:1337/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
      });
      const json = await res.json();
      if (res.status === 201) {
        setSuccess("Form submitted successfully!");
      } else {
        throw new Error(json.error?.message || "Failed to submit enquiry");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        console.log(error)
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Success Banner */}
      {success && (
        <div className="fixed top-0 left-0 w-full bg-[#052715] text-white p-4 text-center z-50">
          {success}
        </div>
      )}

      {/* Header */}
      <header>
        {/* Top Bar */}
        <div className="bg-[#4a0600] p-3 flex justify-end">
          <Link href="/login" className="text-2xl text-white hover:text-gray-300">
            Home
          </Link>
        </div>
        {/* Main Navigation */}
        <div className="container mx-auto flex items-center justify-between bg-white p-3 font-bloverly">
          {/* Left Navigation */}
          <nav className="flex items-center space-x-12">
            <Link href="/" className="text-2xl hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-2xl hover:text-gray-900">
              About Us
            </Link>
            <Link href="/shop" className="text-2xl hover:text-gray-900">
              Shop
            </Link>
          </nav>
          {/* Logo */}
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
            <Link href="/collections" className="text-2xl hover:text-gray-900">
              Collections
            </Link>
            <Link href="/contact" className="text-2xl hover:text-gray-900">
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full">
          <div className="relative w-full h-[950px] shadow-lg overflow-hidden">
            <Image
              src="/slides/slide3.jpeg"
              alt="Slide 1"
              layout="fill"
              className="object-cover rounded-lg"
            />
          </div>
        </section>

        {/* About & Contact Section */}
        <section className="py-16 bg-white p-">
          <div className="container mx-auto px-4 p-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Contact Information */}
              <div className="text-gray-800">
                <div className="mb-6">
                  <h3 className="text-sm font-semibold font-cormorant uppercase tracking-wide text-[#4a0600]">
                    Contact Information
                  </h3>
                  <h1 className="text-4xl font-bold font-cormorant">Get in touch</h1>
                  <p className="mt-3 text-xl font-semibold font-cormorant text-gray-700">
                    B-3, Spring Valley, Spring Lane, Green Avenue, <br />
                    Vasant Kunj, New Delhi -110070
                  </p>
                </div>
                <div className="mb-6 font-cormorant text-xl font-semibold">
                  <p className="mt-2">
                    <span className="mr-2">Phone Number:</span>
                    +91 9899900486
                  </p>
                  <p className="mt-2">
                    <span className="mr-2">Email:</span>
                    contact@Srimaya.in
                  </p>
                </div>
                <hr className="my-6 border-gray-500" />
                <div className="font-cormorant">
                  <div className="relative flex justify-center items-center w-65 h-30 mx-auto pr-2">
                    <Image
                      src="/logo/image.png"
                      alt="Logo"
                      layout="intrinsic"
                      width={300}
                      height={90}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-3xl italic text-gray-700 font-semibold">
                    For the divine feminine in you....
                  </p>
                  <p className="mt-3 text-xl italic text-black-300 font-cormorant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis exercitationem, voluptatem tempore nulla quam quos
                    ex quia, optio harum doloribus est fugit ab. Ducimus dolorem
                    vitae aliquam, et accusamus laborum.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis soluta aperiam hic similique voluptatem ipsa aspernatur
                    qui suscipit quod dolores recusandae, ipsam aut? Quam molestiae
                    illo doloribus nesciunt aut quasi esse consectetur, reprehenderit
                    ducimus dicta dolorum voluptatum, consequuntur illum corporis.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-[#4a0600] text-white p-8 rounded-lg shadow-lg font-cormorant">
                <h3 className="mb-2 text-sm uppercase tracking-wide text-gray-400 font-semibold">
                  Contact Form
                </h3>
                <h2 className="mb-6 text-3xl font-semibold">
                  Let&apos;s Start A Conversation
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block mb-1 text-sm text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 text-black border border-gray-300 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-sm text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 text-black border border-gray-300 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-sm text-gray-400">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Your Phone Number"
                      value={PhoneNumber}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 text-black border border-gray-300 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-sm text-gray-400">
                      Reason
                    </label>
                    <input
                      type="text"
                      placeholder="Reason for enquiry"
                      value={Reason}
                      onChange={(e) => setReason(e.target.value)}
                      className="w-full p-3 text-black border border-gray-300 rounded"
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={() => console.log("Button clicked!")}
                    className="w-full py-3 text-lg font-semibold rounded-md bg-[#c1ab8f] text-black transition hover:bg-[#b49a7e]"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-black">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-5 py-8">
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
          <div className="flex flex-col md:flex-row flex-grow justify-evenly items-center font-cormorant">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="mb-3 text-sm tracking-widest text-gray-900 title-font font-medium">
                CATEGORIES
              </h2>
              <nav className="space-y-1">
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                  First Link
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                  Second Link
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                  Third Link
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                  Fourth Link
                </a>
              </nav>
            </div>
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="mb-3 text-sm tracking-widest text-gray-900 title-font font-medium">
                CATEGORIES
              </h2>
              <nav className="space-y-1">
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                  First Link
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                  Second Link
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                  Third Link
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                  Fourth Link
                </a>
              </nav>
            </div>
            <div className="max-w-xs pt-8 text-center md:text-left">
              <h1 className="mb-5 text-xl tracking-widest font-semibold title-font text-gray-900">
                Contact Us
              </h1>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-black">Address</h3>
                <p className="text-sm text-gray-600">
                  Our goal is to deliver high-quality solutions for our clients.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-black">Phone</h3>
                <p className="text-sm text-gray-600">987654321</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-black">Email</h3>
                <p className="text-sm text-gray-600">gbwetgwetbwetbv</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#4a0600] py-4">
          <div className="container mx-auto flex items-center justify-between px-6 flex-wrap">
            <p className="text-center text-sm text-gray-500 sm:text-left">
              ©2025 DarkModeSolutions
              <a
                href="https://twitter.com/knyttneve"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-gray-400"
              >
                @darkmodesolutions
              </a>
            </p>
            <span className="inline-flex space-x-4">
              <a className="transition hover:text-white text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="transition hover:text-white text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="transition hover:text-white text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="transition hover:text-white text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
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
