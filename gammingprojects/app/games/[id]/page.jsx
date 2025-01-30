import { fetchGameDetails } from '../../actions/gameActions';
import Link from 'next/link';

export default async function GameDetails({ params }) {
  if (!params?.id) {
    return (
      <div className="text-red-500 text-center p-4 bg-red-900 rounded-lg">
        <p className="font-semibold">ID do jogo inválido.</p>
        <Link href="/games">
          <button className="mt-2 text-white bg-red-600 hover:bg-red-700 rounded px-4 py-2">Voltar</button>
        </Link>
      </div>
    );
  }

  const gameData = await fetchGameDetails(params.id);

  if (!gameData || gameData.error) {
    return (
      <div className="text-red-500 text-center p-4 bg-red-900 rounded-lg">
        <p className="font-semibold">Erro ao carregar os detalhes do jogo.</p>
        <Link href="/games">
          <button className="mt-2 text-white bg-red-600 hover:bg-red-700 rounded px-4 py-2">Voltar</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-lightOpacityL to-lightOpacityS min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-grayDarkOpacityS rounded-3xl overflow-hidden shadow-xl">
        <div className="relative">
          {/* Imagem de fundo ajustada para não ocupar a tela toda */}
          <div
            className="w-full h-[50vh] sm:h-[60vh] bg-cover bg-center rounded-t-3xl"
            style={{ backgroundImage: `url(${gameData.background_image})` }}
          ></div>

          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-bold text-white text-center truncate">{gameData.name}</h2>
            <p className="text-white text-lg text-center font-semibold">
              Released: <span className="text-grayLight">{gameData.released || 'Data não disponível'}</span>
            </p>
            <p className="text-white text-lg text-center font-semibold">
              Rating: <span className="text-grayLight">{gameData.rating || 'N/A'}</span>
            </p>

            {gameData.description_raw && (
              <div>
                <h3 className="text-white text-xl font-bold mb-2 text-center">Descrição:</h3>
                <p className="text-white text-center text-lg">{gameData.description_raw}</p>
              </div>
            )}

            {gameData.website && (
              <div className="text-center mt-6">
                <Link href={gameData.website} target="_blank">
                  <button className="px-6 py-2 bg-grayDark rounded-full text-white font-semibold hover:bg-charcoal hover:scale-105 transition">
                    Acesse o Site
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link href="/games">
          <button className="px-6 py-2 bg-taupe rounded-full text-white font-semibold hover:bg-charcoal hover:scale-105 transition">
            Voltar
          </button>
        </Link>
      </div>
    </div>
  );
}
