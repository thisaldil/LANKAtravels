import React, { useState, lazy } from 'react';
import { Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';
export interface Listing {
  id: string;
  title: string;
  distance: string;
  dates: string;
  price: number;
  rating: number;
  imageUrl: string;
}
interface ListingCardProps {
  listing: Listing;
}
export function ListingCard({ listing }: ListingCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.4
      }}
      className="flex flex-col gap-2 group cursor-pointer">
      
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-200">
        <img
          src={listing.imageUrl}
          alt={listing.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-out"
          loading="lazy" />
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 right-3 p-1 hover:scale-110 transition-transform active:scale-95"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
          
          <Heart
            size={24}
            className={`drop-shadow-md ${isFavorite ? 'fill-teal-500 text-teal-500' : 'fill-black/20 text-white'}`} />
          
        </button>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-gray-900 truncate pr-2">
            {listing.title}
          </h3>
          <div className="flex items-center gap-1 text-sm">
            <Star size={14} className="fill-gray-900 text-gray-900" />
            <span>{listing.rating.toFixed(2)}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm">{listing.distance}</p>
        <p className="text-gray-500 text-sm">{listing.dates}</p>
        <div className="mt-1 flex items-center gap-1">
          <span className="font-semibold text-gray-900">${listing.price}</span>
          <span className="text-gray-900">night</span>
        </div>
      </div>
    </motion.div>);

}