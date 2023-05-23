import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navigation from '../layout/navigation'

// import Home from '../pages/home';

const Routeur = () => {
	return (
		<BrowserRouter>
            <Navigation/>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                </Routes>
		</BrowserRouter>
	)
}

export default Routeur
