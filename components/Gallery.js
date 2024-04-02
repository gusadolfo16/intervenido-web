import React, { useState, useEffect } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import app from '../firebase/firebaseConfig';

const Gallery = () => {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    const storage = getStorage(app);
    const imageRef = ref(storage, 'images');

    listAll(imageRef)
      .then((result) => {
      const imagePromises = result.items.map(async (imageRef) => {
          const downloadUrl = await getDownloadURL(imageRef);
      return downloadUrl;
        });

        return Promise.all(imagePromises);
      })
      .then((imageUrls) => {
        setImages(imageUrls);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div className="gallery-container">
      {images.map((imageUrl) => (
        <div key={imageUrl} className="image-card">
          <img src={imageUrl} alt="Gallery Image" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
