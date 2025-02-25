import styles from "./Banner.module.css"

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}></div>
      <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
    </section>
  )
}
