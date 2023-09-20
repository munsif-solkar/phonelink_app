// ProductPage.js
import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../../data/Products';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './ProductPageStyle.css'

import phoneBrands from '../../data/PhoneBrands';
import PhoneModels from '../../data/PhoneModels';


function ProductPage() {
    const { id } = useParams(); // Get the product ID from the URL

    // Fetch product details based on the ID and display them
    const product = Products.filter((product) => product.id == id)[0];

    return (
        <Container style={{ margin: "30px auto" }} className='product-container'>
            <Row>
                <Col xs={12} md={6}>
                    <Image src={product.image} fluid className='product-image'/>
                </Col>
                <Col xs={12} md={6} className='product-details'>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    
                    <div className="selectors">
                        <DeviceSelector />
                    </div>
                    <div className="price">
                        <p className='price-text'>Rs. {product.price}</p>
                        <p className='lite-text'>Tax included. Shipping calculated at checkout.</p>
                    </div>

                    <div className="btn-group">
                        <button className='add-to-cart'>Add to cart</button>
                        <button className='buy-now'>Buy now</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

function DeviceSelector() {

    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [active,setActive] = useState(true)

    const models = ['Model X', 'Model Y', 'Model Z'];

    return (
        <>
            <div className="brand-selector selector">
                <label>Select Brand</label>
                <select
                    value={selectedBrand}
                    onChange={(e) =>{setSelectedBrand(e.target.value);setActive(false)}}
                >
                    <option value="" disabled>Select Phone Brand</option>
                    {phoneBrands.map((brand, index) => (
                        <option key={index} value={brand}>
                            {brand}
                        </option>
                    ))}
                </select>
            </div>

            <div className="model-selector selector">
                <label>Select {selectedBrand} Model</label>
                <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    disabled={active}
                >
                    <option value="" disabled>Select {selectedBrand} Model</option>
                    {!active? PhoneModels[selectedBrand].map((brand, index) => (
                        <option key={index} value={brand}>
                            {brand}
                        </option>
                    )): <option>Select Model</option>}
                </select>
            </div>
        </>
    )
}

export default ProductPage;
