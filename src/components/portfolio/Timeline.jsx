import React, { useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "React Developer",
    company: "Datacube Global Software Solutions",
    period: "Feb 2024 – Present",
    dateline: "Kerala, India",
    description: "Developing scalable and responsive user interfaces using React.js. Integrating RESTful APIs, collaborating with backend developers, and contributing to daily code reviews in an agile environment."
  },
  {
    role: "Web Development Intern",
    company: "Softroniics",
    period: "2023",
    dateline: "Kerala, India",
    description: "Assisted in developing web applications using React.js and Node.js. Gained hands-on experience in front-end and back-end development and enhanced expertise in web technologies and frameworks."
  },
  {
    role: "Bachelor's in Computer Applications",
    company: "SNDPYSS College, Calicut University",
    period: "2020 – 2023",
    dateline: "Kerala, India",
    description: "Completed undergraduate degree in Computer Applications with a focus on software development, databases, and web technologies."
  }
];

const Envelope = ({ exp, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative w-full max-w-lg mx-auto mb-20 cursor-pointer perspective-1000"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Envelope Back */}
      <div className="absolute inset-0 bg-[#E8DDCF] shadow-md rounded-sm border border-[#D1BFA6] z-0 mt-8"></div>
      
      {/* Letter */}
      <motion.div 
        className="absolute left-4 right-4 bg-diary-white shadow-sm p-6 border border-diary-cream z-10 origin-bottom"
        initial={{ y: 20, zIndex: 10 }}
        animate={isOpen ? { y: -160, zIndex: 30, scale: 1.05 } : { y: 20, zIndex: 10, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
        style={{ minHeight: '220px' }}
      >
        <div className="border-b border-diary-beige pb-2 mb-3">
          <p className="font-handwriting text-diary-sage text-xl absolute top-4 right-4">{exp.period}</p>
          <h3 className="font-handwriting text-3xl text-diary-brown leading-tight pr-20">{exp.role}</h3>
          <p className="font-body text-diary-brown/60 text-sm font-bold tracking-wide uppercase mt-1">{exp.company}</p>
        </div>
        <p className="font-body text-diary-brown/80 text-sm leading-relaxed">
          {exp.description}
        </p>
        {/* Letter folded crease lines */}
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-diary-brown/5"></div>
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-diary-brown/5"></div>
      </motion.div>

      {/* Envelope Flap Top */}
      <motion.div 
        className="absolute top-8 left-0 w-full h-24 bg-[#DECEB6] border-b border-white/20 origin-top z-40"
        style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
        initial={{ rotateX: 0 }}
        animate={isOpen ? { rotateX: -180, zIndex: 0 } : { rotateX: 0, zIndex: 40 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Wax seal on flap */}
        {!isOpen && (
          <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-10 h-10 bg-red-800 rounded-full shadow-md flex items-center justify-center opacity-80 z-50">
            <span className="font-handwriting text-white/70 text-sm">S</span>
          </div>
        )}
      </motion.div>

      {/* Envelope Front Bottom */}
      <div 
        className="absolute inset-0 mt-8 bg-[#E3D4C0] border-t border-white/20 z-20 pointer-events-none"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 50% 40%, 0 0)' }}
      >
        {/* Postal stamp on front */}
        <div className="absolute bottom-4 right-4 transform rotate-12 opacity-60 mix-blend-multiply">
          <svg width="40" height="40" viewBox="0 0 100 100" className="text-diary-brown">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            <text x="50" y="55" fontSize="20" textAnchor="middle" fill="currentColor" className="font-body font-bold">{exp.period.split(' ')[0]}</text>
          </svg>
        </div>
      </div>
      
      {/* Base height for layout purposes */}
      <div className="h-48 w-full mt-8"></div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-diary-cream/50">
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="font-handwriting text-5xl md:text-6xl text-diary-brown relative inline-block">
            Letters of Experience
            <svg className="absolute -bottom-2 left-0 w-full h-4 text-diary-blue/30" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,10 Q25,20 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="anim-scribble"/>
            </svg>
          </h2>
          <p className="font-body text-diary-brown/70 mt-6 max-w-2xl mx-auto text-lg">
            Open the envelopes to read about my professional journey and academic background.
          </p>
        </div>

        {/* Vertical Timeline / Letter stack */}
        <div className="flex flex-col gap-12 relative pt-10">
          
          {/* Post office string connecting the envelopes */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 border-l-2 border-dashed border-diary-brown/20 z-0"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`w-full flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} relative z-10`}
            >
              <div className="w-full md:w-[85%] lg:w-[75%] px-4">
                <Envelope exp={exp} index={index} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Timeline;
