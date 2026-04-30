"""Backend API tests for Midasis Technologies website.

Covers:
- Root endpoint
- Contact form: valid submit, invalid email, invalid requirement_type, missing fields
- List submissions and verify persistence
"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://staffing-hub-55.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"

VALID_REQUIREMENTS = [
    "US IT Staffing",
    "India IT Staffing",
    "IT Consulting",
    "General Inquiry",
]


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def _payload(**overrides):
    base = {
        "name": f"TEST_User_{uuid.uuid4().hex[:6]}",
        "email": f"test_{uuid.uuid4().hex[:6]}@example.com",
        "subject": "TEST Subject",
        "requirement_type": "US IT Staffing",
        "message": "TEST message body for automated tests.",
    }
    base.update(overrides)
    return base


# ============= Root =============
class TestRoot:
    def test_root_message(self, session):
        r = session.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Midasis" in data["message"]


# ============= Contact POST =============
class TestContactSubmit:
    def test_submit_valid(self, session):
        payload = _payload()
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["subject"] == payload["subject"]
        assert data["requirement_type"] == payload["requirement_type"]
        assert data["message"] == payload["message"]
        assert "created_at" in data

    @pytest.mark.parametrize("rtype", VALID_REQUIREMENTS)
    def test_submit_each_requirement_type(self, session, rtype):
        payload = _payload(requirement_type=rtype, subject=f"TEST {rtype}")
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, f"{rtype}: {r.text}"
        assert r.json()["requirement_type"] == rtype

    def test_invalid_email(self, session):
        payload = _payload(email="not-an-email")
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 422, r.text

    def test_invalid_requirement_type(self, session):
        payload = _payload(requirement_type="Invalid Type")
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 422, r.text

    @pytest.mark.parametrize("missing_field", ["name", "email", "subject", "requirement_type", "message"])
    def test_missing_required_field(self, session, missing_field):
        payload = _payload()
        payload.pop(missing_field)
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 422, f"{missing_field}: {r.text}"

    def test_empty_string_fields_rejected(self, session):
        payload = _payload(name="")
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 422


# ============= Contact GET / Persistence =============
class TestContactList:
    def test_list_and_persistence(self, session):
        # Create a unique submission
        unique_subject = f"TEST_PERSIST_{uuid.uuid4().hex[:8]}"
        payload = _payload(subject=unique_subject)
        post_resp = session.post(f"{API}/contact", json=payload)
        assert post_resp.status_code == 200
        created_id = post_resp.json()["id"]

        # GET list - verify persisted
        list_resp = session.get(f"{API}/contact")
        assert list_resp.status_code == 200
        items = list_resp.json()
        assert isinstance(items, list)
        match = [i for i in items if i.get("id") == created_id]
        assert len(match) == 1, "Submission not found in GET /api/contact"
        assert match[0]["subject"] == unique_subject
        # Make sure no _id leaks
        assert "_id" not in match[0]


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
