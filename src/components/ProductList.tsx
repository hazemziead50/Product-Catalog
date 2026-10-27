import type { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onResetFilters?: () => void;
}

export function ProductList({
  products,
  onSelectProduct,
  onResetFilters,
}: ProductListProps) {
  // Empty State
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white py-12 px-4 text-center">
        <p role="status" className="text-base font-medium text-slate-600">
          لا توجد منتجات تطابق بحثك. جرب اسماً آخر أو فئة مختلفة.
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
          >
            إعادة تعيين الفلاتر
          </button>
        )}
      </div>
    );
  }

  // List of cards
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 list-none p-0">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard
            product={product}
            onSelect={onSelectProduct}
          />
        </li>
      ))}
    </ul>
  );
}