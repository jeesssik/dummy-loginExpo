import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
return useContext(AuthContext);
}

export function AuthProvider({ children }) {
const [user, setUser] = useState(null); // El estado del usuario
const [loading, setLoading] = useState(false); // Estado de carga

const login = async (email, password) => {
setLoading(true);

try {
    const response = await fakeLogin(email, password); // Simulación de inicio de sesión
    const token = response.token;

    // Si la autenticación es exitosa, actualiza el estado del usuario
    setUser({ email, token });
} catch (error) {
    // Maneja los errores de inicio de sesión, por ejemplo, muestra un mensaje de error
    console.error('Error al iniciar sesión:', error);
} finally {
    setLoading(false);
}
};

function fakeLogin(email, password) {
// Simulación de inicio de sesión
return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (email === 'asd' && password === 'asd') {

        // Genera un token aleatorio como si fuera un JWT
        const token = Math.random().toString(36).substring(7);
        resolve({ token });
        /* el token es un string aleatorio que se genera para identificar al usuario */
        /* en una aplicación real, el token se genera en el servidor y se envía al cliente */
        /* para este ejemplo, el token se genera en el cliente */

    }

    reject(new Error('Usuario o contraseña incorrectos'));
    }, 1000);
})
};


const logout = async () => {
setUser(null);
};

const signup = async (email, password) => {
// Lógica de registro aquí
};

const value = {
user,
loading,
login,
logout,
signup,
};

return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


/*La autenticación basada en tokens es un protocolo de autenticación en el que los usuarios verifican su identidad a cambio de un token de acceso único. Los usuarios pueden entonces acceder al sitio web, la aplicación o el recurso durante la vida del token sin tener que volver a introducir sus credenciales.*/
/*El token se genera en el servidor y se envía al cliente. El cliente almacena el token y lo envía al servidor en cada solicitud. El servidor verifica el token y responde con los datos solicitados si el token es válido.*/