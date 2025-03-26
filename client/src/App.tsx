import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getCurrentUser } from './lib/auth';
import { useAuthStore } from './lib/store';

// Pages
import Home from './pages/Home';
import Students from './pages/Students';
import NGO from './pages/NGO';
import Donate from './pages/Donate';
import Worker from './pages/Worker';
import BookRequest from './pages/BookRequest';
import ScholarshipExam from './pages/ScholarshipExam'; 
import StudentDashboard from './pages/StudentDashboard';
import CreateCampaign from './pages/CreateCampaign';
import StudentRequests from './pages/StudentRequests';
import ResourceDistribution from './pages/ResourceDistribution';
import OngoingCampaigns from './pages/OngoingCampaigns';
import UpcomingCampaigns from './pages/UpcomingCampaigns';
import FinancialRequest from './pages/FinancialRequest';
import FileUpload from './pages/FileUpload';
import JoinPage from './pages/Join';
import Contact from './pages/Contact';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  const { setAuth } = useAuthStore();

  // Check if user is already logged in on app load
  useEffect(() => {
    const checkAuthState = async () => {
      try {
        const { user, userType } = await getCurrentUser();
        if (user && userType) {
          setAuth(true, userType, user);
        }
      } catch (error) {
        console.error("Error checking auth state:", error);
      }
    };

    checkAuthState();
  }, [setAuth]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Add padding-top to account for fixed navbar */}
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/book-request" element={<BookRequest />} />
            <Route path="/scholarship-exam" element={<ScholarshipExam />} />
            <Route path="/ngo" element={<NGO />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/worker" element={<Worker />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/student-requests" element={<StudentRequests />} />
          <Route path="/resource-distribution" element={<ResourceDistribution />} />
          <Route path="/ongoing-campaigns" element={<OngoingCampaigns />} />
          <Route path="/upcoming-campaigns" element={<UpcomingCampaigns />} />
          <Route path="/financial-request" element={<FinancialRequest />} />
          <Route path="/file-upload" element={<FileUpload />} />
          <Route path="/join-page" element={<JoinPage />} />
          <Route path="/contact" element={<Contact />} />
          
          </Routes>
        </main>

        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;