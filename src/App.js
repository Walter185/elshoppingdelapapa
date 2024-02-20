import React from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import LandingPage from './pages/LandingPage';


const App = () => {
  return (
    <>    <BrowserRouter>
        <Navbar />
        <Routes >
            <Route path="/" element={<LandingPage />} />
        </Routes>
    </BrowserRouter>
    </>

  );
};

export default App;
