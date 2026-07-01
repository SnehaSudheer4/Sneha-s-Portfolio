import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import ProjectsSection from "../components/portfolio/ProjectsSection";

import INFO from "../data/user";
import SEO from "../data/seo";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects") || { description: "", keywords: [] };

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
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
					<NavBar active="projects" />
					<main className="flex-grow pt-8">
						<ProjectsSection />
					</main>
					<Footer />
				</motion.div>
			</AnimatePresence>
		</React.Fragment>
	);
};

export default Projects;
