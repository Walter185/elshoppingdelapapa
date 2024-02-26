import React from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { CartProvider } from './Context/context';
import Loginpage from "./components/Login"
import { ToastContainer } from 'react-toastify';
import NotFound from './pages/ErrorPage';
import Show from './components/Admin/Show';
import RequireAuth from './components/Login/RequireAuth';
import { Foot } from './components/Footer';
import Create from './components/Admin/Create';
import Edit from './components/Admin/Edit';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import styled from "styled-components";

const Whatsapp=styled.a`
    position: fixed;
    width: 60px;
    height: 63px;
    line-height: 60px;
    bottom: 50px;
    right: 50px;
    background: #25d366;
    color: #FFF;
    border-radius: 50px;
    text-align: center !important;
    font-size: 35px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
    z-index: 100;
    transition: all 300ms ease;
  &&:hover {
    background: #FFF;
    color: #25D366;
  }

`;

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({config})

function App(props)  {
  return (
    <>   
    <ToastContainer autoClose={2000} hideProgressBar />
    <CartProvider>
    <ChakraProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <BrowserRouter>
            <Navbar />
            <Routes >
                <Route path="/" element={<LandingPage />} />
                <Route path="/category/:categoryid" element={<ItemListContainer />} />
                <Route path="/login" element={<Loginpage />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/show" element={<RequireAuth><Show /></RequireAuth>} />
                <Route path="/create" element={<RequireAuth><Create /></RequireAuth>} />
                <Route path="/edit/:id" element={<RequireAuth><Edit /></RequireAuth>} />

            </Routes>

        </BrowserRouter>
      </ChakraProvider>
    </CartProvider>
    <Foot />
    </>

  );
};

export default App;
