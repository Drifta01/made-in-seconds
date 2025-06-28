import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-blue-400">Made in Seconds</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforming pre-loved clothing into high-end fashion pieces through sustainable design and innovative
              manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We believe fashion should be both beautiful and sustainable. Our mission is to revolutionize the fashion
                industry by giving new life to pre-loved garments, reducing waste, and creating unique, high-quality
                pieces that tell a story.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every piece we create is a testament to the power of sustainable design, proving that eco-conscious
                fashion can be luxurious, innovative, and timeless.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Why Choose Us?</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>100% sustainable materials and processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Unique, one-of-a-kind designer pieces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Expert craftsmanship and attention to detail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Reducing fashion industry waste</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">♻</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Sustainability</h3>
              <p className="text-gray-300">
                We prioritize environmental responsibility in every aspect of our design and manufacturing process.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">✨</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Innovation</h3>
              <p className="text-gray-300">
                We constantly push boundaries to create new techniques and designs that transform ordinary into
                extraordinary.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Craftsmanship</h3>
              <p className="text-gray-300">
                Every piece is meticulously crafted with attention to detail and commitment to quality that lasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Our Story</h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Founded with a vision to make fashion more sustainable, Made in Seconds began as a passion project to give
            discarded clothing a second chance at life. What started as a small initiative has grown into a movement
            that challenges the traditional fashion industry.
          </p>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Today, we work with a network of skilled artisans and designers who share our commitment to sustainability
            and quality. Each piece in our collection represents not just fashion, but a statement about the future we
            want to create.
          </p>
          <div className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 inline-block">
            <a href="/contact" className="block px-8 py-3 text-white font-semibold text-lg">
              Start Your Journey
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">1000+</div>
              <div className="text-gray-300">Garments Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-300">Waste Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">5</div>
              <div className="text-gray-300">Years of Innovation</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
