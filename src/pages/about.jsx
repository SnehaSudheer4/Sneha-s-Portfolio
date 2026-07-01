import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Skills from "../components/portfolio/Skills";
import AboutSection from "../components/portfolio/AboutSection";

import INFO from "../data/user";
import SEO from "../data/seo";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about") || { description: "", keywords: [] };

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Skills | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<AnimatePresence>
				<motion.div
					className="page-content pt-20"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 50 }}
					transition={{ duration: 0.6 }}
				>
					<NavBar active="about" />
					<main className="flex-grow pt-8 pb-20">
						<AboutSection />
						<Skills />
					</main>
					<Footer />
				</motion.div>
			</AnimatePresence>
		</React.Fragment>
	);
};

export default About;
