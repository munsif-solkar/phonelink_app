import React ,{useState,useEffect}from 'react';

import { Row,Col } from 'react-bootstrap';
import Product from './Product';
import './style.css'

import Products from '../../data/Products';


function ProductGroup({title,type}){

    const [visibleProducts, setVisibleProducts] = useState(
        parseInt(localStorage.getItem('visibleProducts')) || 8
    );
    const productsToShow = Products.slice(0, visibleProducts);

    const handleLoadMore = () => {
        const newVisibleProducts = visibleProducts + 6;
        setVisibleProducts(newVisibleProducts);
        localStorage.setItem('visibleProducts', newVisibleProducts.toString());;
      };

    return(
        <>
        <p id='product-group-title' ># {title}</p>

        <Row >
        {
       productsToShow.map(product_data=>(
            <Col xs={6} sm={6} md={4} lg={3} key={product_data.id}>
            <Product data={product_data}/>
            </Col>
        ))
        
        }
        </Row>


        {visibleProducts < Products.length && (
            <div className="load-more">
            <button className='btn-default' onClick={handleLoadMore}>Load More</button>
        </div> 
      )}
        

        
     
        </>
    )
}

export default ProductGroup