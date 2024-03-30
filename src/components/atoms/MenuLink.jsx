import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

import styles from "./MenuLink.module.css";

export const MenuLink = ({ to, text }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={to}
      className={clsx(styles.menuLink, {
        [styles.active]: pathname === to,
      })}
    >
      {text}
    </Link>
  );
};
