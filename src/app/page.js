import { HeroSection } from "@/components/HeroSection";
import { NavbarComponent } from "@/components/Navbar";

export default function Home() {
	return (
		<div className="min-h-screen font-sans">
			<NavbarComponent />
			<HeroSection />

			<main className="container mx-auto px-4 py-8">
				{/* Add more content sections here */}
			</main>

			<footer className="bg-green-800 py-4 text-center text-white">
				<p>&copy; 2023 HMG Enterprise. All rights reserved.</p>
			</footer>
		</div>
	);
}
