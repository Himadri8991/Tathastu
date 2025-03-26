import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, FileText, Award, CheckCircle, Search, Download } from 'lucide-react';
import { Link } from 'react-router-dom'; // Added import for Link component

const Students = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');
  const [stateBoard, setStateBoard] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [undergraduateType, setUndergraduateType] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [otherSubject, setOtherSubject] = useState('');
  const [bookRequest, setBookRequest] = useState({
    name: '',
    email: '',
    board: '',
    class: '',
    subject: '',
    message: ''
  });
  

  const boards = ['CBSE', 'ICSE', 'State Board'];
  const classes = [
    '1st', '2nd', '3rd', '4th', '5th', '6th', 
    '7th', '8th', '9th', '10th', '11th', '12th', 
    'Undergraduate'
  ];
  const subjects = [
    'Mathematics', 'Science', 'English', 'Social Studies',
    'Physics', 'Chemistry', 'Biology', 'Computer Science',
    'Economics', 'Business Studies', 'Accountancy', 'Other'
  ];

  const handleBoardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBoard(e.target.value);
    setSelectedClass('');
    setSelectedSubject('');
    setStateBoard('');
    setUndergraduateType('');
  };

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClass(e.target.value);
    setSelectedSubject('');
    setUndergraduateType('');
  };

  const handleBookRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Book request submitted:', bookRequest);
    // Add API call here to submit the request
    alert('Book request submitted successfully!');
  };

  const handleBookRequestChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookRequest({
      ...bookRequest,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const undergraduateOptions = ['Computer Science', 'Engineering', 'Business', 'Arts', 'Other'];


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80"
            alt="Study environment"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Your Educational Journey Starts Here
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 mb-8"
          >
            Access study materials, take scholarship exams, and track your progress
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for study materials..."
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Study Material Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Study Materials</h2>

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

              {selectedClass && selectedBoard && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Subject
                  </label>
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Choose Subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                  {selectedSubject === 'Other' && (
                    <input
                      type="text"
                      value={otherSubject}
                      onChange={(e) => setOtherSubject(e.target.value)}
                      placeholder="Enter subject name"
                      className="mt-2 w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  )}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600"
                >
                  <div className="flex items-start mb-4">
                    <FileText className="h-6 w-6 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold dark:text-white">Chapter {item}</h3>
                      <p className="text-gray-600 dark:text-gray-400">Introduction to Topic {item}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                    <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                      View Online
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      

      {/* Features Grid */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <Book className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Request Books</h3>
              <p className="text-gray-600 dark:text-gray-400">Need specific textbooks? Submit a request and get connected with donors.</p>
              <Link to="/book-request" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full block text-center">
                Request Now
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Scholarship Exam</h3>
              <p className="text-gray-600 dark:text-gray-400">Take our scholarship exam and get a chance to win financial support.</p>
              <Link to="/scholarship-exam" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center block">
                Start Exam
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Track Progress</h3>
              <p className="text-gray-600 dark:text-gray-400">Monitor your learning progress and scholarship applications.</p>
              <Link to="/Student-Dashboard" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center block">
                View Dashboard
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Students;