import React from 'react';
import { useNavigate } from 'react-router-dom';
import './productGallery.css';

const products = [
  { id: 1, name: 'Ciba Shape', image: '/ciba.jpg', link: '/products/ciba' },
  { id: 2, name: 'Emida Shape', image: '/emida.jpg', link: '/products/emida' },
  { id: 3, name: 'Vertical Shape', image: '/vertical.jpg', link: '/products/vertical' },
  { id: 4, name: 'Amway Shape', image: '/amway.jpg', link: '/products/amway' },
  { id: 5, name: 'Right Angle Shape', image: '/right-angle.jpg', link: '/products/rightangle' },
  { id: 6, name: 'Osin Shape', image: '/osin.jpg', link: '/products/osin' },
  { id: 7, name: 'Oval Shape Jerry', image: '/oval jerry.jpg', link: '/products/ovaljerry' },
  { id: 8, name: 'Aloe Vera Shape', image: '/aloe veraa.jpg', link: '/products/aloevera' },
];

const ProductGallery = () => {
  const navigate = useNavigate();

  return (
    <div className="gallery-section p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => navigate(product.link)}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-name">{product.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
