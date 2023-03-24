import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Cobros from "../page/producto/Cobros";
import Estadisticas from "../page/producto/Estadisticas";
import Inventario from "../page/producto/Inventario";
import Login from "../page/register/Login";
import Register from "../page/register/Register";


export default createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[
        {
            index:true,
            element:<Estadisticas/>
        },{
            path:'/cobros',
            element:<Cobros/>
        },{
            path:'/inventario',
            element:<Inventario/>
        },
        {
            path:'/estadisticas',
            element:<Estadisticas/>
        }
    ]
    },{
        path:'/login',
        element:<Login/>
    },{
        path:'register',
        element:<Register/>
    }])