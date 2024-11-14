import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Statistics from "../Pages/Statistics";
import Dashbord from "../Pages/Dashbord";
import Home from "../Components/Home";
import Cards from "../Components/Cards";
import CardDetails from "../Components/CardDetails";
import ErrorPage from "../Components/ErrorPage";
import Faq from "../Pages/Faq";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('../category.json'),
                children:[
                    {
                        path:'/category/:category',
                        element:<Cards></Cards>,
                        loader:()=>fetch('../fakedata.json')
                    },
                    {
                        path:'/',
                        element:<Cards></Cards>,
                        loader:()=>fetch('../fakedata.json')
                    },
                ]
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>,
                loader:()=>fetch('../fakedata.json')
            },
            {
                path:'/dashbord',
                element:<Dashbord></Dashbord>,
                loader:()=>fetch('../fakedata.json')
            },
            {
                path:'/details/:id',
                element:<CardDetails></CardDetails>,
                loader:()=>fetch('../fakedata.json')
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            }
        ]
    },
    
    
])

export {router}