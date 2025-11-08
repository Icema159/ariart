import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tortai from './pages/Tortai';
import Macarons from './pages/Macarons';
import KitiDesertai from './pages/KitiDesertai';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      {/* Navbar rodomas visada */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tortai" element={<Tortai />} />
        <Route path="/macarons" element={<Macarons />} />
        <Route path="/kiti-desertai" element={<KitiDesertai />} />
      </Routes>
    </>
  );
}

export default App;