import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
function App() {
  return (
    <>
 
        <BrowserRouter>
        <Navbar/>
         <div className="mt-[80px] main">
         <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
         </div>
        </BrowserRouter>
    </>
  );
}

export default App;
