"use client";
import React from "react";
import Link from "next/link";
import { FaHome, FaInfoCircle, FaBox, FaPhoneAlt } from "react-icons/fa";
import { GiRiceCooker } from "react-icons/gi";

export function NavbarComponent() {
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
					<div className="hidden md:flex space-x-4">
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
						{/* Add a mobile menu button here if needed */}
					</div>
				</div>
			</div>
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
