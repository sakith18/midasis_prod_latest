import PracticePage from "@/components/PracticePage";

export default function AppDevelopment() {
    return (
        <PracticePage
            meta={{
                title: "Application Development — Midasis Technologies | Full Stack, Mobile & Cloud-Native",
                description: "Midasis Technologies delivers full stack, mobile, and cloud-native application development across Java, .NET, React, Python, and cloud platforms on staff augmentation, dedicated team, and project SOW engagements.",
            }}
            eyebrow="Application Development"
            headline="Software Delivery From Prototype to Production"
            subheadline="We design, build, and maintain web applications, mobile apps, APIs, and cloud-native platforms — working across modern stacks on staff augmentation, dedicated team, and fixed-scope project engagements."
            capabilities={[
                {
                    title: "Full Stack Web Development",
                    desc: "End-to-end web application development using Java/Spring Boot, .NET Core, Node.js, React, Angular, and Vue.js — from architecture design through production deployment.",
                },
                {
                    title: "Mobile Application Development",
                    desc: "Native iOS (Swift), Android (Kotlin), and cross-platform (React Native, Flutter) mobile development for consumer and enterprise use cases.",
                },
                {
                    title: "Cloud-Native Architecture",
                    desc: "Microservices design, containerization (Docker/Kubernetes), serverless functions, and cloud-native development on AWS, Azure, and GCP.",
                },
                {
                    title: "API Design & Integration",
                    desc: "RESTful and GraphQL API development, third-party integration (Salesforce, SAP, payment gateways), and middleware development using MuleSoft and Apache Camel.",
                },
                {
                    title: "QA & Test Automation",
                    desc: "Automated testing strategy and implementation using Selenium, Playwright, Cypress, and JMeter — integrated into CI/CD pipelines for continuous quality assurance.",
                },
                {
                    title: "Application Modernization",
                    desc: "Migrating legacy monolithic applications to modern cloud-native architectures — assessment, re-platforming, refactoring, and phased migration planning.",
                },
            ]}
            engagementModels={[
                {
                    title: "Staff Augmentation",
                    desc: "Embed individual developers or small squads into your existing engineering team on a time-and-materials basis. Suitable for teams that need specific skills or additional capacity.",
                },
                {
                    title: "Dedicated Development Team",
                    desc: "A cross-functional team (frontend, backend, QA, DevOps) working exclusively on your product. Operates as an extension of your engineering organization with transparent reporting.",
                },
                {
                    title: "Project-Based SOW",
                    desc: "Fixed-scope, fixed-price delivery for well-defined projects with clear requirements. Includes milestones, acceptance criteria, and Midasis-managed delivery accountability.",
                },
            ]}
            technologies={[
                "Java / Spring Boot", ".NET Core / C#", "Python / Django / FastAPI",
                "Node.js", "React", "Angular", "Vue.js", "TypeScript",
                "Swift / iOS", "Kotlin / Android", "React Native", "Flutter",
                "AWS", "Azure", "GCP", "Docker", "Kubernetes",
                "PostgreSQL", "MongoDB", "Redis", "Kafka",
                "GraphQL", "REST APIs", "MuleSoft", "Selenium", "Playwright",
            ]}
            cta={{ label: "Start a Project" }}
            caseStudyPlaceholder="[Client outcome / metric to be added — e.g., 'Delivered a cloud-native claims processing platform for a US insurer in 6 months, reducing manual processing time by 60%.']"
        />
    );
}
