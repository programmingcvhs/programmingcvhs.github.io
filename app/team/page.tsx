'use client'

import { motion } from 'framer-motion'
import { Mail, Award, Code, Heart } from 'lucide-react'
import { Card } from '@/components/ui/Card'

// Team members data - easy to map over
const teamMembers = [
  {
    id: 1,
    name: "Kavin Elangovan",
    role: "Club President, Front-End Developer, Graphic Designer",
    grade: "10th Grade",
    bio: "Curiosity and creativity drive the development of web applications that solve real problems and spark new ideas. Passion for mentorship and collaboration fosters growth while inspiring others.",
    skills: ["Python", "Node.js", "HTML/CSS/JS", "Photoshop", "API Interfaces", "Image Editing"],
    image: "/api/placeholder/400/400",
    achievements: ["2nd place in NASA Space Apps Texas Division Projects", "Finalist at TXSEF in Biomedical Engineering"],
    social: {
      email: "s1831922@online.houstonisd.org"
    },
    favoriteProject: "AI-powered disease detection algorithm"
  },
  {
    id: 2,
    name: "Divin Giddaluru",
    role: "Vice President, Full-Stack Developer, Coding Instructor",
    grade: "10th Grade",
    bio: "Driven by curiosity and creativity, I build web applications that solve problems and inspire ideas. I enjoy mentoring peers and growing through collaboration.",
    skills: ["Python", "Node.js", "HTML/CSS/JS", "Artificial Intelligence", "Machine Learning", "Computer Vision", "Cloud Integration", "Real-Time AI Applications", "API"],
    image: "/api/placeholder/400/400",
    achievements: ["2nd place in NASA Space Apps Texas Division Projects", "Finalist at SEFH in Physics & Astronomy", "Certified Associate in Python & JS Programming"],
    social: {
      email: "s1889490@online.houstonisd.org"
    },
    favoriteProject: "Quantum tunneling detection application"
  },
  {
    id: 3,
    name: "Sathyan Gopal",
    role: "Secretary, Web Development Specialist",
    grade: "10th Grade",
    bio: "Works with data. Builds robust server-side applications. Skilled in website creation and data management.",
    skills: ["Python", "Node.js", "HTML/CSS/JS", "Web Development", "Data Management"],
    image: "/api/placeholder/400/400",
    achievements: ["2nd place in NASA Space Apps Texas Division Projects", "Finalist at SEFH in Physics & Astronomy"],
    social: {
      email: "s1885796@online.houstonisd.org"
    },
    favoriteProject: "Integrated AI chatbot"
  },
  {
    id: 4,
    name: "Pavan Gudivada",
    role: "Treasurer, Social Media Manager",
    grade: "10th Grade",
    bio: "Integrates programming with Internet interfaces. Believes in mobile-first development.",
    skills: ["Social Media Management", "Mobile Interfaces", "Data Management"],
    image: "/api/placeholder/400/400",
    achievements: ["Published app with 500+ student downloads", "2nd Place in Texas-level hackathon"],
    social: {
      email: "s2037896@online.houstonisd.org"
    },
    favoriteProject: "Computer mobile access application"
  }
]

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}} />
        </div>
        
        <div className="relative container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <div className="p-4 bg-white/10 rounded-2xl glass-effect">
                <Heart className="w-16 h-16 text-purple-300" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl lg:text-2xl text-purple-100 leading-relaxed">
              The passionate developers, designers, and innovators who make PAWD a thriving community 
              where students can learn, grow, and create amazing projects together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each team member brings unique skills and perspectives, creating a diverse environment 
              where every student can find their path in technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-8 shadow-xl bg-white border-0 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 h-full">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Profile Image */}
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </motion.div>
                    
                    {/* Member Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-purple-600 font-semibold mb-1">{member.role}</p>
                          <p className="text-gray-500 text-sm">{member.grade}</p>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex gap-2">
                          <motion.a 
                            href={`mailto:${member.social.email}`}
                            className="p-2 bg-gray-100 hover:bg-purple-100 rounded-lg transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Mail className="w-4 h-4 text-gray-600 hover:text-purple-600" />
                          </motion.a>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                      
                      {/* Skills */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Code className="w-4 h-4 mr-2 text-purple-600" />
                          Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Award className="w-4 h-4 mr-2 text-purple-600" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {member.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-gray-600 text-sm flex items-start">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Favorite Project */}
                      <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-1">Favorite Project:</h4>
                        <p className="text-purple-700 font-medium">{member.favoriteProject}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-20 code-bg text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="grid grid-cols-8 gap-4 h-full">
              {Array.from({length: 64}).map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-purple-500 rounded"
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Join PAWD?
            </h2>
            <p className="text-xl mb-10 text-purple-200 max-w-2xl mx-auto">
              We're always looking for passionate students who want to learn, create, and make a difference in the technology community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/signup"
                className="bg-purple-600 hover:bg-purple-700 px-10 py-4 text-lg font-semibold rounded-xl neon-glow transition-all duration-300 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply to Join PAWD
              </motion.a>
              <motion.a
                href="/about"
                className="border border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
