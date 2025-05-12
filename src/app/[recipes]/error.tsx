 'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error('Recipe error:', error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-100 text-center">
            <h2 className="text-2xl font-bold text-red-700">Помилка при завантаженні рецепту</h2>
            <p className="text-gray-800 mt-2">{error.message}</p>
            <button
                onClick={() => reset()}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
                Спробувати ще раз
            </button>
        </div>
    );
}
