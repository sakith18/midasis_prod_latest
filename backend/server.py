from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Literal, Optional
import uuid
from datetime import datetime, timezone
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import aiosmtplib


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ============= Email =============
NOTIFY_EMAIL = "sakithreddy@gmail.com"

async def send_contact_email(submission: "ContactSubmission") -> None:
    """Send notification email to NOTIFY_EMAIL when a contact form is submitted."""
    smtp_host = os.environ.get("SMTP_HOST", "")
    smtp_port = int(os.environ.get("SMTP_PORT", "587"))
    smtp_user = os.environ.get("SMTP_USER", "")
    smtp_pass = os.environ.get("SMTP_PASS", "")

    if not smtp_host or not smtp_user or not smtp_pass:
        logger.warning("SMTP not configured — skipping email notification.")
        return

    sms_status = "Yes ✓" if submission.sms_opt_in else "No"
    phone_display = submission.phone or "Not provided"

    html_body = f"""
    <html><body style="font-family:Arial,sans-serif;color:#333;max-width:600px;margin:0 auto;">
      <div style="background:#0D2B4E;padding:20px 30px;border-radius:8px 8px 0 0;">
        <h2 style="color:#fff;margin:0;">New Contact Form Submission</h2>
        <p style="color:#2478C5;margin:4px 0 0;">Midasis Technologies Website</p>
      </div>
      <div style="border:1px solid #ddd;border-top:none;padding:24px 30px;border-radius:0 0 8px 8px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0f0;width:160px;color:#666;font-size:13px;">Name</td>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-weight:bold;">{submission.name}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:13px;">Email</td>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;"><a href="mailto:{submission.email}">{submission.email}</a></td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:13px;">Phone</td>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;">{phone_display}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:13px;">Subject</td>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;">{submission.subject}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:13px;">Requirement</td>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;">{submission.requirement_type}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:13px;">SMS Opt-In</td>
              <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;">{sms_status}</td></tr>
          <tr><td style="padding:8px 0;color:#666;font-size:13px;vertical-align:top;">Message</td>
              <td style="padding:8px 0;white-space:pre-wrap;">{submission.message}</td></tr>
        </table>
        <p style="margin-top:24px;font-size:12px;color:#999;">
          Submitted: {submission.created_at.strftime("%B %d, %Y at %I:%M %p UTC")}
        </p>
      </div>
    </body></html>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"[Midasis] New Inquiry: {submission.subject} — {submission.requirement_type}"
    msg["From"] = smtp_user
    msg["To"] = NOTIFY_EMAIL
    msg["Reply-To"] = submission.email
    msg.attach(MIMEText(html_body, "html"))

    try:
        await aiosmtplib.send(
            msg,
            hostname=smtp_host,
            port=smtp_port,
            username=smtp_user,
            password=smtp_pass,
            start_tls=True,
        )
        logger.info(f"Contact notification email sent for submission {submission.id}")
    except Exception as e:
        logger.error(f"Failed to send contact notification email: {e}")
        # Don't raise — email failure should not block form submission


# ============= Models =============
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactSubmissionCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=30)
    subject: str = Field(..., min_length=1, max_length=200)
    requirement_type: Literal[
        "IT Staffing — Hire Talent",
        "Application Development — Start a Project",
        "SAP Consulting",
        "DevOps Consulting",
        "ERP Consulting",
        "AI / ML Engagement",
        "Cybersecurity",
        "General Inquiry",
    ]
    message: str = Field(..., min_length=1, max_length=4000)
    sms_opt_in: bool = False


class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    subject: str
    requirement_type: str
    message: str
    sms_opt_in: bool = False
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ============= Routes =============
@api_router.get("/")
async def root():
    return {"message": "Midasis Technologies API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.post("/contact", response_model=ContactSubmission)
async def submit_contact(payload: ContactSubmissionCreate):
    """Save a contact form submission from the website."""
    try:
        submission = ContactSubmission(
            name=payload.name.strip(),
            email=str(payload.email).strip(),
            phone=payload.phone.strip() if payload.phone else None,
            subject=payload.subject.strip(),
            requirement_type=payload.requirement_type,
            message=payload.message.strip(),
            sms_opt_in=payload.sms_opt_in,
        )
        doc = submission.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        await db.contact_submissions.insert_one(doc)
        # Send email notification (non-blocking — failure won't affect response)
        await send_contact_email(submission)
        return submission
    except Exception as e:
        logger.error(f"Error saving contact submission: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit contact request")


@api_router.get("/contact", response_model=List[ContactSubmission])
async def list_contact_submissions():
    submissions = await db.contact_submissions.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for s in submissions:
        if isinstance(s.get('created_at'), str):
            s['created_at'] = datetime.fromisoformat(s['created_at'])
    return submissions


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
