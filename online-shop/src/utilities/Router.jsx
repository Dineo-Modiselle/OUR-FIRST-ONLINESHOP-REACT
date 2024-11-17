import {createBrowserRouter} from "react-router-dom"
import Home from "../components/Home"
import PageNotFound from "../pages/PageNotFound";




const router = createBrowserRouter([

    {
        path:"/",
        element: <Home/>
    },
    {
        path:"*",
        element:<PageNotFound/>

    },
    {
        
    }

]);
export default router;