import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Products from "./pages/products";
import Homepage from "./pages/homePage";
import IndexProvider from "./contexts";
function App() {
  return (
    <div className="App">
      <IndexProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </IndexProvider>
    </div>
  );
}

export default App;
