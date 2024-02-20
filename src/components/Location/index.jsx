import styled from "styled-components";
import ContactForm from "../ContactForm";
import "./Location.css"


const Title = styled.h4`
margin-left: auto;
margin-right: auto;
text-align: center;
`;


function Location() {
  const iframe = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.3584205327966!2d-58.02006492531627!3d-33.25710777346675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a53e1a65c5352d%3A0xe657339b8db38fa7!2sEl%20Shopping%20De%20La%20Papa!5e0!3m2!1ses-419!2sar!4v1708441991198!5m2!1ses-419!2sar';

  return (
    <>
      <section className="container-fluid pt-2 px-3">
        <h1 className="titulo"><b>Ubicación y Contacto</b></h1>
        <hr></hr>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="row">
            <div className="col-sm-0 col-md-1 col-lg-1 p-3">
            </div>

            <div className="col-sm-11 col-md-11 col-lg-5 p-3">
              <Title style={{ color: "#78909c" }}>
                <b>Estamos en Mercedes - Soriano</b>
                <p style={{ fontSize: 'medium', color: 'white' }}>
                  Pedro Hors y Ruta 2 <a href="tel:+59891246285"><b>Tel: 091 246 285 </b></a></p>
                <iframe
                  src={iframe}
                  title="Ubicacion de El Shopping de la Papa"
                ></iframe>
              </Title>
            </div>
            <div className="col-sm-11 col-md-11 col-lg-5 p-3">
              <Title>
                <ContactForm />
              </Title>
            </div>

            <div className="col-sm-0 col-md-1 col-lg-1 p-3">
            </div>
          </div>
        </div>
        <br /><br />
      </section>
    </>
  );
}

export default Location;
