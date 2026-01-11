// src/components/ProductCard.tsx
import React from 'react';

interface ProductProps {
  image: string;
  brand: string;
  title: string;
  price: string;
  affiliateLink: string;
}

export default function ProductCard({ image, brand, title, price, affiliateLink }: ProductProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500 uppercase font-semibold">{brand}</p>
        <h3 className="text-lg font-medium text-gray-900 mt-1 truncate">{title}</h3>
        <p className="text-xl font-bold text-gray-900 mt-2">{price}</p>
        
        {/* Affiliate Link Button */}
        <a 
          href={affiliateLink}
          target="_blank"
          rel="noopener sponsored"
          className="block w-full text-center bg-black text-white py-2 mt-4 rounded hover:bg-gray-800 transition-colors"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
}