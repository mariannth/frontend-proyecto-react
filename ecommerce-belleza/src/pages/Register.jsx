// src/pages/Register.jsx
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-pink-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">Crear Cuenta</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre completo</label>
                        <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                        <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" />
                    </div>
                    <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition">Registrarse</button>
                </form>
                <p className="text-sm text-center mt-4">
                    ¿Ya tienes una cuenta?{" "}
                    <Link to="/login" className="text-purple-600 hover:underline">Inicia sesión</Link>
                </p>
            </div>
        </div>
    );
}
