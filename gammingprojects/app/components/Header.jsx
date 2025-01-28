'use client';

import Link from 'next/link';

export default function Header() {
    return (
      <header className="bg-black text-deepRed py-4 shadow-lg">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-3xl font-bold hover:text-deepRed">
            MorphGames <span className="italic">MG</span>
          </Link>
          <nav className="flex flex-wrap justify-center sm:justify-end gap-4">
            <Link
              href="/"
              className="font-bold hover:text-fireRed 
                         transform hover:translate-y-0.5 transition-all duration-500
                         hover:shadow-lg hover:shadow-red-500
                         hover:border hover:border-red-500
                         rounded-lg px-2 py-1"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-bold hover:text-fireRed 
                         transform hover:translate-y-0.5 transition-all duration-500
                         hover:shadow-lg hover:shadow-red-500
                         hover:border hover:border-red-500
                         rounded-lg px-2 py-1"
            >
              About
            </Link>
            <Link
              href="/creators"
              className="font-bold hover:text-fireRed 
                         transform hover:translate-y-0.5 transition-all duration-500
                         hover:shadow-lg hover:shadow-red-500
                         hover:border hover:border-red-500
                         rounded-lg px-2 py-1"
            >
              Creators
            </Link>
            <Link
              href="/developers"
              className="font-bold hover:text-fireRed 
                         transform hover:translate-y-0.5 transition-all duration-500
                         hover:shadow-lg hover:shadow-red-500
                         hover:border hover:border-red-500
                         rounded-lg px-2 py-1"
            >
              Developers
            </Link>
            <Link
              href="/games"
              className="font-bold hover:text-fireRed 
                         transform hover:translate-y-0.5 transition-all duration-500
                         hover:shadow-lg hover:shadow-red-500
                         hover:border hover:border-red-500
                         rounded-lg px-2 py-1"
            >
              Games
            </Link>
            <Link
              href="/platforms"
              className="font-bold hover:text-fireRed 
                         transform hover:translate-y-0.5 transition-all duration-500
                         hover:shadow-lg hover:shadow-red-500
                         hover:border hover:border-red-500
                         rounded-lg px-2 py-1"
            >
              Platforms
            </Link>
            <Link
              href="/publishers"
              className="font-bold hover:text-fireRed 
                         transform hover:translate-y-0.5 transition-all duration-500
                         hover:shadow-lg hover:shadow-red-500
                         hover:border hover:border-red-500
                         rounded-lg px-2 py-1"
            >
              Publishers
            </Link>
          </nav>
        </div>
      </header>
    );
  }
  