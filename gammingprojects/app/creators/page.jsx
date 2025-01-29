import Link from 'next/link';

export default async function Creators({ searchParams }) {
  const res = await fetch(
    `https://api.rawg.io/api/creators?key=931f29a2e2594596ae17eff8a97ef3f4&page=1`
  );
  const data = await res.json();

  return (
    <div className="bg-gradient-to-b from-lightOpacityL to-lightOpacityS min-h-screen py-9 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8  mx-2">
        {data.results.map((creator) => (
          <div
            key={creator.id}
            className="bg-gradient-to-b from-grayDarkOpacityS to-grayDarkOpacityL rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl mb-5 mt-5"
          >
            <div className="relative">
              <div
                className="w-full h-80 bg-cover bg-center rounded-t-3xl"
                style={{ backgroundImage: `url(${creator.image})` }}
              ></div>
              <div className="p-6 space-y-4">
                <h2 className="text-3xl font-bold text-white text-center truncate">
                  {creator.name}
                </h2>
                <p className="text-white text-lg text-center font-bold">
                  Total Games:
                  <span className="block mt-1 text-2xl font-semibold text-grayLight">
                    {creator.games_count}
                  </span>
                </p>
                <div>
                  <h3 className="text-white text-xl font-bold mb-2 text-center">Roles:</h3>
                  <ul className="space-y-1 text-center">
                    {creator.positions.map((position) => (
                      <li key={position.id} className="text-lg text-grayLight font-semibold truncate">
                        {position.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-2 text-center">Top Games:</h3>
                  <ul className="space-y-2 text-center">
                    {creator.games.slice(0, 3).map((game) => (
                      <li key={game.id} className="text-lg text-grayLight font-semibold truncate">
                        {game.name}
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
