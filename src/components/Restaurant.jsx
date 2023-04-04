
import {createBrowserRouter} from "react-router-dom"
import ErrorPage from "./Error/Error";
import Header from "./Header/Header";
import About from "./About/About";
import Foods from "./Foods/Foods";
  
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
            loader: fetch('')
        },
    ]
},
]);

export {restaurant};
  
