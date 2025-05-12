'use client'

import Image from "next/image"

type Ingredient = {
    id: number
    original: string
}

type RecipeData = {
    id: string
    name?: string
    title: string
    image: string
    extendedIngredients: Ingredient[]
    instructions?: string
}

type Props = {
    recipeData: RecipeData
}

const RecipDetail = ({ recipeData }: Props) => {
    return (
        <div className="min-h-screen px-6 py-10 bg-gradient-to-r from-green-400 to-blue-500">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl p-6">
                <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
                    {recipeData.title}
                </h1>
                <div className="w-full h-64 relative mb-6">
                    <Image
                        src={recipeData.image}
                        alt={recipeData.title}
                        fill
                        className="rounded-lg shadow-md object-cover"
                    />
                </div>
                <div className="text-gray-800 text-lg">
                    <h2 className="text-2xl font-semibold mb-4">Ingredients:</h2>
                    <ul className="list-inside list-disc space-y-2">
                        {recipeData.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-6 text-gray-800 text-lg">
                    <h3 className="text-2xl font-semibold mb-4">Instructions:</h3>
                    <p>{recipeData.instructions || "No instructions provided."}</p>
                </div>
            </div>
        </div>
    )
}

export default RecipDetail
