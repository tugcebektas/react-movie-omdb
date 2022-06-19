import * as React from "react";
import MovieDetail from "./pages/MovieDetail";
import Home from "./pages/Home";
const routes = [
    {
        path:'/',
        element:<Home/>,
    },
    {
        path:'/movieDetail/:id',
        element:<MovieDetail/>
    }
]

export default routes;