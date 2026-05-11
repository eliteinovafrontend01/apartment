import React from 'react'
import {BrowserRouter,Routes,Route}  from 'react-router-dom';
import ApartmentPage from './pages/ApartmentPage';
import RentalApartmentPage from './pages/RentalApartmentPage';
import ServicedApartmentPage from './pages/ServicedApartmentPage';

const App = () => {
  return (
    <>
     <BrowserRouter>
     
        <Routes>
        
          {/* Customer Portal Routes */}
         
          <Route path="/apartment" element={<ApartmentPage />} />
         
          {/* Apartment House  Type Routes */}
          <Route path="/" element={<ApartmentPage />} />
          <Route path="/apartment/rental-apartment" element={<RentalApartmentPage />} />
          <Route path="/apartment/serviced-apartment" element={<ServicedApartmentPage />} />

        </Routes>
     </BrowserRouter> 
        
          
    </>
  )
}

export default App
