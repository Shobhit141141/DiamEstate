import "./App.css";
import Home from "./pages/Home";
import Prodcuts from "./pages/Prodcuts";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Prodcuts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
