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
import ClientList from './Components/ClientList/ClientList';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import PublicRoute from './Components/ProtectedRoute/PublicRoute';
import Footer from './Components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />

      <Routes>
        {/* Ruta pública para Home y About, sin restricción */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Rutas públicas protegidas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerbarber" element={<RegisterStylist />} />


        {/* Ruta protegida */}
        <Route path="/barbershop" element={<BarberShop />} />
        <Route path="/turno" element={<Turno />} />
        <Route path="/clientlist" element={<ClientList />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
