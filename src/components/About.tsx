import React from 'react';
import { Clock, Users, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose PowerFit?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div 
            className="text-center p-6 bg-white rounded-lg shadow-lg transform-gpu"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            <Clock size={48} className="mx-auto mb-4 text-red-500" />
            <h3 className="text-xl font-semibold mb-2">24/7 Access</h3>
            <p>Train on your schedule with round-the-clock access to our facilities</p>
          </motion.div>
          <motion.div 
            className="text-center p-6 bg-white rounded-lg shadow-lg transform-gpu"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}>
            <Users size={48} className="mx-auto mb-4 text-red-500" />
            <h3 className="text-xl font-semibold mb-2">Expert Trainers</h3>
            <p>Get guidance from certified professional trainers</p>
          </motion.div>
          <motion.div 
            className="text-center p-6 bg-white rounded-lg shadow-lg transform-gpu"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}>
            <Award size={48} className="mx-auto mb-4 text-red-500" />
            <h3 className="text-xl font-semibold mb-2">Modern Equipment</h3>
            <p>State-of-the-art facilities with the latest fitness equipment</p>
          </motion.div>
          <motion.div 
            className="text-center p-6 bg-white rounded-lg shadow-lg transform-gpu"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}>
            <Heart size={48} className="mx-auto mb-4 text-red-500" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p>Join a supportive community of fitness enthusiasts</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;