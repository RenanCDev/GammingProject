import { useState, useEffect } from "react";

const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY || "931f29a2e2594596ae17eff8a97ef3f4";
const BASE_URL = "https://api.rawg.io/api/games";

export default function useGames(filters) {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const { sName, sDates, sOrdering, sPage } = filters;
        const queryString = new URLSearchParams({
          key: apiKey,
          search: sName,
          dates: sDates,
          ordering: sOrdering,
          page: sPage,
          page_size: 12,
        }).toString();
  
        const url = `${BASE_URL}?${queryString}`;
        console.log("Fetching data from:", url);
  
        const cachedData = localStorage.getItem(url);
        if (cachedData) {
          setGames(JSON.parse(cachedData));
          setLoading(false);
          return;
        }
  
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }
  
        const data = await response.json();
        localStorage.setItem(url, JSON.stringify(data.results || []));
        setGames(data.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [filters]);

  return { games, loading, error };
}
