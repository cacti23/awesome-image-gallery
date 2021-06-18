import React, { useState, useEffect } from 'react';
import ImagesDisplay from './components/ImagesDisplay';
import Loading from './components/Loading';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('space');
  const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`;

  const fetchImages = async url => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.hits);
    setImages(data.hits);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchImages(url);
  }, [term]);

  return (
    <div className='grid-container-app'>
      <div className='grid-search-container'>
        <h1>search</h1>
      </div>
      {isLoading ? <Loading /> : <ImagesDisplay images={images} />}
    </div>
  );
}

export default App;
