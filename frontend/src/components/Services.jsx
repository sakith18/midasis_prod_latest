import { Cpu, Network, BarChart3, Users2, Server, Briefcase } from "lucide-react";

const SERVICES = [
    {
        icon: Cpu,
        title: "IT Management Services",
        desc: "Aligning IT infrastructure and strategy with your business goals for faster, measurable outcomes.",
    },
    {
        icon: Network,
        title: "Enterprise Application Integration",
        desc: "Connecting applications, processes, and databases through robust enterprise-grade gateways.",
    },
    {
        icon: BarChart3,
        title: "Business Intelligence",
        desc: "Empowering decisions with timely, actionable insights across all levels of the organization.",
    },
    {
        icon: Users2,
        title: "Workforce Management",
        desc: "Complete workforce lifecycle management from onboarding to offboarding, payroll, and compliance.",
    },
    {
        icon: Server,
        title: "Offshore Technology Services",
        desc: "Scalable offshore delivery models for product development, support, and maintenance.",
    },
    {
        icon: Briefcase,
        title: "HR & Management Consulting",
        desc: "Strategic advisory in HR, quality management, and finance & accounts management.",
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
                        End-to-End Technology<br />& Consulting Services
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
