import React from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { CartProvider } from './Context/context';
import Loginpage from "./components/Login"
import { ToastContainer } from 'react-toastify';
import NotFound from './pages/ErrorPage';

const App = () => {
  return (
    <>   
    <ToastContainer autoClose={2000} hideProgressBar />
    <CartProvider>
        <BrowserRouter>
            <Navbar />
            <Routes >
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Loginpage />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    </CartProvider>
    </>

  );
};

export default App;
