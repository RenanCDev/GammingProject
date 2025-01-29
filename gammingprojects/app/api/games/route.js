export async function GET(request) {
  const { searchParams } = new URL(request.url);
  
  const filters = {
    sName: searchParams.get('sName') || '',
    sDates: searchParams.get('sDates') || '1900-01-01,9999-12-31',
    sOrdering: searchParams.get('sOrdering') || '',
    sPage: searchParams.get('sPage') || 1,
  };

  const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY || '931f29a2e2594596ae17eff8a97ef3f4';

  const apiUrl = `https://api.rawg.io/api/games?${new URLSearchParams({
    key: apiKey,
    search: filters.sName,
    dates: filters.sDates,
    ordering: filters.sOrdering,
    page: filters.sPage,
    page_size: 12,
  }).toString()}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Erro ao buscar jogos da API externa.");

    const data = await response.json();
    return new Response(JSON.stringify(data.results || []), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Erro ao buscar jogos:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}