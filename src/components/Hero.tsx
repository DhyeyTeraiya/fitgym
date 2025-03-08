import React, { useEffect, useState } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="h-screen relative overflow-hidden">
      <motion.div
        style={{ y, scale: 1.1 }}
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

      <motion.div
        style={{ opacity }}
        className="relative h-full flex items-center justify-center text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl px-4 mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-6 sm:mb-8 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Transform Your Body,
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-red-500 inline-block">
              Transform Your Life
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-2xl mx-auto">
            Join PowerFit Gym and embark on a journey to become the strongest version of yourself
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#dc2626' }}
              whileTap={{ scale: 0.95 }}
              className="group bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2 w-full sm:w-64 justify-center shadow-lg hover:shadow-red-500/30">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2 w-full sm:w-64 justify-center border border-white/30 shadow-lg hover:shadow-white/20">
              Watch Video
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export default Hero;
