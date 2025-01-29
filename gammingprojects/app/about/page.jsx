export default function About() {
  return (
    <div className="bg-gradient-to-b from-darkOpacityS via-grayDarkOpacityMd to-darkOpacityS min-h-screen flex flex-col items-center justify-center py-10 px-6 text-center text-light space-y-8">
      <h1 className="text-4xl font-semibold text-charcoal">About MorphGames MG</h1>
      <p className="text-lg text-grayLight">
        MorphGames MG is a platform created to explore the world of games, connecting you to game developers, platforms, and publishers in a simple and intuitive way.
      </p>
      <p className="text-lg text-grayLight">
        With a modern and easy-to-navigate design, our goal is to provide a unique experience for gamers and those curious about the gaming market.
      </p>
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-charcoal">Mission</h3>
        <p className="text-grayLight">
          Our mission is to be the main source of information and interactivity for all gaming fans, providing quality content, updates, and a space to explore everything the gaming world has to offer.
        </p>
        <h3 className="text-2xl font-semibold text-charcoal">Vision</h3>
        <p className="text-grayLight">
          We aim to be the most reliable platform for exploring games, with a user-friendly and innovative approach for all types of players.
        </p>
        <h3 className="text-2xl font-semibold text-charcoal">Values</h3>
        <ul className="text-grayLight space-y-2">
          <li><strong>Innovation:</strong> Always seeking new ways to improve the user experience.</li>
          <li><strong>Commitment:</strong> Providing a platform that is reliable and secure.</li>
          <li><strong>Community:</strong> We value engagement with our users and developers.</li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-charcoal">Team</h4>
        <p className="text-grayLight">
          We are a team passionate about technology and gaming, working to provide the best experience for our users.
        </p>
      </div>
      <div className="space-x-4">
        <a
          href="/"
          className="inline-block px-6 py-3 mt-6 bg-taupe text-light font-semibold rounded-full transform transition-all hover:scale-105 hover:bg-charcoal"
        >
          Back to Home
        </a>
        <a
          href="/games"
          className="inline-block px-6 py-3 mt-6 bg-taupe text-light font-semibold rounded-full transform transition-all hover:scale-105 hover:bg-charcoal"
        >
          Start Exploring
        </a>
      </div>
    </div>
  );
}
