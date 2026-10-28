import type { Product } from '@/types/product';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ProductDialogProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDialog = ({ product, onClose }: ProductDialogProps) => {
  return (
    <Dialog open={product !== null} onOpenChange={(open) => !open && onClose()}>
      {product && (
        <DialogContent showCloseButton={false} className="max-w-md sm:max-w-lg text-right" dir="rtl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-slate-900">
              {product.name}
            </DialogTitle>
            <DialogDescription className="text-l text-slate-500">
              التصنيف: {product.category} | التقييم: <span className='text-amber-500'>★ {product.rating.toFixed(1)}</span>
            </DialogDescription>
          </DialogHeader>

          {/* image*/}
          <div className="h-56 w-full overflow-hidden rounded-lg bg-slate-100 my-2">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* price and avalible*/}
          <div className="flex items-center justify-between border-t border-b border-slate-100 py-3 my-2">
            <div>
              <span className="text-l text-slate-500 block">السعر</span>
              <span className="text-2xl font-bold text-slate-900">{product.price} ₪</span>
            </div>
            <span
              className={`rounded-full px-4 py-2 text-l font-semibold ${
                product.available
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-rose-50 text-rose-700 border border-rose-200'
              }`}
            >
              {product.available ? ' متوفر  ' : ' غير متوفر حالياً'}
            </span>
          </div>

          <div className="mt-4 flex justify-end">
            <Button variant="outline" onClick={onClose}>
              إغلاق
            </Button>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};