'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { fetchGames } from '../actions/gameActions';
import { FaSpinner, FaExclamationTriangle } from 'react-icons/fa';
import Link from 'next/link';

export default function GamesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    sName: searchParams.get('sName') || '',
    sDates: searchParams.get('sDates') || '1900,9999',
    sOrdering: searchParams.get('sOrdering') || '',
    sPage: searchParams.get('sPage') || 1,
  });

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const newFilters = {
      sName: searchParams.get('sName') || '',
      sDates: searchParams.get('sDates') || '1900,9999',
      sOrdering: searchParams.get('sOrdering') || '',
      sPage: searchParams.get('sPage') || 1,
    };

    if (JSON.stringify(newFilters) !== JSON.stringify(filters)) {
      setFilters(newFilters);
    }
  }, [searchParams]);

  useEffect(() => {
    const loadGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchGames(filters);
        if (data.error) throw new Error(data.error);
        setGames(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, [filters]);

  const handleChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryString = new URLSearchParams(filters).toString();
    router.push(`?${queryString}`, { scroll: false });
  };

  return (
    <div className="bg-gradient-to-b from-lightOpacityL to-lightOpacityS min-h-screen py-9 px-4">
      <form onSubmit={handleSubmit} className="mb-6 p-6 bg-grayDarkOpacityS rounded-xl shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            name="sName"
            value={filters.sName}
            onChange={handleChange}
            placeholder="Nome do Jogo"
            className="p-2 rounded bg-grayDarkOpacityL text-white w-full"
            aria-label="Pesquisar pelo nome do jogo"
          />
          <input
            type="text"
            name="sDates"
            value={filters.sDates}
            onChange={handleChange}
            placeholder="Intervalo de Datas (YYYY-MM-DD,YYYY-MM-DD)"
            className="p-2 rounded bg-grayDarkOpacityL text-white w-full"
            aria-label="Pesquisar por intervalo de datas"
          />
          <select
            name="sOrdering"
            value={filters.sOrdering}
            onChange={handleChange}
            className="p-2 rounded bg-grayDarkOpacityL text-white w-full"
            aria-label="Ordenar jogos"
          >
            <option value="">Ordenar Por</option>
            <option value="search">Nome</option>
            <option value="-search">Nome (Decrescente)</option>
            <option value="released">Lançamento</option>
            <option value="-released">Lançamento (Decrescente)</option>
            <option value="rating">Avaliação</option>
            <option value="-rating">Avaliação (Decrescente)</option>
          </select>
          <button
            type="submit"
            className="bg-grayMedium hover:bg-grayDark p-2 rounded text-white font-bold"
            aria-label="Pesquisar jogos"
          >
            Pesquisar
          </button>
        </div>
      </form>

      {loading && (
        <div className="text-white text-center flex justify-center items-center space-x-2 animate-pulse">
          <FaSpinner className="animate-spin text-xl" />
          <p>Carregando...</p>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center p-4 bg-red-900 rounded-lg">
          <div className="flex justify-center items-center space-x-2">
            <FaExclamationTriangle className="text-2xl" />
            <p className="font-semibold">{`Erro: ${error}`}</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 text-white bg-red-600 hover:bg-red-700 rounded px-4 py-2"
          >
            Tentar Novamente
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-2">
        {games.map((game) => (
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
                <h2 className="text-3xl font-bold text-white text-center truncate pb-5">{game.name}</h2>
                <Link href={`/games/${game.id}`}>
                  <button className="bg-grayMedium hover:bg-grayDark p-2 rounded text-white font-bold w-full">
                    Ver Detalhes
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}