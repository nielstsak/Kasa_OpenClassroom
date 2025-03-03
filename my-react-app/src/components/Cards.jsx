// my-react-app/src/components/Cards.jsx
import React from "react"
import { Link } from "react-router-dom"
import Card from "./Card"
import styles from "./Cards.module.css"

export default function Cards({ properties }) {
  return (
    <section className={styles.cardsContainer}>
      {properties.map((property) => (
        <Link
          key={property.id}
          to={`/logement/${property.id}`}
          className={styles.link}
        >
          <Card cover={property.cover} title={property.title} />
        </Link>
      ))}
    </section>
  )
}
