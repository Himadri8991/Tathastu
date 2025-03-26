import React from 'react';
import { useState } from "react"
import { motion } from 'framer-motion';
import { Package, BookOpen, TrendingUp, Users, Download, Upload, ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { saveAs } from "file-saver";



const ResourceDistribution = () => {
    const navigate = useNavigate();
  const initialResources = [
    {
      id: 1,
      name: 'Physics Textbooks',
      quantity: 150,
      allocated: 120,
      remaining: 30,
      status: 'In Distribution'
    },
    {
      id: 2,
      name: 'Chemistry Lab Kits',
      quantity: 75,
      allocated: 50,
      remaining: 25,
      status: 'Ready for Distribution'
    },
    {
      id: 3,
      name: 'Mathematics Study Materials',
      quantity: 200,
      allocated: 180,
      remaining: 20,
      status: 'Low Stock'
    },
  ]

    const [resources, setResources] = useState(initialResources)
    const [showAddModal, setShowAddModal] = useState(false)
    const [newResource, setNewResource] = useState({
      name: "",
      quantity: 0,
      allocated: 0,
    })
  
    // Handle exporting resources as CSV
    const handleExportReport = () => {
      const csvData = [
        ["Resource Name", "Total Quantity", "Allocated", "Remaining", "Status"],
        ...resources.map((resource) => [
          resource.name,
          resource.quantity,
          resource.allocated,
          resource.quantity - resource.allocated,
          resource.quantity - resource.allocated < 30 ? "Low Stock" : "Ready for Distribution",
        ]),
      ]
  
      const csvContent = csvData.map((row) => row.join(",")).join("\n")
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
      saveAs(blob, "resource_report.csv");
    }
  
  
    // Handle adding a new resource
    const handleAddResource = () => {
      if (!newResource.name || newResource.quantity <= 0) {
        alert("Please fill in all required fields")
        return
      }
  
      const remaining = newResource.quantity - newResource.allocated
      const status = remaining < 30 ? "Low Stock" : "Ready for Distribution"
  
      const resource = {
        id: resources.length + 1,
        name: newResource.name,
        quantity: newResource.quantity,
        allocated: newResource.allocated,
        remaining: remaining,
        status: status,
      }
  
      setResources([...resources, resource])
      setNewResource({ name: "", quantity: 0, allocated: 0 })
      setShowAddModal(false)
    }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white text-black  p-8">
      <div className="max-w-7xl mx-auto">
      <motion.button
          onClick={() => navigate('/NGO')}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-700"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to NGO
        </motion.button>
        <h1 className="text-3xl font-bold mb-8">Resource Distribution Management</h1>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 text-black">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <Package className="h-8 w-8 text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold">Total Resources</h3>
            <p className="text-3xl font-bold text-blue-600">425</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <BookOpen className="h-8 w-8 text-green-600 mb-2" />
            <h3 className="text-lg font-semibold">Distributed</h3>
            <p className="text-3xl font-bold text-green-600">350</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <TrendingUp className="h-8 w-8 text-purple-600 mb-2" />
            <h3 className="text-lg font-semibold">Distribution Rate</h3>
            <p className="text-3xl font-bold text-purple-600">82%</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <Users className="h-8 w-8 text-orange-600 mb-2" />
            <h3 className="text-lg font-semibold">Beneficiaries</h3>
            <p className="text-3xl font-bold text-orange-600">250</p>
          </motion.div>
        </div>

        {/* Resource Management */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-black">Resource Inventory</h2>
              <div className="flex space-x-4">
              <button
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center"
          onClick={() => setShowAddModal(true)}
        >
          <Upload className="h-4 w-4 mr-2" />
          Add Resources
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
          onClick={handleExportReport}
        >
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </button>
              </div>
            </div>

            
            {/* Resource Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Resource Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Allocated
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Remaining
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
                  {initialResources.map((resource) => (
                    <motion.tr
                      key={resource.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      whileHover={{ backgroundColor: '#f9fafb' }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {resource.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{resource.quantity}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{resource.allocated}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{resource.remaining}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            resource.status === 'Low Stock'
                              ? 'bg-red-100 text-red-800'
                              : resource.status === 'In Distribution'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {resource.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-4">
                          Distribute
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          Edit
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

          {/* Add Resource Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Add New Resource</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Resource Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={newResource.name}
                  onChange={(e) => setNewResource({ ...newResource, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Total Quantity</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={newResource.quantity}
                  onChange={(e) => setNewResource({ ...newResource, quantity: Number.parseInt(e.target.value) || 0 })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Allocated</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={newResource.allocated}
                  onChange={(e) => {
                    const value = Number.parseInt(e.target.value) || 0
                    if (value <= newResource.quantity) {
                      setNewResource({ ...newResource, allocated: value })
                    } else {
                      alert("Allocated amount cannot exceed total quantity")
                    }
                  }}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                onClick={handleAddResource}
              >
                Add Resource
              </button>
            </div>
          </div>
        </div>
      )}


          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDistribution;