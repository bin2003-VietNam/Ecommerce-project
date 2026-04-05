import NavLink from "@/components/NavLink";
import React from "react";

function NavLinks() {
  return (
    <div className="flex flex-row gap-4 cursor-pointer text-xs font-bold ">
      <NavLink text="Giới Thiệu" toPath="" />
      <NavLink text="Tin tức" toPath="" />
    </div>
  );
}

export default NavLinks;
