import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = (props) => {
	const { active } = props;

	const navItems = [
		{ id: "projects", label: "Work", path: "/projects" },
		{ id: "Experience", label: "Resume", path: "/Experience" },
		{ id: "about", label: "About", path: "/about" },
		{ id: "contact", label: "Contact", path: "/contact" },
	];

	return (
		<React.Fragment>
			<div className="fixed top-6 left-0 right-0 z-50 p-4 pointer-events-none flex justify-center">
				
				{/* Glassmorphism pill navbar */}
				<motion.nav 
					className="pointer-events-auto w-full max-w-4xl flex items-center justify-between bg-diary-cream/60 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 px-8 py-3"
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
				>
					{/* Logo area */}
					<Link to="/" className="text-[#E86C20] hover:text-diary-brown transition-colors" title="Home">
						<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
						</svg>
					</Link>

					{/* Navigation links */}
					<ul className="flex space-x-6">
						{navItems.map((item) => (
							<li key={item.id}>
								<Link 
									to={item.path}
									className={`block font-body text-sm md:text-base font-semibold transition-colors duration-200 ${
										active === item.id 
										? "text-diary-brown" 
										: "text-diary-brown/60 hover:text-diary-brown"
									}`}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</motion.nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
