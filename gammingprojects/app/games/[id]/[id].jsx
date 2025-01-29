'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchGameDetails } from '../../actions/gameActions';

export default function GameDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    const loadGameDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchGameDetails(id);
        if (data.error) throw new Error(data.error);
        setGame(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadGameDetails();
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{`Erro: ${error}`}</div>;

  if (!game) return <div>Jogo não encontrado</div>;

  return (
    <div className="min-h-screen py-9 px-4">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-4xl font-bold text-center">{game.name}</h1>
        <img src={game.background_image} alt={game.name} className="w-full h-80 object-cover rounded-xl my-4" />
        <p className="text-lg font-semibold">Descrição:</p>
        <p>{game.description}</p>
        <p className="mt-4 text-lg">Lançamento: {game.released}</p>
        <p className="mt-2 text-lg">Avaliação: {game.rating}</p>
      </div>
    </div>
  );
}