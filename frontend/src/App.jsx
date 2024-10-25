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
import Hairdresser from './Components/Formularios/hairdresser';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import PublicRoute from './Components/ProtectedRoute/PublicRoute';
import Footer from './Components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        {/* Rutas públicas protegidas */}
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/registerbarber" element={<PublicRoute><RegisterStylist /></PublicRoute>} />
        <Route path="/about" element={<PublicRoute><About /></PublicRoute>} />

        {/* Ruta protegida */}
        <Route path="/barbershop" element={<ProtectedRoute><BarberShop /></ProtectedRoute>} />
        <Route path="/turno" element={<ProtectedRoute><Turno /></ProtectedRoute>} />
        <Route path="/clientlist" element={<ProtectedRoute><ClientList /></ProtectedRoute>} />
        <Route path="/hairdresser" element={<ProtectedRoute><Hairdresser /></ProtectedRoute>} />

      </Routes>

      <Footer />
    </Router>
  )
}

export default App