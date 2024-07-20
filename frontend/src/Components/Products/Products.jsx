import React from 'react';
import './Products.css';
import product1 from '../Assets/Product1.png'; // Update the path accordingly

const products = [
  {
    id: 1,
    name: 'Classic Green Tea',
    price: '$10.99',
    image: product1,
  },
  {
    id: 2,
    name: 'Jasmine Green Tea',
    price: '$12.99',
    image: product1, // Update with the correct image path
  },
  {
    id: 3,
    name: 'Lemon Green Tea',
    price: '$11.49',
    image: product1, // Update with the correct image path
  },
  {
    id: 4,
    name: 'Organic Black Tea',
    price: '$12.99',
    image: product1, // Update with the correct image path
  },
];

const Products = () => {
  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
