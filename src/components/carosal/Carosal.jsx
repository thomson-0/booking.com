import './carosal.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';




function Carosal({ photos, onClose }) {
    return (
      <div className="image-carousel-wrapper">
        <div className="image-carousel-overlay"></div>
        <div className="image-carousel">
          <span className="carousel-close" onClick={() => {
            console.log('Close button clicked');
            onClose();
          }}>
            &times;
          </span>
          <Splide options={{ perPage: 1 }}>
            {photos.map((photo, i) => (
              <SplideSlide key={i}>
                <img src={photo.src} alt="" className="carousel-image" />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    );
  }
  
  export default Carosal;
  

