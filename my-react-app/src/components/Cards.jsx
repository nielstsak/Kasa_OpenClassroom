import styles from "./Cards.module.css"

export default function Cards({ properties }) {
  return (
    <section className={styles.grid}>
      {properties.map((item) => (
        <article key={item.id} className={styles.card}>
          <img src={item.cover} alt={item.title} className={styles.image} />
          <h2 className={styles.title}>{item.title}</h2>
        </article>
      ))}
    </section>
  )
}
