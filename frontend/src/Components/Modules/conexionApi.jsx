import auth from "./auth";
export const apiUrl = 'http://localhost:5000';

let alertShown = false; // Bandera para realizar un seguimiento de si se ha mostrado la alerta

export const consultarApi = async (url, options = {}) => {
    const token = sessionStorage.getItem('token');

    // Incluir el token en el header si existe
    const headers = {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {})
    };

    try {
        const response = await fetch(url, { ...options, headers });

        if (response.status === 401) {
            // Si el servidor responde con 401 (Unauthorized), es probable que el token haya expirado
            throw new Error('Sesion expirada');
        }

        // Check if response status is not OK (2xx)
        if (!response.ok) {
            // Extract error message from response
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error desconocido');
        }
        return await response.json();

    } catch (error) {
        if (error.message === 'Sesion expirada') {
            if (!alertShown) {
                alert('Sesion expirada, cerrando sesión...');
                alertShown = true; // Set the flag to prevent additional alerts
            }
            // Aquí se debe manejar el cierre de sesión
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('rol');
            window.location.href = '/login'; // Redirigir al login
        }
        console.error('Error en consultarApi:', error);
        throw error; // Si es otro tipo de error, lo lanzamos para ser manejado en otras partes
    }
};



const registro = async (params) => {
    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    };
    try {
        const respuesta = await consultarApi(`${apiUrl}/usuario/register`, opciones);
        return respuesta; // Devuelve la respuesta para manejarla en enviarDatos
    } catch (error) {
        console.error('Error en registro:', error);
        throw error;
    }
};

const login = async (params) => {
    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include', // Indica que incluya las credenciales en la solicitud (incluyendo cookies)
        body: JSON.stringify(params),
    };
    try {
        const respuesta = await fetch(`${apiUrl}/usuario/login`, opciones);
        if (!respuesta.ok) {
            if (respuesta.status === 401) {
                auth.logout();
                throw new Error('Usuario o contraseña incorrectos');
            }
            throw new Error(`HTTP error! Status: ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        if (datos.access_token && datos.rol) {
            auth.login(datos.access_token, datos.rol);
        }
        return datos;
    } catch (error) {
        console.error('Error en login:', error);
        throw error;
    }
};


export const conexionApi = {
    registro, login
};
