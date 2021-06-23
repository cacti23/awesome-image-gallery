import React, { useState, useEffect } from 'react';
import ImagesDisplay from './components/ImagesDisplay';
import Loading from './components/Loading';
import Searchbar from './components/Searchbar';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    setIsLoading(true);
    let url;
    url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&page=${page}&image_type=photo`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setImages(oldPhotos => {
        if (searchTerm && page === 1) {
          return [...data.hits];
        } else if (searchTerm) {
          return [...oldPhotos, ...data.hits];
        } else {
          return [...oldPhotos, ...data.hits];
        }
      });
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  useEffect(
    () => fetchImages(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchTerm, page]
  );

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 2
      ) {
        setPage(oldPage => oldPage + 1);
      }
    });
    return () => window.removeEventListener('scroll', event);
  }, []);

  return (
    <div className='grid-container-app'>
      <Searchbar searchText={text => setSearchTerm(text)} />
      {!isLoading && images.length === 0 && (
        <div className='loading'>
          <h1>No Images Found</h1>
        </div>
      )}
      <ImagesDisplay images={images} />
      {isLoading && <Loading />}
    </div>
  );
}

export default App;
