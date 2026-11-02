
import { Label } from "@/components/ui/label";
import {
  type CategoryFilterValue,
  isCategory
} from "@/types/product";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';



interface CategoryFilterProps{
  selectedCategory:CategoryFilterValue ;
  onSelectedCategory:(selectedCategory:CategoryFilterValue)=>void
}

export function CategoryFilter({ selectedCategory, onSelectedCategory }: CategoryFilterProps) {
  const handleValueChange = (val: string| null) => {
    if (!val) return;
    if (val === "جميع الأصناف") {
      onSelectedCategory("جميع الأصناف");
    } else if (isCategory(val)) {  //Type Guard for 
      onSelectedCategory(val);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full sm:w-64">
      <Label htmlFor="category-select" className="text-sm font-medium text-slate-700">
       الأصناف
      </Label>
      <Select 
        value={selectedCategory}
        onValueChange={handleValueChange}
      >
        <SelectTrigger id="category-select" className="w-full text-right">
          <SelectValue placeholder="اختر الفئة" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="جميع الأصناف">جميع الأصناف </SelectItem>
          <SelectItem value="red-meat">لحوم حمراء</SelectItem>
          <SelectItem value="fish">أسماك ومأكولات بحرية</SelectItem>
          <SelectItem value="white-meat">دواجن ولحوم بيضاء</SelectItem>
          
        </SelectContent>
      </Select>
    </div>
  );
}