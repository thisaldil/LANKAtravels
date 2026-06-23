import React from 'react';
import { Map } from 'lucide-react';
export function MapButton() {
  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40">
      <button className="bg-gray-900 hover:bg-black text-white px-5 py-3 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 font-medium text-sm">
        <span>Show map</span>
        <Map size={18} />
      </button>
    </div>);

}