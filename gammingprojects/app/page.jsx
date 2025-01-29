export default function Home() {
  return (
    <div className="bg-gradient-to-b from-darkOpacityS via-grayDarkOpacityMd to-darkOpacityS min-h-screen flex items-center justify-center py-10 px-6">
      <div className="text-center text-light space-y-6">
        <h1 className="text-4xl font-semibold text-charcoal">
          Welcome to MorphGames MG!
        </h1>
        <p className="text-lg text-grayLight">
          Your journey into the world of games starts here.
        </p>
        <p className="text-sm text-grayMedium">
          Explore games, platforms, developers, and much more!
        </p>
        <div className="space-x-4">
          <a
            href="/games"
            className="inline-block px-6 py-3 mt-6 bg-taupe text-light font-semibold rounded-full transform transition-all hover:scale-105 hover:bg-charcoal"
          >
            Start Exploring
          </a>
          <a
            href="/about"
            className="inline-block px-6 py-3 mt-6 bg-taupe text-light font-semibold rounded-full transform transition-all hover:scale-105 hover:bg-charcoal"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
