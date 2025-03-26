import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FileUpload = () => {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
          setSelectedFile(event.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (!selectedFile) {
            alert('Please select a file to upload.');
            return;
          }
          alert(`Uploading file: ${selectedFile.name}`);
          // Implement upload logic here
        };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-black p-8">
      <div className="bg-gray-300 p-6 rounded-lg shadow-lg text-black">
            <motion.button
                onClick={() => navigate('/NGO')}
                className="mb-6 flex items-center text-blue-600 hover:text-blue-700"
                whileHover={{ x: -5 }}
            >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to NGO
            </motion.button>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-black w-96 text-center">
                <h2 className="text-2xl font-bold mb-4">Upload File</h2>
                <input
                    type="file"
                    onChange={handleFileUpload}
                    className="p-2 border rounded-lg w-full mb-4"
                />
                {selectedFile && <p className="mb-4">Selected file: {selectedFile.name}</p>}
                <div className="flex justify-end space-x-2">
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full hover:bg-blue-700"
                    onClick={handleUpload}
                >
                    Upload
                </button>
            </div>
        </div>
        </div>
    </div>
    );
};

export default FileUpload;
