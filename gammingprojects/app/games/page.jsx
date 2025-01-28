import Link from 'next/link';

export default async function Games() {
  const res = await fetch(`https://api.rawg.io/api/games?key=931f29a2e2594596ae17eff8a97ef3f4&page=1`);
  const data = await res.json();

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen py-10 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
        {data.results.map((game) => (
          <div
            key={game.id}
            className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-darkBrown"
          >
            <div className="relative">
              <div
                className="w-full h-40 bg-cover bg-center rounded-t-3xl"
                style={{ backgroundImage: `url(${game.background_image})` }}
              ></div>
              <div className="p-6 space-y-4">
                <h2 className="text-3xl font-semibold text-deepRed truncate">{game.name}</h2>
                <p className="text-gray-400 text-sm">
                  <span className="font-semibold text-gray-300">Lançamento:</span> {game.released || "Não disponível"}
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="font-semibold text-gray-300">Avaliação:</span> {game.rating || "Sem avaliação"} ({game.ratings_count || 0} avaliações)
                </p>
                <div>
                  <h3 className="text-gray-300 text-sm font-semibold mb-2">Plataformas:</h3>
                  <ul className="space-y-1">
                    {game.platforms?.map(({ platform }) => (
                      <li
                        key={platform.id}
                        className="text-gray-400 text-sm truncate"
                      >
                        {platform.name}
                      </li>
                    )) || <li className="text-gray-400 text-sm">Não disponível</li>}
                  </ul>
                </div>
                <div>
                  <h3 className="text-gray-300 text-sm font-semibold mb-2">Gêneros:</h3>
                  <ul className="space-y-1">
                    {game.genres?.map((genre) => (
                      <li key={genre.id} className="text-gray-400 text-sm truncate">
                        {genre.name}
                      </li>
                    )) || <li className="text-gray-400 text-sm">Não disponível</li>}
                  </ul>
                </div>
                <div>
                  <h3 className="text-gray-300 text-sm font-semibold mb-2">Tags:</h3>
                  <ul className="space-y-1">
                    {game.tags?.map((tag) => (
                      <li key={tag.id} className="text-gray-400 text-sm truncate">
                        {tag.name}
                      </li>
                    )) || <li className="text-gray-400 text-sm">Não disponível</li>}
                  </ul>
                </div>
                <p className="text-gray-400 text-sm">
                  <span className="font-semibold text-gray-300">Adicionado por:</span> {game.added || 0} usuários
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="font-semibold text-gray-300">Número de jogos no Reddit:</span> {game.reddit_count || 0}
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="font-semibold text-gray-300">MetaCrítica:</span> {game.metacritic || "Sem dados"}
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="font-semibold text-gray-300">Slug:</span> {game.slug || "Não disponível"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
