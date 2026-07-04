import PracticePage from "@/components/PracticePage";

export default function ITStaffing() {
    return (
        <PracticePage
            meta={{
                title: "IT Staffing — Midasis Technologies | Staff Augmentation & Permanent Placement",
                description: "Midasis Technologies provides IT staffing services across the US and India — contract, contract-to-hire, and direct placement for technology roles in BFSI, Healthcare, and more.",
            }}
            eyebrow="IT Staffing"
            headline="The Right Technology Talent, When You Need It"
            subheadline="Staff augmentation, contract-to-hire, and permanent placement across all major technology disciplines — with an average time-to-submit of 24–48 hours and coverage for all US work authorizations."
            capabilities={[
                {
                    title: "Staff Augmentation",
                    desc: "Short and long-term IT contractors placed at client sites or remotely across all major US states and India tech hubs. Flexible ramp-up and ramp-down with no overhead.",
                },
                {
                    title: "Contract-to-Hire",
                    desc: "Evaluate consultants on the job for 3–6 months before converting to full-time. Reduces hiring risk while ensuring team and cultural fit before permanent commitment.",
                },
                {
                    title: "Permanent / Direct Placement",
                    desc: "End-to-end retained and contingency search for permanent technology roles — from individual contributors to engineering leads and architects.",
                },
                {
                    title: "Offshore & India Staffing",
                    desc: "Dedicated offshore teams and individual placements across Hyderabad, Bengaluru, Chennai, Pune, Mumbai, and Delhi NCR at competitive rates.",
                },
                {
                    title: "Build-Operate-Transfer (BOT)",
                    desc: "Establish a captive technology delivery center in India — Midasis builds and operates the team before transferring full ownership to the client.",
                },
                {
                    title: "Domain-Specific Recruiting",
                    desc: "Specialized talent pipelines in BFSI, Healthcare, Retail, Manufacturing, and Energy — recruiters with hands-on domain knowledge, not just keyword matching.",
                },
            ]}
            engagementModels={[
                {
                    title: "Staff Augmentation",
                    desc: "Individual contractors or small teams on time-and-materials basis. Client retains day-to-day direction; Midasis handles HR, payroll, compliance, and visa management.",
                },
                {
                    title: "Dedicated Team",
                    desc: "A named team of engineers, QA, and project management aligned exclusively to your delivery program — operating as an extension of your internal team.",
                },
                {
                    title: "Retained Search",
                    desc: "Exclusive search partnership for hard-to-fill permanent roles. Dedicated recruiter, defined SLA, and replacement guarantee on all permanent placements.",
                },
            ]}
            technologies={[
                "Java / J2EE", ".NET / C#", "Python", "React", "Angular", "Vue.js",
                "Node.js", "Go", "AWS", "Azure", "GCP", "Kubernetes", "Terraform",
                "SAP", "Salesforce", "ServiceNow", "DevOps", "QA Automation",
                "Data Engineering", "AI / ML", "Cybersecurity",
            ]}
            cta={{ label: "Find Talent" }}
            caseStudyPlaceholder="[Client outcome / metric to be added — e.g., 'Placed 12 Java engineers for a Fortune 500 bank within 3 weeks, reducing time-to-fill by 40% vs. prior vendor.']"
        />
    );
}
