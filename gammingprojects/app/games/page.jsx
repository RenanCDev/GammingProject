'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useGames from '../../hooks/useGames';

export default function GamesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialFilters = {
    sName: searchParams.get('sName') || '',
    sDates: searchParams.get('sDates') || '1900,9999',
    sOrdering: searchParams.get('sOrdering') || '',
    sPage: searchParams.get('sPage') || 1,
  };

  const [filters, setFilters] = useState(initialFilters);
  const { games, loading, error } = useGames(filters);

  useEffect(() => {
    setFilters(initialFilters);
  }, [searchParams]);

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
          />
          <input
            type="text"
            name="sDates"
            value={filters.sDates}
            onChange={handleChange}
            placeholder="Intervalo de Datas (YYYY-MM-DD,YYYY-MM-DD)"
            className="p-2 rounded bg-grayDarkOpacityL text-white w-full"
          />
          <select
            name="sOrdering"
            value={filters.sOrdering}
            onChange={handleChange}
            className="p-2 rounded bg-grayDarkOpacityL text-white w-full"
          >
            <option value="">Ordenar Por</option>
            <option value="name">Nome</option>
            <option value="-name">Nome (Decrescente)</option>
            <option value="released">Lançamento</option>
            <option value="-released">Lançamento (Decrescente)</option>
            <option value="rating">Avaliação</option>
            <option value="-rating">Avaliação (Decrescente)</option>
          </select>
          <button type="submit" className="bg-grayMedium hover:bg-grayDark p-2 rounded text-white font-bold">
            Pesquisar
          </button>
        </div>
      </form>
      {loading && <p className="text-white text-center">Carregando...</p>}
      {error && <p className="text-red-500 text-center">Erro ao carregar dados.</p>}
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
