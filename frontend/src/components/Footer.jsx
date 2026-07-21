import Logo from "@/components/Logo";
import { Mail, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QUICK_LINKS = [
    { label: "Home", href: "#home", page: true },
    { label: "About", href: "#about", page: true },
    { label: "Clients", href: "#clients", page: true },
    { label: "Contact Us", href: "/contact", page: false },
];

const PRACTICE_LINKS = [
    { label: "IT Staffing", href: "/services/it-staffing" },
    { label: "Application Development", href: "/services/app-development" },
    { label: "ERP / SAP", href: "/services/sap" },
    { label: "DevOps", href: "/services/devops" },
    { label: "AI / ML", href: "/services/ai-ml" },
    { label: "Cybersecurity", href: "/services/cybersecurity" },
];

const LEGAL_LINKS = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
];

export const Footer = () => {
    const navigate = useNavigate();

    const goTo = (href, page) => {
        if (!page) {
            navigate(href);
            return;
        }
        if (window.location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const id = href.replace("#", "");
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
        } else {
            const id = href.replace("#", "");
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
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
                        <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
                            Where Technology Meets Talent — IT Staffing, Development, SAP, DevOps, ERP, AI/ML & Cybersecurity since 2010.
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
                                        onClick={() => goTo(l.href, l.page)}
                                        className="text-sm text-white/75 transition-colors hover:text-white"
                                        data-testid={`footer-quick-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                                    >
                                        {l.label}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Legal */}
                        <h4 className="mt-8 font-heading text-xs font-bold uppercase tracking-[0.2em] text-midasis-orange">
                            Legal
                        </h4>
                        <ul className="mt-4 space-y-2.5">
                            {LEGAL_LINKS.map((l) => (
                                <li key={l.label}>
                                    <button
                                        onClick={() => navigate(l.href)}
                                        className="text-sm text-white/75 transition-colors hover:text-white"
                                        data-testid={`footer-legal-${l.label.toLowerCase().replace(/[\s&]+/g, "-")}`}
                                    >
                                        {l.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-2">
                        <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-midasis-orange">
                            Services
                        </h4>
                        <ul className="mt-4 space-y-2.5">
                            {PRACTICE_LINKS.map((s) => (
                                <li key={s.label}>
                                    <button
                                        onClick={() => navigate(s.href)}
                                        className="text-sm text-white/75 transition-colors hover:text-white"
                                        data-testid={`footer-service-${s.label.toLowerCase().replace(/[\s/]+/g, "-")}`}
                                    >
                                        {s.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Address */}
                    <div className="lg:col-span-4">
                        <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-midasis-orange">
                            Reach Us
                        </h4>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-start gap-2.5 text-sm text-white/75">
                                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-midasis-blue" />
                                <span>
                                    2815 2nd Ave, Suite 550, Office No. 518, Register 09,
                                    Seattle, WA 98121, United States{" "}
                                    <span className="text-midasis-orange font-semibold">(HQ)</span>
                                </span>
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

            {/* Bottom bar */}
            <div className="border-t-2 border-midasis-blue/60">
                <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-white/60 sm:flex-row lg:px-8">
                    <span>© {new Date().getFullYear()} Midasis Technologies. All Rights Reserved.</span>
                    <div className="flex items-center gap-4">
                        {LEGAL_LINKS.map((l) => (
                            <button
                                key={l.label}
                                onClick={() => navigate(l.href)}
                                className="transition-colors hover:text-white"
                            >
                                {l.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
