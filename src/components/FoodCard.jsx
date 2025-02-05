import React from 'react';
import './FoodCard.css';

const FoodCard = ({ products }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - Math.ceil(rating);

    // Array of full stars with class for yellow color
    const fullStarsArray = Array(fullStars).fill('★');
    // Array of empty stars
    const emptyStarsArray = Array(emptyStars).fill('☆');

    return (
      <>
        {fullStarsArray.map((star, index) => (
          <span key={'full-' + index} className="star full">{star}</span>
        ))}
        {emptyStarsArray.map((star, index) => (
          <span key={'empty-' + index} className="star empty">{star}</span>
        ))}
      </>
    );
  };

  return (
    <div className="card-container">
      {products.map((product) => (
        <div key={product.name} className="food-card">
          <img src={product.image} alt={product.name} className="food-image" />
          <div className="food-info">
            <h3>{product.name}</h3>
            <div>
            {product.desc}
            </div>
            <p> <span>{renderStars(product.rating)} </span>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
