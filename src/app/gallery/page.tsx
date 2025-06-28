"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Header from "@/components/Header";

// Type definitions
type GalleryItem = {
  id: number;
  title: string;
  category: string;
  before: string;
  after: string;
  description: string;
  tags: string[];
};

type Category = {
  id: string;
  name: string;
  count: number;
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Sample gallery data - in a real app, this would come from a CMS or API
  const galleryItems = [
    {
      id: 1,
      title: "Vintage Denim Revival",
      category: "denim",
      before: "/made-in-seconds.png", // Using available image as placeholder
      after: "/made-in-seconds.png",
      description:
        "Transformed worn vintage jeans into a contemporary high-fashion piece with modern cuts and sustainable materials.",
      tags: ["vintage", "sustainable", "denim"],
    },
    {
      id: 2,
      title: "Silk Scarf Dress",
      category: "dresses",
      before: "/made-in-seconds.png",
      after: "/made-in-seconds.png",
      description: "Upcycled vintage silk scarves into an elegant evening dress with intricate draping.",
      tags: ["silk", "evening", "upcycled"],
    },
    {
      id: 3,
      title: "Leather Jacket Redesign",
      category: "outerwear",
      before: "/made-in-seconds.png",
      after: "/made-in-seconds.png",
      description: "Classic leather jacket reimagined with contemporary silhouette and eco-friendly treatments.",
      tags: ["leather", "contemporary", "classic"],
    },
    {
      id: 4,
      title: "Cocktail Dress Transformation",
      category: "dresses",
      before: "/made-in-seconds.png",
      after: "/made-in-seconds.png",
      description: "Outdated cocktail dress transformed into a modern statement piece with bold geometric patterns.",
      tags: ["cocktail", "modern", "statement"],
    },
    {
      id: 5,
      title: "Denim Jacket Makeover",
      category: "denim",
      before: "/made-in-seconds.png",
      after: "/made-in-seconds.png",
      description: "Classic denim jacket enhanced with artistic embroidery and sustainable fabric panels.",
      tags: ["denim", "embroidery", "artistic"],
    },
    {
      id: 6,
      title: "Wool Coat Revival",
      category: "outerwear",
      before: "/made-in-seconds.png",
      after: "/made-in-seconds.png",
      description: "Vintage wool coat restored and modernized with contemporary tailoring techniques.",
      tags: ["wool", "vintage", "tailoring"],
    },
  ];

  const categories = [
    { id: "all", name: "All Items", count: galleryItems.length },
    { id: "dresses", name: "Dresses", count: galleryItems.filter((item) => item.category === "dresses").length },
    { id: "denim", name: "Denim", count: galleryItems.filter((item) => item.category === "denim").length },
    { id: "outerwear", name: "Outerwear", count: galleryItems.filter((item) => item.category === "outerwear").length },
  ];

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory);

  const openModal = (item: GalleryItem, index: number) => {
    setSelectedImage(item);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredItems.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredItems[nextIndex]);
  };

  const previousImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredItems.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            Transformation <span className="text-slate-600">Gallery</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Witness the incredible before-and-after transformations of pre-loved garments into stunning designer pieces.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{galleryItems.length}+</div>
              <div className="text-gray-600 dark:text-gray-300">Transformations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Sustainable</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">48hr</div>
              <div className="text-gray-600 dark:text-gray-300">Average Turnaround</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-8 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div key={item.id} className="group cursor-pointer" onClick={() => openModal(item, index)}>
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Before/After Images */}
                  <div className="relative h-80 bg-gray-200 dark:bg-gray-700">
                    <div className="absolute inset-0 grid grid-cols-2">
                      <div className="relative">
                        <Image src={item.before} alt={`${item.title} - Before`} fill className="object-cover" />
                        <div className="absolute top-3 left-3 bg-red-500 bg-opacity-95 text-white px-2 py-1 rounded-md text-xs font-bold shadow-lg border border-white">
                          BEFORE
                        </div>
                      </div>
                      <div className="relative">
                        <Image src={item.after} alt={`${item.title} - After`} fill className="object-cover" />
                        <div className="absolute top-3 right-3 bg-green-500 bg-opacity-95 text-white px-2 py-1 rounded-md text-xs font-bold shadow-lg border border-white">
                          AFTER
                        </div>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 bg-white dark:bg-gray-800">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{item.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">📸</div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">No items found</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try selecting a different category or check back later for new transformations.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal/Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full max-h-full overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center text-white mb-4">
              <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
              <button onClick={closeModal} className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-96 md:h-auto">
                  <Image
                    src={selectedImage.before}
                    alt={`${selectedImage.title} - Before`}
                    fill
                    className="object-cover"
                  />
                  {/* <div className="absolute top-4 left-4 bg-red-500 bg-opacity-95 text-white px-3 py-2 rounded-lg font-bold text-base shadow-lg border-2 border-white">
                    BEFORE
                  </div> */}
                </div>
                <div className="relative h-96 md:h-auto">
                  <Image
                    src={selectedImage.after}
                    alt={`${selectedImage.title} - After`}
                    fill
                    className="object-cover"
                  />
                  {/* <div className="absolute top-4 right-4 bg-green-500 bg-opacity-95 text-white px-3 py-2 rounded-lg font-bold text-base shadow-lg border-2 border-white">
                    AFTER
                  </div> */}
                </div>
              </div>

              <div className="p-4">
                <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedImage.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedImage.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Modal Navigation */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={previousImage}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>

                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {currentImageIndex + 1} of {filteredItems.length}
                  </span>

                  <button
                    onClick={nextImage}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Next
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="bg-blue-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Wardrobe?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join hundreds of satisfied customers who have given their clothes a second life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/process"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Learn Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
