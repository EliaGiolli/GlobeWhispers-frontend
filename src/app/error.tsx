'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global Error:', error);
  }, [error]);

  return (
    <html>
      <body className="h-screen w-full flex items-center justify-center bg-red-50 text-red-800">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Oops! Qualcosa è andato storto.</h2>
          <p className="my-2">{error.message}</p>
          <button
            onClick={() => reset()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
