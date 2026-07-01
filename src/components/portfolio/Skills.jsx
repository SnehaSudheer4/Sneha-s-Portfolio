import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: 'Programming',
    color: 'bg-diary-pink/20',
    borderColor: 'border-diary-pink',
    items: ['JavaScript', 'React.js', 'Node.js', 'HTML5', 'CSS3']
  },
  {
    name: 'Design',
    color: 'bg-diary-sage/20',
    borderColor: 'border-diary-sage',
    items: ['Figma', 'Responsive UI', 'CSS Animations', 'User Research']
  },
  {
    name: 'Backend',
    color: 'bg-diary-blue/20',
    borderColor: 'border-diary-blue',
    items: ['Express.js', 'MongoDB', 'Firebase', 'REST APIs']
  },
  {
    name: 'Tools',
    color: 'bg-diary-beige/50',
    borderColor: 'border-diary-brown/30',
    items: ['Git & GitHub', 'Agile / Scrum', 'VS Code', 'Postman']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      
      {/* Decorative doodle */}
      <svg className="absolute bottom-10 left-10 w-24 h-24 text-diary-brown/10 anim-float" viewBox="0 0 100 100" fill="currentColor">
        <path d="M20,50 Q40,20 60,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="anim-scribble"/>
        <circle cx="20" cy="50" r="3"/>
        <circle cx="60" cy="50" r="3"/>
        <circle cx="100" cy="50" r="3"/>
      </svg>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-handwriting text-5xl md:text-6xl text-diary-brown inline-block relative">
            My Tech Stack
            <span className="absolute -bottom-2 right-0 font-body text-sm text-diary-brown/50 tracking-widest uppercase rotate-2">(Technologies)</span>
          </h2>
          <p className="font-body text-diary-brown/70 mt-6 max-w-2xl mx-auto text-lg">
            A curated collection of tools and technologies I use to build scalable web applications.
          </p>
        </div>

        {/* Categories as pages in a stamp album */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="torn-paper"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <h3 className="font-handwriting text-4xl text-diary-brown mb-6 text-center border-b border-diary-brown/10 pb-4">
                {cat.name}
              </h3>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {cat.items.map((item, i) => (
                  <div key={i} className="group relative perspective-1000">
                    <div className="postage-stamp group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-300">
                      
                      <div className={`border ${cat.borderColor} ${cat.color} px-4 py-3 min-w-[80px] h-[80px] flex flex-col items-center justify-center text-center relative overflow-hidden`}>
                        <span className="font-body font-bold text-diary-brown text-sm relative z-10">
                          {item}
                        </span>
                        
                        {/* Cancellation mark animation on hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                          <svg className="w-16 h-16 text-diary-brown/60 group-hover:anim-stamp" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                            <path d="M20 50h60M50 20v60" />
                            <text x="50" y="45" fontSize="12" textAnchor="middle" fill="currentColor" stroke="none" className="font-body font-bold uppercase tracking-widest">OK</text>
                          </svg>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
