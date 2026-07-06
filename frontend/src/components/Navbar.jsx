import { useEffect, useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetHeader,
} from "@/components/ui/sheet";
import Logo from "@/components/Logo";
import { useNavigate, useLocation } from "react-router-dom";

const PRACTICES = [
    { label: "IT Staffing", href: "/services/it-staffing", desc: "Staff aug, contract-to-hire & permanent placement" },
    { label: "Application Development", href: "/services/app-development", desc: "Full stack, mobile & cloud-native development" },
    { label: "ERP / SAP", href: "/services/sap", desc: "S/4HANA, ABAP, BTP, Oracle & Dynamics consulting" },
    { label: "DevOps", href: "/services/devops", desc: "CI/CD, cloud migration & infrastructure automation" },
    { label: "AI / ML", href: "/services/ai-ml", desc: "GenAI, LLM integration, MLOps & data science" },
    { label: "Cybersecurity", href: "/services/cybersecurity", desc: "VAPT, SOC, IAM, Red Teaming & compliance" },
];

const TOP_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close dropdown on outside click
    useEffect(() => {
        const handler = () => setServicesOpen(false);
        if (servicesOpen) document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, [servicesOpen]);

    const goTo = (href) => {
        setOpen(false);
        if (href.startsWith("/")) {
            navigate(href);
        } else {
            if (location.pathname !== "/") {
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
        }
    };

    return (
        <header
            data-testid="main-navbar"
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-[0_2px_12px_rgba(36,120,197,0.08)]"
                    : "bg-white"
            }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
                <button onClick={() => goTo("#home")} className="flex-shrink-0" data-testid="nav-logo-button">
                    <Logo size="default" />
                </button>

                {/* Desktop nav */}
                <ul className="hidden items-center gap-1 lg:flex">
                    {TOP_LINKS.slice(0, 2).map((link) => (
                        <li key={link.href}>
                            <button
                                onClick={() => goTo(link.href)}
                                className="px-3 py-2 text-sm font-medium text-midasis-body transition-colors duration-200 hover:text-midasis-blue"
                                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}

                    {/* Services dropdown */}
                    <li className="relative">
                        <button
                            onClick={(e) => { e.stopPropagation(); setServicesOpen((v) => !v); }}
                            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-midasis-body transition-colors duration-200 hover:text-midasis-blue"
                            data-testid="nav-services-dropdown"
                        >
                            Services
                            <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                        </button>

                        {servicesOpen && (
                            <div
                                className="absolute left-0 top-full mt-2 w-[480px] rounded-2xl border border-midasis-tint bg-white p-4 shadow-[0_8px_40px_rgba(36,120,197,0.14)]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="grid grid-cols-2 gap-2">
                                    {PRACTICES.map((p) => (
                                        <button
                                            key={p.href}
                                            onClick={() => { setServicesOpen(false); goTo(p.href); }}
                                            className="group flex flex-col rounded-xl p-3 text-left transition-colors hover:bg-midasis-tint"
                                            data-testid={`nav-practice-${p.label.toLowerCase().replace(/[\s/]+/g, "-")}`}
                                        >
                                            <span className="text-sm font-semibold text-midasis-navy group-hover:text-midasis-blue">
                                                {p.label}
                                            </span>
                                            <span className="mt-0.5 text-xs leading-relaxed text-midasis-body">
                                                {p.desc}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </li>

                    {TOP_LINKS.slice(2).map((link) => (
                        <li key={link.href}>
                            <button
                                onClick={() => goTo(link.href)}
                                className="px-3 py-2 text-sm font-medium text-midasis-body transition-colors duration-200 hover:text-midasis-blue"
                                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="hidden items-center gap-3 lg:flex">
                    <Button
                        onClick={() => goTo("#contact")}
                        variant="outline"
                        className="h-10 rounded-full border-2 border-midasis-blue bg-transparent px-5 font-semibold text-midasis-blue transition-all duration-300 hover:bg-midasis-blue hover:text-white"
                        data-testid="nav-start-project-button"
                    >
                        Start a Project
                    </Button>
                    <Button
                        onClick={() => goTo("#contact")}
                        className="rounded-full bg-midasis-blue px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-300 hover:bg-midasis-navy hover:shadow-lg"
                        data-testid="nav-hire-talent-button"
                    >
                        Hire Talent
                    </Button>
                </div>

                {/* Mobile hamburger */}
                <div className="lg:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <button
                                aria-label="Open menu"
                                className="rounded-md p-2 text-midasis-navy hover:bg-midasis-tint"
                                data-testid="mobile-menu-trigger"
                            >
                                <Menu size={26} />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[85vw] max-w-sm bg-white p-0">
                            <SheetHeader className="border-b border-midasis-tint px-6 py-5">
                                <SheetTitle className="text-left">
                                    <Logo size="sm" />
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col overflow-y-auto p-4">
                                {TOP_LINKS.slice(0, 2).map((link) => (
                                    <button
                                        key={link.href}
                                        onClick={() => goTo(link.href)}
                                        className="rounded-lg px-4 py-3.5 text-left text-base font-medium text-midasis-body transition-colors hover:bg-midasis-tint hover:text-midasis-blue"
                                        data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                                    >
                                        {link.label}
                                    </button>
                                ))}

                                {/* Mobile Services accordion */}
                                <div>
                                    <button
                                        onClick={() => setMobileServicesOpen((v) => !v)}
                                        className="flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-left text-base font-medium text-midasis-body transition-colors hover:bg-midasis-tint hover:text-midasis-blue"
                                        data-testid="mobile-services-accordion"
                                    >
                                        Services
                                        <ChevronDown size={16} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                                    </button>
                                    {mobileServicesOpen && (
                                        <div className="mb-1 ml-4 space-y-0.5 rounded-lg border border-midasis-tint bg-midasis-tint/50 p-2">
                                            {PRACTICES.map((p) => (
                                                <button
                                                    key={p.href}
                                                    onClick={() => goTo(p.href)}
                                                    className="block w-full rounded-md px-3 py-2.5 text-left text-sm font-semibold text-midasis-navy transition-colors hover:bg-white hover:text-midasis-blue"
                                                    data-testid={`mobile-practice-${p.label.toLowerCase().replace(/[\s/]+/g, "-")}`}
                                                >
                                                    {p.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {TOP_LINKS.slice(2).map((link) => (
                                    <button
                                        key={link.href}
                                        onClick={() => goTo(link.href)}
                                        className="rounded-lg px-4 py-3.5 text-left text-base font-medium text-midasis-body transition-colors hover:bg-midasis-tint hover:text-midasis-blue"
                                        data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                                    >
                                        {link.label}
                                    </button>
                                ))}

                                <div className="mt-4 space-y-2">
                                    <Button
                                        onClick={() => goTo("#contact")}
                                        variant="outline"
                                        className="w-full rounded-full border-2 border-midasis-blue bg-transparent py-5 font-semibold text-midasis-blue hover:bg-midasis-blue hover:text-white"
                                        data-testid="mobile-start-project-button"
                                    >
                                        Start a Project
                                    </Button>
                                    <Button
                                        onClick={() => goTo("#contact")}
                                        className="w-full rounded-full bg-midasis-blue py-5 font-semibold text-white hover:bg-midasis-navy"
                                        data-testid="mobile-hire-talent-button"
                                    >
                                        Hire Talent
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
