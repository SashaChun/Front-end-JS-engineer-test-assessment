type IngredientType = {
  id: string;
  original: string;
};

export type RecipeDataType = {
  id: string;
  name?: string;
  title: string;
  image: string;
  extendedIngredients: IngredientType[];
  instructions?: string;
};

export type FoodsParams = {
  searchParams: Promise<{
    query?: string;
    cuisine?: string;
    prepTime?: string;
  }>;
};

export type RecipeAllType = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

export type ApiResponse = {
  results: RecipeAllType[];
};
