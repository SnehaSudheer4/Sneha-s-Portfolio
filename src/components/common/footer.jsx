import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="mt-20 pt-10 pb-8 border-t border-diary-brown/10 relative overflow-hidden">
			
			{/* Decorative elements */}
			<div className="absolute top-4 right-10 flex gap-2 opacity-60 pointer-events-none mix-blend-multiply">
				{/* Passport Stamp 1 */}
				<svg width="60" height="60" viewBox="0 0 100 100" className="text-diary-sage -rotate-12">
					<circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3" />
					<circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
					<text x="50" y="45" fontSize="14" textAnchor="middle" fill="currentColor" className="font-body font-bold tracking-widest uppercase">Arrival</text>
					<text x="50" y="65" fontSize="16" textAnchor="middle" fill="currentColor" className="font-body font-bold">IND</text>
				</svg>
				
				{/* Passport Stamp 2 */}
				<svg width="70" height="70" viewBox="0 0 100 100" className="text-diary-pink rotate-12 -mt-4">
					<rect x="10" y="25" width="80" height="50" fill="none" stroke="currentColor" strokeWidth="3" rx="5" />
					<text x="50" y="45" fontSize="12" textAnchor="middle" fill="currentColor" className="font-body font-bold tracking-widest uppercase">Departed</text>
					<text x="50" y="65" fontSize="18" textAnchor="middle" fill="currentColor" className="font-handwriting">2026</text>
				</svg>
			</div>

			<div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
				
				<div className="washi-tape absolute -top-12 left-1/2 -translate-x-1/2 w-16 -rotate-3"></div>

				<h3 className="font-handwriting text-4xl text-diary-brown mb-4">Thanks for reading my diary!</h3>
				
				<p className="font-body text-diary-brown/60 text-sm tracking-widest uppercase mt-8">
					&copy; {currentYear} Sneha Sudheer V.
				</p>
				<p className="font-body text-diary-brown/40 text-xs mt-2">
					Handcrafted with love and React.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
