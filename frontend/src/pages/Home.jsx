import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import USStaffing from "@/components/USStaffing";
import IndiaStaffing from "@/components/IndiaStaffing";
import CyberSecurity from "@/components/CyberSecurity";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Vision from "@/components/Vision";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-white" data-testid="home-page">
            <Navbar />
            <Hero />
            <About />
            <USStaffing />
            <IndiaStaffing />
            <CyberSecurity />
            <WhyChoose />
            <Services />
            <Vision />
            <Clients />
            <Contact />
            <Footer />
        </main>
    );
}
