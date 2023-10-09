import {FeatureContent} from '../../const'
import './feature.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function Feature() {
  return (
    <div className='feature-wrap'>
       <Splide options={{
  perPage: 4,
  arrows:false, 
  pagination: false,
  gap: 20,       
  rewind : true,
  autoplay: true, 
  interval: 3000, 
  drag: true,
}}>
  {FeatureContent.map((box) => (
    <SplideSlide key={box.properties}>
      <div className="feature item">
        <img src={box.Img} alt={box.city} className='featureImg'/>
        <div className="feature title">
         <h1>{box.city}</h1>  
         <p>{box.properties}</p> 
            </div>
    </div>
    </SplideSlide>
  ))}
</Splide>
    </div>
  )
}

export default Feature