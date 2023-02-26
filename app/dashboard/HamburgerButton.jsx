"use client";
import { useAtom } from "jotai";
import { toggleMenuAtom } from "../store/NavigationAtom";

export default function DashboardHamburger() {
  const [, closeNav] = useAtom(toggleMenuAtom);

  const handleChange = () => {
    closeNav();
  };

  return (
    <button className="btn btn-square btn-ghost" onClick={() => handleChange()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-5 h-5 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>
  );
}
