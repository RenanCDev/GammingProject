import Link from 'next/link';

export default function Header() {
    return (
      <header className="bg-grayDark text-grayLight py-4 shadow-lg">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-3xl font-bold hover:text-white transition-colors duration-300">
            MorphGames <span className="italic">MG</span>
          </Link>
          <nav className="flex flex-wrap justify-center sm:justify-end gap-4">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/creators", label: "Creators" },
              { href: "/developers", label: "Developers" },
              { href: "/games", label: "Games" },
              { href: "/platforms", label: "Platforms" },
              { href: "/publishers", label: "Publishers" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-bold text-grayLight hover:text-white 
                           transform hover:translate-y-0.5 transition-all duration-500
                           hover:shadow-lg hover:shadow-gray-500
                           rounded-lg px-2 py-1"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    );
}
