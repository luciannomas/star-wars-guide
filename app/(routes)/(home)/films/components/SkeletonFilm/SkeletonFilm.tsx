'use client'

export default function SkeletonFilm() {
    return (
      <div className="container mx-auto px-4">
        <div className="my-8 flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-1 gap-6 my-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <div key={index} className="relative p-1 bg-gray-200 rounded-lg shadow-md h-full flex flex-col animate-pulse">
                  <div className="relative w-full h-64 bg-gray-300 rounded-t-lg"></div>
                  <div className="relative p-3 flex-grow flex flex-col justify-between">
                    <div className="flex flex-col mb-3 gap-x-4">
                      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }