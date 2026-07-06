import { Users2, Code2, Database, GitBranch, Brain, ShieldCheck, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PRACTICES = [
    {
        icon: Users2,
        title: "IT Staffing",
        href: "/services/it-staffing",
        position: "Staff augmentation, contract-to-hire & permanent placement across the US and India.",
        bullets: [
            "Contract, contract-to-hire & direct placement",
            "All major work authorizations (H1B, OPT, EAD, TN)",
            "24–48 hour time-to-submit on most roles",
            "Coverage: BFSI, Healthcare, Retail, Manufacturing",
        ],
    },
    {
        icon: Code2,
        title: "Application Development",
        href: "/services/app-development",
        position: "Full stack, mobile, and cloud-native software delivery on fixed or time-and-materials engagements.",
        bullets: [
            "Java, .NET, React, Angular, Python, Node.js",
            "iOS, Android & cross-platform mobile",
            "AWS, Azure & GCP cloud-native architecture",
            "Staff augmentation, dedicated teams & project SOW",
        ],
    },
    {
        icon: Database,
        title: "ERP / SAP",
        href: "/services/sap",
        position: "S/4HANA migrations, SAP functional & technical delivery, and ERP implementation across Oracle and Microsoft Dynamics.",
        bullets: [
            "SAP: FICO, SD, MM, HCM, ABAP, BTP, Fiori",
            "S/4HANA migration & upgrade programs",
            "ERP implementation: Oracle, Microsoft Dynamics",
            "System integration, data migration & AMS",
        ],
    },
    {
        icon: GitBranch,
        title: "DevOps",
        href: "/services/devops",
        position: "CI/CD pipelines, infrastructure automation, SRE practices and cloud migration programs.",
        bullets: [
            "CI/CD: Jenkins, GitHub Actions, GitLab CI, ArgoCD",
            "IaC: Terraform, Ansible, Pulumi",
            "Cloud migration: AWS, Azure, GCP",
            "Observability: Prometheus, Grafana, ELK stack",
        ],
    },
    {
        icon: Brain,
        title: "AI / ML",
        href: "/services/ai-ml",
        position: "GenAI and LLM integration, MLOps pipelines, data science, and AI-augmented enterprise workflows.",
        bullets: [
            "LLM integration & GenAI application development",
            "MLOps: model training, deployment & monitoring",
            "AI-augmented ERP and SAP modernization",
            "Data engineering & feature pipeline development",
        ],
    },
    {
        icon: ShieldCheck,
        title: "Cybersecurity",
        href: "/services/cybersecurity",
        position: "VAPT, SOC, IAM, Red Teaming, compliance & managed security services for enterprise environments.",
        bullets: [
            "VAPT across networks, apps, APIs & cloud",
            "24/7 SOC — threat monitoring & incident response",
            "IAM: SSO, MFA, PAM & Zero Trust",
            "Red Teaming & compliance (SOC 2, ISO 27001, HIPAA)",
        ],
    },
];

export const Practices = () => {
    const navigate = useNavigate();

    return (
        <section
            id="practices"
            data-testid="practices-section"
            className="bg-white py-[48px] lg:py-[80px]"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center">
                    <div className="text-xs font-bold uppercase tracking-[0.25em] text-midasis-orange">
                        Our Practice Areas
                    </div>
                    <h2 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-bold leading-tight text-midasis-navy sm:text-4xl lg:text-5xl">
                        Six Practices. One Technology Partner.
                    </h2>
                    <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-midasis-orange" />
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-midasis-body">
                        From placing a single contractor to running a multi-team delivery program —
                        Midasis covers the full spectrum of enterprise technology needs.
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {PRACTICES.map((p, idx) => {
                        const Icon = p.icon;
                        return (
                            <div
                                key={p.title}
                                className="card-hover group flex cursor-pointer flex-col rounded-xl bg-white p-7"
                                style={{ border: "1px solid #EBF4FB" }}
                                data-testid={`practice-card-${idx}`}
                                onClick={() => navigate(p.href)}
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-midasis-tint">
                                    <Icon size={26} className="text-midasis-blue" strokeWidth={2.2} />
                                </div>
                                <h3 className="mt-5 font-heading text-lg font-bold text-midasis-navy">
                                    {p.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-midasis-body">
                                    {p.position}
                                </p>
                                <ul className="mt-4 space-y-1.5">
                                    {p.bullets.map((b) => (
                                        <li key={b} className="flex items-start gap-2 text-xs leading-relaxed text-midasis-body">
                                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-midasis-orange" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-midasis-blue transition-colors group-hover:text-midasis-orange">
                                    Learn more <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Practices;
