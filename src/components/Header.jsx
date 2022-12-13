import React from "react";
import { Logo } from "./Logo";
import { Menubar } from "./Menubar";
import { Search } from "./Search";

export function Header() {
  return (
    <div className="header">
      <Menubar />
      <Logo />
      <Search />{" "}
      {/* search :-not need to create those field ,which is not use more than one.  */}
    </div>
  );
}
