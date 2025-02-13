'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { UserButton } from "@clerk/nextjs";

// Routes where navbar should be hidden when signed in
const protectedRoutes = ['/home', '/video-upload', '/social-share'];

export default function Navbar() {
  const pathname = usePathname();

  // If the current route is in protectedRoutes, don't show the navbar
  if (protectedRoutes.includes(pathname)) {
    return null;
  }

  return (
    <nav className="fixed w-full backdrop-blur-sm bg-black/30 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            Gallery AI
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/sign-in">
              <button className="px-4 py-2 text-white hover:text-gray-300 transition">
                Sign In
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition">
                Sign Up
              </button>
            </Link>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10"
                }
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
} 