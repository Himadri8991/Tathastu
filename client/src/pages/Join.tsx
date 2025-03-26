import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, BrowserRouter as Router } from 'react-router-dom';

const JoinPage = () => {
  const navigate = useNavigate();

  const joinOptions = [
    {
      title: "Become a Donor",
      description: "Support students directly through scholarships and resources",
      icon: "💰",
      bgColor: "bg-blue-100 dark:bg-blue-900/50",
      borderColor: "border-blue-200 dark:border-blue-800",
      buttonText: "Donate Now",
      action: () => navigate('/donate')
    },
    {
      title: "Volunteer",
      description: "Contribute your time and skills to our programs",
      icon: "👐",
      bgColor: "bg-green-100 dark:bg-green-900/50",
      borderColor: "border-green-200 dark:border-green-800",
      buttonText: "Sign Up to Volunteer",
      action: () => navigate('/volunteer')
    },
    {
      title: "Partner With Us",
      description: "For organizations looking to collaborate",
      icon: "🤝",
      bgColor: "bg-purple-100 dark:bg-purple-900/50",
      borderColor: "border-purple-200 dark:border-purple-800",
      buttonText: "Explore Partnerships",
      action: () => navigate('/partnerships')
    },
    {
      title: "Stay Informed",
      description: "Get updates about our initiatives and impact",
      icon: "📬",
      bgColor: "bg-orange-100 dark:bg-orange-900/50",
      borderColor: "border-orange-200 dark:border-orange-800",
      buttonText: "Subscribe to Newsletter",
      action: () => navigate('/subscribe')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header with back button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
<motion.button
                  onClick={() => navigate('/')}
                  className="mb-6 flex items-center text-blue-600 hover:text-blue-700"
                  whileHover={{ x: -5 }}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </motion.button>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Movement
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Choose how you'd like to contribute to our mission of accessible education for all.
          </p>
        </motion.div>

        {/* Join options grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {joinOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl border ${option.bgColor} ${option.borderColor} shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="flex items-start">
                <span className="text-3xl mr-4">{option.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {option.description}
                  </p>
                  <button
                    onClick={option.action}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300"
                  >
                    {option.buttonText}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Not sure how you'd like to help?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Contact our team and we'll help you find the best way to contribute based on your interests and availability.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
          >
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinPage;