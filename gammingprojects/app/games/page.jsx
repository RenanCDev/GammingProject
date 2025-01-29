import Link from 'next/link';

export default async function Games({ searchParams }) {
  const {
    sName = 'need for speed',
    sPlatform = '4',
    // sDevelopers = '',
    // sPublishers = '',
    // sGenres = '',
    // sTags = '',
    // sCreators = '',
    // sDates = '',
    // // sOrdering = '',
    // &platforms=${sPlatform}&page=1&developers=${sDevelopers}&publishers=${sPublishers}&genres=${sGenres}&tags=${sTags}&creators=${sCreators}&dates=${sDates}&ordering=${sOrdering}
  } = searchParams;
  
  const apiKey = process.env.API_KEY
  const res = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&search=${sName}`);

  if (!res.ok) {
    return <div className="text-white text-center">Erro ao carregar os dados.</div>;
  }
  
  const data = await res.json();
  
  if (!data.results || data.results.length === 0) {
    return <div className="text-white text-center">Nenhum jogo encontrado.</div>;
  }  

  return (
    <div className="bg-gradient-to-b from-lightOpacityL to-lightOpacityS min-h-screen py-9 px-4"> 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8  mx-2">
        {data.results.map((game) => (
          <div
            key={game.id}
            className="bg-gradient-to-b from-grayDarkOpacityS to-grayDarkOpacityL rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl mb-5 mt-5"
          >
            <div className="relative">
              <div
                className="w-full h-80 bg-cover bg-center rounded-t-3xl"
                style={{ backgroundImage: `url(${game.background_image})` }}
              ></div>
              <div className="p-6 space-y-4">
                <h2 className="text-3xl font-bold text-white text-center truncate">{game.name}</h2>
                <p className="text-white text-lg text-center font-bold">
                  Lançamento:
                  <span className="block mt-1 text-2xl font-semibold text-grayLight">
                    {game.released || "Não disponível"}
                  </span>
                </p>
                <p className="text-white text-lg text-center font-bold">
                  Avaliação:
                  <span className="block mt-1 text-2xl font-semibold text-grayLight">
                    {game.rating || "Sem avaliação"} ({game.ratings_count || 0} avaliações)
                  </span>
                </p>
                <div>
                  <h3 className="text-white text-xl font-bold mb-2 text-center">Plataformas:</h3>
                  <ul className="space-y-1 text-center">
                    {game.platforms?.length > 0 ? (
                      game.platforms.map(({ platform }) => (
                        <li key={platform.id} className="text-lg text-grayLight font-semibold truncate">
                          {platform.name}
                        </li>
                      ))
                    ) : (
                      <li className="text-lg text-grayLight font-semibold">Não disponível</li>
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-2 text-center">Gêneros:</h3>
                  <ul className="space-y-1 text-center">
                    {game.genres?.map((genre) => (
                      <li key={genre.id} className="text-lg text-grayLight font-semibold truncate">
                        {genre.name}
                      </li>
                    )) || <li className="text-lg text-grayLight font-semibold">Não disponível</li>}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-2 text-center">Tags:</h3>
                  <ul className="space-y-1 text-center">
                    {game.tags?.slice(0, 5).map((tag) => (
                      <li key={tag.id} className="text-lg text-grayLight font-semibold truncate">
                        {tag.name}
                      </li>
                    )) || <li className="text-lg text-grayLight font-semibold">Não disponível</li>}
                  </ul>
                </div>
                <p className="text-white text-lg text-center font-bold">
                  Adicionado por:
                  <span className="block mt-1 text-2xl font-semibold text-grayLight">
                    {game.added || 0} usuários
                  </span>
                </p>
                <p className="text-white text-lg text-center font-bold">
                  MetaCrítica:
                  <span className="block mt-1 text-2xl font-semibold text-grayLight">
                    {game.metacritic || "Sem dados"}
                  </span>
                </p>
                <p className="text-white text-lg text-center font-bold">
                  Slug:
                  <span className="block mt-1 text-2xl font-semibold text-grayLight">
                    {game.slug || "Não disponível"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
