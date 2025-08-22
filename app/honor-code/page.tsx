'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Users, Code, Brain, ScrollText, ExternalLink } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const sections = [
  {
    icon: Lock,
    title: "Academic Integrity",
    color: "from-red-500 to-pink-600",
    items: [
      {
        title: "No Cheating",
        description: "If you are caught cheating or plagiarizing in any school class, you will be temporarily suspended or removed from the club until further notice."
      },
      {
        title: "Academic Standing", 
        description: "If you are failing any class, you may be asked to pause your participation in the club to focus on your academics. We believe school comes first."
      },
      {
        title: "Honest Contributions",
        description: "Always submit original work for club projects. You may use open-source code or libraries, but give proper credit."
      }
    ]
  },
  {
    icon: Users,
    title: "Respect & Collaboration",
    color: "from-blue-500 to-cyan-600",
    items: [
      {
        title: "Be Respectful",
        description: "Treat all members, mentors, and guests with kindness and respect. Disrespectful or disruptive behavior will not be tolerated."
      },
      {
        title: "Be Inclusive",
        description: "Discrimination or harassment of any kind—based on race, gender, identity, skill level, etc.—is strictly prohibited."
      },
      {
        title: "Help Others",
        description: "Support your peers. If someone asks for help, lend a hand. We all grow faster together."
      }
    ]
  },
  {
    icon: Code,
    title: "Code of Conduct",
    color: "from-green-500 to-emerald-600",
    items: [
      {
        title: "No Sabotage or Misuse",
        description: "Do not tamper with other members' projects or club equipment/codebases."
      },
      {
        title: "Follow Instructions",
        description: "Follow meeting rules, project deadlines, and instructions from club leads or mentors."
      },
      {
        title: "Be Professional",
        description: "Act appropriately in meetings, group chats, and during collaborations. This club prepares you for real-world teamwork."
      }
    ]
  },
  {
    icon: Brain,
    title: "Growth Mindset",
    color: "from-purple-500 to-violet-600",
    items: [
      {
        title: "Ask Questions",
        description: "There are no dumb questions. We encourage curiosity and ongoing learning."
      },
      {
        title: "Keep Learning",
        description: "Even if you're new, commit to learning something every session."
      },
      {
        title: "Own Mistakes",
        description: "It's okay to make mistakes. Just be honest, take responsibility, and improve from there."
      }
    ]
  }
]

const violations = [
  "A warning from the club advisor or officer",
  "Temporary suspension from meetings or projects", 
  "Removal from the club (for repeated or serious offenses)"
]

export default function HonorCodePage() {
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
                <Shield className="w-16 h-16 text-purple-300" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              🛡️ PAWD Honor Code
            </h1>
            <p className="text-xl lg:text-2xl text-purple-100 leading-relaxed">
              The Programming & Web Development Club (PAWD) is a community built on respect, integrity, 
              and a shared passion for learning and building. By joining the club, you agree to uphold 
              the following standards:
            </p>
          </motion.div>
        </div>
      </section>

      {/* Honor Code Sections */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-8 shadow-xl bg-white border-0 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center text-white mr-4`}>
                      <section.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Violations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 shadow-xl bg-gradient-to-r from-red-50 to-pink-50 border-0">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center text-white mr-4">
                  <ScrollText className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">📜 Violations</h2>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg">
                Any violations of the Honor Code may result in:
              </p>
              
              <div className="space-y-3">
                {violations.map((violation, index) => (
                  <div key={index} className="flex items-center p-3 bg-white/70 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">{violation}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
                <p className="text-gray-800 font-medium">
                  Decisions will be made case-by-case by club leadership and the club advisor.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Commit?
            </h2>
            <p className="text-xl mb-10 text-purple-200 max-w-2xl mx-auto">
              By agreeing to our Honor Code, you're joining a community of integrity, 
              respect, and continuous learning. Let's build amazing things together!
            </p>
            <motion.a
              href="/signup"
              className="bg-purple-600 hover:bg-purple-700 px-10 py-4 text-lg font-semibold rounded-xl neon-glow transition-all duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply to Join PAWD
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
