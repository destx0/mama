"use client";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

export function HeroSection() {
	return (
		<div className="relative h-[calc(100vh-3.5rem)] overflow-hidden">
			<div className="absolute inset-0 z-0">
				<Image
					src="/images/rice.jpg"
					alt="Premium Rice Varieties"
					layout="fill"
					objectFit="cover"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-60"></div>
			</div>
			<div className="absolute inset-0 z-10">
				<div className="h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-8">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4">
						<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
							H.M. Ghosh
						</span>{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-b from-green-100 to-green-600">
							Enterprise
						</span>
					</h1>
					<h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 mb-2 text-center text-transparent bg-clip-text bg-gradient-to-b from-green-100 to-green-300">
						Your Trusted Rice Supplier
					</h2>
					<p className="text-base sm:text-lg md:text-xl mb-8 text-center max-w-2xl">
						Exclusive Long Grain Miniket Rice, Baskati Rice, Long Grain and
						Jeera kati Short Grain Rice available here.
					</p>
					<a
						href="tel:9635361584"
						className="mt-4 sm:mt-8 inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-b from-green-600 to-green-800 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-medium text-white shadow transition-colors hover:from-green-700 hover:to-green-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500 disabled:pointer-events-none disabled:opacity-50"
					>
						<FaPhoneAlt className="mr-2" /> Call Now: 9635361584
					</a>
				</div>
			</div>
			<div
				className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-white z-20"
				style={{
					clipPath: "ellipse(85% 100% at 50% 100%)",
				}}
			></div>
		</div>
	);
}
