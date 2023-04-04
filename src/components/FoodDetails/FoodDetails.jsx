
import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

function FoodDetails() {
    const food = useLoaderData();
    const [meal] = food.meals;
    const {strMealThumb,strMeal,strArea} = meal;
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }
  return (
    <div className='m-8 p-6 rounded-lg shadow-md w-[450px]'>
      <img src={strMealThumb} className='w-full h-[250px] rounded-md' alt="food" />
      <h1 className='text-slate-800 text-xl font-semibold my-4'>{strMeal}</h1>
      <p>{strArea}</p>
      <button onClick={handleBack} className='py-2 px-4 rounded-md bg-purple-800 text-white mt-4'>Back</button>
    </div>
  )
}

export default FoodDetails
