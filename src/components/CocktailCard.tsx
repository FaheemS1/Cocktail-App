import { type Cocktail } from '../lib/RandomCocktail'

interface Props {
  cocktail: Cocktail
}

const CocktailCard = ({ cocktail }: Props) => {
  return (
    <div className='bg-gray-800 p-4 rounded-lg shadow-md justify-center items-center text-center text-white'>
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        className="w-full h-32 object-cover mb-4 rounded"
      />
      <h2 className='text-xl font-semibold mb-2'>{cocktail.strDrink}</h2>
      <p className='text-gray-400'>{cocktail.strInstructions}</p>
      <button className='mt-4 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded'>
        Add
      </button>
    </div>
  )
}

export default CocktailCard
