import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

/**
 * Shared template for all practice pages.
 *
 * Props:
 *  - meta: { title, description }            — page head meta
 *  - eyebrow: string                         — small uppercase label
 *  - headline: string                        — h1
 *  - subheadline: string                     — lead paragraph
 *  - capabilities: { title, desc }[]         — "What we deliver" cards
 *  - engagementModels: { title, desc }[]     — engagement model cards
 *  - technologies: string[]                  — tech chip list
 *  - cta: { label, intent }                  — primary CTA
 *  - caseStudyPlaceholder?: string           — placeholder text for case study
 */
export const PracticePage = ({
    meta,
    eyebrow,
    headline,
    subheadline,
    capabilities,
    engagementModels,
    technologies,
    cta,
    caseStudyPlaceholder,
}) => {
    const navigate = useNavigate();

    const goContact = () => navigate("/#contact");

    return (
        <div className="min-h-screen bg-white font-body text-midasis-body">
            {/* Meta — injected via document.title since no react-helmet */}
            <title>{meta?.title || "Midasis Technologies"}</title>

            <Navbar />

            {/* Hero */}
            <section className="bg-midasis-tint pt-36 pb-16 lg:pt-40 lg:pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="text-xs font-bold uppercase tracking-[0.25em] text-midasis-orange">
                            {eyebrow}
                        </div>
                        <h1 className="mt-4 font-heading text-4xl font-black leading-tight text-midasis-navy sm:text-5xl lg:text-6xl">
                            {headline}
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-midasis-body sm:text-lg">
                            {subheadline}
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Button
                                onClick={goContact}
                                className="group h-12 rounded-full bg-midasis-blue px-7 font-semibold text-white shadow-md transition-all duration-300 hover:bg-midasis-navy hover:shadow-lg"
                                data-testid="practice-cta-primary"
                            >
                                {cta?.label || "Get in Touch"}
                                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                            <Button
                                onClick={() => navigate("/")}
                                variant="outline"
                                className="h-12 rounded-full border-2 border-midasis-blue bg-transparent px-7 font-semibold text-midasis-blue transition-all duration-300 hover:bg-midasis-blue hover:text-white"
                                data-testid="practice-cta-back"
                            >
                                All Services
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* What we deliver */}
            <section className="bg-white py-[48px] lg:py-[80px]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-midasis-orange">
                        What We Deliver
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-midasis-navy sm:text-3xl lg:text-4xl">
                        Capabilities
                    </h2>
                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {capabilities.map((c, idx) => (
                            <div
                                key={c.title}
                                className="card-hover rounded-xl bg-white p-7"
                                style={{ border: "1px solid #EBF4FB" }}
                                data-testid={`capability-card-${idx}`}
                            >
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-midasis-orange" strokeWidth={2} />
                                    <div>
                                        <h3 className="font-heading text-base font-bold text-midasis-navy">{c.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-midasis-body">{c.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement Models */}
            <section className="bg-midasis-tint py-[48px] lg:py-[80px]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-midasis-orange">
                        How We Engage
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-midasis-navy sm:text-3xl lg:text-4xl">
                        Engagement Models
                    </h2>
                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {engagementModels.map((m, idx) => (
                            <div
                                key={m.title}
                                className="card-hover rounded-xl bg-white p-7"
                                data-testid={`engagement-card-${idx}`}
                            >
                                <h3 className="font-heading text-base font-bold text-midasis-navy">{m.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-midasis-body">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="bg-white py-[48px] lg:py-[80px]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-midasis-orange">
                        Technologies & Platforms
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-midasis-navy sm:text-3xl lg:text-4xl">
                        What We Work With
                    </h2>
                    <div className="mt-8 flex flex-wrap gap-2.5">
                        {technologies.map((t) => (
                            <span
                                key={t}
                                className="role-chip cursor-default rounded-full border border-midasis-blue/30 bg-white px-4 py-2 text-xs font-medium text-midasis-blue"
                                data-testid={`tech-chip-${t.toLowerCase().replace(/[\s/().]+/g, "-")}`}
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA banner */}
            <section className="relative overflow-hidden bg-midasis-blue py-[48px] lg:py-[64px]">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                        backgroundSize: "32px 32px",
                    }}
                />
                <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
                    <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                        Ready to get started?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
                        Tell us about your requirement and we'll get back within one business day.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            onClick={goContact}
                            className="group h-12 rounded-full bg-white px-8 font-semibold text-midasis-blue shadow-md transition-all hover:bg-midasis-tint hover:shadow-lg"
                            data-testid="practice-bottom-cta"
                        >
                            {cta?.label || "Get in Touch"}
                            <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PracticePage;
