import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg fixed top-0 w-full z-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-extrabold text-blue-600">
                        BeautyShop
                    </Link>

                    {/* Toggle button for mobile */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600 transition">
                            {isOpen ? (
                                <XMarkIcon className="w-6 h-6" />
                            ) : (
                                <Bars3Icon className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link to="/" className="text-gray-700 hover:text-blue-500 font-medium transition">
                            Inicio
                        </Link>
                        <Link to="/productos" className="text-gray-700 hover:text-blue-500 font-medium transition">
                            Productos
                        </Link>
                        <Link to="/contacto" className="text-gray-700 hover:text-blue-500 font-medium transition">
                            Contacto
                        </Link>
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/login" className="flex items-center text-gray-600 hover:text-blue-600 transition">
                            <UserIcon className="w-5 h-5 mr-1" />
                            <span className="font-medium">Login</span>
                        </Link>
                        <Link to="/carrito" className="relative text-gray-600 hover:text-blue-600 transition">
                            <ShoppingCartIcon className="w-6 h-6" />
                            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1 shadow-md">
                                3
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-2 space-y-2">
                        <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded">
                            Inicio
                        </Link>
                        <Link to="/productos" onClick={() => setIsOpen(false)} className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded">
                            Productos
                        </Link>
                        <Link to="/contacto" onClick={() => setIsOpen(false)} className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded">
                            Contacto
                        </Link>
                        <div className="flex justify-between px-4">
                            <Link to="/login" onClick={() => setIsOpen(false)} className="flex items-center text-gray-600 hover:text-blue-600">
                                <UserIcon className="w-5 h-5 mr-1" />
                                Login
                            </Link>
                            <Link to="/carrito" onClick={() => setIsOpen(false)} className="relative text-gray-600 hover:text-blue-600">
                                <ShoppingCartIcon className="w-6 h-6" />
                                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1 shadow-md">
                                    3
                                </span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
