"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function ProductSection() {
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} />
	));

	return (
		<div className="w-full h-full -py-20 "> {/* Changed py-20 to py-10 */}
			<h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-green-800 font-sans mb-8">
				Our Premium Rice Varieties
			</h2>
			<Carousel items={cards} />
		</div>
	);
}

const ProductContent = ({ title, description, imageSrc }) => {
	return (
		<div className="bg-white dark:bg-green-900 p-8 md:p-14 rounded-3xl mb-4">
			<p className="text-green-800 dark:text-green-200 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
				<span className="font-bold text-green-900 dark:text-green-100">
					{title}
				</span>{" "}
				{description}
			</p>
			<Image
				src={imageSrc}
				alt={`${title} image`}
				width={500}
				height={500}
				className="w-full h-auto max-w-md mx-auto object-cover rounded-lg shadow-lg"
			/>
		</div>
	);
};

const data = [
	{
		category: "Premium Rice",
		title: "Long Grain Rice",
		src: "/images/long-grain.jpeg",
		content: (
			<ProductContent
				title="Long Grain Rice"
				description="Our long grain rice is perfect for a variety of dishes. Known for its fluffy texture and distinct grains that remain separate when cooked, it's ideal for pilafs, stir-fries, and as a side dish."
				imageSrc="/images/long-grain.jpeg"
			/>
		),
	},
	{
		category: "Premium Rice",
		title: "Duluxe Rice",
		src: "/images/deluxe-rice.png",
		content: (
			<ProductContent
				title="Duluxe Rice"
				description="Experience the luxury of our Duluxe rice. This premium variety offers a rich, aromatic flavor and a soft, slightly sticky texture that's perfect for special occasions and gourmet meals."
				imageSrc="/images/deluxe-rice.png"
			/>
		),
	},
	{
		category: "Premium Rice",
		title: "Baskati Rice",
		src: "/images/baskati-rice.jpeg",
		content: (
			<ProductContent
				title="Baskati Rice"
				description="Baskati rice is a fragrant, long-grain variety known for its distinctive aroma and delicate flavor. It's excellent for biryanis, pulaos, and other traditional Indian dishes."
				imageSrc="/images/baskati-rice.jpeg"
			/>
		),
	},
	{
		category: "Premium Rice",
		title: "Jeera Shat Rice",
		src: "/images/jeera.jpeg",
		content: (
			<ProductContent
				title="Jeera Shat Rice"
				description="Our Jeera Shat rice, also known as Cumin rice, is a specialty variety with small, fine grains resembling cumin seeds. It has a unique flavor profile and is perfect for making jeera rice and other aromatic dishes."
				imageSrc="/images/jeera.jpeg"
			/>
		),
	},
];
