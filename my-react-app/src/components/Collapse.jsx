// src/components/Collapse.jsx
import { useState } from "react"
import fleche from "../assets/fleche_collapse.svg"
import styles from "./Collapse.module.css"

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen(!isOpen)
  }

  const lines = Array.isArray(content) ? content : [content]

  return (
    <div className={styles.collapse}>
      <div className={styles.header} onClick={toggle}>
        <h2 className={styles.title}>{title}</h2>
        <img
          src={fleche}
          alt="toggle arrow"
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}
        />
      </div>

      <div className={`${styles.content} ${isOpen ? styles.contentOpen : ""}`}>
        {isOpen &&
          lines.map((line, index) => (
            <p key={index} className={styles.line}>
              {Array.from(line).map((char, i) => (
                <span
                  key={i}
                  className={styles.char}
                  style={{ animationDelay: `${i * 0.01}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>
          ))}
      </div>
    </div>
  )
}
