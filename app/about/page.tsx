'use client'

import { motion } from 'framer-motion'
import { BookOpen, Palette, Lightbulb, Trophy, Target, Clock, Users, Star } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const phases = [
  {
    phase: 1,
    title: "Choose Your Path",
    icon: Target,
    description: "Select your preferred programming language to begin your journey",
    languages: [
      { name: "Python", desc: "Perfect for beginners, data science, and automation", color: "bg-green-500" },
      { name: "JavaScript", desc: "The language of the web, essential for modern development", color: "bg-yellow-500" },
      { name: "Java", desc: "Object-oriented programming for enterprise applications", color: "bg-red-500" }
    ],
    duration: "2-3 lessons"
  },
  {
    phase: 2,
    title: "Master the Fundamentals",
    icon: BookOpen,
    description: "Build a solid foundation with core programming concepts",
    skills: [
      "Variables and Data Types",
      "Control Structures (loops, conditionals)",
      "Functions and Methods",
      "Object-Oriented Programming",
      "Error Handling and Debugging"
    ],
    duration: "4-6 lessons"
  },
  {
    phase: 3,
    title: "Design & Web Basics",
    icon: Palette,
    description: "Learn the visual side of development with modern web technologies",
    technologies: [
      { name: "HTML", desc: "Structure your content", color: "bg-orange-500" },
      { name: "CSS", desc: "Style and layout", color: "bg-blue-500" },
      { name: "JavaScript", desc: "Add interactivity", color: "bg-purple-500" }
    ],
    duration: "3-4 lessons"
  },
  {
    phase: 4,
    title: "Project Development",
    icon: Lightbulb,
    description: "Apply your skills to real-world projects with guidance and support",
    projects: [
      "First Semester Project: Choose from our curated list or propose your own",
      "Final Project: A comprehensive application showcasing all your skills",
      "Portfolio Website: Display your work professionally"
    ],
    duration: "Ongoing"
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
              Our comprehensive program takes you from beginner to confident developer through 
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
              A carefully crafted curriculum designed to take you from zero to hero in programming and web development.
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
