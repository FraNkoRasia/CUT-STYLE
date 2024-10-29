import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const isAuthenticated = sessionStorage.getItem('token'); // Verifica si el token existe en sessionStorage
  const userRole = localStorage.getItem('role'); // Obtiene el rol del usuario

  if (!isAuthenticated) {
    // Si no está autenticado, redirige al login
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // Si el rol del usuario no está en la lista de roles permitidos, redirige a una página de acceso denegado o a otra ruta
    return <Navigate to="/" />;
  }

  // Si está autenticado y tiene el rol permitido, renderiza los hijos (children) de la ruta
  return children;
};

export default ProtectedRoute;

