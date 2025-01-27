// Layout principal
import './globals.css';

export const metadata = {
  title: 'Gaming Platforms',
  description: 'Explore gaming platforms and their top games',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white font-sans">
        <header className="bg-gray-800 text-center py-6 shadow-xl">
          <h1 className="text-4xl font-bold text-gray-100">Gaming Platforms Explorer</h1>
          <p className="text-sm text-gray-400 mt-2">Discover platforms and their popular games</p>
        </header>

        <main className="py-12">
          <div className="container mx-auto px-4">
            {children}
          </div>
        </main>

        <footer className="bg-gray-800 text-center py-6 mt-12">
          <p className="text-gray-500 text-sm">Powered by RAWG API & Next.js</p>
        </footer>
      </body>
    </html>
  );
}