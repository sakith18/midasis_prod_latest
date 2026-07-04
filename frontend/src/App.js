import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/pages/Home";
import ITStaffing from "@/pages/ITStaffing";
import AppDevelopment from "@/pages/AppDevelopment";
import SAP from "@/pages/SAP";
import DevOps from "@/pages/DevOps";
import ERP from "@/pages/ERP";
import AIML from "@/pages/AIML";
import CyberSecurity from "@/pages/CyberSecurity";

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
                    <Route path="/services/erp" element={<ERP />} />
                    <Route path="/services/ai-ml" element={<AIML />} />
                    <Route path="/services/cybersecurity" element={<CyberSecurity />} />
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
