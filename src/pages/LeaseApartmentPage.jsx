import React, { useState, useEffect } from "react";
import { ChevronDown, Search, Home, MapPin, Star, Filter, X, Building, Landmark, Warehouse, Building2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import backgroundImage from "../assets/apartment/mainbg.png";
import LeaseApartmentFilter from "../components/filters/LeaseApartmentFilter";
import LeaseApartment from "../components/propertycard/LeaseApartment";

const LeaseApartmentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("Rent");
  const [activeApartmentType, setActiveApartmentType] = useState("Lease Apartment");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [hoveredFilter, setHoveredFilter] = useState(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState(null);

  const propertyCategories = [
    { name: "Individual", path: "/individual", icon: <Building className="w-4 h-4" /> },
    { name: "Commercial", path: "/commercial", icon: <Landmark className="w-4 h-4" /> },
    { name: "Land & Plots", path: "/land-plots", icon: <Warehouse className="w-4 h-4" /> },
    { name: "Hostel", path: "/hostel", icon: <Building2 className="w-4 h-4" /> }
  ];

  const apartmentTypes = [
    { name: "All", path: "/apartment" },
    { name: "Rental Apartment", path: "/apartment/rental-apartment" },
    { name: "Serviced Apartment", path: "/apartment/serviced-apartment" },
    { name: "Lease Apartment", path: "/apartment/lease-apartment" },
    { name: "Residential Apartment", path: "/apartment/residential-apartment" },
    { name: "Gated Community Apartment", path: "/apartment/gated-community-apartment" },
    { name: "Studio Apartment", path: "/apartment/studio-apartment" },
    { name: "Duplex Apartment", path: "/apartment/duplex-apartment" },
    { name: "Luxury Apartment", path: "/apartment/luxury-apartment" },
    { name: "Condominium (Condo)", path: "/apartment/condominium" },
    { name: "Penthouse Apartment", path: "/apartment/penthouse-apartment" }
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const activeType = apartmentTypes.find(type => type.path === currentPath);
    if (activeType) {
      setActiveApartmentType(activeType.name);
    }
  }, [location.pathname]);

  const handleNavigation = (path, typeName = null) => {
    if (typeName) {
      setActiveApartmentType(typeName);
    }
    navigate(path);
  };

  const handlePropertyCategoryNavigation = (path) => {
    navigate(path);
  };

  const handleFilterChange = (filters) => {
    setAppliedFilters(filters);
    console.log("Applied Filters:", filters);
  };

  return (
    <div className="w-full min-h-screen relative">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-emerald-900/20 to-teal-900/40 animate-gradient-flow"></div>
       
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 8}s`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: `radial-gradient(circle, rgba(38, 166, 154, 0.4) 0%, rgba(0, 105, 92, 0.2) 70%, transparent 100%)`,
                borderRadius: '50%',
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <section className="w-full h-[150px] md:h-[200px] relative flex items-center justify-center overflow-hidden group pb-6">
          <div className="absolute inset-0 bg-gradient-to-b animate-gradient-slow"></div>
         
          <div className="max-w-none mx-auto px-6 relative z-10 text-center w-full flex flex-col items-center justify-center gap-1">
            <div className="mb-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-teal-600/20 to-emerald-600/20 backdrop-blur-lg border border-teal-300/20 animate-float-glow shadow-[0_0_30px_rgba(0,105,92,0.3)]">
              <Star className="w-4 h-4 text-teal-300 animate-spin-slow" fill="currentColor" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300 text-sm font-medium">
                Lease Apartment Properties
              </span>
            </div>
           
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 animate-slide-up drop-shadow-[0_0_30px_rgba(0,105,92,0.5)]">
              Find Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-300 animate-gradient-text">Lease Apartment</span>
            </h1>
           
            <p className="text-base md:text-lg text-white/90 mb-2 max-w-3xl mx-auto leading-relaxed">
              Explore Lease apartments with flexible terms and premium amenities
            </p>

            <div className="flex flex-wrap justify-center gap-2 px-4 animate-fade-in-up delay-200">
              {propertyCategories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => handlePropertyCategoryNavigation(category.path)}
                  className="group relative px-4 py-2 rounded-xl text-white font-semibold text-sm shadow-2xl hover:shadow-[0_0_40px_rgba(0,105,92,0.5)] transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden animate-slide-up"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    background: "linear-gradient(135deg, #00695C, #26A69A, #4DB6AC)",
                    backgroundSize: "200% 200%"
                  }}
                >
                  <div className="absolute inset-0 animate-gradient-shift"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">{category.icon}</span>
                    <span>{category.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-teal-50/95 via-emerald-50/95 to-teal-50/95 backdrop-blur-xl shadow-2xl sticky top-0 z-40 border-b border-teal-200/30 transition-all duration-500 animate-slide-down">
          <div className="max-w-none mx-auto px-6 py-4">
            <div className="hidden md:block space-y-4">
              <div className="flex gap-4 items-center">
                <div className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === "toggle" ? null : "toggle")}
                    className="group relative px-4 py-2 rounded-lg text-white font-semibold text-sm flex items-center gap-2 shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, #00695C, #26A69A)",
                      backgroundSize: "200% 200%"
                    }}
                  >
                    <div className="absolute inset-0 animate-gradient-shift-slow"></div>
                    <Home className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                    <span className="relative z-10">{activeButton}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openDropdown === "toggle" ? 'rotate-180' : ''} relative z-10`} />
                  </button>

                  {openDropdown === "toggle" && (
                    <div className="absolute top-full left-0 mt-2 bg-teal-50/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden z-50 min-w-[180px] border border-teal-200/30 animate-slide-down-fast">
                      <button onClick={() => { handleNavigation("/buy"); setActiveButton("Buy"); setOpenDropdown(null); }} className="w-full px-5 py-3.5 text-left text-base hover:bg-teal-100/50 transition-all duration-300 text-teal-900 font-medium group">
                        <div className="flex items-center gap-3 group-hover:gap-4 transition-all">
                          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                          Buy
                        </div>
                      </button>
                      <div className="h-px bg-gradient-to-r from-transparent via-teal-200/50 to-transparent"></div>
                      <button onClick={() => { handleNavigation("/rent"); setActiveButton("Rent"); setOpenDropdown(null); }} className="w-full px-5 py-3.5 text-left text-base font-semibold transition-all duration-300 group" style={{ color: "#00695C", backgroundColor: "#e0f2f1" }}>
                        <div className="flex items-center gap-3 group-hover:gap-4 transition-all">
                          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                          Rent
                        </div>
                      </button>
                      <div className="h-px bg-gradient-to-r from-transparent via-teal-200/50 to-transparent"></div>
                      <button onClick={() => { handleNavigation("/lease"); setActiveButton("Lease"); setOpenDropdown(null); }} className="w-full px-5 py-3.5 text-left text-base hover:bg-teal-100/50 transition-all duration-300 text-teal-900 font-medium group">
                        <div className="flex items-center gap-3 group-hover:gap-4 transition-all">
                          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                          Lease
                        </div>
                      </button>
                      <div className="h-px bg-gradient-to-r from-transparent via-teal-200/50 to-transparent"></div>
                      <button onClick={() => { handleNavigation("/sell"); setActiveButton("Sell"); setOpenDropdown(null); }} className="w-full px-5 py-3.5 text-left text-base hover:bg-teal-100/50 transition-all duration-300 text-teal-900 font-medium group">
                        <div className="flex items-center gap-3 group-hover:gap-4 transition-all">
                          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                          Sell
                        </div>
                      </button>
                    </div>  
                  )}
                </div>

                <div className="relative flex-1 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-400 group-hover:text-teal-600 group-hover:scale-110 transition-all duration-300 z-10" />
                  <input
                    type="text"
                    placeholder="Search Lease apartments by city, locality, or landmark"
                    className="w-full pl-10 pr-5 py-2 rounded-xl border-2 border-teal-200/50 bg-teal-50/90 text-sm"
                  />
                  <MapPin className="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-300 group-hover:text-emerald-500 group-hover:rotate-12 transition-all duration-300 z-10" />
                </div>

                <button
                  onClick={() => setShowFilterModal(true)}
                  className="group relative px-4 py-2 rounded-lg text-white font-semibold text-sm flex items-center gap-2 shadow-xl hover:shadow-[0_0_30px_rgba(0,105,92,0.4)] transition-all duration-500 transform hover:scale-105 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #00897B, #26A69A)",
                    backgroundSize: "200% 200%"
                  }}
                >
                  <div className="absolute inset-0 animate-gradient-shift-slow"></div>
                  <Filter className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Advanced Filters</span>
                  {appliedFilters && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                {apartmentTypes.map((type, index) => {
                  const isActive = activeApartmentType === type.name;
                  return (
                    <button
                      key={type.name}
                      onClick={() => handleNavigation(type.path, type.name)}
                      className={`group relative px-3 py-1.5 rounded-lg font-semibold text-sm transition-all duration-500 whitespace-nowrap transform hover:-translate-y-1 hover:scale-105 overflow-hidden ${
                        isActive
                          ? "text-teal-700"
                          : "text-white/90 hover:text-white"
                      }`}
                      style={{
                        background: isActive
                          ? "#E8F5F2"
                          : "linear-gradient(135deg, #00695C, #26A69A, #4DB6AC)",
                        backgroundSize: "200% 200%",
                        border: isActive ? "3px solid #00695C" : "none",
                        boxShadow: isActive
                          ? "0 0 18px rgba(0,105,92,0.45)"
                          : "none",
                      }}
                    >
                      <div className={`absolute inset-0 animate-gradient-shift-slow ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transition-opacity duration-500'}`}></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      {isActive && (
                        <div className="absolute inset-0 rounded-lg bg-white/10"></div>
                      )}
                      <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <span className="relative z-10 flex items-center gap-3">
                        <Home className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-12' : 'group-hover:rotate-12'}`} />
                        {type.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="md:hidden space-y-4">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                {apartmentTypes.map((type, index) => {
                  const isActive = activeApartmentType === type.name;
                  return (
                    <button
                      key={type.name}
                      onClick={() => handleNavigation(type.path, type.name)}
                      className={`flex-shrink-0 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? "bg-gradient-to-r from-teal-700 to-emerald-700 text-white shadow-lg"
                          : "bg-gradient-to-r from-teal-600 to-teal-500 text-white/90 hover:text-white"
                      }`}
                    >
                      {type.name}
                    </button>
                  );
                })}
              </div>
             
              <button
                onClick={() => setShowFilterModal(true)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                <Filter className="w-4 h-4" />
                Filter Properties
              </button>
            </div>
          </div>
        </div>

        {showFilterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <LeaseApartmentFilter
                activeTab={activeButton}
                onFilterChange={handleFilterChange}
                onClose={() => setShowFilterModal(false)}
              />
            </div>
          </div>
        )}

        <div className="max-w-none mx-auto px-6 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="lg:w-2/3">
              <section>
                <LeaseApartment/>
              </section>
            </div>

            <div className="lg:w-1/3 lg:relative">
              <div className="lg:sticky lg:top-[120px] lg:max-h-[calc(100vh-140px)] lg:overflow-y-auto lg:scrollbar-hide animate-slide-in-right">
                <div className="hidden lg:block">
                  <LeaseApartmentFilter
                    activeTab={activeButton}
                    onFilterChange={handleFilterChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 20s ease infinite;
        }
        .animate-gradient-slow {
          background-size: 300% 300%;
          animation: gradient-flow 15s ease infinite;
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-flow 2s linear infinite;
        }
        .animate-gradient-shift-slow {
          background-size: 200% 200%;
          animation: gradient-flow 4s linear infinite;
        }
        .animate-gradient-text {
          background-size: 300% 300%;
          animation: gradient-flow 3s ease infinite;
        }
        .animate-gradient-text-slow {
          background-size: 300% 300%;
          animation: gradient-flow 5s ease infinite;
        }
        @keyframes particle-float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-40px) translateX(20px) rotate(180deg); opacity: 0.8; }
        }
        .animate-particle-float {
          animation: particle-float 12s ease-in-out infinite;
        }
        @keyframes float-glow {
          0%, 100% { transform: translateY(0px); box-shadow: 0 0 30px rgba(0,105,92,0.3); }
          50% { transform: translateY(-5px); box-shadow: 0 0 40px rgba(0,105,92,0.5); }
        }
        .animate-float-glow {
          animation: float-glow 3s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
        @keyframes slide-down {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-down {
          animation: slide-down 0.4s ease-out forwards;
        }
        .animate-slide-down-fast {
          animation: slide-down 0.2s ease-out forwards;
        }
        @keyframes slide-in-right {
          from { transform: translateX(30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default LeaseApartmentPage;