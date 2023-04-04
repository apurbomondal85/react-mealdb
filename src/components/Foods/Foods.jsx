
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleFood from '../FoodCard/SingleFood';

function Foods() {
    const foods = useLoaderData();
    const {meals} = foods;
  return (
    <div className='lg:max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        meals.map(food => <SingleFood key={food.idMeal} food={food} />)
      }
    </div>
  )
}

export default Foods
