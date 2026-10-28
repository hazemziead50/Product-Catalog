// as const for Read-only Literal Values
export const CATEGORIES = ["red-meat", "fish", "white-meat"] as const;

 //Literal Union
export type Category = (typeof CATEGORIES)[number];

 //Add category filtering with an “All categories” option
export type CategoryFilterValue = Category | "جميع الأصناف";


export interface Product {
  id: number;
  name: string;
  price: number; 
  category: Category;
  rating: number; 
  available: boolean;
  image: string;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  "red-meat": "Red Meat",
  fish: "Fish & Seafood",
  "white-meat": "Poultry",
};

export function isCategory(value: string): value is Category {
  return CATEGORIES.some((category) => category === value);
}