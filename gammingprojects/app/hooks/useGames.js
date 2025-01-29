import { useState, useEffect } from 'react';

const apiKey = "931f29a2e2594596ae17eff8a97ef3f4"
const BASE_URL = 'https://api.rawg.io/api/games';

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
        }).toString();
    
        const url = `${BASE_URL}?${queryString}`;
        console.log("Fetching data from:", url); 
    
        const response = await fetch(url, { method: "GET", mode: "cors" });
    
        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
        }
    
        const data = await response.json();
        console.log("API Response:", data);
        setGames(data.results || []);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };    

    fetchGames();
  }, [filters]);

  return { games, loading, error };
}
