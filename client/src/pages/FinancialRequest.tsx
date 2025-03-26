import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, DollarSign, Calendar, Users, ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const FinancialRequest: React.FC = () => {
      const navigate = useNavigate();
  const [formData, setFormData] = useState<{
    title: string;
    description: string;
    amount: string;
    purpose: string;
    timeline: string;
    beneficiaries: string;
    documents: File | null;
  }>({
    title: '',
    description: '',
    amount: '',
    purpose: '',
    timeline: '',
    beneficiaries: '',
    documents: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Financial request data:', formData);
    // Add API call here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8  dark:bg-gray-900  text-black">
      <div className="max-w-3xl mx-auto">
         <motion.button
                  onClick={() => navigate('/NGO')}
                  className="mb-6 flex items-center text-blue-600 hover:text-blue-700"
                  whileHover={{ x: -5 }}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to NGO
                </motion.button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <h1 className="text-3xl font-bold mb-8 text-pink-600">Financial Request Form</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Request Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <DollarSign className="inline-block h-4 w-4 mr-1" />
                  Amount Required (₹)
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Purpose
                </label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Purpose</option>
                  <option value="education">Education Materials</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="technology">Technology</option>
                  <option value="training">Training Programs</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline-block h-4 w-4 mr-1" />
                  Timeline
                </label>
                <input
                  type="date"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="inline-block h-4 w-4 mr-1" />
                  Number of Beneficiaries
                </label>
                <input
                  type="number"
                  name="beneficiaries"
                  value={formData.beneficiaries}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FileText className="inline-block h-4 w-4 mr-1" />
                Supporting Documents
              </label>
              <input
                type="file"
                name="documents"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    documents: e.target.files ? e.target.files[0] : null,
                  })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                accept=".pdf,.doc,.docx"
              />
              <p className="text-sm text-gray-500 mt-1">
                Upload relevant documents (PDF, DOC, DOCX)
              </p>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Request
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default FinancialRequest;
