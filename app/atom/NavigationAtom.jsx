import { atom, useAtom } from "jotai";

const menuAtom = atom(false);
export const statusAtom = atom((get) => get(menuAtom));
export const toggleMenuAtom = atom(null, (_get, set) => {
  set(menuAtom, (prev) => !prev);
});
