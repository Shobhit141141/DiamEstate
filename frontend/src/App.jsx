import "./App.css";

import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";

import Navbar from "./components/NavBar";
import Properties from "./pages/Properties";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/products" element={<Properties />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
