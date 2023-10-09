import { propertyContent } from "../../const";
import "./propertylist.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function PropertyList() {
  return (
    <div className="properti">
      <Splide
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          gap: 20,
          rewind : true,
          autoplay: true,
          interval: 3000,
          drag: true,
        }}
      >
        {propertyContent.map((eachcontent) => (
          <SplideSlide>
            <div className="pList">
              <img
                src={eachcontent.Img}
                alt={eachcontent.type}
                className="pImg"
              />
              <div className="pContent">
                <h2>{eachcontent.type}</h2>
                <p>{eachcontent.properties}</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default PropertyList;
