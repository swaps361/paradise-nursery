import React from 'react';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import figImage from '../assets/images/fig.jpg';
import snakeImage from '../assets/images/snake.jpg';
import peaceImage from '../assets/images/peace.jpg';
import aloeImage from '../assets/images/aloe.jpg';
import spiderImage from '../assets/images/spider.jpg';
import succulentImage from '../assets/images/succulent.jpg';

const ProductListingPage = () => {
  const plants = [
    { id: 1, name: 'Fiddle Leaf Fig', price: 20.00, image: figImage },
    { id: 2, name: 'Snake Plant', price: 15.00, image: snakeImage },
    { id: 3, name: 'Peace Lily', price: 12.00, image: peaceImage },
    { id: 4, name: 'Aloe Vera', price: 10.00, image: aloeImage },
    { id: 5, name: 'Spider Plant', price: 8.00, image: spiderImage },
    { id: 6, name: 'Succulent', price: 5.00, image: succulentImage },
  ];

  return (
    <>
      <Header />
      <ProductListing plants={plants} />
    </>
  );
};

export default ProductListingPage;
