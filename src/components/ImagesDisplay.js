import React from 'react';
import ImageCard from './ImageCard';

const ImagesDisplay = ({ images }) => {
  return (
    <div className='grid-images-container'>
      {images.map(image => {
        return <ImageCard key={image.id} image={image} />;
      })}
    </div>
  );
};

export default ImagesDisplay;
