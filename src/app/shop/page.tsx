"use client";

import { useEffect, useState, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  Name: string;
  Description: string;
  Price: number;
  Collection: string | null;
  Images: {
    id: number;
    name: string;
    url: string;
    // etc...
  }[];
}
export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Filter & Sorting
  const [selectedCollection, setSelectedCollection] = useState("All Products");
  const [sortOption, setSortOption] = useState("Featured");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // fixed items per page for a minimal layout

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("http://localhost:1337/api/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const json = await res.json();
        // 'data' is your array of products
        setProducts(json.data); 
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  // Compute unique Collections for the filter dropdown
  const allCollections = [
    "All Products",
    ...new Set(
      products
        .map((p) => p.Collection)
        .filter((collection) => collection !== undefined)
    ),
  ];
  // Filter & sort whenever products or filter/sort states change
  useEffect(() => {
    let temp = [...products];

    // Filter by Collection
    if (selectedCollection !== "All Products") {
      temp = temp.filter(
        (prod) => prod.Collection === selectedCollection
      );
    }

    // Sort
    switch (sortOption) {
      case "Price: Low to High":
        temp.sort((a, b) => a.Price - b.Price);
        break;
      case "Price: High to Low":
        temp.sort((a, b) => b.Price - a.Price);
        break;
      case "Name A-Z":
        temp.sort((a, b) =>
          a.Name.localeCompare(b.Name)
        );
        break;
      case "Name Z-A":
        temp.sort((a, b) =>
          b.Name.localeCompare(a.Name)
        );
        break;
      default:
        break;
    }

    setFilteredProducts(temp);
    setCurrentPage(1); 
  }, [products, selectedCollection, sortOption]);

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageProducts = filteredProducts.slice(startIndex, endIndex);

  const handleCollectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCollection(e.target.value);
  };

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:pt-14 bg-white font-[family-Name:var(--font-geist-sans)]">
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
    <Link href="/Collections" className="hover:text-gray-900 font-cormorant font-bold text-2xl">Collections</Link>
    <Link href="/contact" className="hover:text-gray-900 font-cormorant font-bold text-2xl">Contact Us</Link>
  </nav>
</div>
</header>



<div className="min-h-screen w-full bg-white text-gray-800">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-8 py-4 border-b">
        {/* Left: Title */}
        <h1 className="text-xl font-semibold">All Products</h1>
      </header>
      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {error && (
          <p className="text-red-500 text-center my-4">{error}</p>
        )}
        {loading && (
          <p className="text-gray-500 text-center my-4">Loading products...</p>
        )}

        {/* Filter & Sort Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0">
          {/* Left: Filter by Collection */}
          <div className="flex items-center space-x-2">
            <label className="font-medium">Filter:</label>
            <select
              value={selectedCollection}
              onChange={handleCollectionChange}
              className="border p-2 rounded text-sm"
            >
              {allCollections.map((Collection) => (
                <option key={Collection} value={Collection}>
                  {Collection}
                </option>
              ))}
            </select>
          </div>

          {/* Right: Sort Dropdown */}
          <div className="flex items-center space-x-2">
            <label className="font-medium">Sort By:</label>
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="border p-2 rounded text-sm"
            >
              <option value="Featured">Featured</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Name A-Z">Name A-Z</option>
              <option value="Name Z-A">Name Z-A</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((prod) => {
        const { id, Name, Price, Collection, Images } = prod;

        // For simplicity, show only the first image
        const firstImage = Images?.[0]?.url || "";

        return (
          <div key={id} className="border p-4 rounded">
            {firstImage && (
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={firstImage}
                  alt={Name}
                  fill
                  className="object-cover rounded"
                />
              </div>
            )}
            <h2 className="text-lg font-semibold">{Name}</h2>
            <p className="text-sm text-gray-600">
              Collection: {Collection || "None"}
            </p>
            <p className="text-md font-medium">Price: ₹ {Price}</p>
          </div>
        );
      })}
    </div>

        {/* Pagination */}
        {!loading && filteredProducts.length > 0 && (
          <div className="mt-10 flex flex-col items-center">
            <div className="mb-4 text-sm">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex space-x-2">
              {/* Prev Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 border rounded ${
                  currentPage === 1
                    ? "cursor-not-allowed bg-gray-100 text-gray-400"
                    : "hover:bg-gray-200"
                }`}
              >
                Prev
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 border rounded ${
                    page === currentPage
                      ? "bg-gray-900 text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 border rounded ${
                  currentPage === totalPages
                    ? "cursor-not-allowed bg-gray-100 text-gray-400"
                    : "hover:bg-gray-200"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </main>
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
