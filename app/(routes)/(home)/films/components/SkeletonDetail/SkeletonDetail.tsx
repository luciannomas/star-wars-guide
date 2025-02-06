export default function SkeletonDetail() {
    return (
      <div className="animate-pulse">
        <div className="my-8 flex justify-center bg-black">
          <div className="w-full max-w-5xl">
            <div className="relative p-1 bg-black rounded-lg shadow-md hover:shadow-lg h-full flex flex-col">
              <div className="relative w-full h-64 md:h-96 bg-gray-700 rounded-t-lg"></div>
              <div className="relative p-3 flex-grow flex flex-col justify-between text-yellow-500">
                <div className="flex flex-col mb-3 gap-x-4 items-center">
                  <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-6 bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8 flex justify-center bg-black">
          <div className="w-full max-w-4xl">
            <div className="rounded-md border bg-gray-700 h-64"></div>
          </div>
        </div>
      </div>
    );
  }