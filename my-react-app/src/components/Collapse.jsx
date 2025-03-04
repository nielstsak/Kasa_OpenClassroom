// src/components/Collapse.jsx
import { useState } from "react"
import fleche from "../assets/fleche_collapse.svg"
import styles from "./Collapse.module.css"

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen(!isOpen)
  }

  // On traite la prop content (string ou array)
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
          lines.map((line, lineIndex) => {
            // On découpe chaque ligne en mots
            const words = line.split(" ")

            return (
              <p key={lineIndex} className={styles.line}>
                {words.map((word, wIndex) => (
                  <span key={wIndex} className={styles.wordWrapper}>
                    {Array.from(word).map((char, cIndex) => (
                      <span
                        key={cIndex}
                        className={styles.char}
                        style={{ animationDelay: `${(wIndex * 50 + cIndex) * 0.5}ms` }}
                      >
                        {char}
                      </span>
                    ))}
                    {wIndex < words.length - 1 && (
                      <span className={styles.char}>&nbsp;</span>
                    )}
                  </span>
                ))}
              </p>
            )
          })
        }
      </div>
    </div>
  )
}
