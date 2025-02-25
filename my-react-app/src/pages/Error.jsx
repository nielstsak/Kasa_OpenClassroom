import React from "react"
import { Link } from "react-router-dom"
import styles from "./Error.module.css"

function Error() {
  return (
    <main className={styles.error}>
      <h1 className={styles.errorCode}>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </main>
  )
}

export default Error
