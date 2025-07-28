import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Container, Row, Col, Button, Carousel, Form, Card } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const mockProducts = [
    { id: 1, name: "Labial Mate", brand: "MAC", price: 120, size: "Pequeño", image: "/labial.jpg" },
    { id: 2, name: "Base Líquida", brand: "Maybelline", price: 220, size: "Grande", image: "/base.jpg" },
    { id: 3, name: "Sombra Glitter", brand: "Urban Decay", price: 180, size: "Mediano", image: "/sombra.jpg" },
    { id: 4, name: "Rímel Volumen", brand: "L'Oréal", price: 150, size: "Grande", image: "/rimel.jpg" },
];

export default function Home() {
    const navigate = useNavigate();
    const { setSelectedProduct } = useContext(ProductContext);

    const [filters, setFilters] = useState({ brand: "Todos", size: "Todos" });

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        navigate(`/product/${product.id}`);
    };

    const filteredProducts = mockProducts.filter((p) => {
        const matchBrand = filters.brand === "Todos" || p.brand === filters.brand;
        const matchSize = filters.size === "Todos" || p.size === filters.size;
        return matchBrand && matchSize;
    });

    return (
        <>
            <main className="mt-20">
                {/* CARRUSEL */}
                <Carousel fade>
                    <Carousel.Item>
                        <img className="d-block w-100" src="../assets/promo1.jpg" alt="Primera promoción" />
                        <Carousel.Caption>
                            <h3>¡Nuevas colecciones!</h3>
                            <p>Hasta 50% en productos seleccionados</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/promo2.jpg" alt="Segunda promoción" />
                        <Carousel.Caption>
                            <h3>Envío Gratis</h3>
                            <p>En compras mayores a $499</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                {/* FILTROS + PRODUCTOS */}
                <Container className="my-5">
                    <Row>
                        {/* SIDEBAR FILTROS */}
                        <Col md={3}>
                            <Card className="p-3 shadow-sm">
                                <h5 className="mb-3">Filtrar por</h5>
                                <Form.Group className="mb-3">
                                    <Form.Label>Marca</Form.Label>
                                    <Form.Select
                                        value={filters.brand}
                                        onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                                    >
                                        <option>Todos</option>
                                        <option>MAC</option>
                                        <option>Maybelline</option>
                                        <option>L'Oréal</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tamaño</Form.Label>
                                    <Form.Select
                                        value={filters.size}
                                        onChange={(e) => setFilters({ ...filters, size: e.target.value })}
                                    >
                                        <option>Todos</option>
                                        <option>Pequeño</option>
                                        <option>Mediano</option>
                                        <option>Grande</option>
                                    </Form.Select>
                                </Form.Group>
                            </Card>
                        </Col>

                        {/* PRODUCTOS */}
                        <Col md={9}>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h2>Productos Destacados</h2>
                                <Button variant="outline-dark" onClick={() => navigate("/products")}>
                                    Ver Todo
                                </Button>
                            </div>
                            <Row>
                                {filteredProducts.map((product) => (
                                    <Col key={product.id} md={4} sm={6} className="mb-4">
                                        <div onClick={() => handleProductClick(product)} style={{ cursor: "pointer" }}>
                                            <ProductCard product={product} />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>

                {/* PROMOCIÓN DESTACADA */}
                <Container className="my-5 text-center bg-warning p-4 rounded shadow-sm">
                    <h3 className="mb-2">✨ 20% de Descuento en tu Primera Compra ✨</h3>
                    <p>Usa el código <strong>BEAUTY20</strong> al pagar</p>
                    <Button variant="dark">Compra ahora</Button>
                </Container>

                {/* CATEGORÍAS */}
                <Container className="my-5 text-center">
                    <h4 className="mb-4">Explora por categorías</h4>
                    <Row className="justify-content-center">
                        <Col md={2} sm={4}>
                            <img src="/cat-labiales.jpg" alt="Labiales" className="img-fluid rounded-circle mb-2" />
                            <p>Labiales</p>
                        </Col>
                        <Col md={2} sm={4}>
                            <img src="/cat-bases.jpg" alt="Bases" className="img-fluid rounded-circle mb-2" />
                            <p>Bases</p>
                        </Col>
                        <Col md={2} sm={4}>
                            <img src="/cat-ojos.jpg" alt="Ojos" className="img-fluid rounded-circle mb-2" />
                            <p>Ojos</p>
                        </Col>
                    </Row>
                </Container>

                {/* TESTIMONIOS */}
                <Container className="my-5">
                    <h4 className="text-center mb-4">Lo que dicen nuestras clientas</h4>
                    <Row>
                        <Col md={4}>
                            <Card className="p-3 shadow-sm">
                                <p>“Los productos son de excelente calidad y llegaron rapidísimo. ¡Volveré a comprar!”</p>
                                <strong>- Ana G.</strong>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="p-3 shadow-sm">
                                <p>“Me encantó el servicio, la atención y la variedad. ¡Recomendado 100%!”</p>
                                <strong>- Laura S.</strong>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="p-3 shadow-sm">
                                <p>“Soy fan del rimel de L’Oréal. El precio y el envío fueron excelentes.”</p>
                                <strong>- Carmen M.</strong>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                {/* NEWSLETTER */}
                <Container className="my-5 bg-light p-5 rounded shadow-sm text-center">
                    <h4 className="mb-3">Suscríbete a nuestro newsletter</h4>
                    <p>Recibe ofertas exclusivas, lanzamientos y promociones directamente en tu correo</p>
                    <Form className="d-flex justify-content-center gap-2 mt-3">
                        <Form.Control type="email" placeholder="Tu correo electrónico" style={{ maxWidth: "300px" }} />
                        <Button variant="dark">Suscribirme</Button>
                    </Form>
                </Container>
            </main>
        </>
    );
}
