import PracticePage from "@/components/PracticePage";

export default function ERP() {
    return (
        <PracticePage
            meta={{
                title: "ERP Consulting — Midasis Technologies | Implementation, Integration & Support",
                description: "Midasis Technologies delivers end-to-end ERP consulting services — implementation, integration, data migration, and lifecycle support across SAP, Oracle, Microsoft Dynamics, and other platforms.",
            }}
            eyebrow="ERP"
            headline="ERP Programs Delivered. Operations Optimized."
            subheadline="End-to-end ERP consulting from initial planning through post-go-live optimization — covering implementation, integration, data migration, and managed support across major enterprise platforms."
            capabilities={[
                {
                    title: "ERP Selection & Roadmap Planning",
                    desc: "Vendor evaluation, fit-gap analysis, total cost of ownership modeling, and implementation roadmap definition — helping organizations select and plan ERP programs with confidence.",
                },
                {
                    title: "ERP Implementation",
                    desc: "Full lifecycle ERP implementation covering requirements, configuration, customization, user acceptance testing, training, and go-live management — across SAP, Oracle, and Microsoft Dynamics.",
                },
                {
                    title: "System Integration & Middleware",
                    desc: "Connecting ERP platforms to third-party systems (CRM, WMS, e-commerce, banking) via REST/SOAP APIs, middleware platforms (MuleSoft, Dell Boomi, Azure Integration Services), and EDI.",
                },
                {
                    title: "Data Migration",
                    desc: "Structured data migration programs covering extraction, cleansing, transformation, and load — with data quality validation and parallel-run support during cutover.",
                },
                {
                    title: "Post-Go-Live Optimization",
                    desc: "System performance tuning, process re-engineering, user adoption programs, and incremental enhancements following go-live to maximize return on ERP investment.",
                },
                {
                    title: "Application Management & Support (AMS)",
                    desc: "Ongoing ERP support services covering incident management, change requests, minor enhancements, and release management — delivered under defined SLAs.",
                },
            ]}
            engagementModels={[
                {
                    title: "Staff Augmentation",
                    desc: "Individual ERP consultants (functional, technical, or project management) placed within your internal team or systems integrator on a time-and-materials basis.",
                },
                {
                    title: "Dedicated ERP Team",
                    desc: "A named cross-functional ERP team covering functional configuration, technical development, integration, and project management — aligned to your program timeline.",
                },
                {
                    title: "Project-Based SOW",
                    desc: "Fixed-scope ERP engagements with defined deliverables, milestones, and acceptance criteria — including implementation phases, integration projects, and AMS contracts.",
                },
            ]}
            technologies={[
                "SAP S/4HANA", "SAP ECC", "Oracle ERP Cloud", "Oracle E-Business Suite",
                "Microsoft Dynamics 365", "Microsoft Dynamics AX",
                "MuleSoft", "Dell Boomi", "Azure Integration Services",
                "Informatica", "Talend", "SSIS",
                "SQL Server", "Oracle DB", "SAP HANA",
                "REST / SOAP APIs", "EDI", "OData",
            ]}
            cta={{ label: "Discuss Your ERP Program" }}
            caseStudyPlaceholder="[Client outcome / metric to be added — e.g., 'Supported a global retailer's Oracle to SAP S/4HANA migration covering 5 business units, completing data migration for 8M+ records on schedule.']"
        />
    );
}
