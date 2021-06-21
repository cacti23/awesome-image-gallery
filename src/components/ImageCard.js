import React from 'react';
import { AiOutlineLike, AiOutlineCloudDownload } from 'react-icons/ai';

const ImageCard = ({ image }) => {
  return (
    <div key={image.id} className='grid-images-item'>
      <img src={image.webformatURL} alt='' />
      <div className='overlay'>
        <AiOutlineLike />
        <span>: {image.likes}</span>
        <span> </span>
        <AiOutlineCloudDownload />
        <span>: {image.downloads}</span>
      </div>
    </div>
  );
};

export default ImageCard;
