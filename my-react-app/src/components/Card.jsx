// my-react-app/src/components/Card.jsx
import React from "react"
import styles from "./Card.module.css"

export default function Card({ cover, title }) {
  return (
    <article className={styles.card}>
      <img src={cover} alt={title} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
    </article>
  )
}
