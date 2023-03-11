import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../../Page/Homes/About/About";
import Home from "../../Page/Homes/Home/Home";
import Project from "../../Page/Homes/Project/Project";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/project',
                element: <Project></Project>
            },
            {
                path:'/about',
                element: <About></About>
            },
            
        ]
    }
])

export default router;