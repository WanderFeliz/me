import React from "react";

const MenuLink: React.FC<MenuLinkProps> = ({section, label, onToggle}) => {
  return (
    <li onClick={onToggle}>
      <a href={`#${section}`}>{label}</a>
    </li>
  );
};

type MenuLinkProps = {
    section: string;
    label: string;
    onToggle: () => void;
};



export default MenuLink;
