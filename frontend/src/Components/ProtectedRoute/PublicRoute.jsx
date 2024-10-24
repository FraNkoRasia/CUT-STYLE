import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const token = sessionStorage.getItem('token');

  if (token) {
    // Si el usuario está logueado, redirige a la página de inicio o home
    return <Navigate to="/" />;
  }

  // Si no está logueado, permite acceder a la ruta
  return children;
};

export default PublicRoute;
