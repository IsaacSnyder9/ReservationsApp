import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavItem({ name, link }) {
  return (
    <li className="nav-item">
      <NavLink activeclassname="active" className="nav-link mx-1" to={link}>
        {name}
      </NavLink>
    </li>
  );
}
