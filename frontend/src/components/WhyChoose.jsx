import { Users, Zap, Award, Globe, Layers, Handshake } from "lucide-react";

const ITEMS = [
    {
        icon: Users,
        title: "Deep Talent Network",
        desc: "10,000+ pre-vetted technology professionals across the US and India — covering staffing, SAP, DevOps, AI/ML, and ERP disciplines — ready for immediate engagement.",
    },
    {
        icon: Zap,
        title: "Speed to Deliver",
        desc: "Average 24–48 hours to submit staffing candidates. Project teams mobilized within two weeks. Midasis moves at the pace your business requires.",
    },
    {
        icon: Award,
        title: "Domain Expertise",
        desc: "Practitioners with hands-on experience in BFSI, Healthcare, Retail, Manufacturing, and Energy — not generalist recruiters or project managers applying templates.",
    },
    {
        icon: Layers,
        title: "Three Flexible Engagement Models",
        desc: "Staff augmentation, dedicated teams, and project-based SOW — clients choose the model that matches their timeline, budget, and desired level of delivery accountability.",
    },
    {
        icon: Globe,
        title: "US + India Presence",
        desc: "Headquarters in Seattle, WA and delivery operations in Hyderabad — enabling onshore client management with offshore delivery efficiency at competitive blended rates.",
    },
    {
        icon: Handshake,
        title: "Long-Term Partnership Mindset",
        desc: "Over 70% of Midasis revenue comes from repeat clients. Relationships are built on consistent delivery, transparent communication, and a willingness to adapt as client needs evolve.",
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
                        Why Organizations Choose Midasis
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
