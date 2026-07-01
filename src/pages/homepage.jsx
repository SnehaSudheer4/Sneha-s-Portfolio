import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import Hero from "../components/portfolio/Hero";
import AboutSection from "../components/portfolio/AboutSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import Skills from "../components/portfolio/Skills";
import Timeline from "../components/portfolio/Timeline";
import ContactForm from "../components/portfolio/ContactForm";

import INFO from "../data/user";
import SEO from "../data/seo";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "home") || { description: "", keywords: [] };

  return (
    <React.Fragment>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <AnimatePresence>
        <motion.div
          className="page-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <NavBar active="home" />

          <main className="flex-grow pt-8">
            <Hero />
            <AboutSection />
            <ProjectsSection />
            <Skills />
            <Timeline />
            <ContactForm />
          </main>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </React.Fragment>
  );
};

export default Homepage;
