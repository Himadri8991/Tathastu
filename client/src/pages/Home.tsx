import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award, Heart, Rocket, Check, ArrowDown } from 'lucide-react';
import TotalDonations from '../components/TotalDonations';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-800 ">
        <div className="absolute inset-0">
          <img
            src="https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000009/1736406609763-BreakingFinancialBarrierstoEnsureEqualAccesstoEducation.png"
            alt="Students studying"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-6xl font-bold text-white mb-6"
          >
            Empower Education: Donate & Support Students Today
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-l md:text-3xl text-gray-200 mb-8"
          >
            Breaking financial barriers in education, one student at a time
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a href="/students" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              Scholarship Exam <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="/donate" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
              Donate Now <Heart className="ml-2 h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -bottom-28 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
      >
        <Link to="about" smooth={true} duration={150} className="cursor-pointer">
          <ArrowDown className="w-10 h-10" />
        </Link>
      </motion.div>
        </div>
      </section>

      {/* Total Donations Section */}
      <section className="py-16 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TotalDonations amount={50000000} />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
  {/* Gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/50 dark:from-gray-800/70 dark:to-gray-900/80"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          About <span className="text-blue-500 ">TATHASTU</span>
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          At <a className='text-red-600'>TATHASTU</a> , we believe that education should never be a privilege it should be a right. Our platform bridges the gap between students in need and donors willing to make a difference.
        </p>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          By offering scholarships, study materials, and direct financial aid, we empower students to break barriers and achieve their dreams. With our transparent, AI-powered system, we ensure every contribution reaches the right hands.
        </p>
        
        <div className="pt-4">
        <button
        onClick={() => navigate('/contact')}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
      >
        The Minds Behind Our Mission
      </button>
        </div>
      </motion.div>

      {/* Image with decorative element */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Decorative border */}
        <div className="absolute -inset-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 rounded-2xl transform rotate-3"></div>
        </div>
        
        {/* Image container */}
        <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-w-16 aspect-h-9 ">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Students learning together in a classroom"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 z-99"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What We Do</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            At TATHASTU, we are on a mission to eliminate financial barriers in education by connecting students, donors, NGOs, and educational institutions through a transparent, AI-powered platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <Check className="h-8 w-8 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 dark:text-white">For Students</h3>
                <p className="text-gray-600 dark:text-gray-300">Access scholarships, study materials, and financial aid to continue education without worries.                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <Check className="h-8 w-8 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 dark:text-white">For Donors</h3>
                <p className="text-gray-600 dark:text-gray-300">Contribute directly to students, track real-time impact, and ensure funds are utilized for the right purpose.                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <Check className="h-8 w-8 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 dark:text-white">For NGOs</h3>
                <p className="text-gray-600 dark:text-gray-300">Automate fund distribution, manage book donations, and support underprivileged students efficiently.                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <Check className="h-8 w-8 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 dark:text-white">For Institutions</h3>
                <p className="text-gray-600 dark:text-gray-300">Streamline scholarship processes and enhance accessibility for deserving students.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section 
  id="vision" 
  className="relative py-20 md:py-28 bg-gradient-to-br from-gray-100 to-blue-200 dark:from-gray-600 dark:to-blue-700 text-gray-900 dark:text-white overflow-hidden transition-colors duration-300"
>
  {/* Decorative elements - also theme-aware */}
  <div className="absolute top-0 left-0 w-full h-full opacity-10">
    <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-200 dark:bg-blue-400 mix-blend-screen"></div>
    <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-blue-300 dark:bg-blue-500 mix-blend-screen"></div>
  </div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center"
    >
      {/* Section header */}
      <div className="mb-8">
        <span className="inline-block px-3 py-1 text-sm font-semibold bg-white/20 dark:bg-white/20 rounded-full mb-4 text-blue-800 dark:text-blue-200">
          Our Aspiration
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Shaping the Future of <br className="hidden md:block" />
          <span className="text-blue-600 dark:text-blue-200">Inclusive Education</span>
        </h2>
      </div>

      {/* Vision statement */}
      <motion.div
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative">
          {/* Quote marks - theme-aware */}
          <svg 
            className="absolute -top-8 -left-4 w-12 h-12 text-blue-300/50 dark:text-blue-400/30" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          
          <p className="text-xl md:text-2xl leading-relaxed md:leading-loose font-medium px-6 md:px-12 text-gray-700 dark:text-gray-300">
          To build an inclusive and accessible education ecosystem where financial limitations never hinder a student's potential. We envision a world where every learner gets the support they deserve, fostering innovation, knowledge, and progress for a brighter tomorrow.
          </p>
          
          <svg 
            className="absolute -bottom-8 -right-4 w-12 h-12 text-blue-300/50 dark:text-blue-400/30 transform rotate-180" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </motion.div>

      {/* Call to action - theme-aware */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-12"
      >
<a href="/join-page"
  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-white dark:hover:bg-red-100 text-white dark:text-blue-600 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 cursor-pointer"
>
  Join Our Movement
</a>
      </motion.div>
    </motion.div>
  </div>
</section>
      {/* Goals Section */}
      <section id="goals" className="py-24 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgZmlsbD0icmdiYSgwLDAsMCwwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white"
              >
                <Rocket className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Empower Students</h3>
                <p>Provide scholarships, study materials, and career guidance.                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white"
              >
                <Users className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ensure Transparency</h3>
                <p>Enable real-time tracking of donations and fund utilization.                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white"
              >
                <Award className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Support NGOs & Institutions</h3>
                <p>Streamline resource distribution to maximize impact.                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 rounded-lg text-white"
              >
                <BookOpen className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expand Opportunities</h3>
                <p>Integrate mentorship, internships, and skill development to prepare students for the future.                </p>
              </motion.div>
            </div>
          </motion.div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Join us in reshaping education—one student at a time! 🎓💙
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;