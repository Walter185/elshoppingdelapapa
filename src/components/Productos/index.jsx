import { useState, useEffect } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import db from "../../firebase/firebase";

const Section = styled.section`
  padding-top: 10px;
  margin-top: 30px;
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
  width: 300px;
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
`;

const MachineTitle = styled.h3`
  margin-top: 10px;
  margin-bottom: 5px;
`;

const MachineDescription = styled.p`
  margin-bottom: 10px;
`;

const MachinePrice = styled.p`
  font-weight: bold;
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

const Productos = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await db.ref("products").once("value");
      const data = snapshot.val();
      if (data) {
        const productList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setProducts(productList);
      }
    };
    fetchData();
  }, []);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Section>
      <Title style={{ color: "#78909c" }}>
        <h1>
          <b>Sección Usados Garantizados</b>
        </h1>
      </Title>
      <hr />
      <MachineContainer>
        {products.map((product) => (
          <MachineCard key={product.id}>
            <Carousel
              showArrows={true}
              autoPlay={true}
              showThumbs={false}
              infiniteLoop={true}
            >
              {[product.img1, product.img2].map((image, index) => (
                <div key={index} onClick={() => openModal(image)}>
                  <img src={image} alt={`Imagen ${index + 1}`} />
                </div>
              ))}
            </Carousel>
            <MachineTitle>{product.title}</MachineTitle>
            <MachineDescription>{product.description}</MachineDescription>
            <MachinePrice>{product.price}</MachinePrice>
            <br />
            <FichaTecnicaButton
              to={`/detail/${product.id}`}
              className="btn btn-outline-primary"
            >
              Ver más
            </FichaTecnicaButton>
          </MachineCard>
        ))}
      </MachineContainer>
      <ModalContainer isOpen={modalOpen}>
        <ModalContent>
          <CloseButton onClick={closeModal}>Cerrar</CloseButton>
          <img src={currentImage} alt="Ampliación de imagen" />
        </ModalContent>
      </ModalContainer>
    </Section>
  );
};

export default Productos;
