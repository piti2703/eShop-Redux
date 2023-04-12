import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
   Home,
   Login,
   OrderHistory,
   Register,
   ResetPassword,
   Admin,
   Cart,
   Contact,
} from './pages/index';
import Header from './componets/header/Header';
import Footer from './componets/footer/Footer';

function App() {
   return (
      <React.StrictMode>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/order-history" element={<OrderHistory />} />
               <Route path="/register" element={<Register />} />
               <Route path="/reset-password" element={<ResetPassword />} />
               <Route path="/admin" element={<Admin />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </React.StrictMode>
   );
}

export default App;
