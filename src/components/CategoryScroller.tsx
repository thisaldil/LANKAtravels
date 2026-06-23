import React, { useState } from 'react';
import {
  Umbrella,
  Coffee,
  PawPrint,
  Waves,
  Castle,
  Mountain,
  Hotel,
  Tent,
  Gem,
  TreePine,
  ChevronRight,
  ChevronLeft } from
'lucide-react';
const categories = [
{
  label: 'Beachfront',
  icon: Umbrella
},
{
  label: 'Tea Country',
  icon: Coffee
},
{
  label: 'Wildlife Safari',
  icon: PawPrint
},
{
  label: 'Surf',
  icon: Waves
},
{
  label: 'Ancient Cities',
  icon: Castle
},
{
  label: 'Hill Country',
  icon: Mountain
},
{
  label: 'Lakeside',
  icon: Waves
},
{
  label: 'Boutique Hotels',
  icon: Hotel
},
{
  label: 'Treehouses',
  icon: TreePine
},
{
  label: 'Luxury Villas',
  icon: Gem
},
{
  label: 'Camping',
  icon: Tent
}];

export function CategoryScroller() {
  const [activeCategory, setActiveCategory] = useState('Beachfront');
  return (
    <div className="relative bg-white pt-6 pb-4">
      <div className="max-w-[2520px] mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
        <div className="flex items-center">
          <div className="flex overflow-x-auto no-scrollbar gap-8 pb-2 w-full items-center">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.label;
              return (
                <button
                  key={category.label}
                  onClick={() => setActiveCategory(category.label)}
                  className={`flex flex-col items-center gap-2 min-w-max transition-colors duration-200 group ${isActive ? 'text-gray-900 border-b-2 border-gray-900 pb-2' : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300 pb-2 border-b-2 border-transparent'}`}>
                  
                  <Icon
                    size={24}
                    className={
                    isActive ?
                    'text-gray-900' :
                    'text-gray-500 group-hover:text-gray-900'
                    } />
                  
                  <span className="text-xs font-medium">{category.label}</span>
                </button>);

            })}
          </div>
        </div>
      </div>
    </div>);

}