"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-orange-600">Pocket Taste</h1>
          <nav className="space-x-4">
            {/* Add About link here */}
            <Link href="#about" className="text-gray-700 font-semibold hover:text-orange-600">
              About
            </Link>
            <Link href="/signup" className="text-gray-700 font-semibold hover:text-orange-600">
              Sign Up
            </Link>
            <Link href="/login" className="text-gray-700 font-semibold hover:text-orange-600">
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#14213D] mb-4">Your Go-To App for Delicious Flavors</h2>
          <p className="text-lg text-gray-700 mb-6">Discover, cook, and share amazing recipes anytime, anywhere.</p>
          <div>
            <Link
              href="/signup"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md font-semibold mr-2 hover:bg-orange-600"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="inline-block bg-gray-100 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image src="/assets/pt.gif" alt="Pocket Taste Hero" width={400} height={400} className="rounded-md" />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold text-[#14213D] mb-6">Features</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-gray-50 rounded-md text-center shadow-sm">
            <Image src="/assets/v1.png" alt="Feature 1" width={60} height={60} className="mx-auto mb-4" />
            <h4 className="font-bold mb-2">Curated Recipes</h4>
            <p className="text-gray-600 text-sm">Explore hundreds of recipes tailored to your taste.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-md text-center shadow-sm">
            <Image src="/assets/v2.png" alt="Feature 2" width={60} height={60} className="mx-auto mb-4" />
            <h4 className="font-bold mb-2">Diet Tracking</h4>
            <p className="text-gray-600 text-sm">Keep track of your meals and maintain a healthy lifestyle.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-md text-center shadow-sm">
            <Image src="/assets/v3.png" alt="Feature 3" width={60} height={60} className="mx-auto mb-4" />
            <h4 className="font-bold mb-2">Save Favorites</h4>
            <p className="text-gray-600 text-sm">Bookmark your top recipes for quick access anytime.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold text-[#14213D] mb-6">About</h3>
        {/* Updated description using an AI-generated personal story */}
        <p className="text-gray-700 mb-4">
          From a bustling family kitchen in my hometown, I found my passion for cooking by learning time-honored recipes
          passed down through generations. Each dish told a story—rooted in culture, tradition, and shared memories with
          loved ones. Over time, I realized that food connects us in ways that transcend the dinner table, uniting
          family and friends through cherished flavors and the history behind them.
        </p>
        <p className="text-gray-700 mb-4">
          Determined to preserve these culinary gems, I created Pocket Taste as a digital gathering place where family,
          friends, and fellow food enthusiasts can share the roots of their favorite dishes. This journey has also
          become a testament to my passion for technology and design, culminating in a Portfolio Project for{" "}
          <a
            href="https://www.alxafrica.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:underline font-semibold"
          >
            ALX
          </a>
          . By merging tradition and innovation, I hope to inspire others to explore the stories behind every recipe and
          keep culinary heritage alive for future generations.
        </p>

        {/* Team/Contributor Cards */}
        <h4 className="text-xl font-semibold text-[#14213D] mb-4">Meet the Team</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card for Member 1 */}
          <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
            <h5 className="text-lg font-bold text-[#14213D] mb-2">Member 1</h5>
            <p className="text-gray-700 mb-2">Lead Developer & Recipe Curator</p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/member1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/member1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/member1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Card for Member 2 */}
          <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
            <h5 className="text-lg font-bold text-[#14213D] mb-2">Member 2</h5>
            <p className="text-gray-700 mb-2">UI/UX Designer & Food Historian</p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/member2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/member2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/member2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* GitHub Repository Link */}
        <div className="mt-6">
          <h4 className="text-xl font-semibold text-[#14213D] mb-2">Project Repository</h4>
          <p className="text-gray-700">
            Explore the full source code on our{" "}
            <a
              href="https://github.com/yourusername/pocket-taste"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline font-semibold"
            >
              GitHub Repository
            </a>
            .
          </p>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section id="video" className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold text-[#14213D] mb-6">Watch Our Journey</h3>
        <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Pocket Taste - Our Journey"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* App Screens Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold text-[#14213D] mb-6">App Screens</h3>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <Image
            src="/assets/screen1.png"
            alt="Screen 1"
            width={200}
            height={400}
            className="border border-gray-300 rounded-3xl"
          />
          <Image
            src="/assets/screen2.png"
            alt="Screen 2"
            width={200}
            height={400}
            className="border border-gray-300 rounded-3xl"
          />
          <Image
            src="/assets/screen3.png"
            alt="Screen 3"
            width={200}
            height={400}
            className="border border-gray-300 rounded-3xl"
          />
          <Image
            src="/assets/screen4.png"
            alt="Screen 4"
            width={200}
            height={400}
            className="border border-gray-300 rounded-3xl"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Pocket Taste. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
