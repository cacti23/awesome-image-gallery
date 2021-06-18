import React, { useState, useEffect } from 'react';
import ImagesDisplay from './components/ImagesDisplay';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=yellow+flowers&image_type=photo`;

  const fetchImages = async url => {
    const res = await fetch(url);
    const data = await res.json();
    setImages(data.hits);
  };

  useEffect(() => {
    fetchImages(url);
  }, []);

  return (
    <div className='grid-container-app'>
      <div className='grid-search-container'>
        <h1>search</h1>
      </div>
      <ImagesDisplay images={images} />
    </div>
  );
}

export default App;
