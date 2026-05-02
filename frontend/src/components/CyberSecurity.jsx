import { Button } from "@/components/ui/button";
import {
    ShieldCheck,
    ScanSearch,
    Lock,
    Eye,
    Users,
    Swords,
    ArrowRight,
} from "lucide-react";

const SERVICES = [
    {
        icon: ScanSearch,
        title: "Vulnerability Assessment & Penetration Testing (VAPT)",
        desc: "Identify and remediate security weaknesses across your networks, web applications, APIs, and cloud environments before attackers exploit them.",
    },
    {
        icon: Eye,
        title: "Security Operations Center (SOC)",
        desc: "24/7 threat monitoring, detection, and incident response powered by advanced SIEM/SOAR platforms to keep your business protected around the clock.",
    },
    {
        icon: Users,
        title: "Identity & Access Management (IAM)",
        desc: "Design and implement robust IAM frameworks — SSO, MFA, PAM, and Zero Trust — to ensure the right people access the right resources.",
    },
    {
        icon: Swords,
        title: "Red Teaming",
        desc: "Simulate real-world adversarial attacks on your organization to uncover gaps in people, processes, and technology that standard testing misses.",
    },
    {
        icon: Lock,
        title: "Compliance & Risk Management",
        desc: "Navigate complex regulatory requirements including SOC 2, ISO 27001, HIPAA, PCI-DSS, and NIST with expert advisory and audit-readiness support.",
    },
    {
        icon: ShieldCheck,
        title: "Managed Security Services",
        desc: "Fully managed end-to-end security operations — from threat intelligence and log management to patch governance and security reporting.",
    },
];

export const CyberSecurity = () => {
    const goTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section
            id="cybersecurity"
            data-testid="cybersecurity-section"
            className="bg-midasis-tint py-[48px] lg:py-[80px]"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl">
                    <div className="text-xs font-bold uppercase tracking-[0.25em] text-midasis-orange">
                        Cybersecurity
                    </div>
                    <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-midasis-navy sm:text-4xl lg:text-5xl">
                        Cybersecurity Services
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-midasis-body sm:text-lg">
                        We deliver end-to-end cybersecurity services to protect your business
                        from evolving threats — across infrastructure, applications, and people.
                    </p>
                </div>

                {/* Intro text + CTA */}
                <div className="mt-10 max-w-3xl space-y-4 text-base leading-relaxed text-midasis-body">
                    <p>
                        At Midasis Technologies, we provide a comprehensive suite of cybersecurity
                        services designed to strengthen your security posture at every layer. Whether
                        you need to test your defenses, monitor threats in real time, manage identities,
                        or achieve regulatory compliance — our certified security experts are ready to help.
                    </p>
                    <p>
                        Our services are delivered by seasoned professionals holding industry
                        certifications including CISSP, CEH, CISM, OSCP, and more — ensuring
                        you receive expertise that meets the highest standards.
                    </p>
                    <div className="pt-2">
                        <Button
                            onClick={() => goTo("contact")}
                            className="group h-12 rounded-full bg-midasis-blue px-7 font-semibold text-white shadow-md transition-all duration-300 hover:bg-midasis-navy hover:shadow-lg"
                            data-testid="cyber-contact-button"
                        >
                            Discuss Your Security Needs
                            <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>

                {/* Service cards grid */}
                <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((s, idx) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={s.title}
                                className="card-hover rounded-xl bg-white p-6 lg:p-7"
                                style={{ border: "1px solid #EBF4FB", borderTop: "2px solid transparent" }}
                                data-testid={`cyber-service-card-${idx}`}
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-midasis-tint">
                                    <Icon size={22} className="text-midasis-blue" strokeWidth={2.2} />
                                </div>
                                <h3 className="mt-5 font-heading text-base font-bold text-midasis-navy">
                                    {s.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-midasis-body">
                                    {s.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CyberSecurity;
