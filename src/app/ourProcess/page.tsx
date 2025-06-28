import Image from "next/image";
import Link from "next/link";

export default function OurProcess() {
  const steps = [
    {
      id: 1,
      title: "Assessment & Consultation",
      description:
        "We carefully examine each garment to understand its potential and discuss your vision with our design team.",
      icon: "🔍",
      duration: "30 minutes",
    },
    {
      id: 2,
      title: "Design Planning",
      description:
        "Our designers create a detailed transformation plan, sketching new possibilities while preserving the garment's character.",
      icon: "✏️",
      duration: "2-4 hours",
    },
    {
      id: 3,
      title: "Sustainable Transformation",
      description:
        "Using eco-friendly techniques and materials, we carefully transform your piece into a contemporary masterpiece.",
      icon: "♻️",
      duration: "24-48 hours",
    },
    {
      id: 4,
      title: "Quality Assurance",
      description:
        "Each transformed piece undergoes rigorous quality checks to ensure it meets our high standards of craftsmanship.",
      icon: "✅",
      duration: "2-6 hours",
    },
    {
      id: 5,
      title: "Final Delivery",
      description:
        "Your newly transformed garment is carefully packaged and delivered, ready to make a statement in your wardrobe.",
      icon: "📦",
      duration: "Same day",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-8 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            Our <span className="text-blue-400">Process</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
            From worn-out wardrobe to runway-ready: discover how we transform pre-loved garments into designer pieces in
            just seconds.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center text-3xl">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm text-blue-400 font-semibold">Step {step.id}</div>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Duration: {step.duration}
                  </div>
                </div>

                {/* Visual */}
                <div className="lg:w-1/2">
                  <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 border border-gray-700">
                    <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                      <div className="text-6xl opacity-50">{step.icon}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Process */}
      <section className="py-16 px-8 bg-gray-900 bg-opacity-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">Why Our Process Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Sustainable Materials</h3>
              <p className="text-gray-300">
                We use only eco-friendly, sustainable materials and processes in every transformation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Expert Craftsmanship</h3>
              <p className="text-gray-300">
                Our skilled artisans bring decades of experience to every piece they transform.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Lightning Fast</h3>
              <p className="text-gray-300">
                Our streamlined process delivers stunning results in record time without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Wardrobe?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Experience our revolutionary process and see your old clothes become fashion-forward pieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View Gallery
            </Link>
            <Link
              href="/#contact"
              className="border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
