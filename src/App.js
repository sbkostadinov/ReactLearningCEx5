import React from 'react';

import Product from './Product';
import './styles.css';

// don't change the Component name "App"
export default function App() {
    const productInfo = [
        {title : "Product1", price: "10", description: "First product"},
        {title : "Product2", price: "20", description: "Second product"};
        ];
    return (
        <div>
            <h1>My Demo Shop</h1>
            <Product>
              title={productInfo[0].title}
              price={productInfo[0].price}
              description={productInfo[0].description}

            </Product>
             <Product></Product>
        </div>
    );
  }