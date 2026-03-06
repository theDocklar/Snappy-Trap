"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/products";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(product.mainImage);

  // Get gallery images for thumbnails
  const galleryImages = product.galleryImages || [product.mainImage];

  return (
    <>
      {/* Header Section - Blue Background */}
      <section className="bg-[#043687] py-12 sm:py-16 lg:py-20 pt-24 sm:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            {/* Left Column - Product Images */}
            <div className="space-y-3 sm:space-y-4">
              {/* Main Product Image */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden rounded-lg sm:rounded-xl">
                  <img
                    src={selectedImage}
                    alt={product.productTitle}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Thumbnail Images - Only show if there are multiple images */}
              {galleryImages.length > 1 && (
                <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                  {galleryImages.slice(0, 6).map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(image)}
                      className={`bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 shadow-md transition-all ${
                        selectedImage === image
                          ? "ring-2 sm:ring-4 ring-white"
                          : "hover:ring-2 ring-white/50"
                      }`}
                    >
                      <div className="relative w-full h-[80px] sm:h-[100px] lg:h-[120px] rounded-md sm:rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`${product.productTitle} view ${idx + 1}`}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Product Header Info */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-white mt-6 lg:mt-0">
              {/* Product Title */}
              <h1 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-[-1.2px] uppercase leading-tight">
                {product.productTitle}
              </h1>

              {/* Category Badge */}
              <div className="inline-block bg-white/20 px-3 sm:px-4 py-2 rounded-lg text-white font-medium text-sm sm:text-base">
                {product.category}
              </div>

              {/* Price - Only show if available */}
              {product.price && (
                <p className="font-black text-4xl sm:text-5xl lg:text-6xl text-white">
                  ${product.price}
                </p>
              )}

              {/* Bullet Features */}
              {product.bulletFeatures && product.bulletFeatures.length > 0 && (
                <div className="space-y-2 sm:space-y-3">
                  <h2 className="font-bold text-xl sm:text-2xl text-white">
                    Features
                  </h2>
                  {product.bulletFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-white mt-1">•</span>
                      <p className="font-medium text-base sm:text-lg text-white">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Guide to Install Button */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <a
                  href="/how-it-works"
                  className="bg-white hover:bg-blue-50 text-[#043687] px-6 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl uppercase transition-all text-center"
                >
                  GUIDE TO INSTALL
                </a>
                {product.manualURL && (
                  <a
                    href={product.manualURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#002D72] hover:bg-[#001d52] text-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl uppercase transition-all border-2 border-white text-center"
                  >
                    VIEW MANUAL
                  </a>
                )}
              </div>

              {/* Customer Reviews Buttons */}
              {(product.amazonLink || product.homeDepotLink) && (
                <div className="pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <p className="font-bold text-lg sm:text-xl lg:text-2xl text-white">
                      Customer reviews on:
                    </p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.532 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.777.565-1.832-.197-1.532-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {product.amazonLink && (
                      <a
                        href={product.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl sm:rounded-2xl w-24 h-16 sm:w-28 sm:h-18 lg:w-32 lg:h-20 overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg relative cursor-pointer bg-white"
                      >
                        <Image
                          src="/images/amazon-logo.webp"
                          alt="Amazon logo"
                          fill
                          className="object-cover"
                        />
                      </a>
                    )}
                    {product.homeDepotLink && (
                      <a
                        href={product.homeDepotLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl sm:rounded-2xl w-24 h-16 sm:w-28 sm:h-18 lg:w-32 lg:h-20 overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg relative cursor-pointer bg-white"
                      >
                        <Image
                          src="/images/home-depot-2.jpg"
                          alt="Home Depot logo"
                          fill
                          className="object-cover"
                        />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section - White Background */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Description */}
          {product.description && product.description.length > 0 && (
            <div className="mb-10 sm:mb-12 lg:mb-16 pb-10 sm:pb-12 lg:pb-16 border-b border-gray-200">
              <h2 className="font-bold text-2xl sm:text-3xl text-[#043687] mb-4 sm:mb-6">
                Product Description
              </h2>
              <div className="space-y-3 sm:space-y-4 max-w-4xl">
                {product.description.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-base sm:text-lg text-gray-700 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Requirements */}
          {product.requirements && product.requirements.length > 0 && (
            <div className="mb-10 sm:mb-12 lg:mb-16 pb-10 sm:pb-12 lg:pb-16 border-b border-gray-200">
              <h2 className="font-bold text-2xl sm:text-3xl text-[#043687] mb-4 sm:mb-6">
                Requirements
              </h2>
              <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
                <div className="space-y-2 sm:space-y-3">
                  {product.requirements.map((requirement, idx) => (
                    <div key={idx} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-[#043687] mt-1 font-bold">•</span>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        {requirement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Clearance Details with Image */}
          {product.clearanceDetails && product.clearanceDetails.length > 0 && (
            <div className="mb-10 sm:mb-12 lg:mb-16 pb-10 sm:pb-12 lg:pb-16 border-b border-gray-200">
              <h2 className="font-bold text-2xl sm:text-3xl text-[#043687] mb-4 sm:mb-6">
                Clearance Requirements
              </h2>
              <div
                className={`grid gap-6 sm:gap-8 items-start ${
                  product.clearanceImage ? "lg:grid-cols-2" : "lg:grid-cols-1"
                }`}
              >
                <div className="space-y-3 sm:space-y-4">
                  {product.clearanceDetails.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-base sm:text-lg text-gray-700 leading-relaxed"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
                {product.clearanceImage && (
                  <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg">
                    <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[400px] overflow-hidden rounded-lg sm:rounded-xl">
                      <img
                        src={product.clearanceImage}
                        alt="Clearance diagram"
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Installation Tips */}
          {product.installationTips && product.installationTips.length > 0 && (
            <div className="mb-10 sm:mb-12 lg:mb-16 pb-10 sm:pb-12 lg:pb-16 border-b border-gray-200">
              <h2 className="font-bold text-2xl sm:text-3xl text-[#043687] mb-4 sm:mb-6">
                Installation Tips
              </h2>
              <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
                <div className="space-y-2 sm:space-y-3">
                  {product.installationTips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-[#043687] mt-1 font-bold">•</span>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Additional Tips with Image */}
          {product.additionalTips && product.additionalTips.length > 0 && (
            <div className="mb-0">
              <h2 className="font-bold text-2xl sm:text-3xl text-[#043687] mb-4 sm:mb-6">
                Additional Tips
              </h2>
              <div
                className={`grid gap-6 sm:gap-8 items-start ${
                  product.additionalImage ? "lg:grid-cols-2" : "lg:grid-cols-1"
                }`}
              >
                <div className="space-y-3 sm:space-y-4">
                  {product.additionalTips.map((tip, idx) => (
                    <p
                      key={idx}
                      className="text-base sm:text-lg text-gray-700 leading-relaxed"
                    >
                      {tip}
                    </p>
                  ))}
                </div>
                {product.additionalImage && (
                  <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg">
                    <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[400px] overflow-hidden rounded-lg sm:rounded-xl">
                      <img
                        src={product.additionalImage}
                        alt="Additional information"
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Retailer Buttons Section */}
      <section className="bg-gray-50 py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="font-bold text-sm sm:text-base text-[#043687] tracking-wide mb-6 sm:mb-8 uppercase">
              Available At these retailers:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-10 max-w-4xl mx-auto">
              {[
                {
                  name: "Home Depot",
                  logo: "/images/home-depot-2.jpg",
                  url: "https://www.homedepot.com/s/snappy%2520trap?NCNI-5",
                },
                {
                  name: "Amazon",
                  logo: "/images/amazon-logo.webp",
                  url: "https://www.amazon.com/s?k=snappy+trap",
                },
                {
                  name: "Ace Hardware",
                  logo: "/images/ace-3.png",
                  url: "https://www.acehardware.com/search?query=snappy+trap",
                },
                {
                  name: "Lowes",
                  logo: "/images/lowes-logo-2.png",
                  url: "https://www.lowes.com/search?searchTerm=snappy+trap",
                },
                {
                  name: "Menards",
                  logo: "/images/Menards.jpg",
                  url: "https://www.menards.com/main/search.html?search=snappy+trap",
                },
              ].map((retailer) => (
                <a
                  key={retailer.name}
                  href={retailer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl sm:rounded-2xl w-24 h-16 sm:w-28 sm:h-18 lg:w-32 lg:h-20 overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg relative cursor-pointer"
                >
                  <Image
                    src={retailer.logo}
                    alt={`${retailer.name} logo`}
                    fill
                    className="object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
