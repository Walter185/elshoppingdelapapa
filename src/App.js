import React from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { CartProvider } from './Context/context';


const App = () => {
  return (
    <>   
    <CartProvider>
        <BrowserRouter>
            <Navbar />
            <Routes >
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    </CartProvider>
    </>

  );
};

export default App;
