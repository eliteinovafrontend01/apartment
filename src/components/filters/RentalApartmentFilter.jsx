import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, Filter, MapPin, Bed, Bath, Maximize, 
  Calendar, Users, Wifi, Dog, Clock, Building, 
  DollarSign, Home, ChevronDown, ChevronUp, TrendingUp, 
  FileText, CheckCircle, AlertCircle, Car, Shield, 
  Wind, Coffee, Droplet, Layers, Layout,
  Smartphone, Mail, Phone, MessageCircle, Globe,
  Sun, Sunset, Compass, Hash, Box, Scissors
} from 'lucide-react';

const RentalApartmentFilter = () => {
  const [activeTab, setActiveTab] = useState('Rent');

  const tabs = [
    { id: 'Rent', icon: <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />, label: 'Rent' },
    { id: 'Buy', icon: <Home className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />, label: 'Buy' },
    { id: 'Sell', icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />, label: 'Sell' },
    { id: 'Lease', icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />, label: 'Lease' }
  ];

 const FilterSection = ({ title, children }) => {
 const emoji = title.match(/^\S+/)?.[0] || '';
const rest = title.slice(emoji.length);
return (
  <div className="bg-white rounded-xl sm:rounded-2xl shadow-md border-2 border-teal-100 overflow-hidden mb-4 sm:mb-6 transition-all duration-300 hover:shadow-xl hover:shadow-teal-200 hover:-translate-y-1 hover:border-teal-300">
    <style>{`
      @keyframes wiggle {
        0%   { transform: rotate(0deg) scale(1); }
        15%  { transform: rotate(-15deg) scale(1.2); }
        30%  { transform: rotate(12deg) scale(1.25); }
        45%  { transform: rotate(-10deg) scale(1.2); }
        60%  { transform: rotate(8deg) scale(1.15); }
        75%  { transform: rotate(-5deg) scale(1.1); }
        100% { transform: rotate(0deg) scale(1); }
      }
      @keyframes continuousBounce {
        0%, 100% { transform: translateY(0px) scale(1); }
        25%  { transform: translateY(-4px) scale(1.1); }
        50%  { transform: translateY(0px) scale(1); }
        75%  { transform: translateY(-2px) scale(1.05); }
      }
      .emoji-wrap { display: inline-block; animation: continuousBounce 2s ease-in-out infinite; }
      .emoji-wrap:hover { animation: wiggle 0.6s ease forwards; }
    `}</style>
    <div className="px-3 py-3 sm:px-5 sm:py-4 bg-gradient-to-r from-teal-100 to-emerald-100 border-b-2 border-teal-200">
      <h3 className="font-bold text-teal-800 text-lg sm:text-xl md:text-2xl">
        <span className="emoji-wrap">{emoji}</span>
        {rest}
      </h3>
    </div>
      <div className="p-3 sm:p-5">
        {children}
      </div>
    </div>
  );
};

  const InputField = ({ label, placeholder, type = "text" }) => (
    <div className="mb-3 sm:mb-4">
      <label className="block text-sm sm:text-base md:text-lg font-bold text-teal-800 mb-1 sm:mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl border-2 border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all duration-300 bg-white text-sm sm:text-base"
      />
    </div>
  );

  const InputRange = ({ label, minPlaceholder, maxPlaceholder }) => (
    <div className="mb-3 sm:mb-4">
      <label className="block text-sm sm:text-base md:text-lg font-bold text-teal-800 mb-1 sm:mb-2">{label}</label>
      <div className="flex gap-2 sm:gap-3">
        <input
          type="number"
          placeholder={minPlaceholder}
          className="w-1/2 px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl border-2 border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all duration-300 bg-white text-sm sm:text-base"
        />
        <input
          type="number"
          placeholder={maxPlaceholder}
          className="w-1/2 px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl border-2 border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all duration-300 bg-white text-sm sm:text-base"
        />
      </div>
    </div>
  );

  const NumberInputField = ({ label, placeholder }) => (
    <div className="mb-3 sm:mb-4">
      <label className="block text-sm sm:text-base md:text-lg font-bold text-teal-800 mb-1 sm:mb-2">{label}</label>
      <input
        type="number"
        placeholder={placeholder}
        className="w-full px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl border-2 border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all duration-300 bg-white text-sm sm:text-base"
      />
    </div>
  );

  const SelectInput = ({ label, options }) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('');
    const ref = useRef(null);

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <div className="mb-3 sm:mb-4 relative" ref={ref}>
        <label className="block text-sm sm:text-base md:text-lg font-bold text-teal-800 mb-1 sm:mb-2">
          {label}
        </label>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl border-2 border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all duration-300 bg-white text-left flex justify-between items-center text-sm sm:text-base"
        >
          <span className={selected ? 'text-teal-800 font-medium' : 'text-gray-400'}>
            {selected || `Select ${label}`}
          </span>
          <svg
            className={`w-4 h-4 text-teal-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <div className="absolute z-50 w-full mt-1 bg-white border-2 border-teal-200 rounded-xl shadow-lg overflow-hidden">
            {options.map((opt) => (
              <div
                key={opt}
                onClick={() => { setSelected(opt); setOpen(false); }}
                className={`px-4 py-2 text-sm sm:text-base cursor-pointer font-medium transition-all duration-150
                  ${selected === opt
                    ? 'bg-teal-600 text-white'
                    : 'text-teal-800 hover:bg-teal-500 hover:text-white'
                  }`}
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const RadioGroup = ({ label, options }) => (
    <div className="mb-3 sm:mb-4">
      <label className="block text-sm sm:text-base md:text-lg font-bold text-teal-800 mb-2 sm:mb-3">{label}</label>
      <div className="flex flex-wrap gap-3 sm:gap-5">
        {options.map(opt => (
          <label key={opt} className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group">
            <input 
              type="radio" 
              name={label} 
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600 focus:ring-teal-500 focus:ring-offset-0 checked:bg-teal-600 checked:border-teal-600 accent-teal-600"
            />
            <span className="text-sm sm:text-base text-teal-700 group-hover:text-teal-600 transition-colors font-medium">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
    
  const CheckboxGroup = ({ label, options }) => (
    <div className="mb-3 sm:mb-4">
      <label className="block text-sm sm:text-base md:text-lg font-bold text-teal-800 mb-2 sm:mb-3">{label}</label>
      <div className="space-y-1.5 sm:space-y-2">
        {options.map(option => (
          <label key={option} className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group">
            <input 
              type="checkbox" 
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border-2 border-teal-300 text-teal-600 focus:ring-teal-500 focus:ring-offset-0 checked:bg-teal-600 checked:border-teal-600 accent-teal-600" 
            />
            <span className="text-sm sm:text-base text-teal-700 group-hover:text-teal-600 transition-colors font-medium">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const LocationSearch = () => (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md border-2 border-teal-100 p-3 sm:p-5 mb-4 sm:mb-6">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
        <input
          type="text"
          placeholder="Search for city, locality, landmark, or PIN code..."
          className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all duration-300 bg-white text-teal-800 text-sm sm:text-base"
        />
      </div>
    </div>
  );

  const PropertyDetailsSection = () => (
    <>
      <InputRange label="Built-up Area" minPlaceholder="Min sq.ft" maxPlaceholder="Max sq.ft" />
      <InputRange label="Carpet Area" minPlaceholder="Min sq.ft" maxPlaceholder="Max sq.ft" />
      <SelectInput label="Bedrooms" options={['Studio', '1 BHK', '2 BHK', '3 BHK', '4 BHK+']} />
      <SelectInput label="Bathrooms" options={['1', '2', '3', '4+']} />
      <NumberInputField label="Floor Number" placeholder="Enter floor number" />
      <NumberInputField label="Total Floors" placeholder="Enter total floors" />
      <SelectInput label="Facing Direction" options={['North', 'South', 'East', 'West', 'North-East', 'North-West', 'South-East', 'South-West']} />
      <NumberInputField label="Balcony Count" placeholder="Enter number of balconies" />
      <NumberInputField label="Property Age" placeholder="Enter property age in years" />
    </>
  );

  const InteriorDetailsSection = () => (
    <>
      <SelectInput label="Furnishing" options={['Fully Furnished', 'Semi-Furnished', 'Unfurnished']} />
      <InputField label="Appliances Included" placeholder="e.g., Refrigerator, AC, Washing Machine, Microwave" />
      <div className="space-y-1.5 sm:space-y-2 mt-2">
        {['Modular Kitchen', 'Air Conditioning', 'Wardrobes', 'Utility Area'].map(item => (
          <label key={item} className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group">
            <input 
              type="checkbox" 
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border-2 border-teal-300 text-teal-600 focus:ring-teal-500 focus:ring-offset-0 checked:bg-teal-600 checked:border-teal-600 accent-teal-600" 
            />
            <span className="text-sm sm:text-base text-teal-700 group-hover:text-teal-600 transition-colors font-medium">{item}</span>
          </label>
        ))}
      </div>
    </>
  );

  const AmenitiesSection = () => (
    <div className="space-y-1.5 sm:space-y-2">
      {['Parking', 'Lift', '24/7 Security', 'CCTV Surveillance', 'Power Backup', 'Swimming Pool', 'Gym', 'Clubhouse', "Children's Play Area", 'Wi-Fi / Broadband Ready'].map(amenity => (
        <label key={amenity} className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group">
          <input 
            type="checkbox" 
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border-2 border-teal-300 text-teal-600 focus:ring-teal-500 focus:ring-offset-0 checked:bg-teal-600 checked:border-teal-600 accent-teal-600" 
          />
          <span className="text-sm sm:text-base text-teal-700 group-hover:text-teal-600 transition-colors font-medium">{amenity}</span>
        </label>
      ))}
    </div>
  );

  const NearbyAccessSection = () => (
    <div className="space-y-1.5 sm:space-y-2">
      {['School', 'Hospital', 'Metro / Bus Stop', 'Shopping Mall / Market', 'IT Park / Office Hub', 'Restaurants'].map(place => (
        <label key={place} className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group">
          <input 
            type="checkbox" 
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border-2 border-teal-300 text-teal-600 focus:ring-teal-500 focus:ring-offset-0 checked:bg-teal-600 checked:border-teal-600 accent-teal-600" 
          />
          <span className="text-sm sm:text-base text-teal-700 group-hover:text-teal-600 transition-colors font-medium">{place}</span>
        </label>
      ))}
    </div>
  );

  const ContactPreferenceSection = () => (
    <>
      <SelectInput label="Contact via" options={['Owner', 'Agent', 'Builder']} />
      <SelectInput label="Preferred Contact Time" options={['Morning (9 AM - 12 PM)', 'Afternoon (12 PM - 4 PM)', 'Evening (4 PM - 8 PM)', 'Anytime']} />
    </>
  );

  const renderRentFilters = () => (
    <>
      <FilterSection title="💰 Rent Details">
        <InputRange label="Monthly Rent Range" minPlaceholder="Min ₹" maxPlaceholder="Max ₹" />
        <InputRange label="Security Deposit" minPlaceholder="Min ₹" maxPlaceholder="Max ₹" />
        <RadioGroup label="Maintenance Charges Included" options={['Yes', 'No']} />
        <RadioGroup label="Rent Negotiable" options={['Yes', 'No']} />
      </FilterSection>

      <FilterSection title="🏠 Property Details">
        <PropertyDetailsSection />
      </FilterSection>

      <FilterSection title="🪑 Interior Details">
        <InteriorDetailsSection />
      </FilterSection>

      <FilterSection title="👥 Tenant Preferences">
        <CheckboxGroup label="Tenant Type" options={['Family', 'Bachelor', 'Working Professionals', 'Students']} />
        <RadioGroup label="Pet Friendly" options={['Yes', 'No']} />
        <RadioGroup label="Dietary Preference" options={['Veg Only', 'No Restriction']} />
        <RadioGroup label="Smoking Allowed" options={['Yes', 'No']} />
      </FilterSection>

      <FilterSection title="✨ Amenities">
        <AmenitiesSection />
      </FilterSection>

      <FilterSection title="📅 Availability">
        <RadioGroup label="Immediate Move-in" options={['Yes', 'No']} />
        <InputField label="Available From" type="date" placeholder="Select date" />
        <SelectInput label="Minimum Rental Duration" options={['3 Months', '6 Months', '1 Year', '2 Years']} />
      </FilterSection>

      <FilterSection title="📍 Nearby Access">
        <NearbyAccessSection />
      </FilterSection>

      <FilterSection title="📞 Contact Preference">
        <ContactPreferenceSection />
      </FilterSection>
    </>
  );

  const renderBuyFilters = () => (
    <>
      <FilterSection title="💰 Budget Details">
        <InputRange label="Budget Range" minPlaceholder="Min ₹" maxPlaceholder="Max ₹" />
        <RadioGroup label="Price Negotiable" options={['Yes', 'No']} />
        <NumberInputField label="Maintenance Charges (Annual)" placeholder="Enter amount" />
        <RadioGroup label="Loan Required" options={['Yes', 'No', 'Maybe']} />
        <NumberInputField label="Expected Rental Income (Monthly)" placeholder="Enter amount" />
      </FilterSection>

      <FilterSection title="🏠 Property Details">
        <PropertyDetailsSection />
        <SelectInput label="Occupancy Status" options={['Vacant', 'Tenant Occupied']} />
        <SelectInput label="Ownership Type" options={['Freehold', 'Leasehold']} />
      </FilterSection>

      <FilterSection title="🪑 Interior Details">
        <InteriorDetailsSection />
      </FilterSection>

      <FilterSection title="✨ Amenities">
        <AmenitiesSection />
        <RadioGroup label="Pet Friendly" options={['Yes', 'No']} />
      </FilterSection>

      <FilterSection title="📅 Availability">
        <RadioGroup label="Ready to Move" options={['Yes', 'No']} />
        <RadioGroup label="Under Construction" options={['Yes', 'No']} />
        <RadioGroup label="Immediate Possession" options={['Yes', 'No']} />
      </FilterSection>

      <FilterSection title="⚖️ Legal Details">
        <RadioGroup label="Title Deed Verified" options={['Yes', 'No']} />
        <RadioGroup label="Loan Eligible" options={['Yes', 'No']} />
        <RadioGroup label="RERA Approved" options={['Yes', 'No']} />
      </FilterSection>

      <FilterSection title="📍 Nearby Access">
        <NearbyAccessSection />
      </FilterSection>

      <FilterSection title="📞 Contact Preference">
        <ContactPreferenceSection />
      </FilterSection>
    </>
  );

  const renderSellFilters = () => (
    <>
      <FilterSection title="💰 Price Details">
        <InputRange label="Selling Price" minPlaceholder="Min ₹" maxPlaceholder="Max ₹" />
        <RadioGroup label="Price Negotiable" options={['Yes', 'No']} />
        <NumberInputField label="Maintenance Charges (Annual)" placeholder="Enter amount" />
        <NumberInputField label="Property Tax (Annual)" placeholder="Enter amount" />
        <NumberInputField label="Current Rental Income (Monthly)" placeholder="Enter amount" />
      </FilterSection>

      <FilterSection title="🏠 Property Details">
        <PropertyDetailsSection />
        <SelectInput label="Occupancy Status" options={['Vacant', 'Tenant Occupied']} />
        <SelectInput label="Ownership Type" options={['Freehold', 'Leasehold']} />
      </FilterSection>

      <FilterSection title="🪑 Interior Details">
        <InteriorDetailsSection />
      </FilterSection>

      <FilterSection title="✨ Amenities">
        <AmenitiesSection />
        <RadioGroup label="Pet Friendly" options={['Yes', 'No']} />
      </FilterSection>

      <FilterSection title="📅 Availability">
        <RadioGroup label="Ready to Move" options={['Yes', 'No']} />
        <RadioGroup label="Under Construction" options={['Yes', 'No']} />
        <RadioGroup label="Immediate Possession" options={['Yes', 'No']} />
      </FilterSection>

      <FilterSection title="⚖️ Legal Details">
        <RadioGroup label="Title Deed Verified" options={['Yes', 'No']} />
        <RadioGroup label="Loan Eligible" options={['Yes', 'No']} />
        <RadioGroup label="RERA Approved" options={['Yes', 'No']} />
      </FilterSection>

      <FilterSection title="📍 Nearby Access">
        <NearbyAccessSection />
      </FilterSection>

      <FilterSection title="📞 Contact Preference">
        <ContactPreferenceSection />
      </FilterSection>
    </>
  );

  const renderLeaseFilters = () => (
    <>
      <FilterSection title="📄 Lease Details">
        <InputRange label="Lease Amount" minPlaceholder="Min ₹" maxPlaceholder="Max ₹" />
        <InputRange label="Refundable Deposit" minPlaceholder="Min ₹" maxPlaceholder="Max ₹" />
        <SelectInput label="Lease Duration" options={['6 Months', '1 Year', '2 Years', '3+ Years']} />
        <RadioGroup label="Maintenance Charges Included" options={['Yes', 'No']} />
        <RadioGroup label="Lease Negotiable" options={['Yes', 'No']} />
      </FilterSection>

      <FilterSection title="🏠 Property Details">
        <PropertyDetailsSection />
        <SelectInput label="Ownership Type" options={['Freehold', 'Leasehold']} />
      </FilterSection>

      <FilterSection title="🪑 Interior Details">
        <InteriorDetailsSection />
      </FilterSection>

      <FilterSection title="👥 Tenant Preferences">
        <CheckboxGroup label="Tenant Type" options={['Family', 'Bachelor', 'Working Professionals', 'Students']} />
        <RadioGroup label="Pet Friendly" options={['Yes', 'No']} />
        <RadioGroup label="Dietary Preference" options={['Veg Only', 'No Restriction']} />
        <RadioGroup label="Smoking Allowed" options={['Yes', 'No']} />
      </FilterSection>

      <FilterSection title="✨ Amenities">
        <AmenitiesSection />
      </FilterSection>

      <FilterSection title="📅 Availability">
        <RadioGroup label="Immediate Occupancy" options={['Yes', 'No']} />
        <InputField label="Available From" type="date" placeholder="Select date" />
        <RadioGroup label="Lease Renewal Option" options={['Yes', 'No']} />
      </FilterSection>

      <FilterSection title="📍 Nearby Access">
        <NearbyAccessSection />
      </FilterSection>

      <FilterSection title="📞 Contact Preference">
        <ContactPreferenceSection />
      </FilterSection>
    </>
  );

  return (
    <div className="h-screen flex flex-col bg-emerald-50 overflow-hidden rounded-3xl">
      {/* Sticky Header */}
      <div className="flex-shrink-0 bg-gradient-to-r from-teal-600 to-emerald-600 shadow-sm sticky top-0 z-50">
        <div className="px-3 py-2 sm:px-6 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg sm:rounded-xl shadow-lg">
              <style>{`
                @keyframes slowSpin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                .slow-spin { animation: slowSpin 4s linear infinite; }
              `}</style>
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-white slow-spin" />
            </div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Rental Apartment Filters
            </h1>
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto" style={{scrollbarWidth: 'auto', scrollbarColor: '#0d9488 #e5e7eb'}}>
  <style>{`
    .filter-scroll-area::-webkit-scrollbar { width: 6px; }
    .filter-scroll-area::-webkit-scrollbar-track { background: #e5e7eb; }
    .filter-scroll-area::-webkit-scrollbar-thumb { background: #0d9488; border-radius: 10px; }
    .filter-scroll-area::-webkit-scrollbar-thumb:hover { background: #0f766e; }
  `}</style>
        <div className="max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
          
          {/* Location Search */}
          <LocationSearch />

          {/* Tabs - All in one line with flex-nowrap and responsive sizing */}
          <div className="sticky top-0 z-40 bg-emerald-50 pt-2 pb-3 -mt-2 mb-4 sm:mb-6 
          overflow-x-auto scrollbar-hide">
            <div className="flex flex-nowrap justify-center gap-1 sm:gap-2 md:gap-3 min-w-max">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-0.3 sm:gap-0.5 px-1 sm:px-1 md:px-1 py-1.5 sm:py-2 md:py-2.2 rounded-lg sm:rounded-xl font-bold transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md'
                      : 'bg-teal-100 text-teal-700 hover:bg-teal-200 hover:text-teal-800'
                  } text-xs sm:text-sm md:text-base lg:text-lg`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Filter Content */}
          {activeTab === 'Rent' && renderRentFilters()}
          {activeTab === 'Buy' && renderBuyFilters()}
          {activeTab === 'Sell' && renderSellFilters()}
          {activeTab === 'Lease' && renderLeaseFilters()}
        </div>
      </div>

      {/* Sticky Bottom Action Buttons */}
      <div className="flex-shrink-0 bg-gradient-to-br from-teal-50 via-white to-emerald-50 border-t-2 border-teal-100 shadow-lg py-3 sm:py-4">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 flex gap-2 sm:gap-3">
          <button className="flex-1 px-3 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl bg-white border-2 border-teal-200 text-teal-700 font-semibold hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-300 text-sm sm:text-base md:text-lg">
            Clear All
          </button>
          <button className="flex-1 px-3 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold hover:shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentalApartmentFilter;