import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 90%;
  height:25px;
  padding: 1px;
  margin-bottom: 1px;
  background-color: lightgray;
  font-size:medium;
  &::placeholder{
    color:black;
  }
`;

const Textarea = styled.textarea`
  width: 90%;
  background-color: lightgray;
  text-decoration: solid white !important;
  font-size: medium;
  &::placeholder{
    color:black;
  }
`;

const Form = styled.form`
  box-sizing: border-box;
  display: grid;
  width: 24rem;
  margin-left: auto;
  margin-right: auto;
  font-size:medium;
  
  @media screen and (max-width: 1000px) {
    margin-left: 30%;
    margin-right: 30%;
  }
  
  @media screen and (max-width: 600px) {
    margin-left: 10%;
    width:22rem;
  }

  @media screen and (max-width: 400px) {
    margin-left: auto;
}
`;
const Button = styled.button`
  width: 90%;
  margin-top: 5px;
`;
const Label = styled.label`
  color: white;
  font-size: medium;
  padding:5px;
  text-align: left;
`;
const ContactForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [incluirEmpresa, setIncluirEmpresa] = useState(false);
  const [nombreError, setNombreError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [telefonoError, setTelefonoError] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  const [empresaError, setEmpresaError] = useState('');
  const form = useRef();

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };

  const handleMensajeChange = (e) => {
    setMensaje(e.target.value);
  };

  const handleEmpresaChange = (e) => {
    setEmpresa(e.target.value);
  };

  const handleIncluirEmpresaChange = (e) => {
    setIncluirEmpresa(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos
    let isValid = true;

    if (nombre.length < 3) {
      setNombreError('El nombre debe tener al menos 3 letras');
      isValid = false;
    } else {
      setNombreError('');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('El formato del email es inválido');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (telefono.length < 8) {
      setTelefonoError('El teléfono debe tener al menos 8 dígitos');
      isValid = false;
    } else {
      setTelefonoError('');
    }

    if (mensaje.length < 5) {
      setMensajeError('El mensaje debe tener al menos 5 caracteres');
      isValid = false;
    } else {
      setMensajeError('');
    }

    if (incluirEmpresa && empresa.trim() === '') {
      setEmpresaError('Ingrese el nombre de su empresa');
      isValid = false;
    } else {
      setEmpresaError('');
    }

    if (isValid) {
      // Aquí puedes enviar el formulario con emailjs
      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID2,
        process.env.REACT_APP_TEMPLATE_ID2,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY2
      )
        .then((result) => {
          console.log(result.text);
          // Limpia el formulario después de enviar
          setNombre('');
          setEmail('');
          setTelefono('');
          setMensaje('');
          setEmpresa('');
          setIncluirEmpresa(false);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <Form ref={form} onSubmit={handleSubmit}>
      <h4 style={{ color: '#78909c' }}>
        <b>Escríbanos su consulta</b>
      </h4>
      <p style={{ fontSize: 'medium', color: 'white', marginTop: '-10px' }}>
        Le responderemos a la brevedad.
      </p>

      <Label>
        <i className="fa fa-user"></i>&nbsp;<strong>Nombre:&nbsp;</strong>
      </Label>
      <Input type="text" name='nombre' placeholder='Escriba su nombre aquí..' value={nombre} onChange={handleNombreChange} />
      {nombreError && <p style={{ color: 'red' }}>{nombreError}</p>}

      <Label>
        <i className="fas fa-envelope"></i>&nbsp;<strong>Email:&nbsp;</strong>
      </Label>
      <Input type="text" name='email' placeholder='Escriba su email aquí..' value={email} onChange={handleEmailChange} />
      {emailError && <p style={{ color: 'red' }}>{emailError}</p>}

      <Label>
        <i className="fas fa-phone"></i>&nbsp;<strong>Teléfono:&nbsp;</strong>
      </Label>
      <Input type="number" name='telefono' placeholder='Ingrese su teléfono aquí..' value={telefono} onChange={handleTelefonoChange} />
      {telefonoError && <p style={{ color: 'red' }}>{telefonoError}</p>}
      <Label>
        <i className="fas fa-message"></i>&nbsp;<strong>Mensaje:&nbsp;</strong>
      </Label>
      <Textarea
        cols="50"
        type="text"
        rows="3"
        placeholder="Escriba su mensaje..."
        value={mensaje}
        name='mensaje'
        onChange={handleMensajeChange}
      />
      {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>}

      <div>
        <Label>Desea agregar su Empresa?</Label>
        <input
          type="checkbox"
          checked={incluirEmpresa}
          onChange={handleIncluirEmpresaChange}
        />
      </div>
      {incluirEmpresa && (
        <div>
          <Label>Empresa</Label>
          <Input
            type="text"
            value={empresa}
            name='empresa'
            onChange={handleEmpresaChange}
          />
          {empresaError && <p style={{ color: 'red' }}>{empresaError}</p>}
        </div>
      )}
      <Button
        type="submit"
        className="btn btn-outline-primary mt-2 mb-2 ml-auto mr-auto"
      >
        Enviar
      </Button>
    </Form>
  );
};

export default ContactForm;
