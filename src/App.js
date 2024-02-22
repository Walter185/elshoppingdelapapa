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


function App(props)  {
  return (
    <>   
    <ToastContainer autoClose={2000} hideProgressBar />
    <CartProvider>
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
    </CartProvider>
    <Foot />
    </>

  );
};

export default App;
