export default function Home() {
  return (
    <div className="bg-gradient-to-b from-darkOpacityS via-grayDarkOpacityMd to-darkOpacityS min-h-screen flex items-center justify-center py-10 px-4">
      <div className="text-center text-light space-y-6">
        <h1 className="text-4xl font-semibold text-charcoal">
          Bem-vindo ao MorphGames MG!
        </h1>
        <p className="text-lg text-grayLight">
          Sua jornada no universo dos jogos começa aqui.
        </p>
        <p className="text-sm text-grayMedium">
          Explore jogos, plataformas, desenvolvedores e muito mais!
        </p>
        <a
          href="/games"
          className="inline-block px-6 py-3 mt-6 bg-charcoal text-light font-semibold rounded-full transform transition-all hover:scale-105 hover:bg-taupe"
        >
          Comece a Explorar
        </a>
      </div>
    </div>
  );
}
