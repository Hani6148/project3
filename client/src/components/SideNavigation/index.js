import React from "react";
import "./SideNavigation.css";
import NavButton from "./components/NavButton";

function SideNavigation() {
  return (
<div class="sidenav">
    <NavButton name="About"/>
    <NavButton name="Services"/>
    <NavButton name="Events"/>
    <NavButton name="Contact"/>
</div>
  );
}

export default SideNavigation;
