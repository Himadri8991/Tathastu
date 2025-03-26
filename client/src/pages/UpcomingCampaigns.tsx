import React, { useState, useRef, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, Autocomplete } from '@react-google-maps/api';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Target, ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Define libraries to load with proper typing
const libraries: ("places")[] = ["places"];

const UpcomingCampaigns = () => {
  const navigate = useNavigate();
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const campaigns = [
    {
      id: 1,
      title: 'Digital Literacy Program',
      location: 'Bangalore',
      coordinates: { lat: 12.9716, lng: 77.5946 },
      startDate: '2024-04-01',
      endDate: '2024-06-01',
      targetBeneficiaries: 750,
      status: 'Planning'
    },
    {
      id: 2,
      title: 'STEM Education Initiative',
      location: 'Delhi',
      coordinates: { lat: 28.6139, lng: 77.2090 },
      startDate: '2024-04-15',
      endDate: '2024-07-15',
      targetBeneficiaries: 1200,
      status: 'Preparation'
    }
  ];

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 20.5937,
    lng: 78.9629
  };

  const onMapLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onAutocompleteLoad = (autocomplete: google.maps.places.Autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const onPlaceChanged = () => {
    if (autocompleteRef.current && map) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry?.location) {
        map.panTo(place.geometry.location);
        map.setZoom(12);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 dark:bg-gray-900 dark:text-white text-black">
      <div className="max-w-7xl mx-auto">
        <motion.button
          onClick={() => navigate('/NGO')}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-700"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to NGO
        </motion.button>
        
        <h1 className="text-3xl font-bold mb-8">Upcoming Campaigns</h1>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
          <h2 className="text-xl font-semibold mb-4">Campaign Locations</h2>
          
          {/* Loading State */}
          {!isScriptLoaded && (
            <div className="h-96 flex items-center justify-center">
              <div className="animate-pulse flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-200 rounded-full mb-4"></div>
                <p className="text-gray-500">Loading map...</p>
              </div>
            </div>
          )}

          {/* Map Content */}
          {isScriptLoaded && (
            <>
              {/* Search Bar */}
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Autocomplete
                  onLoad={onAutocompleteLoad}
                  onPlaceChanged={onPlaceChanged}
                >
                  <input
                    type="text"
                    placeholder="Search for a location..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </Autocomplete>
              </div>

              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={5}
                onLoad={onMapLoad}
                options={{
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false
                }}
              >
                {campaigns.map((campaign) => (
                  <Marker
                    key={campaign.id}
                    position={campaign.coordinates}
                    title={campaign.title}
                    icon={{
                      url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
                    }}
                  />
                ))}
              </GoogleMap>
            </>
          )}
        </div>

        {/* Campaigns List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campaigns.map((campaign) => (
            <motion.div
              key={campaign.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold dark:text-white">{campaign.title}</h3>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium dark:bg-yellow-900 dark:text-yellow-200">
                  {campaign.status}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{campaign.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{campaign.startDate} to {campaign.endDate}</span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Target: {campaign.targetBeneficiaries} beneficiaries</span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Target className="h-5 w-5 mr-2" />
                  <span>Preparation Progress</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-yellow-400 h-2.5 rounded-full"
                    style={{ width: '30%' }}
                  ></div>
                </div>

                <div className="flex space-x-4 mt-4">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
                    View Details
                  </button>
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">
                    Volunteer
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LoadScript must be placed at the root level */}
      <LoadScript
        googleMapsApiKey="AIzaSyCEYPTwWfUafkahO4qI_XWfdg_hGEHduqo" // Replace with your real API key
        libraries={libraries}
        onLoad={() => setIsScriptLoaded(true)}
      />
    </div>
  );
};

export default UpcomingCampaigns;