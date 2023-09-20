import React, { useEffect, useState } from "react";
import GetSearchParam from "./GetSearchParam";
import { Container ,Row,Col} from "react-bootstrap";

import Products from "../../data/Products";
import Product from "../Product/Product";


function SearchResults() {
    const query = GetSearchParam();

    const [matchedProducts,setMatchedProducts] = useState([])

    if (!query) {
        window.location = '/'
    }

    useEffect(()=>{

        setMatchedProducts(Products.filter(product=>{
            const product_name = product.name.toLowerCase()
            return product_name.includes(query)
        }))


        console.log(matchedProducts)

    },[query])

    return (
        <>
            <Container style={{ margin: "30px auto" }}>
                <div className="search-query">
                    <h4>Search results for <span id="query-text">{query}</span></h4>
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
        </>
    )
}

export default SearchResults;