import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { MapPin, Mail, Send, Loader2, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

// ── EmailJS config ──────────────────────────────────────────────
// Sign up free at https://emailjs.com, connect Gmail, then paste your keys:
const EMAILJS_SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID  || "service_xot4964";
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_sxvytdl";
const EMAILJS_PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY  || "vHZgNcX43TCczwkn5";


const OFFICES = [
    {
        title: "USA — Headquarters",
        lines: [
            "2815 2nd Ave, Suite 550,",
            "Office No. 518, Register 09,",
            "Seattle, WA 98121,",
            "United States",
        ],
        email: "contact@midasistechnologies.com",
    },
    {
        title: "India Office",
        lines: [
            "Flat No. 301-B, Park View Edifice,",
            "Nandagiri Co-Op Housing Society Limited,",
            "Jubilee Main Road, Journalist Colony,",
            "Jubilee Hills, Hyderabad,",
            "Telangana 500033, India",
        ],
        email: null,
    },
];

const REQUIREMENT_TYPES = [
    "IT Staffing — Hire Talent",
    "Application Development — Start a Project",
    "SAP Consulting",
    "DevOps Consulting",
    "ERP Consulting",
    "AI / ML Engagement",
    "Cybersecurity",
    "General Inquiry",
];

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        requirement_type: "",
        message: "",
    });
    const [smsOptIn, setSmsOptIn] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.subject || !form.requirement_type || !form.message) {
            toast.error("Please fill in all required fields.");
            return;
        }
        setSubmitting(true);
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name:        form.name,
                    from_email:       form.email,
                    phone:            form.phone || "Not provided",
                    subject:          form.subject,
                    requirement_type: form.requirement_type,
                    message:          form.message,
                    sms_opt_in:       smsOptIn ? "Yes" : "No",
                    to_email:         "sakithreddy@gmail.com",
                },
                EMAILJS_PUBLIC_KEY
            );
            toast.success("Thank you! Your message has been sent. We'll be in touch shortly.");
            setForm({ name: "", email: "", phone: "", subject: "", requirement_type: "", message: "" });
            setSmsOptIn(false);
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong. Please try again or email us directly.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white font-body text-midasis-body">
            <Navbar />

            {/* Page hero */}
            <section className="bg-midasis-tint pt-36 pb-12 lg:pt-40 lg:pb-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-xs font-bold uppercase tracking-[0.25em] text-midasis-orange">
                        Reach Us
                    </div>
                    <h1 className="mt-4 font-heading text-4xl font-black leading-tight text-midasis-navy sm:text-5xl lg:text-6xl">
                        Contact Us
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-midasis-body sm:text-lg">
                        Whether you need to hire talent or start a technology project — reach out to our US headquarters or India office, or use the form below.
                    </p>
                </div>
            </section>

            {/* Main content */}
            <section className="bg-white py-[48px] lg:py-[80px]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-5">

                        {/* Office Cards */}
                        <div className="space-y-5 lg:col-span-2">
                            {OFFICES.map((o, idx) => (
                                <div
                                    key={o.title}
                                    className="contact-card rounded-xl bg-white p-6"
                                    data-testid={`office-card-${idx}`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-midasis-tint">
                                            <MapPin size={20} className="text-midasis-blue" strokeWidth={2.2} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-heading text-base font-bold text-midasis-navy">
                                                {o.title}
                                            </h3>
                                            <div className="mt-2 space-y-0.5 text-sm leading-relaxed text-midasis-body">
                                                {o.lines.map((line, i) => (
                                                    <p key={i}>{line}</p>
                                                ))}
                                            </div>
                                            {o.email && (
                                                <a
                                                    href={`mailto:${o.email}`}
                                                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-midasis-blue hover:text-midasis-orange"
                                                    data-testid={`office-email-${idx}`}
                                                >
                                                    <Mail size={14} />
                                                    {o.email}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Phone */}
                            <div className="contact-card rounded-xl bg-white p-6">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-midasis-tint">
                                        <Phone size={20} className="text-midasis-blue" strokeWidth={2.2} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-heading text-base font-bold text-midasis-navy">Phone</h3>
                                        <a
                                            href="mailto:contact@midasistechnologies.com"
                                            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-midasis-blue hover:text-midasis-orange"
                                        >
                                            <Mail size={14} />
                                            contact@midasistechnologies.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <form
                                onSubmit={handleSubmit}
                                className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(36,120,197,0.10)] sm:p-8"
                                data-testid="contact-form"
                            >
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="contact-name" className="text-sm font-semibold text-midasis-navy">Name *</Label>
                                        <Input
                                            id="contact-name"
                                            value={form.name}
                                            onChange={update("name")}
                                            placeholder="Your full name"
                                            className="h-11 border-midasis-tint bg-white focus-visible:ring-midasis-blue"
                                            data-testid="contact-name-input"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="contact-email" className="text-sm font-semibold text-midasis-navy">Email *</Label>
                                        <Input
                                            id="contact-email"
                                            type="email"
                                            value={form.email}
                                            onChange={update("email")}
                                            placeholder="you@company.com"
                                            className="h-11 border-midasis-tint bg-white focus-visible:ring-midasis-blue"
                                            data-testid="contact-email-input"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mt-5 space-y-1.5">
                                    <Label htmlFor="contact-phone" className="text-sm font-semibold text-midasis-navy">
                                        Phone Number <span className="font-normal text-midasis-body/60">(optional)</span>
                                    </Label>
                                    <Input
                                        id="contact-phone"
                                        type="tel"
                                        value={form.phone}
                                        onChange={update("phone")}
                                        placeholder="+1 (555) 000-0000"
                                        className="h-11 border-midasis-tint bg-white focus-visible:ring-midasis-blue"
                                        data-testid="contact-phone-input"
                                    />
                                </div>

                                <div className="mt-5 space-y-1.5">
                                    <Label htmlFor="contact-subject" className="text-sm font-semibold text-midasis-navy">Subject *</Label>
                                    <Input
                                        id="contact-subject"
                                        value={form.subject}
                                        onChange={update("subject")}
                                        placeholder="How can we help?"
                                        className="h-11 border-midasis-tint bg-white focus-visible:ring-midasis-blue"
                                        data-testid="contact-subject-input"
                                        required
                                    />
                                </div>

                                <div className="mt-5 space-y-1.5">
                                    <Label htmlFor="contact-requirement" className="text-sm font-semibold text-midasis-navy">Requirement Type *</Label>
                                    <Select
                                        value={form.requirement_type}
                                        onValueChange={(v) => setForm({ ...form, requirement_type: v })}
                                    >
                                        <SelectTrigger
                                            id="contact-requirement"
                                            className="h-11 border-midasis-tint bg-white focus:ring-midasis-blue"
                                            data-testid="contact-requirement-trigger"
                                        >
                                            <SelectValue placeholder="Select a requirement type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {REQUIREMENT_TYPES.map((t) => (
                                                <SelectItem
                                                    key={t}
                                                    value={t}
                                                    data-testid={`contact-requirement-${t.toLowerCase().replace(/\s+/g, "-")}`}
                                                >
                                                    {t}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="mt-5 space-y-1.5">
                                    <Label htmlFor="contact-message" className="text-sm font-semibold text-midasis-navy">Message *</Label>
                                    <Textarea
                                        id="contact-message"
                                        value={form.message}
                                        onChange={update("message")}
                                        placeholder="Tell us a bit about your requirement..."
                                        rows={5}
                                        className="border-midasis-tint bg-white focus-visible:ring-midasis-blue"
                                        data-testid="contact-message-input"
                                        required
                                    />
                                </div>

                                {/* SMS Opt-In */}
                                <div className="mt-5 rounded-xl border border-midasis-tint bg-midasis-tint/40 p-4">
                                    <div className="flex items-start gap-3">
                                        <Checkbox
                                            id="sms-opt-in"
                                            checked={smsOptIn}
                                            onCheckedChange={(checked) => setSmsOptIn(!!checked)}
                                            className="mt-0.5 flex-shrink-0 border-midasis-blue data-[state=checked]:bg-midasis-blue data-[state=checked]:border-midasis-blue"
                                            data-testid="sms-opt-in-checkbox"
                                        />
                                        <label htmlFor="sms-opt-in" className="cursor-pointer text-xs leading-relaxed text-midasis-body">
                                            By opting in for text messages, you agree to receive appointment reminders and
                                            important updates from MIDASIS TECHNOLOGIES at the number provided. Message
                                            frequency varies. Msg &amp; data rates may apply. Reply STOP to unsubscribe.
                                            Reply HELP for help. View our{" "}
                                            <Link
                                                to="/privacy-policy"
                                                className="font-semibold text-midasis-blue underline hover:text-midasis-orange"
                                            >
                                                Privacy Policy
                                            </Link>{" "}
                                            and{" "}
                                            <Link
                                                to="/terms-conditions"
                                                className="font-semibold text-midasis-blue underline hover:text-midasis-orange"
                                            >
                                                Terms &amp; Conditions
                                            </Link>{" "}
                                            for more information.
                                        </label>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={submitting}
                                    className="mt-7 h-12 w-full rounded-full bg-midasis-blue px-7 font-semibold text-white shadow-md transition-all duration-300 hover:bg-midasis-navy hover:shadow-lg sm:w-auto"
                                    data-testid="contact-submit-button"
                                >
                                    {submitting ? (
                                        <>
                                            <Loader2 size={18} className="mr-2 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} className="mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
