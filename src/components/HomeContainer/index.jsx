import { useState, useEffect } from 'react';
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { getUsados } from '../../firebase/firebase';
import Location from '../Location';

const Section = styled.section`
  padding-top: 10px;
  background-color: #343a40;
  `;

const Title = styled.h4`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 30px;
  `;

const MachineContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: transparent;
  `;

const MachineCard = styled.div`
  position: relative;
  width: 40%;
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 40px;
  background: var(--chakra-colors-chakra-body-bg);
  color: var(--chakra-colors-chakra-body-text);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  &&:hover {
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    }
    @media only screen and (max-width: 800px){
      font-size:medium;
      width: 100%;
      }
`;

const MachineTitle = styled.h4`
  margin-top: 10px;
  margin-bottom: 5px;
  @media only screen and (max-width: 800px){
  font-size:medium;
  }
`;

const MachineDescription = styled.h5`
  margin-top: 10px;
  @media only screen and (max-width: 800px){
    font-size:medium;
    }
`;

const MachinePrice = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  font-family: Roboto, Sans Serif;
  color: green;
  margin-top: 30px;
  margin-left: 20px;
  margin-botton: 30px;
  @media only screen and (max-width: 800px){
    font-size:medium;
    }
`;

const ModalContainer = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: lightgray;
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 15%;
`;

const FichaTecnicaButton = styled(Link)`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export default function HomeContainer() {
  const [expandedImage, setExpandedImage] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const productsData = await getUsados();
      setProducts(productsData);
    };

    fetchProductos();
  }, []);

  const openExpandedImage = (image) => {
    setExpandedImage(image);
  };


  return (
    <>
      <Section>
        <Title style={{ color: "#78909c" }}>
          <h1><b>Usados Garantizados y Ofertas</b></h1>
        </Title><hr></hr>

        <MachineContainer>
          {products.map((machine) => (
            <MachineCard key={machine.id} >
              <Carousel
                showArrows={true}
                autoPlay={true}
                showThumbs={false}
                infiniteLoop={true}
              >
                <div onClick={() => openExpandedImage(machine.img1)}>
                  <img src={machine.img1} alt={machine.title} />
                </div>
                <div onClick={() => openExpandedImage(machine.img2)}>
                  <img src={machine.img2} alt={machine.title} />
                </div>

              </Carousel>
              <MachineTitle>{machine.name}</MachineTitle>
              <MachineDescription>{machine.detail}</MachineDescription>
              <MachinePrice>USD {machine.price}</MachinePrice>
              <br />
              <FichaTecnicaButton to={`/detail/${machine.id}`} className="btn btn-outline-primary">Ver más</FichaTecnicaButton>
            </MachineCard>
          ))}
        </MachineContainer>
        <ModalContainer isOpen={expandedImage}>
          <ModalContent>
            <CloseButton onClick={() => setExpandedImage("")}>Cerrar</CloseButton>
            <img src={expandedImage} alt="Ampliación de imagen" />
          </ModalContent>
        </ModalContainer>
      </Section>
      <Location />
    </>
  );
};


