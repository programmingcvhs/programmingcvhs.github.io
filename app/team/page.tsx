'use client'

import { motion } from 'framer-motion'
import { Mail, Heart } from 'lucide-react'
import { Card } from '@/components/ui/Card'

// Team members data - simplified to only include essential info
const teamMembers = [
  {
    id: 1,
    name: "Divin Giddaluru",
    role: "Club President, Full-Stack Developer, Coding Instructor",
    grade: "10th Grade",
    social: {
      email: "s1889490@online.houstonisd.org"
    }
  },
  {
    id: 2,
    name: "Sathyan Gopal",
    role: "Vice President, Web Development & Applications Specialist",
    grade: "10th Grade",
    social: {
      email: "s1885796@online.houstonisd.org"
    }
  },
  {
    id: 3,
    name: "Pavan Gudivada",
    role: "Secretary, Social Media Manager",
    grade: "10th Grade",
    social: {
      email: "s2037896@online.houstonisd.org"
    }
  },
  {
    id: 4,
    name: "Krish Kalla",
    role: "Treasurer, Data Management",
    grade: "10th Grade",
    social: {
      email: "s1839398@online.houstonisd.org"
    }
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-6 shadow-xl bg-white border-0 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 h-full text-center">
                  {/* Profile Image */}
                  <motion.div 
                    className="flex justify-center mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </motion.div>
                  
                  {/* Member Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 font-semibold mb-1 text-sm">{member.role}</p>
                    <p className="text-gray-500 text-sm mb-4">{member.grade}</p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center">
                    <motion.a 
                      href={`mailto:${member.social.email}`}
                      className="p-3 bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Mail className="w-5 h-5 text-purple-600" />
                    </motion.a>
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
