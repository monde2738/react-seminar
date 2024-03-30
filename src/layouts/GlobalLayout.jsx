import { Link, Outlet } from "react-router-dom";

import { MenuLink } from "@/components/atoms";

import styles from "./GlobalLayout.module.css";

export const GlobalLayout = () => (
  <>
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logo}>
          <img src="/sparcs.svg" alt="SPARCS logo" />
          <span>React Seminar</span>
        </Link>
      </div>
    </header>
    <div className={styles.mainContainer}>
      <aside className={styles.aside}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <MenuLink to="/" text="Home" />
            </li>
            <li>
              <MenuLink to="/counter" text="Counter" />
            </li>
            <li>
              <MenuLink to="/stopwatch" text="Stopwatch" />
            </li>
            <li>
              <MenuLink to="/focus" text="Focus" />
            </li>
            <li>
              <MenuLink to="/video" text="Video" />
            </li>
            <li>
              <MenuLink to="/fetch" text="Fetch" />
            </li>
            <li>
              <MenuLink to="/todo" text="Todo" />
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  </>
);
