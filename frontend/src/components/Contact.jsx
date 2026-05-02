import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { MapPin, Mail, Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const OFFICES = [
    {
        title: "USA — Headquarters",
        lines: [
            "2412 Hyde Ct NE,",
            "Olympia, Washington 98516-3703,",
            "USA",
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
    "US IT Staffing",
    "India IT Staffing",
    "IT Consulting",
    "General Inquiry",
];

export const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        requirement_type: "",
        message: "",
    });
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
            await axios.post(`${API}/contact`, form);
            toast.success("Thank you! Your message has been sent. We'll be in touch shortly.");
            setForm({ name: "", email: "", subject: "", requirement_type: "", message: "" });
        } catch (err) {
            console.error(err);
            const msg = err?.response?.data?.detail || "Something went wrong. Please try again.";
            toast.error(typeof msg === "string" ? msg : "Submission failed. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="bg-midasis-tint py-[48px] lg:py-[80px]"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-3xl">
                    <div className="text-xs font-bold uppercase tracking-[0.25em] text-midasis-orange">
                        Reach Us
                    </div>
                    <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-midasis-navy sm:text-4xl lg:text-5xl">
                        Get In Touch
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-midasis-body sm:text-lg">
                        Reach out to our headquarters in the USA or our India office — or send us a message directly.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-5">
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
    );
};

export default Contact;
