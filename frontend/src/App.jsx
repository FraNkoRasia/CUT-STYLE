import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Formularios/Login';
import Register from './Components/Formularios/Register';
import RegisterStylist from './Components/Formularios/RegisterStylist';
import About from './Components/About/About';
import BarberShop from './Components/BarberShop/BarberShop';
import MyTurn from './Components/MyTurn/MyTurn';
import ClientList from './Components/ClientList/ClientList';
import Hairdresser from './Components/Formularios/Hairdresser';
import MyHairdresser from './Components/MyHairdresser/MyHairdresser';
import ListUsers from './Components/AdminDashboard/ListUsers';
import ListBarber from './Components/AdminDashboard/ListBarber'
import ShiftList from './Components/AdminDashboard/ShiftList';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import PublicRoute from './Components/ProtectedRoute/PublicRoute';
import Footer from './Components/Footer/Footer';
import ListHairdresser from './Components/AdminDashboard/ListHairdresser';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Rutas públicas para visitante y usuarios */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Rutas públicas protegidas */}
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/registerbarber" element={<PublicRoute><RegisterStylist /></PublicRoute>} />

        {/* Ruta protegida para Administrador */}
        <Route path="/admin/users" element={<ProtectedRoute allowedRoles={['ADMIN']}><ListUsers /></ProtectedRoute>} />
        <Route path="/admin/barbers" element={<ProtectedRoute allowedRoles={['ADMIN']}><ListBarber /></ProtectedRoute>} />
        <Route path="/admin/hairdresser" element={<ProtectedRoute allowedRoles={['ADMIN']}><ListHairdresser /></ProtectedRoute>} />
        <Route path="/admin/turns" element={<ProtectedRoute allowedRoles={['ADMIN']}><ShiftList /></ProtectedRoute>} />
        <Route path="/barbershop" element={<ProtectedRoute allowedRoles={['ADMIN', 'USER', 'BARBER']}><BarberShop /></ProtectedRoute>} />

        {/* Rutas protegidas para Usuario */}
        <Route path="/turn" element={<ProtectedRoute allowedRoles={['USER']}><MyTurn /></ProtectedRoute>} />

        {/* Rutas protegidas para Barbero */}
        <Route path="/clientlist" element={<ProtectedRoute allowedRoles={['BARBER']}><ClientList /></ProtectedRoute>} />
        <Route path="/hairdresser" element={<ProtectedRoute allowedRoles={['BARBER']}><Hairdresser /></ProtectedRoute>} />
        <Route path="/myhairdresser" element={<ProtectedRoute allowedRoles={['BARBER']}><MyHairdresser /></ProtectedRoute>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
