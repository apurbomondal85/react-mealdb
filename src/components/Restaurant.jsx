
import {createBrowserRouter} from "react-router-dom"
import ErrorPage from "./Error/Error";
import Header from "./Header/Header";
import About from "./About/About";
import Foods from "./Foods/Foods";
import FoodDetails from "./FoodDetails/FoodDetails";
  
const restaurant = createBrowserRouter([
{
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: "about",
            element: <About/>
        },
        {
            path: "food",
            element: <Foods/>,
            loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chi')
        },
        {
            path: "/food/:foodId",
            element: <FoodDetails/>,
            loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.foodId}`)
        },
    ]
},
]);

export {restaurant};
  
