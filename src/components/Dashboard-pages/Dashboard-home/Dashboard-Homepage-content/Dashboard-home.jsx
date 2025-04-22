import { Routes, Route, Navigate } from "react-router-dom";
import DashboardStats from "../Dashboard-Home-statscard/Dashboard-statscard";
import DashboardLayout from "../../../Dashboard-components/Dashboard-layout/dashboard-layout";
import Solicitations from "../../Solicitation/Solicitation";
import ProposalsTable from "../Proposal-Table/Proposal-table";
import ProposalsPage from "../../Proposal/Proposal";
import ChartDashboard from "../Dashboard-Charts/charts";
import DocumentLibrary from "../../Document-library/Document-library";
import { Typography } from "@mui/material";

const DashboardPage = () => (
  <>
    <Typography
      variant="h4"
      sx={{ fontWeight: 600, color: "#fff", marginBottom: "10px" }}
    >
      Solicitations
    </Typography>
    <DashboardStats />
    <ChartDashboard />
    <ProposalsTable />
  </>
);

const Dashboard = () => {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  if (!isLoggedIn) return <Navigate to="/login" />;

  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="solicitations" element={<Solicitations />} />
        <Route path="proposals" element={<ProposalsPage />} />
        <Route path="document-library" element={<DocumentLibrary />} />
      </Route>
    </Routes>
  );
};

export default Dashboard;
