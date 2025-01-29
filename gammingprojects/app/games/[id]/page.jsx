'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const GameDetails = () => {
  const { id } = useParams();
  const [gameData, setGameData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=931f29a2e2594596ae17eff8a97ef3f4`);
        const data = await response.json();
        setGameData(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    if (id) {
      fetchGameDetails();
    }
  }, [id]);

  return (
    <div className="bg-gradient-to-b from-lightOpacityL to-lightOpacityS min-h-screen py-12 px-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">Detalhes do Jogo</h1>
      </div>
      {gameData ? (
        <div className="max-w-4xl mx-auto bg-grayDarkOpacityS rounded-3xl overflow-hidden shadow-xl">
          <div className="relative">
            <div
              className="w-full h-screen bg-cover bg-center rounded-t-3xl"
              style={{ backgroundImage: `url(${gameData.background_image})` }}
            ></div>
            <div className="p-6 space-y-4">
              <h2 className="text-3xl font-bold text-white text-center truncate">
                {gameData.name}
              </h2>
              <p className="text-white text-lg text-center font-semibold">
                Released: <span className="text-grayLight">{gameData.released}</span>
              </p>
              <p className="text-white text-lg text-center font-semibold">
                Rating: <span className="text-grayLight">{gameData.rating}</span>
              </p>
              <div>
                <h3 className="text-white text-xl font-bold mb-2 text-center">Descrição:</h3>
                <p className="text-white text-center text-lg">{gameData.description_raw}</p>
              </div>
              <div className="text-center mt-6">
                <Link href={gameData.website} target="_blank">
                  <button className="px-6 py-2 bg-grayDark rounded-full text-white font-semibold transition-all hover:bg-charcoal hover:scale-105">
                    Acesse o Site
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white text-lg text-center">Carregando...</div>
      )}

      <div className="text-center mt-8">
        <button
          onClick={() => router.back()}
          className="px-6 py-2 bg-taupe rounded-full text-white font-semibold transition-all hover:bg-charcoal hover:scale-105"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default GameDetails;
