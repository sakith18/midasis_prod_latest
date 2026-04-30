import { Button } from "@/components/ui/button";
import { Briefcase, UserCheck, UserPlus, ArrowRight, Shield } from "lucide-react";

const MODELS = [
    {
        icon: Briefcase,
        title: "Contract Staffing",
        desc: "Flexible short and long-term IT contractors for project-based needs, available across all major US states.",
    },
    {
        icon: UserCheck,
        title: "Contract-to-Hire",
        desc: "Evaluate talent on the job before making a permanent commitment — reduce hiring risk while maintaining flexibility.",
    },
    {
        icon: UserPlus,
        title: "Direct / Full-Time Placement",
        desc: "End-to-end permanent recruitment for critical technology roles across your organization.",
    },
];

const ROLES = [
    "Java Developers", ".NET Developers", "Python Engineers", "Data Engineers",
    "Cloud Architects (AWS/Azure/GCP)", "DevOps Engineers", "QA/Test Engineers",
    "Business Analysts", "Scrum Masters", "SAP Consultants", "Salesforce Developers",
    "UI/UX Designers", "Full Stack Developers", "AI/ML Engineers", "Cybersecurity Analysts",
];

const VISAS = ["US Citizens", "Green Card Holders", "H1B", "OPT/CPT", "EAD", "TN Visa"];

export const USStaffing = () => {
    const goTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section
            id="us-staffing"
            data-testid="us-staffing-section"
            className="bg-midasis-tint py-[48px] lg:py-[80px]"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-3xl">
                    <div className="text-xs font-bold uppercase tracking-[0.25em] text-midasis-orange">
                        United States
                    </div>
                    <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-midasis-navy sm:text-4xl lg:text-5xl">
                        US IT Staffing Solutions
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-midasis-body sm:text-lg">
                        Connecting American businesses with the right technology talent —
                        fast, flexible, and reliable.
                    </p>
                </div>

                <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
                    {/* Left description */}
                    <div className="space-y-5 text-base leading-relaxed text-midasis-body">
                        <p>
                            Midasis has years of experience serving Fortune 500 companies and
                            mid-size enterprises across the United States. As a recognized staffing
                            firm in the US market, we provide highly skilled IT professionals for
                            contract, contract-to-hire, and full-time placements.
                        </p>
                        <p>
                            Our deep network of pre-vetted US-based and H1B/OPT/EAD technology
                            professionals allows us to fill critical roles quickly without compromising
                            on quality. We pride ourselves on understanding not just the technical
                            requirements but also the cultural and organizational fit of every
                            client we serve.
                        </p>

                        {/* Visa badges */}
                        <div className="pt-4">
                            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-midasis-navy">
                                <Shield size={14} className="text-midasis-orange" />
                                Work Authorization We Support
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {VISAS.map((v) => (
                                    <span
                                        key={v}
                                        className="rounded-md border border-midasis-blue/30 bg-white px-3 py-1.5 text-xs font-semibold text-midasis-blue"
                                        data-testid={`us-visa-${v.toLowerCase().replace(/[/\s]+/g, "-")}`}
                                    >
                                        {v}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-2">
                            <Button
                                onClick={() => goTo("contact")}
                                className="group h-12 rounded-full bg-midasis-blue px-7 font-semibold text-white shadow-md transition-all duration-300 hover:bg-midasis-navy hover:shadow-lg"
                                data-testid="us-find-talent-button"
                            >
                                Find US Talent
                                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>

                    {/* Right cards */}
                    <div className="space-y-5">
                        {MODELS.map((m, idx) => {
                            const Icon = m.icon;
                            return (
                                <div
                                    key={m.title}
                                    className="card-hover rounded-xl bg-white p-6 lg:p-7"
                                    data-testid={`us-model-card-${idx}`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-midasis-tint">
                                            <Icon size={22} className="text-midasis-blue" strokeWidth={2.2} />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-lg font-bold text-midasis-navy">
                                                {m.title}
                                            </h3>
                                            <p className="mt-2 text-sm leading-relaxed text-midasis-body">
                                                {m.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Roles chips */}
                <div className="mt-14">
                    <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-midasis-navy">
                        Technology Roles We Staff
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                        {ROLES.map((r) => (
                            <span
                                key={r}
                                className="role-chip cursor-default rounded-full border border-midasis-blue/30 bg-white px-4 py-2 text-xs font-medium text-midasis-blue"
                                data-testid={`us-role-${r.toLowerCase().replace(/[/\s()]+/g, "-")}`}
                            >
                                {r}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default USStaffing;
