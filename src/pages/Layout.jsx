import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const Layout = () => {
    return ( <div>
        <nav>
            <ul>
                <li><NavLink to="/Home">Home</NavLink></li>
                <li><NavLink to="/Login">Login</NavLink></li>
                <li><NavLink to="/Perfil">Perfil</NavLink></li>
                <li><NavLink to="/Dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/NaveBar">NavBar</NavLink></li>
            </ul>
        </nav>
        <hr/>
        <Outlet/>
    </div>
    )
}