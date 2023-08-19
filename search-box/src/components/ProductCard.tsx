import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
    product: {
      id: number;
      title: string;
      description: string;
      image: string;
      price: number;
      category: string;
      rating: {
        rate: number;
        count: number;
      };
    };
  } 
  const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
      <div className="product-card">
        <img src={product.image} alt={product.title} className="product-image" />
        <h3 className='title'>{product.title}</h3>
        <p className='price'>Price: ${product.price}</p>
      </div>
     
    );
  };
  
  export default ProductCard;