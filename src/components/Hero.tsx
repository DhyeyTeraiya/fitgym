import React, { useEffect, useState } from 'react';
import { ArrowRight, PlayCircle, Users, Award, Clock, Dumbbell } from 'lucide-react';
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

  const stats = [
    { icon: Users, value: '5000+', label: 'Active Members' },
    { icon: Award, value: '50+', label: 'Expert Trainers' },
    { icon: Clock, value: '24/7', label: 'Access' },
    { icon: Dumbbell, value: '100+', label: 'Equipment' },
  ];

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
            filter: 'brightness(0.8) contrast(1.1)',
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90 backdrop-blur-[2px]" />

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
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8 leading-tight relative group"
            whileHover={{ scale: 1.02 }}
          >
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-white via-red-400 to-gray-300 inline-block"
              style={{
                backgroundSize: '200% 100%',
                animation: 'gradient 8s linear infinite',
              }}
              whileHover={{ x: 10, rotateY: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Transform Your Body,
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-red-500 inline-block relative"
              whileHover={{ x: 15, rotateY: 15 }}
              style={{
                background: 'linear-gradient(90deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient 8s linear infinite'
              }}
            >
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
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
              className="group bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2 w-full sm:w-64 justify-center border border-white/30 shadow-lg hover:shadow-white/20"
              onClick={() => window.open('https://github.com/DhyeyTeraiya/fitgym', '_blank')}>
              Github Repo
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center justify-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="mb-2"
                  >
                    <stat.icon className="w-6 h-6 text-red-500" />
                  </motion.div>
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </div>
              </motion.div>
            ))}
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

<style jsx>{`
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`}</style>
