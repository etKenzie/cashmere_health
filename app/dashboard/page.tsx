import { redirect } from "next/navigation";
import DashboardPage from "./Dashboard";

import { checkIsAuthenticated } from "@/lib/auth/checkIsAuthenticated";

const Dashboard: React.FC = async () => {
  const isAuthenticated = await checkIsAuthenticated();
  if (!isAuthenticated) {
    redirect("/auth/sign-in");
  } else {
    return <DashboardPage />;
  }
};

export default Dashboard;
