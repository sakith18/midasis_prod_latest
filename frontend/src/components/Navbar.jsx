import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetHeader,
} from "@/components/ui/sheet";
import Logo from "@/components/Logo";

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "US IT Staffing", href: "#us-staffing" },
    { label: "India IT Staffing", href: "#india-staffing" },
    { label: "Services", href: "#services" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const goTo = (href) => {
        setOpen(false);
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
                    {NAV_LINKS.map((link) => (
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

                <div className="hidden lg:block">
                    <Button
                        onClick={() => goTo("#contact")}
                        className="rounded-full bg-midasis-blue px-6 py-2.5 font-semibold text-white shadow-md transition-all duration-300 hover:bg-midasis-navy hover:shadow-lg"
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
                            <div className="flex flex-col p-4">
                                {NAV_LINKS.map((link) => (
                                    <button
                                        key={link.href}
                                        onClick={() => goTo(link.href)}
                                        className="rounded-lg px-4 py-3.5 text-left text-base font-medium text-midasis-body transition-colors hover:bg-midasis-tint hover:text-midasis-blue"
                                        data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                                    >
                                        {link.label}
                                    </button>
                                ))}
                                <Button
                                    onClick={() => goTo("#contact")}
                                    className="mt-4 w-full rounded-full bg-midasis-blue py-5 font-semibold text-white hover:bg-midasis-navy"
                                    data-testid="mobile-hire-talent-button"
                                >
                                    Hire Talent
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
