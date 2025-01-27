// Página principal
export default async function Home() {
  const res = await fetch(`https://api.rawg.io/api/platforms?key=931f29a2e2594596ae17eff8a97ef3f4&page=1`);
  const data = await res.json();

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen py-12 px-6">
      <h1 className="text-center text-5xl font-extrabold text-white mb-12">Gaming Platforms</h1>

      {/* Grid de Plataformas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
        {data.results.map((platform) => (
          <div
            key={platform.id}
            className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gray-700"
          >
            <div className="relative">
              {/* Imagem de fundo */}
              <div
                className="w-full h-40 bg-cover bg-center rounded-t-3xl"
                style={{ backgroundImage: `url(${platform.image_background})` }}
              ></div>

              <div className="p-6 space-y-4">
                {/* Título da plataforma */}
                <h2 className="text-3xl font-semibold text-white truncate">{platform.name}</h2>

                {/* Informações de jogos */}
                <p className="text-gray-400 text-sm">
                  <span className="font-semibold text-gray-300">Total Games:</span> {platform.games_count}
                </p>

                {/* Top Games */}
                <div>
                  <h3 className="text-gray-300 text-sm font-semibold mb-2">Top Games:</h3>
                  <ul className="space-y-2">
                    {platform.games.slice(0, 3).map((game) => (
                      <li
                        key={game.id}
                        className="text-gray-400 text-sm flex justify-between items-center"
                      >
                        <span className="truncate">{game.name}</span>
                        <span className="text-gray-500 text-xs">(Added: {game.added})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


