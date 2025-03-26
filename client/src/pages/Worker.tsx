import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Users, CheckCircle, Clock, DollarSign, BookOpen, HeartHandshake } from 'lucide-react';

const Worker = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Board and Class selection states
  const [selectedBoard, setSelectedBoard] = useState('');
  const [stateBoard, setStateBoard] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [undergraduateType, setUndergraduateType] = useState('');

  // Options for dropdowns
  const boards = ['CBSE', 'ICSE', 'State Board', 'International'];
  const classes = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', 'Undergraduate'];
  const undergraduateOptions = ['B.Tech', 'B.Sc', 'BBA', 'BCA', 'Other'];

  // Handlers
  const handleBoardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBoard(e.target.value);
    setSelectedClass('');
    setUndergraduateType('');
  };

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClass(e.target.value);
    setUndergraduateType('');
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      console.log('Selected files:', files);
    }
  };

  const renderRequestCard = (type: string, icon: React.ReactNode, amount: string, status: string) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {icon}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-2">{type}</h3>
        </div>
        <span className={`px-3 py-1 text-sm rounded-full ${
          status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
          status === 'Approved' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
          'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
        }`}>
          {status}
        </span>
      </div>
      <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{amount}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">NGO: Education First</span>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
            alt="Worker dashboard"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Worker Dashboard
          </motion.h1>
          <p className="text-xl text-gray-200 mb-8">
            Manage content, approve requests, and track progress
          </p>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <FileText className="h-8 w-8 text-blue-600 mb-2" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Content</h4>
              <p className="text-3xl font-bold text-blue-600">1,234</p>
              <p className="text-gray-600 dark:text-gray-300">Total uploads</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <Users className="h-8 w-8 text-green-600 mb-2" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">NGOs</h4>
              <p className="text-3xl font-bold text-green-600">56</p>
              <p className="text-gray-600 dark:text-gray-300">Active partners</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <CheckCircle className="h-8 w-8 text-purple-600 mb-2" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Approved</h4>
              <p className="text-3xl font-bold text-purple-600">892</p>
              <p className="text-gray-600 dark:text-gray-300">Requests completed</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <Clock className="h-8 w-8 text-orange-600 mb-2" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Pending</h4>
              <p className="text-3xl font-bold text-orange-600">45</p>
              <p className="text-gray-600 dark:text-gray-300">Awaiting review</p>
            </motion.div>
          </div>

          {/* Main Content Area */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab('upload')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'upload'
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  Upload Content
                </button>
                <button
                  onClick={() => setActiveTab('requests')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'requests'
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  Manage Requests
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'upload' ? (
                <div className="space-y-6">
                  {/* Selection Options */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Select Board
                      </label>
                      <select
                        value={selectedBoard}
                        onChange={handleBoardChange}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      >
                        <option value="">Choose Board</option>
                        {boards.map((board) => (
                          <option key={board} value={board}>{board}</option>
                        ))}
                      </select>
                      {selectedBoard === 'State Board' && (
                        <input
                          type="text"
                          value={stateBoard}
                          onChange={(e) => setStateBoard(e.target.value)}
                          placeholder="Enter state board name"
                          className="mt-2 w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        />
                      )}
                    </div>

                    {selectedBoard && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Select Class
                        </label>
                        <select
                          value={selectedClass}
                          onChange={handleClassChange}
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                          <option value="">Choose Class</option>
                          {classes.map((cls) => (
                            <option key={cls} value={cls}>{cls}</option>
                          ))}
                        </select>
                        {selectedClass === 'Undergraduate' && (
                          <select
                            value={undergraduateType}
                            onChange={(e) => setUndergraduateType(e.target.value)}
                            className="mt-2 w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            <option value="">Select Course</option>
                            {undergraduateOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        )}
                        {selectedClass === 'Undergraduate' && undergraduateType === 'Other' && (
                          <input
                            type="text"
                            placeholder="Enter course name"
                            className="mt-2 w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            onChange={(e) => setUndergraduateType(e.target.value)}
                          />
                        )}
                      </div>
                    )}
                  </div>

                  {/* File Upload Section */}
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Drag and drop files here, or click to select files
                    </p>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      multiple
                    />
                    <button
                      onClick={handleFileSelect}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Select Files
                    </button>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Recent Uploads
                    </h4>
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                        >
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 text-blue-600 mr-3" />
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">
                                Chapter {item} Notes.pdf
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                Uploaded 2 hours ago
                              </p>
                            </div>
                          </div>
                          <span className="px-3 py-1 text-sm text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 rounded-full">
                            Published
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      NGO Requests
                    </h4>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Approve All
                      </button>
                      <button className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                        Review Later
                      </button>
                    </div>
                  </div>

                  {/* NGO Request Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {renderRequestCard(
                      "Financial Support",
                      <DollarSign className="h-6 w-6 text-green-600" />,
                      "₹50,000",
                      "Pending"
                    )}
                    {renderRequestCard(
                      "Book Donation",
                      <BookOpen className="h-6 w-6 text-blue-600" />,
                      "200 Books",
                      "Approved"
                    )}
                    {renderRequestCard(
                      "Volunteer Support",
                      <HeartHandshake className="h-6 w-6 text-purple-600" />,
                      "5 Volunteers",
                      "Pending"
                    )}
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Recent Requests
                    </h4>
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                        >
                          <div className="flex items-center">
                            <Users className="h-5 w-5 text-blue-600 mr-3" />
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">
                                Book Request #{item}
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                From: NGO Partner {item}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button className="px-3 py-1 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                              Approve
                            </button>
                            <button className="px-3 py-1 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                              Reject
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Worker;