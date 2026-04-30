import { Users, Zap, Award, ShieldCheck, Globe, Handshake } from "lucide-react";

const ITEMS = [
    {
        icon: Users,
        title: "Deep Talent Network",
        desc: "Pre-vetted pool of 10,000+ technology professionals across the US and India ready for immediate deployment.",
    },
    {
        icon: Zap,
        title: "Speed to Hire",
        desc: "Average time-to-submit of 24–48 hours for most technology roles, backed by our extensive active candidate database.",
    },
    {
        icon: Award,
        title: "Domain Expertise",
        desc: "Specialized recruiters with hands-on understanding of BFSI, Healthcare, Retail, Manufacturing, and Technology sectors.",
    },
    {
        icon: ShieldCheck,
        title: "Compliance & Risk Management",
        desc: "Full compliance with US staffing regulations, visa requirements, and India labor laws — zero risk to clients.",
    },
    {
        icon: Globe,
        title: "Global Reach, Local Knowledge",
        desc: "US operations in Texas + India operations in Hyderabad give us unique cross-border placement capabilities.",
    },
    {
        icon: Handshake,
        title: "Long-Term Partnership",
        desc: "We don't just fill positions — we build lasting relationships with clients and candidates for sustained success.",
    },
];

export const WhyChoose = () => {
    return (
        <section
            id="why-choose"
            data-testid="why-choose-section"
            className="bg-midasis-tint py-[48px] lg:py-[80px]"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center">
                    <div className="text-xs font-bold uppercase tracking-[0.25em] text-midasis-orange">
                        Our Edge
                    </div>
                    <h2 className="mx-auto mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-midasis-navy sm:text-4xl lg:text-5xl">
                        Why Global Companies Choose Midasis
                    </h2>
                    <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-midasis-orange" />
                </div>

                <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {ITEMS.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="card-hover rounded-xl bg-white p-7"
                                data-testid={`why-card-${idx}`}
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-midasis-tint">
                                    <Icon size={26} className="text-midasis-blue" strokeWidth={2.2} />
                                </div>
                                <h3 className="mt-5 font-heading text-lg font-bold text-midasis-navy">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-midasis-body">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
