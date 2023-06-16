import "./CategoryPage.css";
import { Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { useSearchParams, useParams } from 'react-router-dom'
import Filter from "../Filter/Filter";
import { useNavigate } from 'react-router-dom';
import { products } from '../../sole_seduction.product_data.js';


const CategoryPage = () => {
    const navigate = useNavigate();
    //const [productInfo, setProductInfo] = useState([]);
    const [searchParams] = useSearchParams();

    // Link to product page
    const goToProduct = (productId) => {
        navigate(`/product/${productId}`)
    }

    console.log(products)

    const displayProducts = () => {
        return products.map((product, index) => {
            console.log(product)
            return (
                <Col key={index}>
                    <Card className='product-card m-1' onClick={() => goToProduct(product._id)}>
                        <Card.Img variant='top' src={product.img[0]} />
                        <Card.Body>
                            <Card.Title>{product.brand}</Card.Title>
                            <Card.Subtitle>{product.model}</Card.Subtitle>
                            <Card.Text>£{product.price}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    }

    return (
        <>
            <Filter />
            <Row className="p-2" xs={2} md={4}>
                {displayProducts()}
            </Row>
        </>
    )
}

export default CategoryPage;