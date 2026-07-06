import PracticePage from "@/components/PracticePage";

export default function SAP() {
    return (
        <PracticePage
            meta={{
                title: "ERP / SAP Consulting — Midasis Technologies | S/4HANA, ABAP, BTP & ERP Implementation",
                description: "Midasis Technologies delivers SAP and ERP consulting — S/4HANA migrations, ABAP development, BTP integrations, ERP implementation across SAP, Oracle and Microsoft Dynamics, data migration, and AMS support.",
            }}
            eyebrow="ERP / SAP"
            headline="ERP / SAP Delivery From Implementation to Optimization"
            subheadline="Full-spectrum SAP and ERP consulting — S/4HANA migrations, functional and technical SAP delivery, ERP implementation across Oracle and Microsoft Dynamics, system integration, data migration, and post-go-live support."
            capabilities={[
                {
                    title: "S/4HANA Migration & Upgrade",
                    desc: "End-to-end S/4HANA greenfield, brownfield, and selective data transition programs — including pre-migration assessment, data cleansing, conversion, and cutover management.",
                },
                {
                    title: "Functional SAP Consulting (FICO, SD, MM, HCM, PP)",
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
                    title: "ERP Implementation (Oracle & Microsoft Dynamics)",
                    desc: "Full lifecycle ERP implementation covering requirements, configuration, customization, UAT, training, and go-live management across Oracle ERP Cloud, E-Business Suite, and Microsoft Dynamics 365.",
                },
                {
                    title: "ERP Selection & Roadmap Planning",
                    desc: "Vendor evaluation, fit-gap analysis, total cost of ownership modeling, and implementation roadmap definition — helping organizations select and plan ERP programs with confidence.",
                },
                {
                    title: "System Integration & Middleware",
                    desc: "Connecting ERP platforms to third-party systems (CRM, WMS, e-commerce, banking) via REST/SOAP APIs, MuleSoft, Dell Boomi, Azure Integration Services, and EDI.",
                },
                {
                    title: "Data Migration",
                    desc: "Structured data migration programs covering extraction, cleansing, transformation, and load — with data quality validation and parallel-run support during cutover.",
                },
                {
                    title: "AMS & Post-Go-Live Support",
                    desc: "Ongoing application management and support covering incident resolution, change requests, minor enhancements, performance tuning, and system monitoring — delivered under defined SLAs.",
                },
            ]}
            engagementModels={[
                {
                    title: "Staff Augmentation",
                    desc: "Individual SAP or ERP consultants (functional, technical, or project management) placed within your internal team or systems integrator on a time-and-materials basis.",
                },
                {
                    title: "Dedicated SAP / ERP Team",
                    desc: "A named cross-functional team covering functional configuration, technical development, integration, and project management — aligned exclusively to your program timeline.",
                },
                {
                    title: "Project-Based SOW",
                    desc: "Fixed-scope engagements with defined deliverables and milestones — module implementations, migration programs, integration projects, or AMS contracts with agreed SLAs.",
                },
            ]}
            technologies={[
                "SAP S/4HANA", "SAP ECC", "SAP FICO", "SAP SD", "SAP MM",
                "SAP HCM", "SAP PP", "SAP QM", "SAP PM",
                "ABAP", "ABAP OO", "ABAP RAP", "SAP BTP",
                "SAP Integration Suite / CPI", "SAP API Management",
                "SAP Fiori", "SAP UI5", "SAP HANA DB",
                "SAP Basis", "SAP Ariba", "SAP SuccessFactors",
                "Oracle ERP Cloud", "Oracle E-Business Suite",
                "Microsoft Dynamics 365", "Microsoft Dynamics AX",
                "MuleSoft", "Dell Boomi", "Azure Integration Services",
                "Informatica", "Talend", "SSIS", "OData", "EDI",
            ]}
            cta={{ label: "Discuss Your SAP / ERP Needs" }}
        />
    );
}
