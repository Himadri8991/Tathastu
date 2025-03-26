import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, BookOpen, TrendingUp, Building2Icon, LucideBuilding, BookCheck } from 'lucide-react';
import DonationTracker from '../components/DonationTracker';
import { Link } from 'react-router-dom';
import { FcMoneyTransfer } from 'react-icons/fc';

const NGO = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
            alt="NGO work"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Partner with Us in Educational Change
          </motion.h1>
          <p className="text-xl text-gray-200 mb-8">
            Join our network of NGOs making education accessible to all
          </p>
        </div>
      </section>

      {/* Donation Progress Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DonationTracker totalDonations={750000} targetDonations={1000000} />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <Building2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Create Campaign</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Start a fundraising campaign for educational resources and support.
              </p>
              <Link to="/Create-Campaign" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center block">
                Start Campaign
              </Link>
            </motion.div>



            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <Users className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Student Requests</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                View and manage student requests for books and resources.
              </p>
              <Link to="/Student-Requests" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center block">
                View Requests
              </Link>
            </motion.div>



            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <LucideBuilding className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">On-going Campaigns</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Ongoing fundraising campaign for educational resources and support.
              </p>
              <Link to="/Ongoing-Campaigns" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center block">
                On-going Campaigns
              </Link>
            </motion.div>



            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <BookCheck className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Upcoming Camapigns</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              Upcoming fundraising campaign for educational resources and support.
              </p>
              <Link to="/upcoming-campaigns" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center block">
              Upcoming Camapigns
              </Link>
            </motion.div>




            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <FcMoneyTransfer className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Finacial Request</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Asks for financial support for educational resources and support Childrens.
              </p>
              <Link to="/financial-request" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center block">
              Finacial Support
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <BookOpen className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Resource Distribution</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Manage and track educational resource distribution.
              </p>
              <Link to="/resource-distribution" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center block">
              Manage Resources
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Impact</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Making a difference in education, one student at a time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">5,000+</h3>
              <p className="text-gray-600 dark:text-gray-300">Students Supported</p>
            </div>
            <div>
              <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">100+</h3>
              <p className="text-gray-600 dark:text-gray-300">Partner NGOs</p>
            </div>
            <div>
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">10,000+</h3>
              <p className="text-gray-600 dark:text-gray-300">Books Distributed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NGO;