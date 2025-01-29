import { useState, useEffect } from "react";

const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY || "931f29a2e2594596ae17eff8a97ef3f4";
const BASE_URL = "https://api.rawg.io/api/games";

export default function useGameDetails(id) {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchGame = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `${BASE_URL}/${id}?key=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const data = await response.json();
        setGame(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  return { game, loading, error };
}
