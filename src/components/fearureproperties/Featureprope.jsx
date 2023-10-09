import {featuredProperties} from '../../const'
import './featureprop.css'

function Featureprope() {
  return (
    <div className='fp'>
        {
        
        featuredProperties.map((eachprop)=>(
            <div className="fpItem">
            <img
              src={eachprop.Img}
              alt={eachprop.fpName}
              className="fpImg"
            />
            <span className="fpName">{eachprop.fpName}</span>
            <span className="fpCity">{eachprop.city}</span>
            <span className="fpPrice">{eachprop.price}</span>
            <div className="fpRating">
              <button>{eachprop.rating}</button>
              <span>{eachprop.comment}</span>
            </div>
          </div>

        ))}
    </div>
  )
}

export default Featureprope