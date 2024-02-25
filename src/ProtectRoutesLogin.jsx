import { useEffect, useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

const ProtectRoutesLogin =({loggedIn, setLoggedIn}) => {
 console.log(loggedIn);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false); // Asegúrate de establecer loggedIn en false si no hay token
    }
  }, [loggedIn]); // Asegúrate de pasar un arreglo vacío como dependencia para que el efecto se ejecute solo una vez

  

  if (loggedIn===true) {
    // Si el usuario no está autenticado o el token no es válido,
    // redirigir a la página de inicio de sesión con la ubicación actual como estado
    return <Navigate to="/dashobard" state={{ from: location }} />;
  }

 
  // Si el usuario está autenticado y tiene un token válido, mostrar el contenido protegido
  return  <Navigate to="/login" state={{ from: location }} />;

      }
export default ProtectRoutesLogin;
