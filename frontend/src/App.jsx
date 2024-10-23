import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Formularios/Login';
import Register from './Components/Formularios/Register';
import RegisterStylist from './Components/Formularios/RegisterStylist';
import About from './Components/About/About';
import BarberShop from './Components/BarberShop/BarberShop';
import Turno from './Components/MyTurn/Turno';
import Footer from './Components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerbarber" element={<RegisterStylist />} />
        <Route path="/barbershop" element={<BarberShop />} />
        <Route path="/about" element={<About />} />
        <Route path="/turno" element={<Turno />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
