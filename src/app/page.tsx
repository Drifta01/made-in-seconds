import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Logo */}
      <div className="fixed inset-0 w-full h-full flex items-center justify-center pointer-events-none">
        <Image
          src="/made-in-seconds.png"
          alt="Made in Seconds Background Logo"
          width={1920}
          height={1080}
          className="opacity-20 object-contain w-full h-full"
          priority
        />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center px-8 py-16 text-center min-h-screen">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-white">
            Made in <span className="text-blue-400">Seconds</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
            Transform pre-loved clothing into high-end fashion pieces in seconds. Our innovative process turns
            sustainable materials into designer wear that makes a statement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
            >
              View Gallery
            </Link>
            <Link
              href="/process"
              className="border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Our Process
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Instant Transformation</h3>
            <p className="text-gray-300">
              Turn vintage pieces into runway-ready fashion in seconds with our revolutionary process.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-600 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Sustainable Luxury</h3>
            <p className="text-gray-300">Eco-conscious fashion that doesn't compromise on style or quality.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-600 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Bespoke Design</h3>
            <p className="text-gray-300">Personalized fashion experiences tailored to your unique style and vision.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
