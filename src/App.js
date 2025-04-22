import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home";
import Signup from "./pages/Home/Sign-up/Sign-up.jsx";
import TermsAndConditions from "./pages/Home/terms-condition/terms-condition.jsx";
import UserAgreement from "./pages/Home/user-agreement/user-agreement.jsx";
import PrivacyPolicy from "./pages/Home/Privacy-policy/privacy-policy.jsx";
import Login from "./pages/Home/Log-in/Log-in.jsx";
import DashboardPage from "./components/Dashboard-pages/Dashboard-home/Dashboard-Homepage-content/Dashboard-home.jsx";
import Solicitations from "./components/Dashboard-pages/Solicitation/Solicitation.jsx";
import ProposalsPage from "./components/Dashboard-pages/Proposal/Proposal.jsx"; //
import DocumentLibrary from "./components/Dashboard-pages/Document-library/Document-library.jsx";
// import Community from "./components/Dashboard/pages/Community.jsx";
// import PlansBilling from "./components/Dashboard/pages/PlansBilling.jsx";

function AppWrapper() {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");
  const hideHeaderFooter =
    location.pathname === "/signup" ||
    location.pathname === "/login" ||
    isDashboardRoute;

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/user-agreement" element={<UserAgreement />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Dashboard nested routes */}
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="solicitations" element={<Solicitations />} />
          <Route path="proposals" element={<ProposalsPage />} />
          <Route path="document-library" element={<DocumentLibrary />} />
          {/*  
          
          <Route path="proposals" element={<Proposals />} />
          <Route path="document-library" element={<DocumentLibrary />} />
          <Route path="community" element={<Community />} />
        / <Route path="plans-billing" element={<PlansBilling />} />*/}
        </Route>
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
