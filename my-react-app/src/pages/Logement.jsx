// my-react-app/src/pages/Logement.jsx
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from "./Logement.module.css"
import Carroussel from "../components/Carroussel"
import Rate from "../components/Rate"
import Tag from "../components/Tag"
import Collapse from "../components/Collapse"

export default function Logement() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [property, setProperty] = useState(null)

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

  const hostNameParts = property.host.name.split(" ")
  const firstName = hostNameParts[0] || ""
  const lastName = hostNameParts.slice(1).join(" ")

  return (
    <main className={styles.logement}>
      <Carroussel pictures={property.pictures} />
      <section className={styles.topSection}>
        <div className={styles.leftBlock}>
          <h1 className={styles.title}>{property.title}</h1>
          <p className={styles.location}>{property.location}</p>
          <div className={styles.tags}>
            {property.tags?.map((tag, i) => (
              <Tag key={i} label={tag} />
            ))}
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.host}>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </div>
          <img
            src={property.host.picture}
            alt={property.host.name}
            className={styles.hostPicture}
          />
          <Rate rating={property.rating} />
        </div>
      </section>
      <section className={styles.collapseSection}>
        <div className={styles.collapseWrapper}>
          <Collapse title="Description" content={property.description} />
        </div>
        <div className={styles.collapseWrapper}>
          <Collapse title="Équipements" content={property.equipments} />
        </div>
      </section>
    </main>
  )
}
