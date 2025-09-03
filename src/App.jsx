import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importuojame puslapius
import Home from './pages/Home';
import Tortai from './pages/Tortai';
import Macarons from './pages/Macarons';
import KitiDesertai from './pages/KitiDesertai';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tortai" element={<Tortai />} />
        <Route path="/macarons" element={<Macarons />} />
        <Route path="/kiti-desertai" element={<KitiDesertai />} />
      </Routes>
    </Router>
  );
}

export default App;