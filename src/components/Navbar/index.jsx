import { useState } from 'react';
import logo from "../../assets/img/logo.png"
import "./Navbar.css"
import { Button } from 'react-bootstrap';

const Navbar = () => {
  // Estado para controlar si el usuario ha iniciado sesión
  const [loggedIn, setLoggedIn] = useState(false);

  // Función para manejar el inicio de sesión / cierre de sesión
  const handleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar__search">
        {/* Aquí puedes agregar la barra de búsqueda si es necesario */}
      </div>
      <div className="navbar__actions">
        {loggedIn ? (
          <Button onClick={handleLogin}>Logout</Button>
        ) : (
          <Button onClick={handleLogin}>Login</Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
