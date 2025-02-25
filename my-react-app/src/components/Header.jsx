import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "../assets/logo.svg"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <img
            src={logo}
            alt="Kasa logo"
            className={styles.logo}
          />
        </Link>
        <nav className={styles.nav}>
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </nav>
      </div>
    </header>
  )
}
