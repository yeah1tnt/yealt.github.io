import React from 'react';
import '../src/styles/App.css';
import '../src/pages/Home.js';
import Home from '../src/pages/Home.js';
import About from '../src/pages/About.js';
import Register from '../src/pages/Register.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
		<div className='App'>
			<BrowserRouter className='App'>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</BrowserRouter>

		

		</div>
    )
}

export default App;
