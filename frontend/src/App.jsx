import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import BuyingPage from "./pages/BuyingPage";
import ListingPage from "./components/ListingPage";
import Navbar from "./components/NavBar";
import Properties from "./pages/Properties";
import LoginPage from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import {Toaster} from "react-hot-toast";
import SignUp from './pages/SignUp';
function App() {
  return (
    <>
      
      <BrowserRouter>
        <Navbar />
        <div className="main">
        <Toaster />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/listing" element={<ListingPage />} />
            <Route path="/buy/:id" element={<BuyingPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/" element={<Properties />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
