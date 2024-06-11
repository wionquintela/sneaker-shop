import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/HeaderContent/Header";
import Men from "./components/ShoesContent/Men/Men";
import Women from "./components/ShoesContent/Women/Women";
import Kids from "./components/ShoesContent/Kids/Kids";
import { useState } from "react";
function App() {
  // const [showPage, setShowPage] = useState(<Men />);

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
