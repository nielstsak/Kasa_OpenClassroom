// my-react-app/src/pages/Logement.jsx
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from "./Logement.module.css"
import Collapse from "../components/Collapse"

import leftArrow from "../assets/arrow_left.svg"
import rightArrow from "../assets/arrow_right.svg"

export default function Logement() {
  const { id } = useParams()
  const navigate = useNavigate()

  // Données du logement courant
  const [property, setProperty] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Chargement du logement correspondant
  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id)
        if (!found) {
          navigate("/404")
          return
        }
        setProperty(found)
      })
      .catch((err) => console.error(err))
  }, [id, navigate])

  if (!property) {
    return <div className={styles.loading}>Chargement...</div>
  }

  // Gestion du carrousel
  const pictures = property.pictures || []
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pictures.length)
  }
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + pictures.length) % pictures.length)
  }

  // Génération d'étoiles de notation
  const ratingStars = []
  for (let i = 1; i <= 5; i++) {
    ratingStars.push(
      <span
        key={i}
        className={i <= property.rating ? styles.starFilled : styles.starEmpty}
      >
        ★
      </span>
    )
  }

  return (
    <main className={styles.logement}>
      {/* CARROUSEL */}
      <div className={styles.carrousel}>
        {/* Affichage de l'image courante */}
        {pictures.length > 0 && (
          <img
            className={styles.carrouselImage}
            src={pictures[currentSlide]}
            alt={`Slide ${currentSlide}`}
          />
        )}

        {/* Flèches gauche/droite + compteur (uniquement si plusieurs images) */}
        {pictures.length > 1 && (
          <>
            <img
              className={styles.arrowLeft}
              src={leftArrow}
              alt="Slide précédent"
              onClick={prevSlide}
            />
            <img
              className={styles.arrowRight}
              src={rightArrow}
              alt="Slide suivant"
              onClick={nextSlide}
            />
            <div className={styles.slideCount}>
              {currentSlide + 1}/{pictures.length}
            </div>
          </>
        )}
      </div>

      {/* INFOS LOGEMENT */}
      <section className={styles.infoSection}>
        <div>
          <h1>{property.title}</h1>
          <p className={styles.location}>{property.location}</p>

          {/* TAGS */}
          <div className={styles.tags}>
            {property.tags?.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* HÔTE + RATING */}
        <div className={styles.hostRating}>
          <div className={styles.host}>
            <p className={styles.hostName}>{property.host.name}</p>
            <img
              src={property.host.picture}
              alt={property.host.name}
              className={styles.hostPicture}
            />
          </div>
          <div className={styles.rating}>{ratingStars}</div>
        </div>
      </section>

      {/* COLLAPSES : Description et Équipements */}
      <section className={styles.collapseSection}>
        <Collapse title="Description" content={property.description} />
        <Collapse title="Équipements" content={property.equipments} />
      </section>
    </main>
  )
}
