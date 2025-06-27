import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function OurProcess() {
  const processSteps = [
    {
      id: 1,
      title: "Collection & Sourcing",
      category: "Manufacturing",
      icon: "🏪",
      description:
        "We carefully source pre-loved garments from trusted partners, vintage stores, and donation centers.",
      details: [
        "Quality assessment and fabric analysis",
        "Sustainable sourcing partnerships",
        "Damage evaluation and repair potential",
        "Material composition verification",
      ],
    },
    {
      id: 2,
      title: "Deconstruction",
      category: "Manufacturing",
      icon: "✂️",
      description: "Each garment is carefully deconstructed to preserve valuable materials and hardware.",
      details: [
        "Seam removal and fabric separation",
        "Hardware and trim collection",
        "Pattern piece documentation",
        "Material sorting by type and quality",
      ],
    },
    {
      id: 3,
      title: "Design Conceptualization",
      category: "Design",
      icon: "🎨",
      description: "Our design team creates innovative concepts that reimagine the original pieces.",
      details: [
        "Trend analysis and market research",
        "Sketch development and ideation",
        "Color palette selection",
        "Silhouette and fit planning",
      ],
    },
    {
      id: 4,
      title: "Material Processing",
      category: "Manufacturing",
      icon: "🧪",
      description: "Fabrics undergo eco-friendly cleaning, treatment, and preparation processes.",
      details: [
        "Organic cleaning and sanitization",
        "Color restoration and enhancement",
        "Fabric strengthening treatments",
        "Texture and finish improvements",
      ],
    },
    {
      id: 5,
      title: "Pattern Making",
      category: "Design",
      icon: "📐",
      description: "Custom patterns are created to maximize material usage and achieve perfect fit.",
      details: [
        "Digital pattern creation",
        "Fit testing and adjustments",
        "Grading for multiple sizes",
        "Waste minimization planning",
      ],
    },
    {
      id: 6,
      title: "Reconstruction",
      category: "Manufacturing",
      icon: "🪡",
      description: "Skilled artisans reconstruct the garments using traditional and modern techniques.",
      details: [
        "Precision cutting and assembly",
        "Hand-finished details",
        "Quality control at each step",
        "Custom hardware application",
      ],
    },
    {
      id: 7,
      title: "Design Enhancement",
      category: "Design",
      icon: "✨",
      description: "Final design touches are added to create unique, high-end fashion pieces.",
      details: [
        "Embellishment and detailing",
        "Surface design application",
        "Hardware customization",
        "Brand element integration",
      ],
    },
    {
      id: 8,
      title: "Quality Assurance",
      category: "Manufacturing",
      icon: "🔍",
      description: "Each piece undergoes rigorous quality testing before reaching customers.",
      details: [
        "Durability and stress testing",
        "Fit and comfort evaluation",
        "Color fastness testing",
        "Final inspection and approval",
      ],
    },
  ];

  const designPrinciples = [
    {
      title: "Sustainability First",
      description: "Every design decision prioritizes environmental impact and resource conservation.",
      icon: "🌱",
    },
    {
      title: "Timeless Aesthetics",
      description: "We create pieces that transcend trends, ensuring longevity in your wardrobe.",
      icon: "⏰",
    },
    {
      title: "Perfect Fit",
      description: "Custom tailoring and precise measurements guarantee exceptional fit and comfort.",
      icon: "📏",
    },
    {
      title: "Unique Identity",
      description: "Each piece tells a story, combining vintage character with contemporary style.",
      icon: "🎭",
    },
  ];

  const manufacturingStats = [
    { label: "Water Saved", value: "80%", description: "Compared to traditional manufacturing" },
    { label: "CO₂ Reduction", value: "65%", description: "Lower carbon footprint per garment" },
    { label: "Waste Diverted", value: "95%", description: "From landfills through upcycling" },
    { label: "Energy Efficiency", value: "70%", description: "Less energy than new production" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            Our <span className="text-blue-600">Process</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Discover how we transform pre-loved clothing into high-end fashion pieces through innovative design and
            sustainable manufacturing.
          </p>

          {/* Process Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Manufacturing Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                State-of-the-art facilities combine traditional craftsmanship with modern sustainable technologies.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Creative Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our design team reimagines each piece with contemporary aesthetics while honoring its original
                character.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 bg-green-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Environmental Impact</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our process creates significant positive environmental impact through sustainable practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {manufacturingStats.map((stat, index) => (
              <div key={index} className="text-center bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Step-by-Step Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From collection to creation, every step is carefully orchestrated for maximum quality and sustainability.
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{step.icon}</div>
                    <div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          step.category === "Design"
                            ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        }`}
                      >
                        {step.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {step.id}. {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{step.description}</p>

                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual placeholder */}
                <div className="flex-1 lg:max-w-md">
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-50">{step.icon}</div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                      <div className="text-white font-semibold">Step {step.id}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Design Principles</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our design philosophy guides every creative decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designPrinciples.map((principle, index) => (
              <div key={index} className="text-center bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{principle.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Transformation Timeline</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From arrival to completion, see how long each phase takes.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>

            <div className="space-y-8">
              {[
                { phase: "Collection & Assessment", time: "Day 1", duration: "2-4 hours" },
                { phase: "Design & Planning", time: "Days 2-3", duration: "1-2 days" },
                { phase: "Manufacturing Process", time: "Days 4-6", duration: "3 days" },
                { phase: "Quality Control", time: "Day 7", duration: "4-6 hours" },
                { phase: "Final Delivery", time: "Day 8", duration: "Same day" },
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.phase}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.duration}</p>
                    </div>
                  </div>

                  <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>

                  <div className={`flex-1 ${index % 2 === 0 ? "pl-8 text-left" : "pr-8 text-right"}`}>
                    <div className="font-semibold text-blue-600">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Wardrobe?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience our sustainable process firsthand and create your own unique fashion statement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
