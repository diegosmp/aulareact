import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from './pages/Home'
import About from './pages/About'
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
            
    },
])

export default router