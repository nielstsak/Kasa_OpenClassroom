import React from "react"
import styles from "./Footer.module.css"
import logo from "../assets/logo_blanc.svg"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={logo} alt="Kasa logo" className={styles.logo} />
        <p>© 2025 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}
