import React from 'react';
import { ListingCard, Listing } from './ListingCard';
const mockListings: Listing[] = [
{
  id: '1',
  title: 'Galle, Southern Province',
  distance: '115 km away',
  dates: 'Oct 15 - 20',
  price: 120,
  rating: 4.95,
  imageUrl:
  'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80'
},
{
  id: '2',
  title: 'Ella, Uva Province',
  distance: 'Mountain views',
  dates: 'Nov 2 - 7',
  price: 85,
  rating: 4.88,
  imageUrl:
  'https://images.unsplash.com/photo-1546708973-c31fa6770281?auto=format&fit=crop&w=800&q=80'
},
{
  id: '3',
  title: 'Mirissa, Southern Province',
  distance: 'Beachfront',
  dates: 'Dec 10 - 15',
  price: 150,
  rating: 4.98,
  imageUrl:
  'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80'
},
{
  id: '4',
  title: 'Sigiriya, Central Province',
  distance: 'Near ancient ruins',
  dates: 'Jan 5 - 10',
  price: 95,
  rating: 4.92,
  imageUrl:
  'https://images.unsplash.com/photo-1588614959060-4d144f28b207?auto=format&fit=crop&w=800&q=80'
},
{
  id: '5',
  title: 'Kandy, Central Province',
  distance: 'City views',
  dates: 'Oct 22 - 27',
  price: 75,
  rating: 4.85,
  imageUrl:
  'https://images.unsplash.com/photo-1578469645762-461b4f8a0d96?auto=format&fit=crop&w=800&q=80'
},
{
  id: '6',
  title: 'Arugam Bay, Eastern Province',
  distance: 'Surf spot',
  dates: 'Jul 1 - 6',
  price: 110,
  rating: 4.91,
  imageUrl:
  'https://images.unsplash.com/photo-1580988365610-8b1b369528f1?auto=format&fit=crop&w=800&q=80'
},
{
  id: '7',
  title: 'Nuwara Eliya, Central Province',
  distance: 'Tea estates',
  dates: 'Feb 14 - 19',
  price: 130,
  rating: 4.89,
  imageUrl:
  'https://images.unsplash.com/photo-1625736302040-528f1c8a1e40?auto=format&fit=crop&w=800&q=80'
},
{
  id: '8',
  title: 'Unawatuna, Southern Province',
  distance: 'Ocean views',
  dates: 'Mar 10 - 15',
  price: 140,
  rating: 4.96,
  imageUrl:
  'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80'
},
{
  id: '9',
  title: 'Bentota, Southern Province',
  distance: 'Riverfront',
  dates: 'Apr 5 - 10',
  price: 160,
  rating: 4.94,
  imageUrl:
  'https://images.unsplash.com/photo-1574227492706-f65b24c3688a?auto=format&fit=crop&w=800&q=80'
},
{
  id: '10',
  title: 'Trincomalee, Eastern Province',
  distance: 'Private beach',
  dates: 'Aug 12 - 17',
  price: 180,
  rating: 4.97,
  imageUrl:
  'https://images.unsplash.com/photo-1537551080512-bc7ee622a613?auto=format&fit=crop&w=800&q=80'
},
{
  id: '11',
  title: 'Hikkaduwa, Southern Province',
  distance: 'Coral reef nearby',
  dates: 'Nov 20 - 25',
  price: 90,
  rating: 4.86,
  imageUrl:
  'https://images.unsplash.com/photo-1506462945848-ac8ea2f609dc?auto=format&fit=crop&w=800&q=80'
},
{
  id: '12',
  title: 'Dambulla, Central Province',
  distance: 'Jungle retreat',
  dates: 'Dec 1 - 6',
  price: 105,
  rating: 4.9,
  imageUrl:
  'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=800&q=80'
}];

export function ListingGrid() {
  return (
    <div className="max-w-[2520px] mx-auto px-4 sm:px-6 md:px-10 xl:px-20 pb-24 pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 gap-y-10">
        {mockListings.map((listing) =>
        <ListingCard key={listing.id} listing={listing} />
        )}
      </div>
    </div>);

}