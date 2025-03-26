import React from 'react';
import { motion } from 'framer-motion';

interface DonationTrackerProps {
  totalDonations: number;
  targetDonations: number;
}

const DonationTracker: React.FC<DonationTrackerProps> = ({ totalDonations, targetDonations }) => {
  const progress = (totalDonations / targetDonations) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Donation Progress</h3>
      
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 dark:bg-blue-900/50 dark:text-blue-300">
              Progress
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
              {progress.toFixed(1)}%
            </span>
          </div>
        </div>
        
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 dark:bg-blue-900/30">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
          />
        </div>
        
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            ₹{totalDonations.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            of ₹{targetDonations.toLocaleString()} target
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationTracker;