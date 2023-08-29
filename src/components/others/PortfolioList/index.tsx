import React from "react";
import styles from "./styles.module.scss";

const PortfolioList: React.FC<PortfolioListProps> = ({
  id,
  title,
  active,
  onSelect,
}) => {
  return (
    <li
      className={`${styles.container} ${active && styles.active}`}
      onClick={() => onSelect(id)}
    >
      {title}
    </li>
  );
};

type PortfolioListProps = {
  id: string;
  title: string;
  active: boolean;
  onSelect: (id: string) => void;
};

export default PortfolioList;
