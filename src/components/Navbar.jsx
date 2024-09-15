"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaInfoCircle, FaBox, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { GiRiceCooker } from "react-icons/gi";

export function NavbarComponent() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className="fixed top-0 left-0 right-0 bg-green-950 shadow-md z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-14">
					<Link href="/" className="flex items-center">
						<GiRiceCooker className="text-white text-3xl mr-2" />
						<span className="text-xl font-bold text-white">
							HMG Enterprise
						</span>
					</Link>
					{/* <div className="hidden md:flex space-x-4">
						<NavLink href="/" icon={<FaHome />}>
							Home
						</NavLink>
						<NavLink href="/about" icon={<FaInfoCircle />}>
							About Us
						</NavLink>
						<NavLink href="/products" icon={<FaBox />}>
							Products
						</NavLink>
						<NavLink href="/contact" icon={<FaPhoneAlt />}>
							Contact
						</NavLink>
					</div>
					<div className="md:hidden">
						<HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
					</div> */}
				</div>
			</div>
			<AnimatePresence>
				{isOpen && (
					<MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
				)}
			</AnimatePresence>
		</nav>
	);
}

function NavLink({ href, children, icon }) {
	return (
		<Link
			href={href}
			className="flex items-center text-white hover:text-green-200 transition-colors duration-200"
		>
			{icon && <span className="mr-1">{icon}</span>}
			{children}
		</Link>
	);
}

function HamburgerMenu({ isOpen, toggleMenu }) {
	return (
		<button onClick={toggleMenu} className="text-white focus:outline-none">
			<svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
				<motion.path
					variants={{
						closed: { d: "M4 6h16M4 12h16M4 18h16" },
						open: { d: "M6 18L18 6M6 6l12 12" }
					}}
					animate={isOpen ? "open" : "closed"}
					transition={{ duration: 0.3 }}
				/>
			</svg>
		</button>
	);
}

function MobileMenu({ isOpen, toggleMenu }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
			onClick={toggleMenu}
		>
			<motion.div
				initial={{ x: "100%" }}
				animate={{ x: 0 }}
				exit={{ x: "100%" }}
				transition={{ type: "spring", stiffness: 300, damping: 30 }}
				className="fixed right-0 top-0 bottom-0 w-64 bg-green-950 bg-opacity-90 shadow-lg z-50"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="px-4 py-6 space-y-4">
					<motion.button
						className="absolute top-4 right-4 text-white"
						onClick={toggleMenu}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<FaTimes size={24} />
					</motion.button>
					<MobileNavLink href="/" icon={<FaHome />} toggleMenu={toggleMenu}>Home</MobileNavLink>
					<MobileNavLink href="/about" icon={<FaInfoCircle />} toggleMenu={toggleMenu}>About Us</MobileNavLink>
					<MobileNavLink href="/products" icon={<FaBox />} toggleMenu={toggleMenu}>Products</MobileNavLink>
					<MobileNavLink href="/contact" icon={<FaPhoneAlt />} toggleMenu={toggleMenu}>Contact</MobileNavLink>
				</div>
			</motion.div>
		</motion.div>
	);
}

function MobileNavLink({ href, children, icon, toggleMenu }) {
	return (
		<motion.div
			initial={{ x: 20, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.3, delay: 0.1 }}
		>
			<Link
				href={href}
				className="flex items-center text-white hover:text-green-200 transition-colors duration-200 py-2"
				onClick={toggleMenu}
			>
				{icon && <span className="mr-2">{icon}</span>}
				{children}
			</Link>
		</motion.div>
	);
}
