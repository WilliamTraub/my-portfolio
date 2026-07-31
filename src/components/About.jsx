import Section from './Section'
import styles from './About.module.css'

export default function About() {
  return (
    <Section id="about" label="About" title="About">
      <p className={styles.text}>
        I'm a sophomore at Northeastern studying Computer Science and Mathematics.
        My work spans a few different areas: research in representation theory and
        diagrammatic algebras, formal verification in Lean 4, and software engineering.
        I care about understanding things precisely, whether that means writing a proof
        or building something that works.
      </p>
      <p className={styles.text}>
        Outside of coursework I've spent several years teaching programming to middle
        schoolers, which has shaped how I think about communicating technical ideas.
        I'm interested in roles that combine rigorous thinking with building real things.
      </p>
    </Section>
  )
}
