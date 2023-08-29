import MenuLink from "../others/MenuLink";
import styles from "./menu.module.scss";
import { MenuLinkType } from "@/types";

const Menu: React.FC<MenuProps> = ({ menuOpen, onToggle }) => {
  const links: Array<MenuLinkType> = [
    { section: "intro", label: "Home" },
    { section: "portfolio", label: "Portfolio" },
    { section: "works", label: "Works" },
    // { section: "testimonials", label: "Testimonials" },
    { section: "contact", label: "Contact" },
  ];

  return (
    <div className={`${styles.menu} ${menuOpen && styles.active}`}>
      <ul>
        {links.map((link, index) => (
          <MenuLink
            key={index}
            section={link.section}
            label={link.label}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
};

type MenuProps = {
  menuOpen: boolean;
  onToggle: () => void;
};

export default Menu;
