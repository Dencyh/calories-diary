import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Today from '../pages/Today'
import Food from '../pages/Food'
import Settings from '../pages/Settings'


function Routing() {
    return (

        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/today' element={<Today />} />
            <Route path='/food' element={<Food />} />
            <Route path='/settings' element={<Settings />} />
        </Routes>

    )
}

export default Routing