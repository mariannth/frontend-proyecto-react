// src/pages/Cart.jsx
import Navbar from '../components/Navbar';

export default function Cart() {
    return (
        <>
            <Navbar />
            <div className="container">
                <h3>Tu carrito</h3>
                <p>Aquí verás los productos añadidos al carrito.</p>
                {/* Listado de productos agregados */}
            </div>
        </>
    );
}
