import React, { useState } from 'react';
import { motion } from 'framer-motion';
import INFO from '../../data/user';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate envelope sending animation before actual redirect
    setTimeout(() => {
      window.location.href = `mailto:${INFO.main.email}?subject=Letter from ${formData.name}&body=${formData.message}`;
      setIsSending(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Decorative Washi Tape background elements */}
      <div className="washi-tape-pink absolute top-10 left-10 rotate-12 w-32 opacity-60"></div>
      <div className="washi-tape-green absolute bottom-20 right-10 -rotate-12 w-48 opacity-60"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-handwriting text-5xl md:text-6xl text-diary-brown">Get In Touch</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left: Vintage Postal Info */}
          <motion.div 
            className="w-full md:w-1/3 flex flex-col items-center text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-32 h-32 mb-6 border-2 border-diary-brown border-dashed rounded-full flex items-center justify-center anim-scribble text-diary-brown/60">
              <span className="font-body tracking-[0.3em] uppercase text-xs rotate-[-15deg]">Via Air Mail</span>
            </div>
            
            <p className="font-handwriting text-2xl text-diary-brown mb-2">Let's work together!</p>
            <p className="font-body text-diary-brown/70 mb-6">Drop a line to say hello, or let's discuss a new project.</p>
            
            <div className="flex flex-col gap-2 font-handwriting text-xl text-diary-brown/90">
              <a href={`mailto:${INFO.main.email}`} className="hover:text-diary-pink transition-colors">✉️ {INFO.main.email}</a>
              <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-diary-blue transition-colors">🔗 LinkedIn</a>
              <a href={INFO.socials.github} target="_blank" rel="noreferrer" className="hover:text-diary-sage transition-colors">💻 GitHub</a>
            </div>
          </motion.div>

          {/* Right: Notepad Form */}
          <motion.div 
            className="w-full md:w-2/3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-diary-white p-8 md:p-10 shadow-scrapbook rounded-sm relative transform rotate-1">
              {/* Paper clip */}
              <svg className="absolute -top-5 right-10 w-8 h-20 text-gray-400 rotate-6 drop-shadow-sm" viewBox="0 0 44 116" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
                <path d="M22 110V32C22 23.1634 14.8366 16 6 16C-2.83656 16 -10 23.1634 -10 32V90C-10 101.046 -1.04569 110 10 110C21.0457 110 30 101.046 30 90V20C30 8.95431 21.0457 0 10 0C-1.04569 0 -10 8.95431 -10 20"/>
              </svg>

              {/* Lined paper effect */}
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, rgba(165, 184, 216, 0.2) 31px, rgba(165, 184, 216, 0.2) 32px)', backgroundPositionY: '8px' }}></div>
              <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-diary-pink/30 pointer-events-none"></div>

              <form onSubmit={handleSubmit} className="relative z-10 pl-8 pt-4">
                <div className="mb-6">
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Dear Sneha, my name is..." 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-transparent border-none outline-none font-handwriting text-2xl text-diary-brown placeholder-diary-brown/40 focus:ring-0 leading-8 h-[32px] mt-1"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="You can write me back at (email)..." 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-transparent border-none outline-none font-handwriting text-2xl text-diary-brown placeholder-diary-brown/40 focus:ring-0 leading-8 h-[32px] mt-1"
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="sr-only">Your Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows="4" 
                    placeholder="I wanted to talk to you about..." 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                    className="w-full bg-transparent border-none outline-none font-handwriting text-2xl text-diary-brown placeholder-diary-brown/40 focus:ring-0 leading-8 resize-none mt-1"
                    style={{ lineHeight: '32px' }}
                  ></textarea>
                </div>
                
                <div className="flex justify-end mt-4">
                  <button 
                    type="submit" 
                    disabled={isSending}
                    className="relative group px-6 py-2 bg-[#DECEB6] text-diary-brown font-handwriting text-2xl rounded-sm shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:cursor-wait"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSending ? 'Sending...' : 'Send Letter ✉️'}
                    </span>
                    
                    {/* Animated envelope slide overlay */}
                    {isSending && (
                      <motion.div 
                        className="absolute inset-0 bg-diary-sage z-0"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
