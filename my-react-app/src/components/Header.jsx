import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" end>
          <img src={logo} alt="Kasa logo" className={styles.logo} />
        </NavLink>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            A Propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
