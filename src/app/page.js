import { HeroSection } from "@/components/HeroSection";
import { NavbarComponent } from "@/components/Navbar";
import { ProductSection } from "@/components/ProductSection";
import { FeaturesSection } from "@/components/FeaturesSection";

export default function Home() {
	return (
		<div className="min-h-screen font-sans">
			<NavbarComponent />
			<HeroSection />
			<ProductSection />
			<FeaturesSection />

			<footer className="bg-green-950 py-4 text-center text-white">
				<p>&copy; 2023 HMG Enterprise. All rights reserved.</p>
			</footer>
		</div>
	);
}
