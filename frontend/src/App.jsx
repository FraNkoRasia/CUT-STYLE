import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Formularios/Login';
import Register from './Components/Formularios/Register';
import RegisterStylist from './Components/Formularios/RegisterStylist';
import About from './Components/About/About';
import Stylist from './Components/Stylist/Stylist';
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
        <Route path="/registerstylist" element={<RegisterStylist />} />
        <Route path="/Stylist" element={<Stylist />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
