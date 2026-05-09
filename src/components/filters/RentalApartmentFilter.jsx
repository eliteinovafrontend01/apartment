import React, { useState } from 'react';
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
    { id: 'Rent', icon: <DollarSign className="w-5 h-5" />, label: 'Rent' },
    { id: 'Buy', icon: <Home className="w-5 h-5" />, label: 'Buy' },
    { id: 'Sell', icon: <TrendingUp className="w-5 h-5" />, label: 'Sell' },
    { id: 'Lease', icon: <FileText className="w-5 h-5" />, label: 'Lease' }
  ];

  const FilterSection = ({ title, children }) => (
    <div className="bg-white rounded-2xl shadow-md border border-teal-100 overflow-hidden mb-6">
      <div className="px-5 py-3 bg-gradient-to-r from-teal-50 to-emerald-50 border-b border-teal-100">
        <h3 className="font-semibold text-teal-800 text-lg">{title}</h3>
      </div>
      <div className="p-5">
        {children}
      </div>
    </div>
  );

  // Single line input component - each field takes full width
  const InputField = ({ label, placeholder, type = "text" }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-teal-700 mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-xl border border-teal-200 focus:border-teal-400 focus:outline-none transition-all duration-300 bg-white"
      />
    </div>
  );

  const InputRange = ({ label, minPlaceholder, maxPlaceholder }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-teal-700 mb-2">{label}</label>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder={minPlaceholder}
          className="w-1/2 px-4 py-2 rounded-xl border border-teal-200 focus:border-teal-400 focus:outline-none transition-all duration-300 bg-white"
        />
        <input
          type="text"
          placeholder={maxPlaceholder}
          className="w-1/2 px-4 py-2 rounded-xl border border-teal-200 focus:border-teal-400 focus:outline-none transition-all duration-300 bg-white"
        />
      </div>
    </div>
  );

  const SelectInput = ({ label, options }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-teal-700 mb-2">{label}</label>
      <select className="w-full px-4 py-2 rounded-xl border border-teal-200 focus:border-teal-400 focus:outline-none transition-all duration-300 bg-white text-teal-800">
        <option value="">Select {label}</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );

  const RadioGroup = ({ label, options }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-teal-700 mb-2">{label}</label>
      <div className="flex flex-wrap gap-4">
        {options.map(opt => (
          <label key={opt} className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name={label} className="text-teal-600" />
            <span className="text-sm text-teal-700">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const CheckboxGroup = ({ label, options }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-teal-700 mb-3">{label}</label>
      <div className="space-y-2">
        {options.map(option => (
          <label key={option} className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded border-teal-300 text-teal-600 focus:ring-teal-500" />
            <span className="text-sm text-teal-700 group-hover:text-teal-900 transition-colors">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  // Location Search Section
  const LocationSearch = () => (
    <div className="bg-white rounded-2xl shadow-md border border-teal-100 p-5 mb-6">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-400" />
        <input
          type="text"
          placeholder="Search for city, locality, landmark, or PIN code..."
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-teal-200 focus:border-teal-400 focus:outline-none transition-all duration-300 bg-white text-teal-800"
        />
      </div>
    </div>
  );

  // Common Property Details Section - Each field in separate line
  const PropertyDetailsSection = () => (
    <>
      <InputRange label="Built-up Area" minPlaceholder="Min sq.ft" maxPlaceholder="Max sq.ft" />
      <InputRange label="Carpet Area" minPlaceholder="Min sq.ft" maxPlaceholder="Max sq.ft" />
      <SelectInput label="Bedrooms" options={['Studio', '1 BHK', '2 BHK', '3 BHK', '4 BHK+']} />
      <SelectInput label="Bathrooms" options={['1', '2', '3', '4+']} />
      <InputField label="Floor Number" placeholder="Enter floor number" />
      <InputField label="Total Floors" placeholder="Enter total floors" />
      <SelectInput label="Facing Direction" options={['North', 'South', 'East', 'West', 'North-East', 'North-West', 'South-East', 'South-West']} />
      <InputField label="Balcony Count" placeholder="Enter number of balconies" />
      <InputField label="Property Age" placeholder="Enter property age in years" />
    </>
  );

  // Common Interior Details Section
  const InteriorDetailsSection = () => (
    <>
      <SelectInput label="Furnishing" options={['Fully Furnished', 'Semi-Furnished', 'Unfurnished']} />
      <InputField label="Appliances Included" placeholder="e.g., Refrigerator, AC, Washing Machine, Microwave" />
      <div className="space-y-2 mt-2">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input type="checkbox" className="w-4 h-4 rounded border-teal-300 text-teal-600 focus:ring-teal-500" />
          <span className="text-sm text-teal-700 group-hover:text-teal-900 transition-colors">Modular Kitchen</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer group">
          <input type="checkbox" className="w-4 h-4 rounded border-teal-300 text-teal-600 focus:ring-teal-500" />
          <span className="text-sm text-teal-700 group-hover:text-teal-900 transition-colors">Air Conditioning</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer group">
          <input type="checkbox" className="w-4 h-4 rounded border-teal-300 text-teal-600 focus:ring-teal-500" />
          <span className="text-sm text-teal-700 group-hover:text-teal-900 transition-colors">Wardrobes</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer group">
          <input type="checkbox" className="w-4 h-4 rounded border-teal-300 text-teal-600 focus:ring-teal-500" />
          <span className="text-sm text-teal-700 group-hover:text-teal-900 transition-colors">Utility Area</span>
        </label>
      </div>
    </>
  );

  // Common Amenities Section
  const AmenitiesSection = () => (
    <div className="space-y-2">
      {['Parking', 'Lift', '24/7 Security', 'CCTV Surveillance', 'Power Backup', 'Swimming Pool', 'Gym', 'Clubhouse', "Children's Play Area", 'Wi-Fi / Broadband Ready'].map(amenity => (
        <label key={amenity} className="flex items-center gap-2 cursor-pointer group">
          <input type="checkbox" className="w-4 h-4 rounded border-teal-300 text-teal-600 focus:ring-teal-500" />
          <span className="text-sm text-teal-700 group-hover:text-teal-900 transition-colors">{amenity}</span>
        </label>
      ))}
    </div>
  );

  // Common Nearby Access Section
  const NearbyAccessSection = () => (
    <div className="space-y-2">
      {['School', 'Hospital', 'Metro / Bus Stop', 'Shopping Mall / Market', 'IT Park / Office Hub', 'Restaurants'].map(place => (
        <label key={place} className="flex items-center gap-2 cursor-pointer group">
          <input type="checkbox" className="w-4 h-4 rounded border-teal-300 text-teal-600 focus:ring-teal-500" />
          <span className="text-sm text-teal-700 group-hover:text-teal-900 transition-colors">{place}</span>
        </label>
      ))}
    </div>
  );

  // Contact Preference Section
  const ContactPreferenceSection = () => (
    <>
      <SelectInput label="Contact via" options={['Owner', 'Agent', 'Builder']} />
      <SelectInput label="Preferred Contact Time" options={['Morning (9 AM - 12 PM)', 'Afternoon (12 PM - 4 PM)', 'Evening (4 PM - 8 PM)', 'Anytime']} />
    </>
  );

  // Rent Tab Filters
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

  // Buy Tab Filters
  const renderBuyFilters = () => (
    <>
      <FilterSection title="💰 Budget Details">
        <InputRange label="Budget Range" minPlaceholder="Min ₹" maxPlaceholder="Max ₹" />
        <RadioGroup label="Price Negotiable" options={['Yes', 'No']} />
        <InputField label="Maintenance Charges (Annual)" placeholder="Enter amount" />
        <RadioGroup label="Loan Required" options={['Yes', 'No', 'Maybe']} />
        <InputField label="Expected Rental Income (Monthly)" placeholder="Enter amount" />
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

  // Sell Tab Filters
  const renderSellFilters = () => (
    <>
      <FilterSection title="💰 Price Details">
        <InputRange label="Selling Price" minPlaceholder="Min ₹" maxPlaceholder="Max ₹" />
        <RadioGroup label="Price Negotiable" options={['Yes', 'No']} />
        <InputField label="Maintenance Charges (Annual)" placeholder="Enter amount" />
        <InputField label="Property Tax (Annual)" placeholder="Enter amount" />
        <InputField label="Current Rental Income (Monthly)" placeholder="Enter amount" />
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

  // Lease Tab Filters
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
    <div className="bg-gradient-to-br from-teal-50 via-white to-emerald-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-teal-100 sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl shadow-lg">
              <Filter className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-teal-700 to-emerald-700 bg-clip-text text-transparent">
              Rental Apartment Filters
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        
        {/* Location Search Bar */}
        <LocationSearch />

        {/* Tabs - Rent, Buy, Sell, Lease - Inline with larger text */}
        <div className="mb-8">
          <div className="flex gap-3 bg-teal-50/80 p-1 rounded-2xl inline-flex">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-base transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md'
                    : 'text-teal-700 hover:bg-teal-100/50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Filters based on Tab - Each section is a separate box, each field on its own line */}
        {activeTab === 'Rent' && renderRentFilters()}
        {activeTab === 'Buy' && renderBuyFilters()}
        {activeTab === 'Sell' && renderSellFilters()}
        {activeTab === 'Lease' && renderLeaseFilters()}

        {/* Action Buttons - Clear and Search at Bottom */}
        <div className="flex gap-4 sticky bottom-0 bg-gradient-to-br from-teal-50 via-white to-emerald-50 py-4 mt-6 rounded-2xl">
          <button className="flex-1 px-6 py-3 rounded-xl bg-white border-2 border-teal-200 text-teal-700 font-semibold hover:bg-teal-50 transition-all duration-300">
            Clear All Filters
          </button>
          <button className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
            <Search className="w-4 h-4" />
            Search Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentalApartmentFilter;