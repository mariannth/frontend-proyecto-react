// src/components/ProductCard.jsx
import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

export default function ProductCard({ product }) {
    const [liked, setLiked] = useState(false);
    const toggleLike = () => setLiked(!liked);

    return (
        <Card className="product-card h-100">
            <Card.Img
                variant="top"
                src={product.image}
                height={180}
                style={{ objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="text-muted">${product.price}</Card.Text>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <Button variant="outline-primary" size="sm">Agregar al carrito</Button>
                    <FaHeart
                        size={18}
                        className={`favorite-heart ${liked ? 'liked' : ''}`}
                        onClick={toggleLike}
                    />
                </div>
            </Card.Body>
        </Card>
    );
}
