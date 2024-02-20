import "react-responsive-carousel/lib/styles/carousel.min.css"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"
import { useState } from "react"


const Img = styled.img`
  width: 100%;
  max-height: 550px;
  display: flex;
`;
const Div = styled.div`
  margin-top: -4px !important;

`;

export default function CarrouselPrincipal() {
    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
      setCurrentIndex(index);
    }
    const imageData = [
      {
          label: "Image 1",
          alt: "Rotoenfardadoras Mainero",
          src: "https://firebasestorage.googleapis.com/v0/b/reactapp-683e2.appspot.com/o/img%2Frotoenfardadoras.jpg?alt=media&token=62201585-b132-4ea0-b6e9-494eb6eeabf1",
        }
    ]
    
  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <Img src={image.src} alt={image.alt} />
    </div>
  ));

  return (
    <>
      <Div className="my-1">
        <div>
          <Carousel
            showArrows={true}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            className="carousel-container"
            selectedItem={imageData[currentIndex]}
            onChange={handleChange}
          >
            {renderSlides}
          </Carousel>
        </div>
      </Div>
    </>
  );
}
