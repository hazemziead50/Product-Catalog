import { useState, useMemo } from 'react';
import type { Product, CategoryFilterValue } from './types/product';
import { products } from './data/products';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductList } from './components/ProductList';
import { ProductDialog } from './components/ProductDialog';

export default function App() {
  const [searchValue, setsearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilterValue>("جميع الأصناف");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(()=>{ 
    //useMemo for Performance Optimization & Memoization 
    // to make code Scalability and matched category and search value
    return products.filter((product=>{
      const matchesSearch = product.name.toLowerCase().includes(searchValue.trim().toLowerCase());
      const matchesCategory = selectedCategory === 'جميع الأصناف' || product.category===selectedCategory;
      return matchesSearch && matchesCategory;
    }))
  },[searchValue,selectedCategory])
  return (
    <div className="min-h-screen bg-slate-200 p-6 text-slate-900" dir="rtl">
      <div className="mx-auto max-w-6xl space-y-6">
        {/*  SearchBar + Select */}
        <div className="flex flex-col sm:flex-row items-end gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex-1 w-full">
            <SearchBar value={searchValue} onSearchChange={setsearchValue} />
          </div>
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Product List*/}
        <ProductList
          products={filteredProducts}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onResetFilters={() => {
            setsearchValue('');
            setSelectedCategory('جميع الأصناف');
          }}
        />

        {/* ProductDialog */}
        <ProductDialog
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </div>
  );
}