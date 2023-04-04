
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function SingleFood({food}) {
    const {strMealThumb,strMeal,strArea} = food;
    const navigate = useNavigate();
    const handleDetails = () =>{
        navigate(`/food/${strMeal}`)
    }
  return (
    <div className='p-6 rounded-lg shadow-md'>
      <img src={strMealThumb} className='w-full h-[250px] rounded-md' alt="food" />
      <h1 className='text-slate-800 text-xl font-semibold my-4'>{strMeal}</h1>
      <p>{strArea}</p>
      <button onClick={handleDetails} className='py-2 px-4 rounded-md bg-purple-800 text-white mt-4'>More Details</button>
      <NavLink to={`/food/${strMeal}`} className='py-2 px-4 rounded-md bg-purple-800 text-white ml-4'>More Details</NavLink>
    </div>
  )
}

export default SingleFood
