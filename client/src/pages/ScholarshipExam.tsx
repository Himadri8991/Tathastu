
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ScholarshipExam = () => {
  const navigate = useNavigate();
  const [examStarted, setExamStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  // Mock exam data
  const examQuestions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"]
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Jupiter", "Mars", "Venus", "Saturn"]
    }
  ];

  const upcomingExams = [
    {
      name: "National Merit Scholarship",
      startDate: "2024-03-01",
      endDate: "2024-03-15",
      description: "Merit-based scholarship for outstanding academic achievement"
    },
    {
      name: "STEM Excellence Scholarship",
      startDate: "2024-03-10",
      endDate: "2024-03-25",
      description: "For students pursuing careers in Science, Technology, Engineering, and Mathematics"
    }
  ];

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setAnswers({
      ...answers,
      [questionIndex]: answer
    });
  };

  const handleSubmitExam = () => {
    console.log('Exam submitted:', answers);
    alert('Exam submitted successfully!');
    setExamStarted(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.button
          onClick={() => navigate('/students')}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-700"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Students
        </motion.button>

        {!examStarted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 mb-8">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Scholarship Exam</h1>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Ready to test your knowledge? Start the exam to qualify for scholarships.
              </p>
              
              <button
                onClick={() => setExamStarted(true)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Exam Now
              </button>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Upcoming Scholarships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingExams.map((exam, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{exam.name}</h4>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <p>Start Date: {new Date(exam.startDate).toLocaleDateString()}</p>
                    <p>End Date: {new Date(exam.endDate).toLocaleDateString()}</p>
                    <p className="mt-4">{exam.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Question {currentQuestion + 1} of {examQuestions.length}
            </h2>

            <div className="mb-8">
              <p className="text-lg text-gray-900 dark:text-white mb-4">
                {examQuestions[currentQuestion].question}
              </p>
              <div className="space-y-3">
                {examQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(currentQuestion, option)}
                    className={`w-full p-4 text-left rounded-lg border ${
                      answers[currentQuestion] === option
                        ? 'bg-blue-100 border-blue-500 dark:bg-blue-900'
                        : 'bg-white border-gray-300 dark:bg-gray-700 dark:border-gray-600'
                    } hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
                className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
              >
                Previous
              </button>
              {currentQuestion < examQuestions.length - 1 ? (
                <button
                  onClick={() => setCurrentQuestion(prev => prev + 1)}
                  className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmitExam}
                  className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                >
                  Submit Exam
                </button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ScholarshipExam;
