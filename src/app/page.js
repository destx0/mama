import { HeroSection } from "@/components/HeroSection";
import { NavbarComponent } from "@/components/Navbar";
import { ProductSection } from "@/components/ProductSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen font-sans">
			<NavbarComponent />
			<HeroSection />
			<ProductSection />
			<FeaturesSection />
			<Footer />
		</div>
	);
}
