'use client'

import { motion } from 'framer-motion'
import { Code, Heart, Mail, Github, Instagram, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
  company: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/team', label: 'Our Team' },
    { href: '/signup', label: 'Join PAWD' }
  ],
  resources: [
    { href: 'https://github.com', label: 'GitHub', external: true },
    { href: 'https://developer.mozilla.org', label: 'MDN Docs', external: true },
    { href: 'https://www.w3schools.com/', label: 'W3Schools', external: true },
    { href: 'https://codepen.io', label: 'CodePen', external: true }
  ],
  social: [
    { href: 'https://github.com/programmingcvhs', icon: Github, label: 'GitHub' },
    { href: 'https://instagram.com/programmingcvhs', icon: Instagram, label: 'Instagram' },
    { href: 'mailto:s1831922@online.houstonisd.org', icon: Mail, label: 'Email' }
  ]
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="grid grid-cols-12 gap-2 h-full">
            {Array.from({length: 144}).map((_, i) => (
              <motion.div
                key={i}
                className="bg-purple-500 rounded"
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.02 }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">PAWD</h3>
                    <p className="text-gray-400">Programming and Web Development Club</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                  Empowering students to become confident developers through hands-on learning, 
                  collaborative projects, and mentorship. Join our community and transform 
                  your ideas into reality.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {footerLinks.social.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-lg transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Navigation Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Resources */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h4 className="text-lg font-semibold mb-6">Resources</h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.label}
                        </span>
                        {link.external && (
                          <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <motion.div
              className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 text-gray-400">
                <span>© {new Date().getFullYear()} Programming & Web Development Club. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-500" />
                </motion.div>
                <span>by our amazing team.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
