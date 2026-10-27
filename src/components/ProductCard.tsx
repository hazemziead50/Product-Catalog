import type { Product } from '@/types/product';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard = ({ product, onSelect }: ProductCardProps) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Card Image */}
      <div className=" h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="rounded-md bg-slate-100 px-2 py-0.5 font-medium text-slate-600">
              {product.category}
            </span>
            <span className="font-semibold text-amber-500">★ {product.rating.toFixed(1)}</span>
          </div>
          <h3 className="line-clamp-1 text-base font-semibold text-slate-800">
            {product.name}
          </h3>
        </div>

        <div className="mt-4 border-t border-slate-200 pt-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-bold text-slate-900">{product.price} ₪</span>
            <span
              className={`rounded-full px-2.5 py-0.5 text-l font-medium ${
                product.available
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-rose-50 text-rose-700 border border-rose-200'
              }`}
            >
              {product.available ? 'متوفر' : 'غير متوفر'}
            </span>
          </div>

          {/* Dialog */}
          <Button
            type="button"
            variant="default"
            className="w-full"
            onClick={() => onSelect(product)}
          >
            عرض التفاصيل
          </Button>
        </div>
      </div>
    </div>
  );
};