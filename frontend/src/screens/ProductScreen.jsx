import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import Loader from "../components/Loader";
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import Message from "../components/Message";

const ProductScreen = () => {
    const { id: productId } = useParams();

    const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);
    

    return (
    <>
        <Link className='btn btn-light my-3' to="/">Go Back</Link>

        { isLoading ? (
            <Loader />
            ) : error ? (
                <Message variant="danger">{ error?.data?.message || error.error }</Message>
            ) : (
            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={4}>
                    <ListGroup variant="flush">
                        <h3>{product.name}</h3>
                        <div className='mb-2'>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </div>
                        <hr />
                        <h5 className='infy'>Infinity Deal</h5>
                        <h1>&nbsp;₹{product.price} <span className="du1 duDonP">₹{product.originalPrice}</span> <span className="du2 duDonP"><strong>{product.offer}% off</strong></span></h1>
                        <p className='duDon'>Inclusive of all taxes</p>
                        <hr />
                        <strong>About this item</strong> <br />
                            <p>{product.description}</p>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>₹{product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col><strong>{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            {product.countInStock > 0 ?
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Available Quantity:</Col>
                                        <Col><strong>{product.countInStock}</strong></Col>
                                    </Row>
                                </ListGroup.Item> : null
                            }

                            <ListGroup.Item>
                                <Button className='btn-block' type="button" disabled={product.countInStock === 0}>
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup> 
                    </Card>
                </Col>
            </Row>
        )}
    </>
  )
}

export default ProductScreen
