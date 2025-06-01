import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h2>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, we couldnot find the page you were looking for.
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
