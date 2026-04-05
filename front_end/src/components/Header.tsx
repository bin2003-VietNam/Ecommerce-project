import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ActionIcons from "./ActionIcons";
import NavLinks from "@/components/NavLinks";

function Header() {
  return (
    <div className="w-screen h-18 bg-white p-x-5 flex flex-row items-center justify-center gap-10">
      <Logo />
      <NavLinks />
      <SearchBar />
      <ActionIcons />
    </div>
  );
}

export default Header;
