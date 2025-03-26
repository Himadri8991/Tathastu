import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

interface TotalDonationsProps {
  amount: number;
}

const TotalDonations: React.FC<TotalDonationsProps> = ({ amount }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Total Donations Till Date</h3>
        <TrendingUp className="h-8 w-8 text-green-500" />
      </div>
      
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
          ₹{amount.toLocaleString()}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Total amount raised for education</p>
      </motion.div>

      <div className="mt-6 grid grid-cols-2 gap-4 text-center">
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3">
          <p className="text-sm text-gray-600 dark:text-gray-400">Active Donors</p>
          <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">1,234</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-3">
          <p className="text-sm text-gray-600 dark:text-gray-400">Students Helped</p>
          <p className="text-xl font-semibold text-green-600 dark:text-green-400">5,678</p>
        </div>
      </div>
    </div>
  );
};

export default TotalDonations;