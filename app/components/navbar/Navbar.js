"use client";

import Logo from "../Logo";
import Announcement from "./Announcement";
import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <>
      <div className="fixed px-4 flex flex-row items-center justify-between bg-white w-full z-10 border-b border-neutral-100">
        <Logo />
        <Announcement />
        <UserMenu />
      </div>
    </>
  );
}
