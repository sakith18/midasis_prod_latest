const CLIENTS = [
    {
        name: "JP Morgan Chase",
        logo: "/logo-jpmorgan.svg",
    },
    {
        name: "Citi Group",
        logo: "/logo-citi.svg",
    },
    {
        name: "Bank of America",
        logo: "/logo-boa.svg",
    },
    {
        name: "Discover",
        logo: "/logo-discover.svg",
    },
    {
        name: "Zurich",
        logo: "/logo-zurich.svg",
    },
    {
        name: "Fannie Mae",
        logo: "/logo-fanniemae.svg",
    },
    {
        name: "Bank One",
        logo: "/logo-bankone.svg",
    },
    {
        name: "Comtek",
        logo: "/comtek-logo.png",
    },
    {
        name: "Topgraph",
        logo: "/topgraph-logo.png",
    },
];

const ClientCard = ({ client }) => {
    if (!client.logo) {
        // Text badge for clients without a logo source
        return (
            <div
                data-testid={`client-badge-${client.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center justify-center rounded-xl border border-midasis-blue/20 bg-white px-7 py-5 shadow-[0_4px_20px_rgba(36,120,197,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-midasis-blue/40 hover:shadow-[0_8px_24px_rgba(36,120,197,0.16)]"
                style={{ minWidth: "140px", minHeight: "72px" }}
            >
                <span className="font-heading text-sm font-bold uppercase tracking-wide text-midasis-blue">
                    {client.name}
                </span>
            </div>
        );
    }

    return (
        <div
            data-testid={`client-badge-${client.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="flex items-center justify-center rounded-xl border border-midasis-blue/20 bg-white px-6 py-5 shadow-[0_4px_20px_rgba(36,120,197,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-midasis-blue/40 hover:shadow-[0_8px_24px_rgba(36,120,197,0.16)]"
            style={{ minWidth: "140px", minHeight: "72px" }}
        >
            <img
                src={client.logo}
                alt={client.name}
                className="max-h-10 max-w-[140px] object-contain grayscale transition-all duration-300 hover:grayscale-0"
                onError={(e) => {
                    // Fallback to text if image fails
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<span class="font-heading text-sm font-bold uppercase tracking-wide text-midasis-blue">${client.name}</span>`;
                }}
            />
        </div>
    );
};

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
                        <ClientCard key={client.name} client={client} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
