'use client';

import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="bg-black text-center text-sm text-deepRed py-2 mt-auto">
        <p className="text-deepRed">
          © {currentYear} MortyVerse. Developed and created by{" "}
          <Link
            href="https://github.com/RenanCDev"
            className="text-deepRed hover:text-fireRed hover:underline hover:scale-105 transition-all duration-300 mr-1 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Renan Costa
          </Link>
            <span className="text-deepRed">and</span>
          <Link
            href="https://github.com/luizmiguel4444"
            className="text-deepRed hover:text-fireRed hover:underline hover:scale-105 transition-all duration-300 ml-1 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Luiz Miguel
          </Link>
          .
        </p>
      </footer>
    );
  }
  