import { Button } from "@/components/ui/button";
import { Globe2, Building2, Repeat, ArrowRight, MapPin } from "lucide-react";

const MODELS = [
    {
        icon: Globe2,
        title: "Offshore Staffing",
        desc: "Build a dedicated offshore team in India to support your global operations at a fraction of onshore costs, without compromising quality.",
    },
    {
        icon: Building2,
        title: "Onsite Staffing (India)",
        desc: "Deploy skilled IT professionals at client locations across India's top tech cities for project-based or long-term engagements.",
    },
    {
        icon: Repeat,
        title: "Build-Operate-Transfer (BOT)",
        desc: "Establish your own captive technology center in India through Midasis — we build it, operate it, and transfer it to you.",
    },
];

const ROLES = [
    "Java / J2EE Developers", "React / Angular / Vue.js Developers",
    "Python / Django Engineers", "Data Scientists & ML Engineers",
    "Cloud Engineers (AWS / Azure / GCP)", "Mobile Developers (iOS & Android)",
    "SAP FICO / SD / MM / ABAP", "DevOps & SRE Engineers",
    "QA Automation Engineers", "Business Analysts", "Project Managers",
    "Embedded Systems Engineers", "ERP Consultants", "RPA Developers",
];

const LOCATIONS = ["Hyderabad", "Bengaluru", "Chennai", "Pune", "Mumbai", "Delhi NCR"];

export const IndiaStaffing = () => {
    const goTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section
            id="india-staffing"
            data-testid="india-staffing-section"
            className="bg-white py-[48px] lg:py-[80px]"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-3xl">
                    <div className="text-xs font-bold uppercase tracking-[0.25em] text-midasis-orange">
                        India
                    </div>
                    <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-midasis-navy sm:text-4xl lg:text-5xl">
                        India IT Staffing Solutions
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-midasis-body sm:text-lg">
                        Tapping into India's vast technology talent pool to power your business globally.
                    </p>
                </div>

                <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
                    {/* Left cards */}
                    <div className="space-y-5 lg:order-1">
                        {MODELS.map((m, idx) => {
                            const Icon = m.icon;
                            return (
                                <div
                                    key={m.title}
                                    className="card-hover rounded-xl bg-white p-6 lg:p-7"
                                    style={{ border: "1px solid #EBF4FB", borderTop: "2px solid transparent" }}
                                    data-testid={`india-model-card-${idx}`}
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

                    {/* Right description */}
                    <div className="space-y-5 text-base leading-relaxed text-midasis-body lg:order-2">
                        <p>
                            India is home to one of the world's largest and most dynamic IT talent
                            ecosystems. Midasis Technologies, with its registered office in Hyderabad,
                            is strategically positioned to source and deploy top-quality technology
                            professionals across India's major IT hubs — Hyderabad, Bengaluru, Chennai,
                            Pune, and Mumbai.
                        </p>
                        <p>
                            Whether you need resources for offshore delivery, onsite deployment within
                            India, or cross-border staffing for global projects, Midasis delivers
                            end-to-end talent solutions backed by deep local market knowledge and a
                            rigorous screening process.
                        </p>

                        {/* Locations */}
                        <div className="pt-4">
                            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-midasis-navy">
                                <MapPin size={14} className="text-midasis-orange" />
                                Key India Delivery Locations
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {LOCATIONS.map((loc) => (
                                    <span
                                        key={loc}
                                        className="inline-flex items-center gap-1.5 rounded-md border border-midasis-blue/30 bg-midasis-tint px-3 py-1.5 text-xs font-semibold text-midasis-blue"
                                        data-testid={`india-location-${loc.toLowerCase().replace(/\s+/g, "-")}`}
                                    >
                                        <MapPin size={12} className="text-midasis-orange" />
                                        {loc}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-2">
                            <Button
                                onClick={() => goTo("contact")}
                                className="group h-12 rounded-full bg-midasis-blue px-7 font-semibold text-white shadow-md transition-all duration-300 hover:bg-midasis-navy hover:shadow-lg"
                                data-testid="india-find-talent-button"
                            >
                                Find India Talent
                                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </div>
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
                                data-testid={`india-role-${r.toLowerCase().replace(/[/\s()]+/g, "-")}`}
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

export default IndiaStaffing;
