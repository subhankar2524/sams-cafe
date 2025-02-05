import React, { useState, useEffect } from 'react';
import './Carousel.css';

const texts = [
  { title: "Sam's Cafe", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat assumenda nihil, blanditiis, est voluptatum debitis delectus similique neque quaerat ut hic minima rem unde animi sint architecto exercitationem. Perferendis, quas!" },
  { title: "John's Bakery", description: "Freshly baked bread and pastries daily! Come and experience the best baked goods in town, made with love and care just for you." },
  { title: "Lisa's Boutique", description: "Discover the latest fashion trends with our exclusive collection. From casual to formal wear, we have everything to elevate your style!" }
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFade(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='carousel'>
      <div className={`inner`}>
        <h1 className={`${fade ? 'fade-in' : 'fade-out'}`}>{texts[index].title}</h1>
        <p className={`${fade ? 'fade-in' : 'fade-out'}`} style={{ textAlign: 'center', width: '50%' }}>{texts[index].description}</p>
      </div>
    </div>
  );
};

export default Carousel;