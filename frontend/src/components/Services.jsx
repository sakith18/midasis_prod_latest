import { Users2, Code2, Database, GitBranch, BarChart3, Brain, ShieldCheck } from "lucide-react";

const SERVICES = [
    {
        icon: Users2,
        title: "IT Staffing",
        desc: "Staff augmentation, contract-to-hire, and permanent placement across all major technology disciplines — US and India, all work authorizations.",
    },
    {
        icon: Code2,
        title: "Application Development",
        desc: "Full stack, mobile, and cloud-native software delivery. Java, .NET, React, Python, and cloud platforms on flexible engagement models.",
    },
    {
        icon: Database,
        title: "SAP",
        desc: "S/4HANA migrations, greenfield implementations, ABAP development, BTP integrations, and AMS support by certified SAP consultants.",
    },
    {
        icon: GitBranch,
        title: "DevOps",
        desc: "CI/CD pipelines, infrastructure automation, cloud migration, SRE practices, and observability — helping teams ship faster and operate reliably.",
    },
    {
        icon: BarChart3,
        title: "ERP",
        desc: "End-to-end ERP implementation, integration, data migration, and lifecycle support across SAP, Oracle, and Microsoft Dynamics platforms.",
    },
    {
        icon: Brain,
        title: "AI / ML",
        desc: "GenAI and LLM integration, MLOps pipelines, data science, and AI-augmented enterprise workflows tied to real business outcomes.",
    },
    {
        icon: ShieldCheck,
        title: "Cybersecurity",
        desc: "VAPT, SOC, IAM, Red Teaming, compliance & risk management, and managed security services for enterprise environments.",
    },
];

export const Services = () => {
    return (
        <section
            id="services"
            data-testid="services-section"
            className="bg-white py-[48px] lg:py-[80px]"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center">
                    <div className="text-xs font-bold uppercase tracking-[0.25em] text-midasis-orange">
                        What We Do
                    </div>
                    <h2 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-bold leading-tight text-midasis-navy sm:text-4xl lg:text-5xl">
                        Seven Practice Areas.<br />One Technology Partner.
                    </h2>
                    <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-midasis-orange" />
                </div>

                <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((s, idx) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={s.title}
                                className="card-hover rounded-xl bg-white p-7"
                                style={{ border: "1px solid #EBF4FB", borderTop: "2px solid transparent" }}
                                data-testid={`service-card-${idx}`}
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-midasis-tint">
                                    <Icon size={26} className="text-midasis-blue" strokeWidth={2.2} />
                                </div>
                                <h3 className="mt-5 font-heading text-lg font-bold text-midasis-navy">
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

export default Services;
