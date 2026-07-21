import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/pages/Home";
import ITStaffing from "@/pages/ITStaffing";
import AppDevelopment from "@/pages/AppDevelopment";
import SAP from "@/pages/SAP";
import DevOps from "@/pages/DevOps";
import AIML from "@/pages/AIML";
import CyberSecurity from "@/pages/CyberSecurity";
import ContactPage from "@/pages/ContactPage";
import TermsConditions from "@/pages/TermsConditions";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

function App() {
    return (
        <div className="App font-body text-midasis-body">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services/it-staffing" element={<ITStaffing />} />
                    <Route path="/services/app-development" element={<AppDevelopment />} />
                    <Route path="/services/sap" element={<SAP />} />
                    <Route path="/services/devops" element={<DevOps />} />
                    <Route path="/services/ai-ml" element={<AIML />} />
                    <Route path="/services/cybersecurity" element={<CyberSecurity />} />
                    <Route path="/services/erp" element={<SAP />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/contact-us" element={<ContactPage />} />
                    <Route path="/terms-conditions" element={<TermsConditions />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
            </BrowserRouter>
            <Toaster
                position="top-right"
                richColors
                closeButton
                toastOptions={{
                    style: {
                        fontFamily: 'Poppins, sans-serif',
                    },
                }}
            />
        </div>
    );
}

export default App;
