import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Target, ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const OngoingCampaigns = () => {
      const navigate = useNavigate();
  const campaigns = [
    {
      id: 1,
      title: 'Rural Education Drive',
      location: 'Rajasthan',
      coordinates: { lat: 26.9124, lng: 75.7873 },
      startDate: '2024-02-15',
      endDate: '2024-04-15',
      beneficiaries: 500,
      progress: 65
    },
    {
      id: 2,
      title: 'Urban Library Setup',
      location: 'Mumbai',
      coordinates: { lat: 19.0760, lng: 72.8777 },
      startDate: '2024-03-01',
      endDate: '2024-05-01',
      beneficiaries: 1000,
      progress: 40
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

  return (
    <div className="min-h-screen  p-8 bg-gray-50 dark:bg-gray-900 dark:text-white text-black">
      <div className="max-w-7xl mx-auto">
         <motion.button
                  onClick={() => navigate('/NGO')}
                  className="mb-6 flex items-center text-blue-600 hover:text-blue-700"
                  whileHover={{ x: -5 }}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to NGO
                </motion.button>
        <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">Ongoing Campaigns</h1>

        

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-gray-700">
          <h2 className="text-xl font-semibold mb-4">Campaign Locations</h2>
          <LoadScript googleMapsApiKey="AIzaSyCEYPTwWfUafkahO4qI_XWfdg_hGEHduqo">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={5}
            >
              {campaigns.map((campaign) => (
                <Marker
                  key={campaign.id}
                  position={campaign.coordinates}
                  title={campaign.title}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>

        {/* Campaigns List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-600">
          {campaigns.map((campaign) => (
            <motion.div
              key={campaign.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{campaign.title}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{campaign.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{campaign.startDate} to {campaign.endDate}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{campaign.beneficiaries} beneficiaries</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Target className="h-5 w-5 mr-2" />
                  <span>Progress: {campaign.progress}%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>

                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OngoingCampaigns;