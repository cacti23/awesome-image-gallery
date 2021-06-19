import React, { useState, useEffect } from 'react';
import ImagesDisplay from './components/ImagesDisplay';
import Loading from './components/Loading';
import Searchbar from './components/Searchbar';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('camping');
  const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo`;

  const fetchImages = async link => {
    setIsLoading(true);
    try {
      const res = await fetch(link);
      const data = await res.json();
      setImages(data.hits);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
    setIsLoading(false);
  };

  useEffect(
    () => fetchImages(url),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchTerm]
  );

  return (
    <div className='grid-container-app'>
      <Searchbar searchText={text => setSearchTerm(text)} />
      {!isLoading && images.length === 0 && (
        <div className='loading'>
          <h1>No Images Found</h1>
        </div>
      )}
      {isLoading ? <Loading /> : <ImagesDisplay images={images} />}
    </div>
  );
}

export default App;
