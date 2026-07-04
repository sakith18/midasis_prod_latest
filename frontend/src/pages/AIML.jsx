import PracticePage from "@/components/PracticePage";

export default function AIML() {
    return (
        <PracticePage
            meta={{
                title: "AI / ML Consulting — Midasis Technologies | GenAI, LLM Integration & MLOps",
                description: "Midasis Technologies delivers AI/ML engineering services — GenAI and LLM integration, MLOps pipelines, data science, and AI-augmented enterprise workflows for SAP, ERP, and custom platforms.",
            }}
            eyebrow="AI / ML"
            headline="Enterprise AI. Engineered for Production."
            subheadline="GenAI integration, LLM-powered applications, MLOps pipelines, and AI-augmented enterprise workflows — built by engineers with production experience, not just research backgrounds."
            capabilities={[
                {
                    title: "GenAI & LLM Integration",
                    desc: "Design and integration of large language model (LLM) applications using OpenAI GPT-4/o, Anthropic Claude, Google Gemini, and open-source models (LLaMA, Mistral) — with RAG pipelines, prompt engineering, and fine-tuning for enterprise use cases.",
                },
                {
                    title: "AI-Augmented Enterprise Workflows",
                    desc: "Integrating AI capabilities into existing enterprise systems — SAP, ERP, CRM, and custom applications. Examples: AI-assisted invoice processing, intelligent document extraction, demand forecasting, and anomaly detection in financial data.",
                },
                {
                    title: "Machine Learning Engineering",
                    desc: "End-to-end ML model development: feature engineering, model selection, training, evaluation, and deployment — using scikit-learn, XGBoost, PyTorch, and TensorFlow for classification, regression, NLP, and computer vision problems.",
                },
                {
                    title: "MLOps & Model Lifecycle Management",
                    desc: "CI/CD for ML models using MLflow, Kubeflow, SageMaker Pipelines, and Azure ML — covering model registry, versioning, A/B testing, drift monitoring, and automated retraining pipelines.",
                },
                {
                    title: "Data Engineering for AI",
                    desc: "Building reliable data pipelines, feature stores, and lakehouse architectures (Databricks, Snowflake, BigQuery) that serve as the foundation for repeatable, production-grade AI systems.",
                },
                {
                    title: "AI Strategy & Proof of Concept",
                    desc: "Rapid AI feasibility assessment and PoC delivery — helping organizations validate AI use cases against real data before committing to full-scale implementation budgets.",
                },
            ]}
            engagementModels={[
                {
                    title: "Staff Augmentation",
                    desc: "Embed ML engineers, data scientists, or AI architects into your team on a time-and-materials basis — accelerating specific initiatives without full-time hiring.",
                },
                {
                    title: "Dedicated AI Team",
                    desc: "A cross-functional AI team (ML engineers, data engineers, MLOps, domain SME) working exclusively on your AI program — from PoC through production deployment.",
                },
                {
                    title: "Project-Based SOW",
                    desc: "Fixed-scope AI engagements with defined use cases, success metrics, and delivery milestones — including PoC builds, production model deployments, and MLOps platform setups.",
                },
            ]}
            technologies={[
                "Python", "PyTorch", "TensorFlow", "scikit-learn", "XGBoost",
                "OpenAI GPT-4 / o", "Anthropic Claude", "Google Gemini",
                "LLaMA", "Mistral", "Hugging Face Transformers",
                "LangChain", "LlamaIndex", "RAG / Vector Databases",
                "Pinecone", "Weaviate", "pgvector", "ChromaDB",
                "MLflow", "Kubeflow", "SageMaker", "Azure ML", "Vertex AI",
                "Apache Spark", "Databricks", "Snowflake", "BigQuery",
                "Airflow", "dbt", "Kafka", "FastAPI",
            ]}
            cta={{ label: "Start an AI Engagement" }}
            caseStudyPlaceholder="[Client outcome / metric to be added — e.g., 'Built a RAG-based document intelligence system for a financial services firm, reducing manual document review time by 75% across 50,000+ documents per month.']"
        />
    );
}
