import React, { useState, useEffect } from 'react';
import ImagesDisplay from './components/ImagesDisplay';
import Loading from './components/Loading';
import Searchbar from './components/Searchbar';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo`;

  const fetchImages = async url => {
    const res = await fetch(url);
    const data = await res.json();
    setImages(data.hits);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchImages(url);
    setIsLoading(false);
  }, [searchTerm]);

  return (
    <div className='grid-container-app'>
      <Searchbar searchText={text => setSearchTerm(text)} />
      {isLoading ? <Loading /> : <ImagesDisplay images={images} />}
    </div>
  );
}

export default App;
