import React from 'react'

const SearchBar = () => {
  return (
   <div className="bg-gray-800 max-w-2xl mx-auto text-white rounded-lg">
      {/* Search Input */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search cocktails..."
          className="flex-1 px-4 py-2 rounded-lg text-white outline-none"
        />
        <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-4 rounded">
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar