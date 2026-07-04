import PracticePage from "@/components/PracticePage";

export default function DevOps() {
    return (
        <PracticePage
            meta={{
                title: "DevOps Consulting — Midasis Technologies | CI/CD, Cloud Migration & SRE",
                description: "Midasis Technologies provides DevOps consulting services — CI/CD pipeline design, infrastructure automation, cloud migration, SRE practices, and observability on AWS, Azure, and GCP.",
            }}
            eyebrow="DevOps"
            headline="Accelerate Delivery. Automate Infrastructure. Reduce Risk."
            subheadline="CI/CD pipelines, infrastructure-as-code, cloud migration, SRE practices, and observability engineering — helping organizations ship faster and operate more reliably at any scale."
            capabilities={[
                {
                    title: "CI/CD Pipeline Design & Implementation",
                    desc: "End-to-end pipeline design and implementation using Jenkins, GitHub Actions, GitLab CI, CircleCI, and ArgoCD — including build, test, security scan, and deployment automation.",
                },
                {
                    title: "Infrastructure as Code (IaC)",
                    desc: "Terraform, Ansible, Pulumi, and AWS CloudFormation for repeatable, version-controlled infrastructure provisioning across cloud and on-premise environments.",
                },
                {
                    title: "Cloud Migration & Modernization",
                    desc: "Assessment, planning, and execution of cloud migration programs to AWS, Azure, and GCP — covering lift-and-shift, re-platforming, and cloud-native refactoring strategies.",
                },
                {
                    title: "Container Orchestration & Kubernetes",
                    desc: "Docker containerization, Kubernetes cluster design (EKS, AKS, GKE), Helm chart development, service mesh implementation (Istio/Linkerd), and GitOps workflows.",
                },
                {
                    title: "Site Reliability Engineering (SRE)",
                    desc: "SLO/SLA definition, error budget management, chaos engineering, incident response runbooks, and on-call process design — improving reliability without slowing delivery.",
                },
                {
                    title: "Observability & Monitoring",
                    desc: "Full-stack observability implementation: metrics (Prometheus/Grafana), logging (ELK/Splunk), tracing (Jaeger/OpenTelemetry), and alerting — with actionable dashboards and runbooks.",
                },
            ]}
            engagementModels={[
                {
                    title: "Staff Augmentation",
                    desc: "Embed DevOps engineers or SREs into your engineering organization on a time-and-materials basis — for pipeline work, platform migrations, or ongoing operational support.",
                },
                {
                    title: "Dedicated Platform Team",
                    desc: "A cross-functional platform engineering team (DevOps leads, SREs, cloud architects) operating as your internal platform team — managing CI/CD, cloud infrastructure, and reliability.",
                },
                {
                    title: "Project-Based SOW",
                    desc: "Fixed-scope DevOps engagements — pipeline migrations, cloud landing zone builds, Kubernetes cluster setups, or observability platform rollouts — with defined milestones and deliverables.",
                },
            ]}
            technologies={[
                "Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "ArgoCD", "Tekton",
                "Terraform", "Ansible", "Pulumi", "AWS CloudFormation",
                "Docker", "Kubernetes", "Helm", "Istio", "Linkerd",
                "AWS (EKS, EC2, RDS, S3, Lambda)", "Azure (AKS, App Service, DevOps)",
                "GCP (GKE, Cloud Run, Cloud Build)",
                "Prometheus", "Grafana", "ELK Stack", "Splunk", "Jaeger", "OpenTelemetry",
                "Vault", "SonarQube", "Snyk", "Trivy",
            ]}
            cta={{ label: "Start a DevOps Engagement" }}
            caseStudyPlaceholder="[Client outcome / metric to be added — e.g., 'Reduced deployment frequency from bi-weekly to daily for a fintech platform by implementing GitOps-based CI/CD, cutting release lead time by 70%.']"
        />
    );
}
