"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <header className="w-full border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-orange-600">Pocket Taste</h1>
          <nav className="space-x-4">
            <Link href="/signup" className="text-gray-700 font-semibold hover:text-orange-600">
              Sign Up
            </Link>
            <Link href="/login" className="text-gray-700 font-semibold hover:text-orange-600">
              Login
            </Link>
          </nav>
        </div>
      </header>

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

      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Pocket Taste. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
