import React, { useState } from 'react';
import './BlogPage.css';

function BlogPage() {
  const [photos, setPhotos] = useState([
    {
      url: 'https://images.pexels.com/photos/17303514/pexels-photo-17303514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      comments: [
        { text: '¡Hermosa foto!' },
        { text: 'Increíble lugar para visitar' },
        { text: 'Me encantaría ir allí algún día' }
      ]
    },
    {
      url: 'https://images.pexels.com/photos/16987981/pexels-photo-16987981/free-photo-of-madera-carretera-amanecer-paisaje.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      comments: [
        { text: 'Otra foto impresionante' },
        { text: 'Me encanta la naturaleza' },
        { text: '¡Quiero visitar este lugar ahora mismo!' }
      ]
    },
    {
      url: 'https://images.pexels.com/photos/17295626/pexels-photo-17295626/free-photo-of-ligero-verano-textura-invierno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      comments: [
        { text: 'Foto hermosa como siempre' },
        { text: 'Me gusta la composición' },
        { text: 'El paisaje es simplemente impresionante' }
      ]
    }
  ]);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
  };

  return (
    <div className="blog-container">
      <h1>Fotos de la comunidad</h1>

      <div className="blog-section">
        <div className="photo-gallery">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`photo ${selectedPhotoIndex === index ? 'selected' : ''}`}
              onClick={() => handlePhotoClick(index)}
            >
              <div className="thumbnail">
                <img src={photo.url} alt={`Foto ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="comments-section">
          {selectedPhotoIndex !== null && (
            <div className="selected-photo-comments">
              <h2>Comentarios</h2>
              {photos[selectedPhotoIndex].comments.map((comment, commentIndex) => (
                <div key={commentIndex} className="comment">
                  <p>{comment.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
