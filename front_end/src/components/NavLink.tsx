import React from "react";
interface NavLinkProps {
  text: string;
  toPath: string;
}

function NavLink(props: NavLinkProps) {
  return <div className="hover:text-blue-500">{props.text}</div>;
}

export default NavLink;
