import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-grayDark text-center text-sm text-grayMedium py-2 mt-auto">
        <p className="text-grayMedium">
          © {currentYear} MorphGames MG. <br/>Developed and created by<br/>{" "}
          <span>
            <Link
              href="https://github.com/RenanCDev"
              className="text-grayLight hover:text-white hover:underline hover:scale-105 transition-all duration-300 m-1 font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Renan Costa
            </Link>
            <span className="text-grayMedium">-</span>
            <Link
              href="https://github.com/luizmiguel4444"
              className="text-grayLight hover:text-white hover:underline hover:scale-105 transition-all duration-300 m-1 font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Luiz Miguel
            </Link>
            <span className="text-grayMedium">-</span>
            <Link
              href="https://github.com/Simio123"
              className="text-grayLight hover:text-white hover:underline hover:scale-105 transition-all duration-300 m-1 font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Emerson Santos
            </Link>
            .
          </span>
        </p>
      </footer>
    );
}
