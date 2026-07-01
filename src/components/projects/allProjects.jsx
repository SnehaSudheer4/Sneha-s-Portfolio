import React from "react";
import { motion } from "framer-motion";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const AllProjects = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15
			}
		}
	};

	return (
		<motion.div 
			className="all-projects-grid"
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, margin: "-50px" }}
		>
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</motion.div>
	);
};

export default AllProjects;
