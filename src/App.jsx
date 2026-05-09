import React from 'react'
import {BrowserRouter,Routes,Route}  from 'react-router-dom';
import ApartmentPage from './pages/ApartmentPage';
import RentalApartmentPage from './pages/RentalApartmentPage';

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

          {/* <Route path="/individual/independent-villa" element={<IndependentVillaPage />} />
          <Route path="/individual/residential-apartment" element={<ResidentialApartmentPage />} />
          <Route path="/individual/duplex-residential-unit" element={<DuplexResidentialUnitPage />} />
          <Route path="/individual/row-house" element={<RowHousePage />} /> */}

        </Routes>
     </BrowserRouter> 
        
          
    </>
  )
}

export default App
