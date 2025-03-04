// my-react-app/src/pages/Error.jsx
import React from "react"
import { Link } from "react-router-dom"
import styles from "./Error.module.css"
import errorImg from "../assets/404.svg"

export default function Error() {
  return (
    <main className={styles.errorPage}>
      <img src={errorImg} alt="404" className={styles.errorImg} />
      <p className={styles.errorText}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className={styles.errorLink}>
        Retourner sur la page d'accueil
      </Link>
    </main>
  )
}
