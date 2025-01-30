import Link from 'next/link';

export default async function Publishers() {
  const apiKey = process.env.API_KEY
  const res = await fetch(`https://api.rawg.io/api/publishers?key=${apiKey}`);

  if (!res.ok) {
    return <div className="text-white text-center">Error loading data.</div>;
  }
  
  const data = await res.json();
  
  if (!data.results || data.results.length === 0) {
    return <div className="text-white text-center">No games found.</div>;
  }  
  
    return (
      <div className="bg-gradient-to-b from-lightOpacityL to-lightOpacityS min-h-screen py-9 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-2">
          {data.results.map((publisher) => (
            <div
              key={publisher.id}
              className="bg-gradient-to-b from-grayDarkOpacityS to-grayDarkOpacityL rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl mb-5 mt-5"
            >
              <div className="relative">
                <div
                  className="w-full h-80 bg-cover bg-center rounded-t-3xl"
                  style={{ backgroundImage: `url(${publisher.image_background})` }}
                ></div>
                <div className="p-6 space-y-4">
                  <h2 className="text-3xl font-bold text-white text-center truncate">{publisher.name}</h2>
                  <p className="text-white text-lg text-center font-bold">
                    Total de Jogos:
                    <span className="block mt-1 text-2xl font-semibold text-grayLight">
                      {publisher.games_count}
                    </span>
                  </p>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2 text-center">Top Jogos:</h3>
                    <ul className="space-y-2 text-center">
                      {publisher.games.slice(0, 3).map((game) => (
                        <li
                          key={game.id}
                          className="text-lg text-grayLight font-semibold flex justify-between items-center"
                        >
                          <span className="truncate">{game.name}</span>
                          <span className="text-grayLight text-xs">(Adicionados: {game.added})</span>
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
