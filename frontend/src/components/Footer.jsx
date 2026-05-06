import Logo from "@/components/Logo";
import { Mail, MapPin } from "lucide-react";

const QUICK_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "US IT Staffing", href: "#us-staffing" },
    { label: "India IT Staffing", href: "#india-staffing" },
    { label: "Cybersecurity", href: "#cybersecurity" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
];

const STAFFING_LINKS = [
    "Contract Staffing",
    "Contract-to-Hire",
    "Direct Placement",
    "Offshore Staffing",
    "BOT Model",
];

export const Footer = () => {
    const goTo = (href) => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <footer
            data-testid="main-footer"
            className="relative bg-midasis-navy text-white"
        >
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
                    {/* Logo column */}
                    <div className="lg:col-span-4">
                        <div className="inline-block rounded-lg bg-white/95 px-4 py-3">
                            <Logo variant="dark" size="lg" />
                        </div>
                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
                            A trusted global IT staffing and consulting partner since 2010.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-midasis-orange">
                            Quick Links
                        </h4>
                        <ul className="mt-4 space-y-2.5">
                            {QUICK_LINKS.map((l) => (
                                <li key={l.label}>
                                    <button
                                        onClick={() => goTo(l.href)}
                                        className="text-sm text-white/75 transition-colors hover:text-white"
                                        data-testid={`footer-quick-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                                    >
                                        {l.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Staffing */}
                    <div className="lg:col-span-3">
                        <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-midasis-orange">
                            Staffing
                        </h4>
                        <ul className="mt-4 space-y-2.5">
                            {STAFFING_LINKS.map((s) => (
                                <li
                                    key={s}
                                    className="text-sm text-white/75"
                                    data-testid={`footer-staffing-${s.toLowerCase().replace(/[/\s]+/g, "-")}`}
                                >
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Address */}
                    <div className="lg:col-span-3">
                        <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-midasis-orange">
                            Reach Us
                        </h4>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-start gap-2.5 text-sm text-white/75">
                                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-midasis-blue" />
                                <span>2815 2nd Ave, Suite 550, Office No. 518, Register 09, Seattle, WA 98121, United States <span className="ml-1 text-midasis-orange font-semibold">(HQ)</span></span>
                            </div>
                            <div className="flex items-start gap-2.5 text-sm text-white/75">
                                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-midasis-blue" />
                                <span>Flat No. 301-B, Park View Edifice, Jubilee Hills, Hyderabad, Telangana 500033, India</span>
                            </div>
                            <a
                                href="mailto:contact@midasistechnologies.com"
                                className="flex items-center gap-2.5 text-sm text-white/85 transition-colors hover:text-midasis-orange"
                                data-testid="footer-email-link"
                            >
                                <Mail size={16} className="flex-shrink-0 text-midasis-blue" />
                                contact@midasistechnologies.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar with thin blue top border */}
            <div className="border-t-2 border-midasis-blue/60">
                <div className="mx-auto max-w-7xl px-6 py-5 text-center text-xs text-white/60 lg:px-8">
                    © {new Date().getFullYear()} Midasis Technologies. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
