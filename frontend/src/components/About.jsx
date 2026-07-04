const STATS = [
    { value: "Est. 2010", label: "15 Years of Enterprise Delivery" },
    { value: "200+", label: "Professionals Deployed Globally" },
    { value: "1,000+", label: "Man-Years Combined Experience" },
    { value: "2", label: "Countries — US & India Operations" },
];

export const About = () => {
    return (
        <section
            id="about"
            data-testid="about-section"
            className="bg-white py-[48px] lg:py-[80px]"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <div className="text-xs font-bold uppercase tracking-[0.25em] text-midasis-orange">
                            Who We Are
                        </div>
                        <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-midasis-navy sm:text-4xl lg:text-5xl">
                            A Full-Service Technology<br />Partner Since 2010
                        </h2>
                        <div className="mt-6 h-1 w-16 rounded-full bg-midasis-orange" />
                    </div>
                    <div className="space-y-5 text-base leading-relaxed text-midasis-body">
                        <p>
                            Founded in 2010, Midasis Technologies operates across six practice
                            areas — IT Staffing, Application Development, SAP, DevOps, ERP, and
                            AI/ML — serving enterprise clients across the United States and India.
                        </p>
                        <p>
                            With <span className="font-semibold text-midasis-navy">200+ professionals</span> deployed
                            and over <span className="font-semibold text-midasis-navy">1,000 man-years</span> of combined
                            experience, we operate across three engagement models — staff augmentation,
                            dedicated teams, and project-based SOW — so clients can choose what fits
                            their timeline, budget, and delivery goals.
                        </p>
                    </div>
                </div>

                {/* Stats credibility band */}
                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
                    {STATS.map((stat, idx) => (
                        <div
                            key={stat.label}
                            className="stat-card rounded-xl bg-white p-7"
                            data-testid={`stat-card-${idx}`}
                        >
                            <div className="font-heading text-3xl font-black text-midasis-blue lg:text-4xl">
                                {stat.value}
                            </div>
                            <div className="mt-2 text-sm font-medium leading-snug text-midasis-body">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
