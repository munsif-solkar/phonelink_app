import React from 'react';
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap';

function Product({data}) {
    return (
        <>
        {/* <a href={'/product/'+data.id} className='product-link'> */}
        <Link to={`/product/${data.id}`} className='product-link'>
        <Card style={{ 'marginTop': "10px" }} border='light' className='product-card'>
            <Card.Img variant="top" src={data.image} className='thumbnail' />
            <Card.Body>
                <Card.Title title={data.name}>

                    {data.name}

                </Card.Title>
                <Card.Text color='secondary' className='product-description'>
                    {data.description}
                </Card.Text>

                <Card.Text className='price-text'>
                   Rs. {data.price}
                </Card.Text>


            </Card.Body>



        </Card>
        {/* </a> */}
        </Link>

        </>
    )
}

export default Product;