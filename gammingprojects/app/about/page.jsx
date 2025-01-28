export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen flex items-center justify-center py-10 px-6">
      <div className="text-center text-white space-y-6">
        <h1 className="text-4xl font-semibold text-deepRed">
          Bem-vindo ao MorphGames MG!
        </h1>
        <p className="text-lg text-gray-300">
          Sua jornada no universo dos jogos começa aqui.
        </p>
        <p className="text-sm text-gray-400">
          Explore jogos, plataformas, desenvolvedores e muito mais!
        </p>
        <a
          href="/games"
          className="inline-block px-6 py-3 mt-6 bg-fireRed text-white font-semibold rounded-full transform transition-all hover:scale-105 hover:bg-burntOrange"
        >
          Comece a Explorar
        </a>
      </div>
    </div>
  );
}
