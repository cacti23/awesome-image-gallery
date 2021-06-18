import React from 'react';

const ImagesDisplay = ({ images }) => {
  console.log(images);
  return (
    <div className='grid-images-container'>
      {images.map(image => {
        return (
          <div key={image.id} className='grid-images-item'>
            <img src={image.webformatURL} alt='' />
          </div>
        );
      })}
    </div>
  );
};

export default ImagesDisplay;
