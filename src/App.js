import React from 'react';
import '../src/styles/App.css';
import '../src/pages/Home.js';
import HomePage from '../src/pages/Home.js';
import AboutPage from '../src/pages/About.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
		<div className='App'>
			<BrowserRouter className='App'>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</BrowserRouter>

		

		</div>
    )
}

export default App;
