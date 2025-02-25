import React from "react"
import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "../assets/logo.svg" 

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img 
          src={logo} 
          alt="Kasa logo" 
          className={styles.logo} 
        />
      </Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À Propos</Link>
      </nav>
    </header>
  )
}

export default Header
