'use client'

import { motion } from 'framer-motion'
import { BookOpen, Palette, Lightbulb, Trophy, Target, Clock, Users, Star } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const phases = [
  {
    phase: 1,
    title: "Learn the Basics",
    icon: BookOpen,
    description: "We'll start with introductory sessions on programming and basic concepts to introduce newcomers to the field.",
    languages: [
      { name: "Informational Sessions", desc: "A great starting point for beginners, introduces the objectives of PAWD", color: "bg-green-500" },
      { name: "Programming Basics", desc: "Explaining the concepts behind programming, what makes up software", color: "bg-yellow-500" },
      { name: "Coding Mentorship", desc: "Instructional lessons on coding languages, building programming ability", color: "bg-red-500" }
    ],
    duration: "4-5 lessons"
  },
  {
    phase: 2,
    title: "Project-Based Learning",
    icon: Target,
    description: "PAWD Members will vote on projects to make and work together to build them out.",
    skills: [
      "Real-World Programming Experience",
      "Collaborative Coding",
      "Multiple Programming Languages",
      "Web Development Skills",
      "Graphic Design and Visual Interfaces"
    ],
    duration: "20-30 workdays"
  },
  {
    phase: 3,
    title: "Peer Review & Improvement",
    icon: Lightbulb,
    description: "You will show your projects to professionals and regulars and improve upon your work.",
    technologies: [
      { name: "Simple Advice", desc: "Students and teachers will provide base-level advice for improvement", color: "bg-orange-500" },
      { name: "Professional Tips", desc: "Meet with professional developers to help instruct refinement", color: "bg-blue-500" },
      { name: "Reconstruction", desc: "Rebuild your projects using the critiques and improved features", color: "bg-purple-500" }
    ],
    duration: "10-20 workdays"
  },
  {
    phase: 4,
    title: "The Final Stretch",
    icon: Palette,
    description: "Finalize your products using help from experts.",
    projects: [
      "Collaborate: Work with other groups and students to improve upon each others' projects.",
      "Finalize: Use all the resources and help to complete your projects.",
      "Present: Display your work professionally to students, reviewers, and developers."
    ],
    duration: "5-10 workdays, 3-4 presentation days"
  }
]

const benefits = [
  {
    icon: Users,
    title: "Community Support",
    description: "Join a network of passionate developers and mentors ready to help you succeed."
  },
  {
    icon: Trophy,
    title: "Portfolio Building",
    description: "Create impressive projects that showcase your skills to colleges and employers."
  },
  {
    icon: Star,
    title: "Real Experience",
    description: "Work on actual projects that solve real problems and make a difference."
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Learn at your own pace with support available whenever you need it."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        </div>
        
        <div className="relative container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About PAWD
            </h1>
            <p className="text-xl lg:text-2xl text-purple-100 leading-relaxed">
              Our club takes you from beginner to confident developer through 
              structured learning, hands-on projects, and continuous mentorship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Our Learning Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A carefully crafted roadmap designed to take you from zero to hero in programming and web development.
            </p>
          </motion.div>

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="flex-1">
                    <Card className="p-8 shadow-xl bg-white border-0 hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-white mr-4">
                          <phase.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-sm text-purple-600 font-semibold">Phase {phase.phase}</div>
                          <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                        </div>
                        <div className="ml-auto text-sm text-gray-500 font-medium">
                          {phase.duration}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 text-lg">{phase.description}</p>
                      
                      {/* Languages */}
                      {phase.languages && (
                        <div className="space-y-3">
                          {phase.languages.map((lang, langIndex) => (
                            <div key={langIndex} className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <div className={`w-3 h-3 ${lang.color} rounded-full mr-3`}></div>
                              <div>
                                <div className="font-semibold text-gray-900">{lang.name}</div>
                                <div className="text-sm text-gray-600">{lang.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Skills */}
                      {phase.skills && (
                        <div className="grid md:grid-cols-2 gap-2">
                          {phase.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center p-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                              <span className="text-gray-700">{skill}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Technologies */}
                      {phase.technologies && (
                        <div className="space-y-3">
                          {phase.technologies.map((tech, techIndex) => (
                            <div key={techIndex} className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <div className={`w-3 h-3 ${tech.color} rounded-full mr-3`}></div>
                              <div>
                                <div className="font-semibold text-gray-900">{tech.name}</div>
                                <div className="text-sm text-gray-600">{tech.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Projects */}
                      {phase.projects && (
                        <div className="space-y-3">
                          {phase.projects.map((project, projectIndex) => (
                            <div key={projectIndex} className="flex items-start p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                              <span className="text-gray-700">{project}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </Card>
                  </div>
                  
                  {/* Phase Number */}
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-xl"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="text-3xl lg:text-4xl font-bold">{phase.phase}</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Why Choose PAWD?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide more than just coding lessons – we build a foundation for your future in technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 bg-white border-0 shadow-lg h-full">
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl text-white">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                  </motion.div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Showcase */}
      <section className="py-20 code-bg text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="grid grid-cols-10 gap-2 h-full">
              {Array.from({length: 100}).map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-purple-500 rounded"
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.05 }}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Your Success, Our Mission
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Every project you build, every skill you master, and every breakthrough you achieve 
              will be showcased on our dedicated website. We celebrate your growth and help you 
              build a portfolio that opens doors.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { label: "GitHub Integration", desc: "All projects version-controlled and showcased" },
                { label: "Portfolio Website", desc: "Professional display of your achievements" },
                { label: "Community Recognition", desc: "Celebrate milestones with fellow developers" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 glass-effect rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-lg font-bold mb-2">{item.label}</h3>
                  <p className="text-purple-200 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
