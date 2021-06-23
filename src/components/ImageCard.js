import React from 'react';
import { AiOutlineLike, AiOutlineCloudDownload } from 'react-icons/ai';

const ImageCard = ({ image }) => {
  return (
    <div key={image.id} className='grid-images-item'>
      <a href={image.largeImageURL} target='_blank' rel='noreferrer'>
        <img src={image.webformatURL} alt='' />
      </a>
      <div className='overlay'>
        <div>
          <p>
            <AiOutlineLike /> : {image.likes}
          </p>
          <p>
            <AiOutlineCloudDownload /> : {image.downloads}
          </p>
        </div>
        <a href={`https://pixabay.com/users/${image.user}`}>
          <img src={image.userImageURL} alt={image.user} />
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
