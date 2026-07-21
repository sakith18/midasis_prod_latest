import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function TermsConditions() {
    return (
        <div className="min-h-screen bg-white font-body text-midasis-body">
            <Navbar />

            <section className="bg-midasis-tint pt-36 pb-12 lg:pt-40 lg:pb-16">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="text-xs font-bold uppercase tracking-[0.25em] text-midasis-orange">Legal</div>
                    <h1 className="mt-4 font-heading text-4xl font-black leading-tight text-midasis-navy sm:text-5xl">
                        Terms &amp; Conditions
                    </h1>
                    <p className="mt-4 text-sm text-midasis-body/70">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                </div>
            </section>

            <section className="bg-white py-[48px] lg:py-[80px]">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="prose-midasis space-y-8 text-base leading-relaxed text-midasis-body">

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">1. Agreement to Terms</h2>
                            <p className="mt-3">
                                By accessing or using the website of Midasis Technologies ("Company," "we," "us," or "our") at{" "}
                                <a href="https://midasistechnologies.com" className="font-semibold text-midasis-blue hover:text-midasis-orange">midasistechnologies.com</a>,
                                you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use our website or services.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">2. Use of the Website</h2>
                            <p className="mt-3">You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
                            <ul className="mt-3 list-disc space-y-1.5 pl-6">
                                <li>Use the site in any way that violates applicable local, national, or international laws or regulations.</li>
                                <li>Transmit unsolicited or unauthorized advertising or promotional material.</li>
                                <li>Attempt to gain unauthorized access to any part of the website or its related systems.</li>
                                <li>Reproduce, duplicate, copy, or resell any part of the website in breach of these Terms.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">3. SMS / Text Messaging Terms</h2>
                            <p className="mt-3">
                                By providing your phone number and opting in on our Contact Us page, you consent to receive text messages from MIDASIS TECHNOLOGIES,
                                including appointment reminders and important service updates.
                            </p>
                            <ul className="mt-3 list-disc space-y-1.5 pl-6">
                                <li><strong>Message frequency:</strong> Varies based on your interactions with us.</li>
                                <li><strong>Msg &amp; data rates may apply</strong> depending on your mobile carrier and plan.</li>
                                <li><strong>To opt out:</strong> Reply STOP to any text message at any time. You will be immediately removed from our messaging list.</li>
                                <li><strong>For help:</strong> Reply HELP or contact us at{" "}
                                    <a href="mailto:contact@midasistechnologies.com" className="font-semibold text-midasis-blue hover:text-midasis-orange">
                                        contact@midasistechnologies.com
                                    </a>.
                                </li>
                                <li>Opting in to SMS is not a condition of purchasing any goods or services.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">4. Intellectual Property</h2>
                            <p className="mt-3">
                                All content on this website — including but not limited to text, graphics, logos, images, and software — is the property of
                                Midasis Technologies or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce,
                                distribute, or create derivative works without our express written permission.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">5. Disclaimer of Warranties</h2>
                            <p className="mt-3">
                                This website and its content are provided "as is" without any warranties of any kind, either express or implied, including but not
                                limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Midasis Technologies does
                                not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">6. Limitation of Liability</h2>
                            <p className="mt-3">
                                To the fullest extent permitted by law, Midasis Technologies shall not be liable for any indirect, incidental, special, consequential,
                                or punitive damages arising from your use of, or inability to use, this website or our services — even if we have been advised of the
                                possibility of such damages.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">7. Third-Party Links</h2>
                            <p className="mt-3">
                                Our website may contain links to third-party websites. These links are provided for convenience only. Midasis Technologies has no
                                control over the content of those sites and accepts no responsibility for them or for any loss or damage arising from your use of them.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">8. Privacy</h2>
                            <p className="mt-3">
                                Your use of this website is also governed by our{" "}
                                <Link to="/privacy-policy" className="font-semibold text-midasis-blue hover:text-midasis-orange">
                                    Privacy Policy
                                </Link>
                                , which is incorporated into these Terms by reference.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">9. Governing Law</h2>
                            <p className="mt-3">
                                These Terms shall be governed by and construed in accordance with the laws of the State of Washington, United States, without regard
                                to its conflict of law provisions.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">10. Changes to These Terms</h2>
                            <p className="mt-3">
                                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your
                                continued use of the website after any changes constitutes your acceptance of the new Terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold text-midasis-navy">11. Contact Us</h2>
                            <p className="mt-3">
                                If you have any questions about these Terms &amp; Conditions, please contact us:
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
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
