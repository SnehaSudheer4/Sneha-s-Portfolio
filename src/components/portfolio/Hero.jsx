import React from 'react';
import { motion } from 'framer-motion';
import INFO from '../../data/user';

const Hero = () => {
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).toUpperCase();

  return (
    <section id="home" className="pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        
        <div className="torn-paper max-w-4xl mx-auto min-h-[60vh] flex flex-col md:flex-row items-center gap-10 p-8 md:p-16 relative z-10">
          
          {/* Paper clip decoration */}
          <svg className="absolute -top-6 left-12 w-10 h-24 text-gray-400 -rotate-12 z-20 drop-shadow-md" viewBox="0 0 44 116" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 110V32C22 23.1634 14.8366 16 6 16C-2.83656 16 -10 23.1634 -10 32V90C-10 101.046 -1.04569 110 10 110C21.0457 110 30 101.046 30 90V20C30 8.95431 21.0457 0 10 0C-1.04569 0 -10 8.95431 -10 20" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
          </svg>

          {/* Coffee stain decoration */}
          <div className="absolute -bottom-10 -right-10 opacity-30 w-48 h-48 pointer-events-none anim-float">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path fill="#8B5A2B" d="M48.5,8.1C64.9,5.7,82.4,14.6,89.1,29.9c6.7,15.3,0.5,35.6-11.7,47.4C65.2,89.1,44.9,94,28.8,84.5 C12.7,75,4.9,53.5,9.5,36.2C14.1,18.9,32.1,10.5,48.5,8.1z" opacity="0.3"/>
              <path fill="#8B5A2B" d="M51.2,14.3c13.3-1.9,27.5,5.3,32.9,17.7c5.4,12.4-0.1,27.4-10.1,36.3C64.1,77.3,47.9,81,35,73.5 C22,66,15.6,48.7,19.3,34.7C23.1,20.6,37.8,16.1,51.2,14.3z" opacity="0.4"/>
            </svg>
          </div>
          
          {/* Washi tape top right */}
          <div className="washi-tape-pink absolute -top-4 right-10 rotate-3 w-32"></div>

          {/* Left Column: Portrait & Stamp */}
          <motion.div 
            className="w-full md:w-1/3 flex flex-col items-center relative"
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 1, rotate: -2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="polaroid w-full max-w-[240px]">
              <div className="w-full aspect-square bg-diary-beige mb-4 flex items-center justify-center overflow-hidden border border-diary-cream/50 relative">
                <span className="font-handwriting text-5xl text-diary-brown/30">SS</span>
                <div className="absolute inset-0 bg-paper-texture opacity-50 mix-blend-multiply"></div>
              </div>
              <p className="font-handwriting text-xl text-center text-diary-brown anim-scribble inline-block w-full">Me! 📸</p>
            </div>
            
            {/* Date Stamp */}
            <motion.div 
              className="absolute -bottom-8 -right-4 border-2 border-diary-pink text-diary-pink font-bold p-1 rounded-sm rotate-12 anim-stamp"
            >
              <div className="border border-diary-pink px-2 py-1 uppercase text-sm tracking-widest">
                {today}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Text content */}
          <motion.div 
            className="w-full md:w-2/3 flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-handwriting text-6xl md:text-8xl text-diary-brown mb-4 leading-tight tracking-tight drop-shadow-sm">
              Hello, I'm Sneha.
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-diary-sage/20 px-3 py-1 text-diary-brown rounded-md font-handwriting text-2xl -rotate-1">Full Stack Developer</span>
              <span className="bg-diary-pink/20 px-3 py-1 text-diary-brown rounded-md font-handwriting text-2xl rotate-2">Designer</span>
              <span className="bg-diary-blue/20 px-3 py-1 text-diary-brown rounded-md font-handwriting text-2xl -rotate-2">Creative Thinker</span>
            </div>

            <p className="font-body text-diary-brown/80 text-lg leading-relaxed max-w-lg mb-8">
              {INFO.homepage.description}
            </p>

            <div className="flex gap-6 items-center">
              <a href="#projects" className="group flex items-center gap-2 font-handwriting text-3xl text-diary-pink hover:text-diary-brown transition-colors">
                <span>View my portfolio</span>
                <motion.span 
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
              
              {/* Little arrow doodle */}
              <div className="hidden md:block relative text-diary-sage anim-float w-16 h-16">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10,80 Q30,20 80,40 M70,25 L85,42 L65,55" />
                </svg>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
