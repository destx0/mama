"use client";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function FeaturesSection() {
	return (
		<div className="relative pt-16 pb-20 bg-green-100">
			<div className="relative z-10 max-w-5xl mx-auto px-8 pb-12">
				<h2 className="text-3xl md:text-4xl font-bold text-green-950 text-center mb-12">
					Our Rice Features
				</h2>
				<HoverEffect items={features} className="bg-green-100" />
			</div>
			<div
				className="absolute bottom-0 left-0 right-0 h-32 bg-green-950"
				style={{
					clipPath: "ellipse(70% 100% at 50% 100%)",
				}}
			></div>
		</div>
	);
}

const features = [
	{
		title: "Parboiled for Health",
		description:
			"All our rice varieties are parboiled, making them healthier and more nutritious. Parboiling helps retain essential vitamins and minerals.",
		link: "#",
	},
	{
		title: "Optimal Moisture Content",
		description:
			"Our rice maintains a moisture content above 12-13 percent, ensuring the perfect texture and cooking quality.",
		link: "#",
	},
	{
		title: "Long Shelf Life",
		description:
			"You can store our rice for up to 6 months at room temperature without any risk of spoilage, maintaining its quality and freshness.",
		link: "#",
	},
];
