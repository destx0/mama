import React from "react";
import CopyrightYear from "./CopyrightYear";

const Footer = () => {
	return (
		<footer className="bg-green-950 text-white py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<h3 className="text-xl font-bold mb-2">Contact Info</h3>
						<p>Phone: 9635361584</p>
						<p>Email: harimohanghosh07@gmail.com</p>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-2">Address</h3>
						<p>Raghabpur, Jessure, Habra, North 24 PGS,</p>
						<p>W.B. pin - 743233</p>
					</div>
				</div>
				<div className="mt-8 text-center">
					<p>
						&copy; <CopyrightYear /> HMG Enterprise. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
