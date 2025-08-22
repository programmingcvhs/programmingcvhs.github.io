'use client'

import { motion } from 'framer-motion'
import { Code, Rocket, Users, Trophy, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'

const features = [
  {
    icon: Code,
    title: "Learn Programming Languages",
    description: "Master Python, JavaScript, Java and more with hands-on projects and expert guidance."
  },
  {
    icon: Rocket,
    title: "Build Real Projects",
    description: "Create web applications, games, and tools that solve real-world problems."
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Work with fellow students, share ideas, and learn from each other's experiences."
  },
  {
    icon: Trophy,
    title: "Showcase Your Work",
    description: "Display your projects on our website and build an impressive portfolio."
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white py-20 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}} />
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
                <Code className="w-16 h-16 text-purple-300" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Welcome to PAWD
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-4 text-purple-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Programming and Web Development Club
            </motion.p>
            
            <motion.p 
              className="text-lg lg:text-xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Transform your ideas into reality. Learn programming languages, build amazing projects, 
              and join a community of passionate developers ready to shape the future of technology.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="/signup">
                <Button className="bg-white text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Join PAWD Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg rounded-xl backdrop-blur-sm">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What You'll Achieve Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <Sparkles className="w-12 h-12 text-purple-600" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              What You'll Achieve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              By the end of your journey with PAWD, you'll have mastered programming languages 
              and created impressive projects that showcase your skills to the world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 bg-white border-0 shadow-lg">
                  <motion.div 
                    className="flex justify-center mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl text-white group-hover:shadow-lg transition-shadow">
                      <feature.icon className="w-8 h-8" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Skills You'll Master */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-900">Skills You'll Master</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { name: "Python", desc: "Data science, automation, and backend development" },
                { name: "Java", desc: "Object-oriented programming and enterprise applications" },
                { name: "HTML & CSS", desc: "Building and styling static websites" },
                { name: "JavaScript", desc: "Interactive web applications and modern frameworks" },
                { name: "C++", desc: "High-performance applications, games, and systems programming" },
                { name: "SQL", desc: "Managing and querying databases" }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="font-bold text-lg mb-2 text-purple-600">{skill.name}</div>
                  <p className="text-gray-600 text-sm">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Start Your Coding Journey?
            </h2>
            <p className="text-xl mb-10 text-purple-200 max-w-2xl mx-auto">
              Join PAWD today and transform from a beginner to a confident developer 
              with projects that matter.
            </p>
            <Link href="/signup">
              <Button className="bg-purple-600 hover:bg-purple-700 px-10 py-4 text-lg font-semibold rounded-xl neon-glow transition-all duration-300">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
