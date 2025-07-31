import React from 'react'
import { useEffect, useState } from 'react'

export interface Cocktail {
  strDrink: string
  strInstructions: string
  strDrinkThumb: string
  idDrink: string
}

const useRandomCocktails = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([])
  const [loading, setLoading] = useState(true)

  const fetchCocktails = async () => {
    setLoading(true)
    try {
      const promises = Array.from({ length: 5 }, () =>
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(res => res.json())
      )

      const results = await Promise.all(promises)
      const newCocktails = results.map(result => result.drinks[0])
      setCocktails(newCocktails)
    } catch (err) {
      console.error('Error fetching cocktails:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCocktails()
  }, [])

  return { cocktails, loading, fetchCocktails }
}

export default useRandomCocktails
