import logo from "../../assets/img/logo.png"
import "./Navbar.css"
import { useAuth } from '../../Context/context';
import styled from "styled-components";
import Navlink from "./Navlink";
import { useState } from "react";


const Nav = styled.nav`
  background: #343a40;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  align-items: center;
  height: 65px;
  position: sticky;
  top: 0;
  z-index: 1;  

  @media screen and (max-width:1000px) {
  justify-content:space-between  }
`;

const Li = styled.li`
  list-style: none;
  display: block;
  text-decoration: none;
  margin-top: 5px;
  color: white;
  margin: 0 0.5rem;
  border-radius: 0.5rem;
  @media screen and (max-width:1000px) {
    width: 100%;
    text-align: center;
    margin: 0.2rem 0.5rem;

  }
  &&:not(.active):hover {
  background-color: #6a79cf;
}
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  margin-right: 10px;
  @media screen and (max-width:1000px) {
    display: none;
    flex-direction: column;
    width: 100% !important;
    margin-top: 265px;
    margin-bottom: 0.25rem;
    background-color: rgb(212, 57, 18) !important;
    &.open {
      display: flex;
      z-index: 5;
      right: 0;
      top: -195px;
      position: absolute;
  }}
`;
const ContainerNav = styled.div`
  display: flex;
  width:100%;
  padding: 10px;
  margin-left:20px;
`;

const Pan = styled.div`
  display: none;
  width: auto;
  margin-top: -9px;
  position: relative;
 
  @media screen and (max-width:1000px) {
  display: flex;
  }
`;

const Navbar = () => {
  const { logout, currentUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar__search">
      </div>
      <div>
          <Ul className={isOpen ? "open" : ""}>
          <Li>
              <Navlink to="/" name="Home" />
            </Li>
          <Li>
              {currentUser && <Navlink to="/show" name="Adm" />}
            </Li>
            <Li>
              {!currentUser && <Navlink to="/login" name="Ingresar" />}
              {currentUser && (
                <Navlink
                  to="/"
                  onClick={async (e) => {
                    await logout();
                  }}
                />
              )}
            </Li>
            
            </Ul>
            </div>
    </nav>
  );
};

export default Navbar;
