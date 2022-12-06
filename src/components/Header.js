import React from "react";
import { Logo } from "./HeaderCompo/Logo";
import { Menubar } from "./HeaderCompo/Menubar";
import { Search } from "./HeaderCompo/Search";

export function Header() {
  return (
    <div className="header">
      <Menubar />
      <Logo />
      <Search />
    </div>
  );
}
