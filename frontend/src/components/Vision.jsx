export const Vision = () => {
    return (
        <section
            id="vision"
            data-testid="vision-section"
            className="relative overflow-hidden bg-midasis-blue py-[48px] lg:py-[80px]"
        >
            {/* Subtle pattern overlay */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                }}
            />
            <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-midasis-orange">
                    Our Vision
                </div>
                <h2 className="mt-5 font-heading text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                    People. Ideas. Technology.
                </h2>
                <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                    Midasis brings people, ideas, and technology together to create superior
                    solutions for clients who view our partnership as a strategic driver for
                    their success. We believe meeting client expectations is the foundation
                    of every solid relationship — achieved by continuously identifying needs
                    and improving our solutions across a wide spectrum of technologies, tools,
                    and domains.
                </p>
            </div>
        </section>
    );
};

export default Vision;
