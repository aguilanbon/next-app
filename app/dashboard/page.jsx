import DashboardLineChart from "./LineChart";
import DashboardStats from "./Stats";
import DashboardTable from "./Table";

export default function Dashboard() {
  return (
    <div className="w-full flex">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full h-1/2">
          <DashboardLineChart />
        </div>
        <DashboardStats />
        <DashboardTable />
      </div>
    </div>
  );
}
