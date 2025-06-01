"use client"
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const NotFoundPage = () => {
  const pathname = usePathname();
  const productId = pathname.split("/")[2]
  const reviewId = pathname.split("/")[4]


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h2>
      <p className="text-lg text-gray-600 mb-6">
      Sorry, we couldnot find the Review {reviewId} for Product {productId}. 
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
