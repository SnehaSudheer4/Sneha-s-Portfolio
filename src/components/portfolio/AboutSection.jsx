import React from 'react';
import { motion } from 'framer-motion';
import INFO from '../../data/user';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faHtml5, faCss3Alt, faNodeJs, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      
      {/* Physical Tech Stickers */}
      
      {/* React: Die-cut sticker */}
      <div className="absolute top-10 left-10 rotate-12 z-20">
        <div className="die-cut-sticker text-[#61DAFB] text-5xl">
          <FontAwesomeIcon icon={faReact} />
        </div>
      </div>
      
      {/* JS: Stamp sticker */}
      <div className="absolute top-20 right-16">
        <div className="stamp-sticker text-[#F7DF1E] bg-black text-6xl">
          <FontAwesomeIcon icon={faJs} />
        </div>
      </div>
      
      {/* HTML: Die-cut sticker */}
      <div className="absolute bottom-10 left-24 rotate-[-15deg]">
        <div className="die-cut-sticker text-[#E34F26] text-5xl">
          <FontAwesomeIcon icon={faHtml5} />
        </div>
      </div>
      
      {/* CSS: Stamp sticker */}
      <div className="absolute top-1/2 -right-4 rotate-[15deg]">
        <div className="stamp-sticker text-[#1572B6] text-5xl">
          <FontAwesomeIcon icon={faCss3Alt} />
        </div>
      </div>
      
      {/* Node: Die-cut sticker */}
      <div className="absolute bottom-32 right-1/4 rotate-[-5deg]">
        <div className="die-cut-sticker text-[#339933] text-5xl">
          <FontAwesomeIcon icon={faNodeJs} />
        </div>
      </div>
      
      {/* Github: Stamp sticker */}
      <div className="absolute top-[40%] left-[10%] rotate-[10deg]">
        <div className="stamp-sticker text-gray-800 text-5xl">
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </div>

      {/* Laptop: Die-cut sticker */}
      <div className="absolute top-[70%] left-[5%] rotate-[-8deg]">
        <div className="die-cut-sticker text-diary-brown text-4xl">
          <FontAwesomeIcon icon={faLaptopCode} />
        </div>
      </div>

      {/* Decorative stars */}
      <svg className="absolute top-10 left-1/3 w-8 h-8 text-diary-pink anim-float" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z"/>
      </svg>
      <svg className="absolute bottom-20 left-1/2 w-6 h-6 text-diary-sage anim-float" style={{ animationDelay: '1.2s' }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z"/>
      </svg>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 mt-12">
        <motion.div 
          className="bg-diary-white rounded-lg p-8 md:p-14 shadow-scrapbook relative border-2 border-diary-beige"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Colorful Washi tapes */}
          <div className="washi-tape-green absolute -top-4 left-1/3 -translate-x-1/2 -rotate-2 w-32 shadow-sm"></div>
          <div className="washi-tape-pink absolute top-10 -right-8 rotate-[85deg] w-40 shadow-sm"></div>
          <div className="washi-tape-blue absolute -bottom-6 right-1/3 rotate-[-4deg] w-48 shadow-sm"></div>

          <div className="flex flex-col md:flex-row gap-12 items-start mt-6">
            
            {/* Left side: Sticky Note */}
            <div className="w-full md:w-1/3 relative z-10">
              <motion.div 
                className="sticky-note"
                initial={{ rotate: -15, scale: 0.8 }}
                whileInView={{ rotate: -2, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.5, delay: 0.3 }}
              >
                <div className="text-center font-bold text-diary-brown mb-2 border-b-2 border-diary-brown/20 pb-2">
                  My Focus
                </div>
                <ul className="text-diary-brown/80 space-y-2 mt-3 text-lg leading-snug">
                  <li>✨ Building seamless UI</li>
                  <li>✨ Bridging design & code</li>
                  <li>✨ Data-driven decisions</li>
                  <li>✨ User-centric products</li>
                </ul>
                
                {/* Heart doodle */}
                <svg className="absolute bottom-2 right-2 w-8 h-8 text-diary-pink/60 anim-scribble" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </motion.div>
            </div>

            {/* Right side: Journal Entry */}
            <div className="w-full md:w-2/3">
              <h2 className="font-handwriting text-5xl md:text-6xl text-diary-brown mb-6">
                <span className="relative">
                  About Me
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-diary-sage" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,15 Q25,0 50,15 T100,10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="anim-scribble"/>
                  </svg>
                </span>
              </h2>
              
              <div className="space-y-6 font-body text-diary-brown/90 text-lg leading-relaxed">
                <p>
                  {INFO.homepage.description}
                </p>
                <p>
                  As I transition into <span className="bg-diary-pink/20 px-1 rounded-sm font-handwriting text-2xl font-bold">Product Management</span>, I leverage my technical foundation to make data-driven decisions and communicate effectively across engineering and design teams — always keeping the user at the center of every decision.
                </p>
                <p className="font-handwriting text-2xl text-right mt-8 opacity-80">
                  - Sneha
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
