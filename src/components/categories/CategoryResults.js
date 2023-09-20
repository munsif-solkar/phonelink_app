import React, { Component,useState,useEffect } from 'react'
import { Container,Row ,Col} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Products from '../../data/Products';
import Product from '../Product/Product';

function CategoryResults(){
    const { category } = useParams();

    const [matchedProducts,setMatchedProducts] = useState([])

    useEffect(()=>{

        setMatchedProducts(Products.filter(product=>{
            const categories = product.categories
            return categories.includes(category)
        }))
        console.log(matchedProducts)

    },[category])

    return(
        <Container style={{ margin: "30px auto" }}>
                <div className="search-query">
                    <h4><span id="query-text">{category.toUpperCase()}</span> Skins</h4>
                    <p className="lite-text">{matchedProducts.length} Result(s)</p>
                </div>
                <Row >
                    {
                        matchedProducts.map(product_data => (
                            <Col key={product_data.id} xs={6} sm={6} md={4} lg={3}>
                                <Product data={product_data} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
    )
}

export default CategoryResults