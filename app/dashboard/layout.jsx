import Image from "next/image";
import DashboardHamburger from "./HamburgerButton";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="relative">
      <div className="navbar bg-base-100 fixed top-0">
        <div className="flex-none">
          <DashboardHamburger />
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Dashboard</a>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image
                width={200}
                height={200}
                src={`https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                alt="wow"
              ></Image>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-base-200 min-h-screen p-8 pt-20">{children}</div>
      <Sidebar />
    </div>
  );
}
