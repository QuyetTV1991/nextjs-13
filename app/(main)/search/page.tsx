import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <div>
      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-semibold mb-4">Search Results</h2>

        {/* Display search results here */}
        <div className="flex mb-4">
          <div className="w-1/4">
            <Image
              src="/assets/icons/image-thumbail.svg"
              alt="News Image"
              width={150}
              height={150}
              className="w-full h-auto"
            />
          </div>
          <div className="w-3/4 ml-4">
            <h3 className="text-xl font-semibold mb-2">
              Search Result Title 1
            </h3>
            <p className="text-gray-800">Description of search result 1.</p>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/4">
            <Image
              src="/assets/icons/image-thumbail.svg"
              alt="News Image"
              width={150}
              height={150}
              className="w-full h-auto"
            />
          </div>
          <div className="w-3/4 ml-4">
            <h3 className="text-xl font-semibold mb-2">
              Search Result Title 2
            </h3>
            <p className="text-gray-800">Description of search result 2.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
