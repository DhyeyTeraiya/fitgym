import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/10 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Dumbbell size={32} className="text-red-500 transition-colors group-hover:text-red-400" />
            </motion.div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              PowerFit Gym
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Trainers', 'Membership', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                className="relative text-white hover:text-red-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/login"
                className="bg-red-600 px-6 py-2.5 rounded-full text-white font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-500/30"
              >
                Sign In
              </Link>
            </motion.div>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {['Home', 'About', 'Trainers', 'Membership', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                  className="text-white hover:text-red-500 transition-colors text-lg font-medium"
                  whileHover={{ x: 10 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <Link
                to="/login"
                className="bg-red-600 px-6 py-2.5 rounded-full text-white font-semibold hover:bg-red-700 transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;