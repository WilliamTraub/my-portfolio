import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.proofBlock}>
        <span className={styles.keyword}>Theorem</span> (Traub, 2024). Let W : CS × Math → ℝ<sup>n</sup> be defined by<br />
        &nbsp;&nbsp;W(curiosity, rigor) := <span className={styles.value}>something worth building.</span><br />
        <span className={styles.keyword}>Proof.</span> See below. <span className={styles.value}>∎</span>
      </div>
      <h1 className={styles.name}>
        William<br /><em>Traub.</em>
      </h1>
      <p className={styles.tagline}>
        CS + Mathematics at Northeastern. I work at the intersection of formal verification, programming language theory, and pure mathematics.
      </p>
      <div className={styles.links}>
        <a href="mailto:traub.w@northeastern.edu" className={styles.primary}>traub.w@northeastern.edu</a>
        <a href="https://github.com/WilliamTraub" target="_blank" rel="noreferrer">github</a>
        <a href="https://www.linkedin.com/in/william-traub/" target="_blank" rel="noreferrer">linkedin</a>
        <a href="public/resumes.pdf">resume.pdf</a>
      </div>
    </div>
  )
}
