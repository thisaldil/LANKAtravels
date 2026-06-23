import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
export function FilterRow() {
  const [showTaxes, setShowTaxes] = useState(false);
  return (
    <div className="bg-white pb-4">
      <div className="max-w-[2520px] mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
        <div className="flex items-center justify-between md:justify-end gap-4">
          {/* Filters Button */}
          <button className="flex items-center gap-2 border border-gray-300 rounded-xl py-2 px-4 hover:border-gray-900 hover:bg-gray-50 transition-colors text-sm font-medium">
            <SlidersHorizontal size={16} />
            <span>Filters</span>
          </button>

          {/* Display Total Toggle */}
          <div
            className="hidden md:flex items-center gap-3 border border-gray-300 rounded-xl py-2 px-4 hover:border-gray-900 transition-colors cursor-pointer"
            onClick={() => setShowTaxes(!showTaxes)}>
            
            <span className="text-sm font-medium">
              Display total before taxes
            </span>
            <button
              className={`relative inline-flex h-6 w-10 items-center rounded-full transition-colors focus:outline-none ${showTaxes ? 'bg-gray-900' : 'bg-gray-300'}`}
              role="switch"
              aria-checked={showTaxes}>
              
              <span className="sr-only">Toggle taxes</span>
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${showTaxes ? 'translate-x-4' : 'translate-x-1'}`} />
              
            </button>
          </div>
        </div>
      </div>
    </div>);

}