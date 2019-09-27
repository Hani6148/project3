import React from "react";
import "./SideNavigation.css";
import NavButton from "../NavButton"
import src from "./bar.jpeg"

function SideNavigation() {
  return (
<div class="sidenav">
    <img src={src}/>
    <NavButton name="About"/>
    <NavButton name="Services"/>
    <NavButton name="Events"/>
    <NavButton name="Contact"/>
</div>
  );
}

export default SideNavigation;
