import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
interface SearchBarProps {
  value:string;
  onSearchChange:(value:string) => void

}
  
export const SearchBar= ({value,onSearchChange}:SearchBarProps) =>{

  const handelSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(e.target.value)
  }

    return(

      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="search-product" className="text-sm font-medium text-slate-700">
          البحث باسم الصنف 
        </Label>
        <div className='relative'>
          <Input
            id="search-product"
            type='text'
            value={value}
            onChange={handelSearchChange}
            placeholder="ادخل اسم الصنف..."
            className="w-full pl-10  focus:shadow-[0_0_5px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>
    )
}