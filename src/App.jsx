
import React from "react";
import {
  RouterProvider,
} from "react-router-dom";
import {restaurant} from './components/Restaurant'
function App() {
  
  return (
    <RouterProvider router={restaurant} />
  )
}

export default App
