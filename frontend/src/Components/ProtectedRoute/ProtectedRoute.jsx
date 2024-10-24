import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('token'); // Verifica si el token existe en sessionStorage

  if (!isAuthenticated) {
    // Si no está autenticado, redirige al login
    return <Navigate to="/login" />;
  }

  // Si está autenticado, renderiza los hijos (children) de la ruta
  return children;
};

export default ProtectedRoute;
