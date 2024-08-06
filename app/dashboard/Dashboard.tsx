import SignOutButton from "@/components/SignOutButton";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <h2>Dashboard Page</h2>
      <div className="dashboard-card">
        <SignOutButton className="signout-button" />
      </div>
    </div>
  );
};

export default DashboardPage;
