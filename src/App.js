import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/HeaderContent/Header";
import Men from "./components/ShoesContent/Men/Men";
import Women from "./components/ShoesContent/Women/Women";
import Kids from "./components/ShoesContent/Kids/Kids";
import Footer from "./components/Home/Footer";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [shoe, setShoe] = useState([]);
  return (
    <div className="App" style={{ overFlow: "hidden" }}>
      <Header />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/men"
              element={<Men shoe={shoe} setShoe={setShoe} />}
            />
            <Route
              path="/women"
              element={<Women shoe={shoe} setShoe={setShoe} />}
            />
            <Route
              path="/kids"
              element={<Kids shoe={shoe} setShoe={setShoe} />}
            />
            <Route path="/cart" element={<Cart shoe={shoe} />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer className="footerSection text-center footerContent" />
    </div>
  );
}

export default App;
