import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div key={image.id} className='grid-images-item'>
      <img src={image.webformatURL} alt='' />
    </div>
  );
};

export default ImageCard;
