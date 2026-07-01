import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Project = (props) => {
	const { logo, title, description, link, index = 0 } = props;

	// Alternate rotations for a scattered scrapbook feel
	const rotations = ["rotate-1", "-rotate-2", "rotate-2", "-rotate-1"];
	const rotationClass = rotations[index % rotations.length];
	const washiClasses = ["washi-tape-pink", "washi-tape-green", "washi-tape"];
	const washiClass = washiClasses[index % washiClasses.length];

	return (
		<motion.div 
			className="w-full flex justify-center"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
		>
			<Link to={link} className="w-full block group perspective-1000">
				<div className={`polaroid w-full ${rotationClass} group-hover:rotate-0 group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-300 relative z-10`}>
					
					{/* Washi Tape */}
					<div className={`${washiClass} absolute -top-3 left-1/2 -translate-x-1/2 w-24 z-20`}></div>
					
					{/* Photo Area (using logo as placeholder) */}
					<div className="w-full aspect-[4/3] bg-diary-cream mb-4 flex items-center justify-center overflow-hidden border border-gray-200 relative group-hover:border-diary-brown/20 transition-colors">
						<img src={logo} alt="" className="h-16 opacity-60 mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
						<div className="absolute inset-0 bg-paper-texture opacity-30"></div>
						
						{/* Location Stamp */}
						<div className="absolute bottom-2 right-2 border border-diary-brown/40 rounded-full w-12 h-12 flex flex-col items-center justify-center rotate-12 opacity-50">
							<span className="text-[8px] uppercase tracking-widest text-diary-brown font-bold leading-none">POST</span>
							<span className="text-[10px] text-diary-brown font-bold leading-none">2026</span>
						</div>
					</div>

					<div className="px-2">
						<h3 className="font-handwriting text-3xl text-diary-brown mb-2 leading-tight group-hover:text-diary-pink transition-colors">
							{title}
						</h3>
						
						<p className="font-body text-diary-brown/80 text-sm leading-relaxed mb-6 line-clamp-3">
							{description}
						</p>

						<div className="flex justify-end items-center border-t border-diary-beige pt-3">
							<span className="font-handwriting text-xl text-diary-sage group-hover:text-diary-brown transition-colors flex items-center gap-1">
								View Details 
								<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
								</svg>
							</span>
						</div>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default Project;
