import React from 'react';

import { Card } from 'react-bootstrap';

import './category_style.css'

import Products from '../../data/Products';
import { Link } from 'react-router-dom';

const categories = [...new Set(Products.flatMap(product => product.categories))].sort();


function CaregoriesCards(){
    return(
        <>
        <p id='product-group-title'># Shop by categories</p>
            <div className="category-cards">
            
                {
                   
                    Array.from(categories).map(category=>(
                        <Link to={`/category/${category}`} className='product-link category-link'>
                        <Category title={category} key={category}/>
                        </Link>
                            
                    ))
                }
               
            </div>
        </>
    )

}

function Category({title}){
    return(
        <>
               <Card style={{ 'marginTop': "10px" }} border='light' className='category-card'>

            <Card.Body>

            <div className="category-data">
            
                <Card.Text>
                    {title}
                </Card.Text>
            </div>
                


            </Card.Body>



        </Card>
        </>
    )
}

export default CaregoriesCards;