import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import AddProduct from "./pages/addProduct";
import Homepage from "./pages/homePage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
