import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Github, Globe, Linkedin, Mail} from 'lucide-react';
import { Global } from 'recharts';

const TeamPage = () => {
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const teamMembers = [
    {
      id: '1',
      name: 'Himadri Das',
      position: 'Team Lead',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQGFJMIXmaEBPQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714537389204?e=1748476800&v=beta&t=_z15yfGvzc0R61FclpypYAOse-2JCVRSPyOnx9n7FXg',
      bio: 'Founder of Pentaverse India, GDG on Campus Co-Organizer, Microsoft Learn Student Ambassador, and Google Cloud Innovator. Passionate about cloud computing, AI/ML, and tech communities, with experience mentoring 400+ learners. Dedicated to fostering collaboration, knowledge-sharing, and innovation in the cloud ecosystem. 🚀☁',
      skills: ['Cloud Computing', 'AI/ML', 'Web Development', 'Technical Mentorship & Community Leadership','Public Speaking & Content Writing','Problem-Solving & Debugging'],
      frontBg: 'from-blue-500 to-blue-800',
      backBg: 'from-blue-400 to-blue-700',
      social: {
        linkedin: 'https://www.linkedin.com/in/himadri-das-27487324a',
        Github: 'https://github.com/Himadri8991', 
        
        Website:''
      }
    },
    {
      id: '2',
      name: 'Priyanka Banerjee',
      position: 'Co-Lead',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQEajglOvtum1A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721402688795?e=1748476800&v=beta&t=mQYu1WW5qXtYsHeDYSJQxfieA7t8R8NkUt5tbcCC-UM',
      bio: 'Computer Science Engineering student, passionate Python Developer, and tech enthusiast. I love coding, exploring new technologies, and continuously challenging myself to grow. Excited to be part of the ever-evolving world of innovation! 🚀✨',
      skills: ['Programming', 'Web Development', 'Cloud Computing', 'Community Leadership & Event Organization', 'Technical Writing & Documentation', 'Public Speaking & Collaboration'],
      frontBg: 'from-purple-500 to-purple-800',
      backBg: 'from-purple-400 to-purple-700',
      social: {
        linkedin: 'http://www.linkedin.com/in/priyanka-banerjee-42239028a',
        Github: 'https://github.com/PriyankaBanerjee2004',
        
        Website:''
      }
    }
  ];

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block px-4 py-1 text-sm font-semibold bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            Meet The Team
          </motion.span>
          <motion.h1
            className="text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            The Minds Behind Our Mission
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Passionate innovators dedicated to transforming education through technology and community.
          </motion.p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-16">
          <AnimatePresence>
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative h-[500px] w-full perspective-1000"
              >
                {/* Flip Card */}
                <div
                  className={`relative w-full h-full transition-all duration-700 transform-style-preserve-3d ${
                    flippedCards[member.id] ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => toggleFlip(member.id)}
                >
                  {/* Front Side */}
                  <div className={`absolute w-full h-full backface-hidden rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br ${member.frontBg} flex flex-col items-center justify-center p-8 text-center`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative mb-8 group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="relative w-40 h-40 rounded-full object-cover border-4 border-white/80 z-10"
                      />
                    </motion.div>
                    <motion.h3 
                      className="text-3xl font-bold text-white mb-2"
                      whileHover={{ x: 5 }}
                    >
                      {member.name}
                    </motion.h3>
                    <p className="text-blue-100 text-lg mb-6">{member.position}</p>
                    <motion.div
                      className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      View Bio
                    </motion.div>
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a 
                          key={platform} 
                          href={url} 
                          className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {platform === 'linkedin' && <Linkedin className="w-5 h-5 text-white" />}
                          {platform === 'Github' && <Github className="w-5 h-5 text-white" />}
                            {platform === 'Website' && <Globe className="w-5 h-5 text-white" />}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br ${member.backBg} p-8 flex flex-col`}>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">About {member.name.split(' ')[0]}</h3>
                      <p className="text-blue-50 mb-6">{member.bio}</p>
                      <div className="mb-8">
                        <h4 className="text-white/80 font-medium mb-3">Key Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map(skill => (
                            <span key={skill} className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/contact');
                      }}
                      className="mt-auto px-6 py-3 bg-white/90 hover:bg-white text-blue-600 font-semibold rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail className="w-5 h-5" />
                      Contact {member.name.split(' ')[0]}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Ready to join our movement?</h3>
          <motion.button
            onClick={() => navigate('/join-page')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 relative overflow-hidden group"
            whileHover={{ y: -3 }}
          >
            <span className="relative z-10">Join Our Team</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </motion.div>
      </div>

      {/* Global Styles (add to your CSS file) */}
      <style>{`
  .perspective-1000 {
    perspective: 1000px;
  }
  .transform-style-preserve-3d {
    transform-style: preserve-3d;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
`}</style>
    </div>
  );
};

export default TeamPage;