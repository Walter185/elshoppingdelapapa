import "./Card.css"
import { Link } from "react-router-dom";
import styled from "styled-components";

const Titulo=styled.h5`
    padding: 10px;
`;
const B = styled.b`
color:red;
`;

function Card(props){
    const {id, title, category, description, price, img1, img2} = props.product;
    
    return (
        <div className="d-flex align-content-stretch">
            <div className="card card-width m-1 p-3 pb-5 text-center shadow-sm">
                <img className="img-product" src={img1} alt={title}/>
                <h4>{title}</h4>
                <p>{description}</p>
                <Titulo>
                {price === "0" ? (
                  <b>CONSULTE POR PRECIO</b> 
                ) :  price === "SIN STOCK" ? ( 
                  <B>NO DISPONIBLE</B> 
                ) : <b> PRECIO: USD {price.toLocaleString()}</b>}
                    
                </Titulo>
                {/* <Link to={`/detail/${id}`}>
                    <button className="btn btn-outline-primary position-absolute bottom-0 end-0 m-3">Ver mas</button>
                </Link> */}
            </div>
        </div>
    );
}

export default Card;