"use client";

import { useAtom } from "jotai";
import { toggleMenuAtom, statusAtom } from "../atom/NavigationAtom";

export default function Sidebar() {
  const [menu] = useAtom(statusAtom);
  const [, closeNav] = useAtom(toggleMenuAtom);

  return (
    <div
      className={`w-full h-full absolute z-30 top-0 backdrop-blur-sm ${
        menu ? `flex` : `hidden`
      } items-center`}
    >
      <div className="flex lg:w-1/4 sm:w-1/2 xs:w-3/4 bg-base-300 blur-0 rounded-tr-md rounded-br-md h-screen">
        <div className="w-full flex justify-end p-2">
          <button className="btn btn-xs btn-square" onClick={() => closeNav()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
