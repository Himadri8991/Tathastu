import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, TrendingUp, Clock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const StudentDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 p-8 text-black">
      <div className="max-w-7xl mx-auto">
      <motion.button
          onClick={() => navigate('/students')}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-700"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Students
        </motion.button>
        <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>
        
        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold">Books Accessed</h3>
            <p className="text-3xl font-bold text-blue-600">24</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <Award className="h-8 w-8 text-green-600 mb-2" />
            <h3 className="text-lg font-semibold">Exams Completed</h3>
            <p className="text-3xl font-bold text-green-600">8</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <TrendingUp className="h-8 w-8 text-purple-600 mb-2" />
            <h3 className="text-lg font-semibold">Average Score</h3>
            <p className="text-3xl font-bold text-purple-600">85%</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <Clock className="h-8 w-8 text-orange-600 mb-2" />
            <h3 className="text-lg font-semibold">Study Hours</h3>
            <p className="text-3xl font-bold text-orange-600">45</p>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { activity: 'Completed Physics Quiz', score: '90%', date: '2024-03-10' },
              { activity: 'Downloaded Chemistry Notes', score: '-', date: '2024-03-09' },
              { activity: 'Submitted Math Assignment', score: '85%', date: '2024-03-08' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">{item.activity}</p>
                  <p className="text-sm text-gray-600">{item.date}</p>
                </div>
                <div className="text-blue-600 font-semibold">{item.score}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {[
              { event: 'Biology Final Exam', date: '2024-03-15', time: '10:00 AM' },
              { event: 'Chemistry Workshop', date: '2024-03-18', time: '2:00 PM' },
              { event: 'Math Competition', date: '2024-03-20', time: '9:00 AM' },
            ].map((event, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">{event.event}</p>
                  <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;