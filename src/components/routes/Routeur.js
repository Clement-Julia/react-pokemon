import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navigation from '../layout/navigation'

import Home from '../pages/home';
import About from '../pages/about';
import Competence from '../pages/competence';
import Experience from '../pages/experience';
import Formation from '../pages/formation';
import Passion from '../pages/passion';
import NotFound from './error-page'
import Test from '../pages/test';

const Routeur = () => {
	return (
		<BrowserRouter>
            <Navigation/>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/experience' element={<Experience/>} />
                    <Route path='/formation' element={<Formation/>} />
                    <Route path='/passion' element={<Passion/>} />
                    <Route path='/competence' element={<Competence/>} />
                    <Route path='/test' element={<Test/>} />
                    <Route path='/test/:id' element={<Test/>} />
                    <Route path='*' element={<NotFound />}/>
                </Routes>
		</BrowserRouter>
	)
}

export default Routeur
