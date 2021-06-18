import React from 'react';

const ImagesDisplay = ({ images }) => {
  return (
    <div className='grid-images-container'>
      <div className='grid-images-item'>
        <img src={images[0].webformatURL} alt='' />
        <img src={images[1].webformatURL} alt='' />
      </div>
    </div>
  );
};

export default ImagesDisplay;
