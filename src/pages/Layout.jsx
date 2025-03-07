import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { NavBar } from './NavBar'

export const Layout = () => {
    return ( <div>
        <nav>
            <NavBar></NavBar>
        </nav>
        <hr/>
        <Outlet/>
    </div>
    )
}