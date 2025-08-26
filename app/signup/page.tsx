'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, User, GraduationCap, Mail, BookUser, MessageSquare, ExternalLink, Shield } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

interface FormData {
  name: string
  grade: string
  email: string
  q1: string
  q2: string
  q3: string
  honorCode: boolean
}

interface FormErrors {
  name?: string
  grade?: string
  email?: string
  q1?: string
  q2?: string
  q3?: string
  honorCode?: string
}

const gradeOptions = [
  "9th - Freshman",
  "10th - Sophomore", 
  "11th - Junior",
  "12th - Senior"
]

export default function SignupPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    grade: '',
    email: '',
    q1: '',
    q2: '',
    q3: '',
    honorCode: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<FormErrors>({})

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^s\d{7}@online\.houstonisd\.org$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.grade) {
      newErrors.grade = 'Please select your grade'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email must be in format s#######@online.houstonisd.org'
    }
    
    if (!formData.q1.trim()) {
      newErrors.q1 = 'Please answer this question'
    }
    
    if (!formData.q2.trim()) {
      newErrors.q2 = 'Please answer this question'
    }
    
    if (!formData.q3.trim()) {
      newErrors.q3 = 'Please answer this question'
    }
    
    if (!formData.honorCode) {
      newErrors.honorCode = 'You must agree to the Honor Code to join PAWD'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('process.env.SIGN_UP_API_KEY', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([formData])
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          grade: '',
          email: '',
          q1: '',
          q2: '',
          q3: '',
          honorCode: false
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
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
                <Send className="w-16 h-16 text-purple-300" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Join PAWD Today
            </h1>
            <p className="text-xl lg:text-2xl text-purple-100 leading-relaxed">
              Take the first step towards becoming a confident developer. Fill out the application 
              below and join our community of passionate programmers and web developers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl flex items-center"
            >
              <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
              <div>
                <h3 className="font-semibold text-green-800">Application Submitted Successfully!</h3>
                <p className="text-green-700">Thank you for applying to PAWD! We'll review your application and get back to you soon.</p>
              </div>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl flex items-center"
            >
              <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
              <div>
                <h3 className="font-semibold text-red-800">Submission Failed</h3>
                <p className="text-red-700">There was an error submitting your application. Please try again.</p>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 lg:p-12 shadow-2xl bg-white border-0">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  PAWD Application Form
                </h2>
                <p className="text-lg text-gray-600">
                  Tell us about yourself and your interest in programming!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    <BookUser className="w-5 h-5 inline mr-2" />
                    Personal Information
                  </h3>
                  
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                        errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </motion.div>

                  {/* Grade Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <GraduationCap className="w-4 h-4 inline mr-2" />
                      Grade Level *
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => handleInputChange('grade', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                        errors.grade ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select your grade level</option>
                      {gradeOptions.map((grade) => (
                        <option key={grade} value={grade}>
                          {grade}
                        </option>
                      ))}
                    </select>
                    {errors.grade && (
                      <p className="text-red-600 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.grade}
                      </p>
                    )}
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      School Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="s#######@online.houstonisd.org"
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </motion.div>
                </div>

                {/* Questions Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    <MessageSquare className="w-5 h-5 inline mr-2" />
                    Tell Us About Your Interest
                  </h3>
                  
                  {/* Question 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      What is your favorite thing about programming? *
                    </label>
                    <textarea
                      value={formData.q1}
                      onChange={(e) => handleInputChange('q1', e.target.value)}
                      placeholder="Share what excites you most about programming..."
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none ${
                        errors.q1 ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                    />
                    {errors.q1 && (
                      <p className="text-red-600 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.q1}
                      </p>
                    )}
                  </motion.div>

                  {/* Question 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      What would you like to learn about or improve in programming? *
                    </label>
                    <textarea
                      value={formData.q2}
                      onChange={(e) => handleInputChange('q2', e.target.value)}
                      placeholder="Tell us about your learning goals and areas of interest..."
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none ${
                        errors.q2 ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                    />
                    {errors.q2 && (
                      <p className="text-red-600 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.q2}
                      </p>
                    )}
                  </motion.div>

                  {/* Question 3 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      What projects would you be interested in doing over the course of the next year? (Specific projects or general fields) *
                    </label>
                    <textarea
                      value={formData.q3}
                      onChange={(e) => handleInputChange('q3', e.target.value)}
                      placeholder="Describe projects you'd like to work on or fields you're excited to explore..."
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none ${
                        errors.q3 ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                    />
                    {errors.q3 && (
                      <p className="text-red-600 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.q3}
                      </p>
                    )}
                  </motion.div>
                </div>

                {/* Honor Code Agreement */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    <Shield className="w-5 h-5 inline mr-2" />
                    Agreement
                  </h3>
                  
                  <div className={`p-4 border rounded-xl ${
                    errors.honorCode ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'
                  }`}>
                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.honorCode}
                        onChange={(e) => handleInputChange('honorCode', e.target.checked)}
                        className="mt-1 mr-3 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                      />
                      <span className="text-sm text-gray-700">
                        I agree to the{' '}
                        <Link 
                          href="/honor-code" 
                          target="_blank"
                          className="text-purple-600 hover:text-purple-800 font-semibold inline-flex items-center transition-colors duration-300 group"
                        >
                          PAWD Honor Code
                          <ExternalLink className="w-3 h-3 ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        {' '}and commit to upholding the standards of integrity, respect, and continuous learning within our community. *
                      </span>
                    </label>
                    
                    {errors.honorCode && (
                      <p className="text-red-600 text-sm mt-2 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.honorCode}
                      </p>
                    )}
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  className="pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="flex items-center justify-center"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting Application...
                      </motion.div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Submit Application
                      </div>
                    )}
                  </Button>
                </motion.div>

                <motion.div
                  className="text-center text-gray-500 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <p>
                    By submitting this form, you agree to join our community and participate 
                    in PAWD activities. We'll review your application and contact you soon!
                  </p>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 code-bg text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="grid grid-cols-6 gap-4 h-full">
              {Array.from({length: 36}).map((_, i) => (
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
              What's Next?
            </h2>
            <p className="text-xl mb-12 text-purple-200 max-w-2xl mx-auto">
              After you submit your application, here's what you can expect:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Introductory Session",
                  description: "Check your e-mail consistenly to be notified for our introductory meeting to PAWD Club."
                },
                {
                  step: "2", 
                  title: "Biweekly Meetings",
                  description: "We will meet every two weeks for lessons or project workdays."
                },
                {
                  step: "3",
                  title: "Your Journey Begins",
                  description: "Keep working on your projects and develop your programming experience!"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 glass-effect rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-purple-200 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
