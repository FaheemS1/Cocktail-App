import { FiRefreshCw } from 'react-icons/fi'
import CocktailCard from './CocktailCard'
import RandomCocktails from '../lib/RandomCocktail'

const CocktailGrid = () => {
  const { cocktails, loading, fetchCocktails } = RandomCocktails()

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>
  if (cocktails.length === 0) return <p className="text-red-500 text-center mt-10">No cocktails found.</p>

  return (
    <div className='bg-gray-300 p-6 rounded-lg shadow-lg'>
      <h1 className='text-xl font-bold mb-2 text-black'>COCKTAILS LIST</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cocktails.map(cocktail => (
          <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </div>

      <div className='flex justify-end mt-4'>
        <button
          onClick={fetchCocktails}
          className='mt-4 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded inline-flex items-center gap-2'
        >
          Refresh <FiRefreshCw />
        </button>
      </div>
    </div>
  )
}

export default CocktailGrid
