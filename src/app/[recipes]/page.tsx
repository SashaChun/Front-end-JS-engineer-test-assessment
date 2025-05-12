import React, { Suspense } from 'react';
import Food from '@/Components/Food';
import Loader from '@/Components/Loader';
import { ApiResponse, FoodsParams, RecipeAllType } from '@/app/types/type';

export default async function ResultsPage({ searchParams }: FoodsParams) {
  const { query, cuisine, prepTime } = await searchParams;
  const apiKey = process.env.SPOONACULAR_API_KEY!;
  const apiUrl = new URL('https://api.spoonacular.com/recipes/complexSearch');

  if (query) apiUrl.searchParams.set('query', query);
  if (cuisine) apiUrl.searchParams.set('cuisine', cuisine);
  if (prepTime) apiUrl.searchParams.set('maxReadyTime', prepTime);
  apiUrl.searchParams.set('apiKey', apiKey);

  let data: ApiResponse | null = null;

  try {
    const res = await fetch(apiUrl.toString(), {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch');

    data = await res.json();
  } catch (error) {
    console.error(error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
        <p className="text-white text-lg font-semibold">Error loading recipes. Try again later.</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<Loader />}>
      <div className="min-h-screen px-6 py-10 bg-gradient-to-r from-green-400 to-blue-500">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white text-4xl font-bold text-center mb-10">Search Results</h1>
          {data?.results?.length ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.results.map((item: RecipeAllType) => (
                <li key={item.id} className="hover:scale-105 transition-transform duration-300">
                  <Food id={item.id} image={item.image} title={item.title} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white text-center text-lg">No results found.</p>
          )}
        </div>
      </div>
    </Suspense>
  );
}
