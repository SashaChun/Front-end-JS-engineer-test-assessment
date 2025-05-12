import dynamic from 'next/dynamic';
import Loader from '@/Components/Loader';
import { RecipeDataType } from '@/app/types/type';
import { notFound } from 'next/navigation';

const RecipDetail = dynamic(() => import('@/Components/RecipDetail'), {
  loading: () => <Loader />,
});

type Props = {
  params: Promise<{ id: string }>;
};

export default async function RecipeDetails({ params }: Props) {
  const { id } = await params;
  const apiKey = process.env.SPOONACULAR_API_KEY!;
  const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

  let recipeData: RecipeDataType | null = null;

  try {
    const res = await fetch(apiUrl, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch recipe details');
    recipeData = await res.json();
  } catch (error) {
    console.error(error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
        <p className="text-white text-lg font-semibold">Error loading recipe details.</p>
      </div>
    );
  }

  if (!recipeData) {
    notFound();
  }

  return <RecipDetail recipeData={recipeData} />;
}
