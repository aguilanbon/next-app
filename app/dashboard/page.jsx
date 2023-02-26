import DashboardStats from "./Stats";
import DashboardTable from "./Table";

export default function Dashboard() {
  return (
    <div className="w-full flex">
      <div className="w-full flex flex-col items-center justify-center">
        <DashboardStats />
        <DashboardTable />
      </div>
    </div>
  );
}
