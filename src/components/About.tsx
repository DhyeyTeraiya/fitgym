import React from 'react';
import { Clock, Users, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-100">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-red-700"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Choose PowerFit?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div 
            className="group text-center p-8 bg-white/40 backdrop-blur-md rounded-2xl shadow-xl transform-gpu border border-white/30 hover:border-red-500/30 transition-all duration-500"
            whileHover={{ 
              scale: 1.02, 
              rotateY: 5,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            <motion.div
              className="relative w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-3 shadow-lg group-hover:shadow-red-500/30 transition-all duration-500"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <Clock className="w-full h-full text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-red-600 transition-colors">24/7 Access</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Train on your schedule with round-the-clock access to our state-of-the-art facilities</p>
          </motion.div>

          <motion.div 
            className="group text-center p-8 bg-white/40 backdrop-blur-md rounded-2xl shadow-xl transform-gpu border border-white/30 hover:border-red-500/30 transition-all duration-500"
            whileHover={{ 
              scale: 1.02, 
              rotateY: 5,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}>
            <motion.div
              className="relative w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-3 shadow-lg group-hover:shadow-red-500/30 transition-all duration-500"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <Users className="w-full h-full text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-red-600 transition-colors">Expert Trainers</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Get personalized guidance from our certified professional trainers</p>
          </motion.div>

          <motion.div 
            className="group text-center p-8 bg-white/40 backdrop-blur-md rounded-2xl shadow-xl transform-gpu border border-white/30 hover:border-red-500/30 transition-all duration-500"
            whileHover={{ 
              scale: 1.02, 
              rotateY: 5,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}>
            <motion.div
              className="relative w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-3 shadow-lg group-hover:shadow-red-500/30 transition-all duration-500"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <Award className="w-full h-full text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-red-600 transition-colors">Modern Equipment</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Train with state-of-the-art facilities and the latest fitness technology</p>
          </motion.div>

          <motion.div 
            className="group text-center p-8 bg-white/40 backdrop-blur-md rounded-2xl shadow-xl transform-gpu border border-white/30 hover:border-red-500/30 transition-all duration-500"
            whileHover={{ 
              scale: 1.02, 
              rotateY: 5,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}>
            <motion.div
              className="relative w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-3 shadow-lg group-hover:shadow-red-500/30 transition-all duration-500"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <Heart className="w-full h-full text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-red-600 transition-colors">Community</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Join a supportive and motivating community of fitness enthusiasts</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;