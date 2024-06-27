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
  // const [showPage, setShowPage] = useState(<Men />);

  return (
    <div className="App" style={{ overFlow: "hidden" }}>
      <Header />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer className="footerSection text-center footerContent" />
    </div>
  );
}

export default App;
