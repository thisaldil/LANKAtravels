import React from 'react';
import { Header } from '../components/Header';
import { CategoryScroller } from '../components/CategoryScroller';
import { FilterRow } from '../components/FilterRow';
import { ListingGrid } from '../components/ListingGrid';
import { MapButton } from '../components/MapButton';
import { Footer } from '../components/Footer';
export function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />

      <main>
        <div className="sticky top-20 z-40 bg-white">
          <CategoryScroller />
          <FilterRow />
        </div>

        <ListingGrid />
      </main>

      <MapButton />
      <Footer />
    </div>);

}