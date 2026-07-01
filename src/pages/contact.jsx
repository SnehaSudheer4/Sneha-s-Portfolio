import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import ContactForm from "../components/portfolio/ContactForm";

import INFO from "../data/user";
import SEO from "../data/seo";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact") || { description: "", keywords: [] };

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
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
					<NavBar active="contact" />
					<main className="flex-grow pt-8">
						<ContactForm />
					</main>
					<Footer />
				</motion.div>
			</AnimatePresence>
		</React.Fragment>
	);
};

export default Contact;
