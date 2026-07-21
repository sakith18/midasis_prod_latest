import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white font-body text-midasis-body">
            <Navbar />

            <section className="bg-midasis-tint pt-36 pb-12 lg:pt-40 lg:pb-16">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="text-xs font-bold uppercase tracking-[0.25em] text-midasis-orange">Legal</div>
                    <h1 className="mt-4 font-heading text-4xl font-black leading-tight text-midasis-navy sm:text-5xl">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 text-sm text-midasis-body/70">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                </div>
            </section>

            <section className="bg-white py-[48px] lg:py-[80px]">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="space-y-8 text-base leading-relaxed text-midasis-body">

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">1. Introduction</h2>
                            <p className="mt-3">
                                Midasis Technologies ("Company," "we," "us," or "our") is committed to protecting your personal information and your right to
                                privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{" "}
                                <a href="https://midasistechnologies.com" className="font-semibold text-midasis-blue hover:text-midasis-orange">midasistechnologies.com</a>{" "}
                                or contact us through any of our channels.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">2. Information We Collect</h2>
                            <p className="mt-3">We may collect the following categories of personal information:</p>
                            <ul className="mt-3 list-disc space-y-1.5 pl-6">
                                <li><strong>Contact information:</strong> Name, email address, phone number, and company name.</li>
                                <li><strong>Communications:</strong> Messages, inquiries, and correspondence you send us via the contact form or email.</li>
                                <li><strong>Usage data:</strong> IP address, browser type, pages visited, and referring URLs collected automatically when you use our website.</li>
                                <li><strong>SMS consent data:</strong> Whether you have opted in to receive text messages from us.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">3. How We Use Your Information</h2>
                            <p className="mt-3">We use the information we collect to:</p>
                            <ul className="mt-3 list-disc space-y-1.5 pl-6">
                                <li>Respond to your inquiries and provide our services.</li>
                                <li>Send you appointment reminders, service updates, and other communications you have requested.</li>
                                <li>Send SMS messages if you have opted in (see SMS Consent section below).</li>
                                <li>Improve our website and services.</li>
                                <li>Comply with legal obligations.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">4. Sharing of Information</h2>
                            <p className="mt-3">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                            </p>
                            <ul className="mt-3 list-disc space-y-1.5 pl-6">
                                <li><strong>Service providers</strong> who assist us in operating our website and conducting our business (e.g., cloud hosting, email delivery, analytics), subject to confidentiality obligations.</li>
                                <li><strong>Legal authorities</strong> when required by law or to protect our legal rights.</li>
                            </ul>
                        </div>

                        {/* SMS Consent — required 10DLC section */}
                        <div className="rounded-2xl border-2 border-midasis-blue/20 bg-midasis-tint/40 p-6">
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">5. SMS Consent</h2>
                            <div className="mt-3 space-y-4">
                                <p>
                                    We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you with the
                                    services of that campaign. We may share your Personal Data, including your SMS opt-in or consent status, with third parties
                                    that help us provide our messaging services, including but not limited to platform providers, phone companies, and any other
                                    vendors who assist us in the delivery of text messages.
                                </p>
                                <p>
                                    All of the above categories exclude text messaging originator opt-in data and consent; this information will not be shared
                                    with any third parties.
                                </p>
                                <div>
                                    <h3 className="font-heading text-base font-bold text-midasis-navy">Opt-Out Process</h3>
                                    <p className="mt-2">
                                        You may choose to stop receiving text messages from MIDASIS TECHNOLOGIES at any time. To opt out, simply reply{" "}
                                        <strong>STOP</strong> or <strong>UNSUBSCRIBE</strong> to any text message you receive from us. Once we receive your
                                        opt-out request, you will be immediately removed from our messaging list and will no longer receive SMS messages from us.
                                    </p>
                                    <p className="mt-2">
                                        For assistance, reply <strong>HELP</strong> or contact us at{" "}
                                        <a href="mailto:contact@midasistechnologies.com" className="font-semibold text-midasis-blue hover:text-midasis-orange">
                                            contact@midasistechnologies.com
                                        </a>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">6. Data Retention</h2>
                            <p className="mt-3">
                                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a
                                longer retention period is required by law.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">7. Cookies and Tracking</h2>
                            <p className="mt-3">
                                Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.
                                You can control cookies through your browser settings. Disabling cookies may affect some features of our website.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">8. Security</h2>
                            <p className="mt-3">
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access,
                                alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">9. Your Rights</h2>
                            <p className="mt-3">Depending on your location, you may have the right to:</p>
                            <ul className="mt-3 list-disc space-y-1.5 pl-6">
                                <li>Access the personal information we hold about you.</li>
                                <li>Request correction of inaccurate data.</li>
                                <li>Request deletion of your personal data.</li>
                                <li>Opt out of marketing communications at any time.</li>
                            </ul>
                            <p className="mt-3">
                                To exercise any of these rights, contact us at{" "}
                                <a href="mailto:contact@midasistechnologies.com" className="font-semibold text-midasis-blue hover:text-midasis-orange">
                                    contact@midasistechnologies.com
                                </a>.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">10. Changes to This Policy</h2>
                            <p className="mt-3">
                                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Your
                                continued use of our website after changes are posted constitutes your acceptance of the updated policy.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">11. Contact Us</h2>
                            <p className="mt-3">
                                If you have questions or concerns about this Privacy Policy, please contact us:
                            </p>
                            <ul className="mt-3 list-none space-y-1.5">
                                <li><strong>Midasis Technologies</strong></li>
                                <li>2815 2nd Ave, Suite 550, Office No. 518, Seattle, WA 98121, United States</li>
                                <li>
                                    Email:{" "}
                                    <a href="mailto:contact@midasistechnologies.com" className="font-semibold text-midasis-blue hover:text-midasis-orange">
                                        contact@midasistechnologies.com
                                    </a>
                                </li>
                            </ul>
                            <p className="mt-4">
                                Also see our{" "}
                                <Link to="/terms-conditions" className="font-semibold text-midasis-blue hover:text-midasis-orange">
                                    Terms &amp; Conditions
                                </Link>.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
