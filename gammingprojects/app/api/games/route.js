export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const sName = searchParams.get('sName') || '';
  const sDates = searchParams.get('sDates') || '1900,9999';
  const sOrdering = searchParams.get('sOrdering') || '';
  const sPage = searchParams.get('sPage') || 1;

  const apiKey = '931f29a2e2594596ae17eff8a97ef3f4';

  const apiUrl = `https://api.rawg.io/api/games?${new URLSearchParams({
    page: sPage,
    page_size: 12,
    ordering: sOrdering,
    search: sName,
    dates: sDates,
    key: apiKey,
  }).toString()}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Erro ao buscar jogos da API externa.");
    }

    const data = await response.json();
    console.log("Dados recebidos da API:", data);

    return new Response(JSON.stringify(data.results || []), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Erro ao buscar jogos:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
