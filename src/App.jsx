import React from 'react'
import {BrowserRouter,Routes,Route}  from 'react-router-dom';
import ApartmentPage from './pages/ApartmentPage';
import RentalApartmentPage from './pages/RentalApartmentPage';
import ServicedApartmentPage from './pages/ServicedApartmentPage';
import LeaseApartmentPage from './pages/LeaseApartmentPage';
import ResidentialApartmentPage from './pages/ResidentialApartmentPage';
import GatedCommunityApartmentPage from './pages/GatedCommunityApartmentPage';
import StudioApartmentPage from './pages/StudioApartmentPage';
import DuplexApartmentPage from './pages/DuplexApartmentPage';
import LuxuryApartmentPage from './pages/LuxuryApartmentPage';
import CondominiumApartmentPage from './pages/CondominiumApartmentPage';
import PentHouseApartmentPage from './pages/PentHouseApartmentPage';

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
          <Route path="/apartment/lease-apartment" element={<LeaseApartmentPage />} />
          <Route path="/apartment/residential-apartment" element={<ResidentialApartmentPage />} />
          <Route path="/apartment/gated-community-apartment" element={<GatedCommunityApartmentPage/>} />
          <Route path="/apartment/studio-apartment" element={<StudioApartmentPage/>} />
          <Route path="/apartment/duplex-apartment" element={<DuplexApartmentPage/>} />
          <Route path="/apartment/luxury-apartment" element={<LuxuryApartmentPage/>} />
          <Route path="/apartment/condominium" element={<CondominiumApartmentPage/>} />
          <Route path="/apartment/penthouse-apartment" element={<PentHouseApartmentPage/>} />

        </Routes>
     </BrowserRouter> 
        
          
    </>
  )
}

export default App
