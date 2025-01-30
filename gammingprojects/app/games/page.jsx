"use client";

import { useState, useEffect } from 'react';
import { fetchGames } from '../actions/gameActions';
import Link from 'next/link';

export default function GamesPage() {
  const [games, setGames] = useState([]);
  const [filters, setFilters] = useState({ sName: '', sDates: '1900-01-01,9999-12-31', sOrdering: '', sPage: 1 });

  const updateFilters = (event) => setFilters((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  useEffect(() => { fetchGames(filters).then(setGames); }, [filters]);

  return (
    <div className="bg-gradient-to-b from-lightOpacityL to-lightOpacityS min-h-screen py-9 px-4">
      <div className="mb-6 p-6 bg-grayDarkOpacityS rounded-xl shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
          <input type="text" name="sName" placeholder="Search by name" value={filters.sName} onChange={updateFilters} className="p-2 rounded-lg border border-grayLight flex-1" />
          <input type="text" name="sDates" placeholder="Filter by dates (e.g. 2020-01-01,2021-12-31)" value={filters.sDates} onChange={updateFilters} className="p-2 rounded-lg border border-grayLight flex-1" />
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
          <select name="sOrdering" value={filters.sOrdering} onChange={updateFilters} className="p-2 rounded-lg border border-grayLight flex-1">
            <option value="">Order by</option>
            <option value="released">Release Date</option>
            <option value="name">Name</option>
          </select>
          <button onClick={() => setFilters({ sName: '', sDates: '1900-01-01,9999-12-31', sOrdering: '', sPage: 1 })} className="bg-grayDarkOpacityL hover:bg-grayDark text-white p-2 rounded-lg">
            Clear Filters
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-2">
        {games.map((game) => (
          <div key={game.id} className="bg-grayDarkOpacityS rounded-3xl overflow-hidden shadow-lg">
            <div className="relative">
              <div className="w-full h-80 bg-cover bg-center rounded-t-3xl" style={{ backgroundImage: `url(${game.background_image})` }}></div>
              <div className="p-6 space-y-4">
                <h2 className="text-3xl font-bold text-white text-center truncate pb-5">{game.name}</h2>
                <Link href={`/games/${game.id}`}>
                  <button className="bg-grayMedium hover:bg-grayDark p-2 rounded text-white font-bold w-full">See Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
