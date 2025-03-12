// my-react-app/src/components/Rate.jsx
import React from "react"
import starFull from "../assets/rate_star.svg"
import starEmpty from "../assets/rate_empty_star.svg"
import styles from "./Rate.module.css" // Facultatif
export default function Rate({ rating = 0 }) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    const starSrc = i <= rating ? starFull : starEmpty
    stars.push(
      <img
        key={i}
        src={starSrc}
        alt={i <= rating ? "Star full" : "Star empty"}
        className={styles.star}
      />
    )
  }

  return <div className={styles.starsContainer}>{stars}</div>
}
