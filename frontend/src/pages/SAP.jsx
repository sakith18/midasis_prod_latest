import PracticePage from "@/components/PracticePage";

export default function SAP() {
    return (
        <PracticePage
            meta={{
                title: "SAP Consulting — Midasis Technologies | S/4HANA, ABAP & BTP",
                description: "Midasis Technologies provides SAP staffing and consulting — S/4HANA migrations, greenfield implementations, ABAP development, BTP integrations, and AMS support.",
            }}
            eyebrow="SAP"
            headline="SAP Delivery From Implementation to Optimization"
            subheadline="Functional and technical SAP consulting across S/4HANA implementations, ABAP development, BTP integrations, and AMS support — delivered by certified consultants with deep module expertise."
            capabilities={[
                {
                    title: "S/4HANA Migration & Upgrade",
                    desc: "End-to-end S/4HANA greenfield, brownfield, and selective data transition programs — including pre-migration assessment, data cleansing, conversion, and cutover management.",
                },
                {
                    title: "Functional Consulting (FICO, SD, MM, HCM, PP)",
                    desc: "Business process design, configuration, and testing across SAP Finance (FICO), Sales & Distribution (SD), Materials Management (MM), Human Capital Management (HCM), and Production Planning (PP).",
                },
                {
                    title: "ABAP & Technical Development",
                    desc: "Custom ABAP development, enhancement frameworks (BAdIs, exits, implicit enhancements), ABAP OO, ABAP RESTful Application Programming Model (RAP), and performance tuning.",
                },
                {
                    title: "SAP BTP & Integration Suite",
                    desc: "Integration development on SAP Business Technology Platform — CPI/Integration Suite flows, API Management, Extension Suite apps, and hybrid integration architectures.",
                },
                {
                    title: "SAP Fiori & UI5",
                    desc: "Custom Fiori application development, Fiori launchpad configuration, and SAP UI5 development for modern, role-based user experiences on S/4HANA.",
                },
                {
                    title: "AMS & Post-Go-Live Support",
                    desc: "Application management and support services including incident resolution, change requests, minor enhancements, and system monitoring — structured around defined SLAs.",
                },
            ]}
            engagementModels={[
                {
                    title: "Staff Augmentation",
                    desc: "Individual SAP consultants (functional or technical) placed within your internal SAP team or systems integrator on a time-and-materials basis for project or support needs.",
                },
                {
                    title: "Dedicated SAP Team",
                    desc: "A named team of functional and technical SAP consultants aligned to your program — covering multiple modules with a defined delivery lead and transparent reporting.",
                },
                {
                    title: "Project-Based SOW",
                    desc: "Fixed-scope SAP engagements with defined deliverables — module implementations, migration programs, integration development, or AMS contracts with agreed SLAs.",
                },
            ]}
            technologies={[
                "SAP S/4HANA", "SAP ECC", "SAP FICO", "SAP SD", "SAP MM",
                "SAP HCM", "SAP PP", "SAP QM", "SAP PM",
                "ABAP", "ABAP OO", "ABAP RAP", "SAP BTP",
                "SAP Integration Suite / CPI", "SAP API Management",
                "SAP Fiori", "SAP UI5", "SAP HANA DB",
                "SAP Basis", "SAP GTS", "SAP Ariba", "SAP SuccessFactors",
            ]}
            cta={{ label: "Discuss Your SAP Needs" }}
            caseStudyPlaceholder="[Client outcome / metric to be added — e.g., 'Supported a global manufacturing company's S/4HANA greenfield implementation across 3 countries, on time and within budget.']"
        />
    );
}
