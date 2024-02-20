import "react-responsive-carousel/lib/styles/carousel.min.css"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"
import { useState } from "react"
import banner from "../../assets/img/portada.jpg"

const Img = styled.img`
  width: auto;
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
        alt: "Portada del Shopping de la Papa",
        src: banner,
      },
      {
        label: "Image 2",
        alt: "Portada del Shopping de la Papa",
        src: banner,
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
