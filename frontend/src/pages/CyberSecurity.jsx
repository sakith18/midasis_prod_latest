import PracticePage from "@/components/PracticePage";

export default function CyberSecurity() {
    return (
        <PracticePage
            meta={{
                title: "Cybersecurity Services — Midasis Technologies | VAPT, SOC, IAM & Red Teaming",
                description: "Midasis Technologies delivers end-to-end cybersecurity services — VAPT, SOC, IAM, Red Teaming, compliance & risk management, and managed security services for enterprise clients.",
            }}
            eyebrow="Cybersecurity"
            headline="Protect What You've Built. Stay Ahead of Threats."
            subheadline="End-to-end cybersecurity services delivered by certified professionals — from testing your defenses with VAPT and Red Teaming to operating a 24/7 SOC and achieving regulatory compliance."
            capabilities={[
                {
                    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
                    desc: "Identify and remediate security weaknesses across networks, web applications, APIs, mobile apps, and cloud environments before attackers exploit them. Delivered against OWASP, PTES, and NIST frameworks.",
                },
                {
                    title: "Security Operations Center (SOC)",
                    desc: "24/7 threat monitoring, detection, triage, and incident response powered by advanced SIEM and SOAR platforms — keeping your infrastructure protected around the clock.",
                },
                {
                    title: "Identity & Access Management (IAM)",
                    desc: "Design and implement IAM frameworks covering SSO, MFA, PAM, and Zero Trust architecture — ensuring the right people access the right resources under the principle of least privilege.",
                },
                {
                    title: "Red Teaming",
                    desc: "Simulate real-world adversarial attack scenarios against your organization's people, processes, and technology to uncover gaps that automated scanning and standard VAPT miss.",
                },
                {
                    title: "Compliance & Risk Management",
                    desc: "Navigate complex regulatory requirements — SOC 2, ISO 27001, HIPAA, PCI-DSS, and NIST CSF — with expert advisory, gap assessments, policy development, and audit-readiness support.",
                },
                {
                    title: "Managed Security Services",
                    desc: "Fully managed end-to-end security operations: threat intelligence, log management, patch governance, vulnerability management, and regular executive-level security reporting.",
                },
            ]}
            engagementModels={[
                {
                    title: "Staff Augmentation",
                    desc: "Embed individual security professionals (SOC analysts, pen testers, IAM architects, compliance specialists) within your team on a time-and-materials basis for specific initiatives.",
                },
                {
                    title: "Dedicated Security Team",
                    desc: "A named cross-functional security team aligned to your program — covering offensive security, defensive operations, and compliance — operating as an extension of your security function.",
                },
                {
                    title: "Project-Based SOW",
                    desc: "Fixed-scope security engagements with defined deliverables — VAPT assessments, Red Team exercises, IAM implementations, SOC buildouts, or compliance readiness programs.",
                },
            ]}
            technologies={[
                "Kali Linux", "Burp Suite", "Metasploit", "Nessus", "Qualys",
                "Splunk", "IBM QRadar", "Microsoft Sentinel", "Elastic SIEM",
                "CrowdStrike Falcon", "SentinelOne", "Palo Alto Cortex XDR",
                "Okta", "Azure AD / Entra ID", "CyberArk", "BeyondTrust",
                "HashiCorp Vault", "OWASP ZAP", "Wireshark", "Snort",
                "SOC 2", "ISO 27001", "NIST CSF", "PCI-DSS", "HIPAA",
            ]}
            cta={{ label: "Discuss Your Security Needs" }}
            caseStudyPlaceholder="[Client outcome / metric to be added — e.g., 'Conducted a full Red Team engagement for a US financial services firm, identifying 3 critical attack paths to crown jewels that had been missed in prior annual pen tests.']"
        />
    );
}
