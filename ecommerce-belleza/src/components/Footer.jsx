import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-6 py-8 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Info */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Sobre nosotros</h2>
          <p className="text-sm">
            Somos una tienda dedicada a ofrecer los mejores productos de moda deportiva para todos los gustos.
          </p>
        </div>

        {/* Columna 2: Enlaces */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Enlaces rápidos</h2>
          <ul className="text-sm space-y-1">
            <li><a href="/" className="hover:underline">Inicio</a></li>
            <li><a href="/productos" className="hover:underline">Catálogo</a></li>
            <li><a href="/login" className="hover:underline">Iniciar sesión</a></li>
            <li><a href="/contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Síguenos</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-pink-400">Instagram</a>
            <a href="#" className="hover:text-blue-300">Twitter</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8">
        © {new Date().getFullYear()} Mi Tienda Deportiva. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
