import styled from "styled-components";

const Footer = styled.footer`
    background-color: orange;
    width: 100%;
    margin: auto;
    margin-top: 40px;
    padding: 20px 0;
    text-align: center;
    letter-spacing: 1px;
    `;
const P=styled.p`
    font-size: 11px;
`;
const A=styled.a`
    text-decoration: none;
    position: relative;
`;

export function Foot() {
    return (
        <Footer>
            <P>El Shopping de la papa- Frutas y Verduras <br/> Pedro Hors y Ruta 2 - MERCEDES <br/> RUT: xxxxxxxxxxx<br/>
            <small>© Todos los derechos reservados | <A href="https://github.com/Walter185" target="_blank">Desarrollado por Walter Liendo
            @2024</A></small></P>
        </Footer>
    );
}