const CLIENTS = [
    "JP Morgan Chase",
    "Bank One",
    "Citi Group",
    "Bank of America",
    "Discover",
    "Zurich",
    "Fannie Mae",
];

export const Clients = () => {
    return (
        <section
            id="clients"
            data-testid="clients-section"
            className="bg-white py-[48px] lg:py-[80px]"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center">
                    <div className="text-xs font-bold uppercase tracking-[0.25em] text-midasis-orange">
                        Trusted By
                    </div>
                    <h2 className="mx-auto mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-midasis-navy sm:text-4xl lg:text-5xl">
                        Industry Leaders Who Rely On Us
                    </h2>
                    <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-midasis-orange" />
                </div>

                <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
                    {CLIENTS.map((client) => (
                        <div
                            key={client}
                            data-testid={`client-badge-${client.toLowerCase().replace(/\s+/g, "-")}`}
                            className="rounded-xl border border-midasis-blue/30 bg-white px-7 py-5 font-heading text-base font-bold uppercase tracking-wide text-midasis-blue shadow-[0_4px_20px_rgba(36,120,197,0.10)] transition-all duration-300 hover:border-midasis-blue hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(36,120,197,0.18)] sm:text-lg"
                        >
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
