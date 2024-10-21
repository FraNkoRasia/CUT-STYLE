const auth = {
    checkAuth() {
        return !!sessionStorage.getItem('token');
    },

    checkRol(rol) {
        const session = sessionStorage.getItem('rol');
        return session === rol;
    },

    login(token, rol) {
        // console.log('Logging in with token:', token, 'and role:', rol); // Asegúrate de que estos valores sean correctos
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('rol', rol);
    },

    logout() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('rol');
    }
};



export default auth;
