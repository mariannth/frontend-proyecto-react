// src/pages/Login.jsx
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Iniciar Sesión</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                        <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" />
                    </div>
                    <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition">Ingresar</button>
                </form>
                <p className="text-sm text-center mt-4">
                    ¿No tienes una cuenta?{" "}
                    <Link to="/register" className="text-pink-600 hover:underline">Regístrate aquí</Link>
                </p>
            </div>
        </div>
    );
}
