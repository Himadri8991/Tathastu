import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, User, Calendar, Check, X, ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const StudentRequests = () => {
    const navigate = useNavigate();
    const [isExportModalOpen, setExportModalOpen] = useState(false);
    const [exportFormat, setExportFormat] = useState('csv');
  const requests = [
    {
      id: 1,
      student: 'John Doe',
      book: 'Physics Class 12',
      date: '2024-03-10',
      status: 'pending'
    },
    {
      id: 2,
      student: 'Jane Smith',
      book: 'Chemistry Class 11',
      date: '2024-03-09',
      status: 'approved'
    },
    // Add more requests as needed
  ];
  const handleExport = () => {
    alert(`Exporting data as ${exportFormat.toUpperCase()}`);
    setExportModalOpen(false);
  };

  return (
    <div className="min-h-screen  bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.button
                  onClick={() => navigate('/NGO')}
                  className="mb-6 flex items-center text-blue-600 hover:text-blue-700"
                  whileHover={{ x: -5 }}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to NGO
                </motion.button>
        <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">Student Requests</h1>

        <div className="bg-white rounded-lg text-black shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-4">
                <select className="p-2 border rounded-lg">
                  <option>All Requests</option>
                  <option>Pending</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </select>
                <input
                  type="text"
                  placeholder="Search requests..."
                  className="p-2 border rounded-lg w-64"
                />
              </div>
              <button onClick={() => setExportModalOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Export Data
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Book
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {requests.map((request) => (
                    <motion.tr
                      key={request.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      whileHover={{ backgroundColor: '#f9fafb' }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <User className="h-5 w-5 text-gray-400 mr-2" />
                          <div className="text-sm font-medium text-gray-900">
                            {request.student}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Book className="h-5 w-5 text-gray-400 mr-2" />
                          <div className="text-sm text-gray-900">{request.book}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                          <div className="text-sm text-gray-900">{request.date}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            request.status === 'approved'
                              ? 'bg-green-100 text-green-800'
                              : request.status === 'rejected'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-green-600 hover:text-green-900">
                            <Check className="h-5 w-5" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <X className="h-5 w-5" />
                          </button>
                          <button className="text-blue-600 hover:text-blue-900">
                            View Details
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Export Modal */}
      {isExportModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-green-700">
            <h2 className="text-xl font-bold mb-4">Export Data</h2>
            <label className="block mb-2">Select format:</label>
            <select className="p-2 border rounded-lg w-full mb-4" value={exportFormat} onChange={(e) => setExportFormat(e.target.value)}>
              <option value="csv">CSV</option>
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
            </select>

          

            <div className="flex justify-end space-x-2">
              <button className="px-4 py-2 bg-gray-400 text-white rounded-lg" onClick={() => setExportModalOpen(false)}>Cancel</button>
              <Link to="/File-Upload" className="px-4 py-2 bg-blue-600 text-white rounded-lg" onClick={handleExport}>Export</Link>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default StudentRequests;