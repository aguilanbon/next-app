import DashboardLineChart from "./LineChart";
import DashboardPieChart from "./PieChart";
import DashboardStats from "./Stats";
import DashboardTable from "./Table";

export default function Dashboard() {
  return (
    <div className="w-full flex">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex lg:flex-row flex-col lg:h-1/2 h-auto mb-10">
          <DashboardLineChart />
          <DashboardPieChart />
        </div>
        <div className="flex flex-col w-full h-auto">
          <DashboardStats />
          <DashboardTable />
        </div>
      </div>
    </div>
  );
}
