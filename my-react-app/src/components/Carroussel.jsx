// my-react-app/src/components/Carroussel.jsx
import { useState } from "react"
import leftArrow from "../assets/arrow_left.svg"
import rightArrow from "../assets/arrow_right.svg"
import styles from "./Carroussel.module.css" 

export default function Carroussel({ pictures = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  if (pictures.length === 0) {
    return null
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pictures.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + pictures.length) % pictures.length)
  }

  return (
    <div className={styles.container}>

      <img
        src={pictures[currentSlide]}
        alt={`Slide ${currentSlide}`}
        className={styles.image}
      />

      {pictures.length > 1 && (
        <>
          <img
            src={leftArrow}
            alt="Slide précédent"
            className={styles.arrowLeft}
            onClick={prevSlide}
          />
          <img
            src={rightArrow}
            alt="Slide suivant"
            className={styles.arrowRight}
            onClick={nextSlide}
          />
          <div className={styles.counter}>
            {currentSlide + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  )
}
