import styles from './Section.module.css'

export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.label}>{label}</div>
      <div className={styles.title}>
        <span>{title}</span>
      </div>
      {children}
    </section>
  )
}
