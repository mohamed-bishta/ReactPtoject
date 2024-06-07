import Contact from "./Contact";
import Pages from "./Pages";
import About from "./About";
import Services from "./Services";
import ErrorPage from "./ErrorPage";
import Content from "./Content";
import Root from "./Root";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
   
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [ 
            {
                path: "/",
                element: <Content />,
            },            
                
            {
                path: "/Contact",
                element: <Contact />,
            },
            {
                path: "/Content",
                element: <Content />,
            },
            {
                path: "/Pages",
                element: <Pages />,
            },
            {
                path: "/About",
                element: <About />,
            },
            {
                path: "/Services",
                element: <Services />,
            },

        ],
    },
    
     
]);

export default function MyLink() {
    return (
        <>
            
            <RouterProvider router={router} />
            
        </>
    )
}
