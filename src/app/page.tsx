'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [prepTime, setPrepTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (query.trim()) params.append('query', query);
    if (cuisine.trim()) params.append('cuisine', cuisine);
    if (prepTime.trim()) params.append('prepTime', prepTime);

    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 px-6 py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg flex flex-col gap-6 border-2 border-solid border-gray-300"
      >
        <h1 className="text-3xl text-gray-900 font-bold text-center mb-6">Search Recipes</h1>

        <input
          type="text"
          placeholder="Search for a recipe (e.g., pasta)"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="border border-gray-300 p-4 rounded-lg text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <select
          value={cuisine}
          onChange={e => setCuisine(e.target.value)}
          className="border text-gray-400 border-gray-300 p-4 rounded-lg text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Select Cuisine</option>
          <option value="Mexican">Mexican</option>
          <option value="Italian">Italian</option>
          <option value="Chinese">Chinese</option>
        </select>

        <input
          type="number"
          min="0"
          placeholder="Max preparation time (min)"
          value={prepTime}
          onChange={e => setPrepTime(e.target.value)}
          className="border border-gray-300 p-4 rounded-lg text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Search
        </button>
      </form>
    </main>
  );
}
