import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import Ruta1 from './Ruta1'
import Ruta2 from './Ruta2'
import "./Estilos.css"

const Home = () => {
    return (
        <div className="Page">
            <h1> Estás en la página principal</h1>
            <div className="rutas-home">
                <Link to = "/home/route1"> Ruta 1 </Link>
                <Link to = "/home/route2"> Ruta 2 </Link>
            </div>
            <Outlet />
        </div>
    )
}


export default Home