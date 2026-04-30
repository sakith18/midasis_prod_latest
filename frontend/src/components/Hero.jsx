import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const TRUST_NAMES = [
    "JP Morgan Chase",
    "Citi Group",
    "Bank of America",
    "Discover",
    "Zurich",
    "Fannie Mae",
];

const TechGlobe = () => (
    <div className="globe-wrapper relative mx-auto aspect-square w-full max-w-[480px]">
        {/* Soft halo behind globe */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-midasis-blue/10 to-midasis-tint blur-3xl" />

        {/* Globe SVG */}
        <div className="globe relative">
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="globe-fill" cx="40%" cy="40%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                        <stop offset="60%" stopColor="#EBF4FB" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#2478C5" stopOpacity="0.15" />
                    </radialGradient>
                </defs>

                {/* Globe sphere */}
                <circle cx="200" cy="200" r="160" fill="url(#globe-fill)" stroke="#2478C5" strokeWidth="1.5" opacity="0.9" />

                {/* Latitude lines */}
                {[40, 80, 120, 160, 200, 240, 280, 320].map((y, i) => (
                    <ellipse
                        key={`lat-${i}`}
                        cx="200"
                        cy={y}
                        rx={Math.sqrt(Math.max(0, 160 * 160 - (y - 200) * (y - 200)))}
                        ry="6"
                        fill="none"
                        stroke="#2478C5"
                        strokeWidth="1"
                        opacity="0.35"
                    />
                ))}

                {/* Longitude lines */}
                {[20, 50, 80, 110, 140, 170].map((rx, i) => (
                    <ellipse
                        key={`long-${i}`}
                        cx="200"
                        cy="200"
                        rx={rx}
                        ry="160"
                        fill="none"
                        stroke="#2478C5"
                        strokeWidth="1"
                        opacity="0.3"
                    />
                ))}

                {/* Connection dots — major cities */}
                {[
                    { cx: 130, cy: 160, color: "#E87722" },
                    { cx: 280, cy: 175, color: "#2478C5" },
                    { cx: 240, cy: 240, color: "#E87722" },
                    { cx: 165, cy: 230, color: "#2478C5" },
                    { cx: 310, cy: 130, color: "#E87722" },
                    { cx: 100, cy: 220, color: "#2478C5" },
                ].map((dot, i) => (
                    <g key={`dot-${i}`}>
                        <circle cx={dot.cx} cy={dot.cy} r="6" fill={dot.color} opacity="0.95" />
                        <circle cx={dot.cx} cy={dot.cy} r="11" fill={dot.color} opacity="0.25">
                            <animate attributeName="r" values="6;15;6" dur="2.4s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" repeatCount="indefinite" />
                        </circle>
                    </g>
                ))}

                {/* Connection lines */}
                <path d="M 130 160 Q 200 100 280 175" stroke="#E87722" strokeWidth="1.5" fill="none" strokeDasharray="4 4" opacity="0.6" />
                <path d="M 240 240 Q 200 290 100 220" stroke="#2478C5" strokeWidth="1.5" fill="none" strokeDasharray="4 4" opacity="0.55" />
                <path d="M 165 230 Q 250 200 310 130" stroke="#E87722" strokeWidth="1.5" fill="none" strokeDasharray="4 4" opacity="0.5" />
            </svg>
        </div>

        {/* Orbiting rings */}
        <div className="orbit" />
        <div className="orbit orbit-2" />
        <div className="orbit orbit-3" />
    </div>
);

export const Hero = () => {
    const goTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section
            id="home"
            data-testid="hero-section"
            className="relative overflow-hidden bg-white pt-36 lg:pt-40"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-24">
                {/* Left content */}
                <div className="fade-up">
                    <div className="inline-flex items-center gap-2 rounded-full bg-midasis-tint px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-midasis-blue">
                        <Sparkles size={14} className="text-midasis-orange" />
                        Global IT Staffing Partner
                    </div>

                    <h1 className="mt-6 font-heading text-4xl font-black leading-[1.05] tracking-tight text-midasis-navy sm:text-5xl lg:text-6xl">
                        Where Technology<br />
                        <span className="orange-underline">Meets Talent</span>
                    </h1>

                    <p className="mt-8 max-w-xl text-base leading-relaxed text-midasis-body sm:text-lg">
                        Midasis Technologies is a global IT staffing and consulting firm
                        connecting top-tier technology talent with leading organizations
                        across the United States and India. We bridge the gap between
                        cutting-edge technology and exceptional human potential.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Button
                            onClick={() => goTo("us-staffing")}
                            className="group h-12 rounded-full bg-midasis-blue px-7 font-semibold text-white shadow-md transition-all duration-300 hover:bg-midasis-navy hover:shadow-lg"
                            data-testid="hero-explore-staffing-button"
                        >
                            Explore IT Staffing
                            <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                        <Button
                            onClick={() => goTo("contact")}
                            variant="outline"
                            className="h-12 rounded-full border-2 border-midasis-blue bg-transparent px-7 font-semibold text-midasis-blue transition-all duration-300 hover:bg-midasis-blue hover:text-white"
                            data-testid="hero-contact-button"
                        >
                            Get In Touch
                        </Button>
                    </div>
                </div>

                {/* Right - Globe */}
                <div className="relative flex items-center justify-center">
                    <TechGlobe />
                </div>
            </div>

            {/* Wave separator */}
            <div className="wave-divider" />

            {/* Trust bar */}
            <div className="bg-midasis-tint">
                <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
                    <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-midasis-blue">
                        Trusted by industry leaders
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                        {TRUST_NAMES.map((name) => (
                            <div
                                key={name}
                                className="font-heading text-sm font-bold uppercase tracking-wide text-midasis-navy/70 transition-colors duration-300 hover:text-midasis-blue sm:text-base"
                                data-testid={`trust-logo-${name.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
