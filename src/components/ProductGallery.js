import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Ciba Shape', image: "https://sakshamk404.github.io/JK-industries/ciba.jpg", link: '/products/ciba' },
  { id: 3, name: 'Vertical Shape', image: process.env.PUBLIC_URL + '/vertical.jpg', link: '/products/vertical' },
  { id: 4, name: 'Amway Shape', image: process.env.PUBLIC_URL + '/amway.jpg', link: '/products/amway' },
  { id: 5, name: 'Right Angle Shape', image: process.env.PUBLIC_URL + '/right-angle.jpg', link: '/products/rightangle' },
  { id: 6, name: 'Osin Shape', image: process.env.PUBLIC_URL + '/osin.jpg', link: '/products/osin' },
  { id: 7, name: 'Oval Shape Jerry', image: process.env.PUBLIC_URL + '/oval jerry.jpg', link: '/products/ovaljerry' },
  { id: 8, name: 'Aloe Vera Shape', image: process.env.PUBLIC_URL + '/aloe veraa.jpg', link: '/products/aloevera' },
];

const ProductGallery = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(product.link)}
            className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-2 text-center font-semibold text-gray-800 bg-white">
              {product.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
