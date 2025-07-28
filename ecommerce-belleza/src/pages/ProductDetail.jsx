import React from "react";
import { useParams, Link } from "react-router-dom";

// Ejemplo de productos (puedes reemplazarlo por una API o contexto)
const productos = [
    {
        id: "1",
        nombre: "Perfume Elegance",
        descripcion: "Una fragancia fresca y elegante con notas cítricas.",
        precio: 950,
        imagen: "https://source.unsplash.com/300x300/?perfume",
    },
    {
        id: "2",
        nombre: "Serum Facial Glow",
        descripcion: "Serum nutritivo con vitamina C y ácido hialurónico.",
        precio: 650,
        imagen: "https://source.unsplash.com/300x300/?skincare",
    },
    // Puedes agregar más productos...
];

export default function ProductDetail() {
    const { id } = useParams();
    const producto = productos.find((p) => p.id === id);

    if (!producto) {
        return (
            <div className="text-center mt-16 text-red-600 text-xl">
                Producto no encontrado.
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto p-4 mt-10">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full md:w-1/2 object-cover"
                />
                <div className="p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800">
                            {producto.nombre}
                        </h2>
                        <p className="text-gray-600 mt-2">{producto.descripcion}</p>
                        <p className="text-xl text-blue-600 font-bold mt-4">
                            ${producto.precio}
                        </p>
                    </div>

                    <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition">
                        Agregar al carrito
                    </button>

                    <Link
                        to="/productos"
                        className="mt-4 text-blue-500 hover:underline text-sm"
                    >
                        ← Volver a productos
                    </Link>
                </div>
            </div>
        </div>
    );
}
