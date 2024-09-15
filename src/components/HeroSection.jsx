"use client";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FaPhoneAlt } from "react-icons/fa";

export function HeroSection() {
	const words = [
		{
			text: "H.M.",
			className:
				"text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400",
		},
		{ text: "\u00A0" },
		{
			text: "Ghosh",
			className:
				"text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400",
		},
		{ text: "\u00A0" },
		{
			text: "Enterprise",
			className:
				"text-transparent bg-clip-text bg-gradient-to-b from-green-100 to-green-600",
		},
	];

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
				<div className="h-full flex flex-col justify-center items-center text-white px-4">
					<div className="text-center">
						<TypewriterEffectSmooth
							words={words}
							cursorClassName="bg-green-300"
						/>
					</div>
					<h2 className="text-2xl font-semibold mt-4 mb-2 text-center text-transparent bg-clip-text bg-gradient-to-b from-green-100 to-green-300">
						Your Trusted Rice Supplier
					</h2>
					<p className="text-xl mb-8 text-center max-w-2xl">
						Exclusive Miniket Rice, Baskati Rice, Long Grain and
						Jeera Shat Rice available here.
					</p>
					<a
						href="tel:9635361584"
						className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-b from-green-600 to-green-800 px-6 py-3 text-lg font-medium text-white shadow transition-colors hover:from-green-700 hover:to-green-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500 disabled:pointer-events-none disabled:opacity-50"
					>
						<FaPhoneAlt className="mr-2" /> Call Now: 9635361584
					</a>
				</div>
			</div>
			<div
				className="absolute bottom-0 left-0 right-0 h-24 bg-white z-20"
				style={{
					clipPath: "ellipse(70% 100% at 50% 100%)",
				}}
			></div>
		</div>
	);
}
