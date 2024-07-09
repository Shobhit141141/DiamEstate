

import './App.css';

import Home from './pages/Home';
import Prodcuts from './pages/Prodcuts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';

import Navbar from './components/NavBar';
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<div className='mt-[80px] main'>
					<Routes>
						<Route path='/details' element={<DetailsPage/>}/>
						<Route path='/' element={<Home />} />
						<Route path='/products' element={<Prodcuts />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
 