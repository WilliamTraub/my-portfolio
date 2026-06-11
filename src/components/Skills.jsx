import Section from './Section'
import styles from './Skills.module.css'

const skillGroups = [
  {
    label: 'Languages',
    tags: ['OCaml', 'Python', 'Java', 'Lean 4', 'LaTeX', 'PHP', 'JavaScript'],
  },
  {
    label: 'Mathematics',
    tags: ['Abstract Algebra', 'Category Theory', 'Lie Theory', 'Linear Algebra', 'Representation Theory'],
  },
  {
    label: 'Theory & Formal Methods',
    tags: ['Type Theory', 'Formal Verification', 'PLT', 'Lean 4 Proofs', 'Lambda Calculus'],
  },
  {
    label: 'Tools & Frameworks',
    tags: ['React', 'Git', 'Docker', 'WordPress', 'Arch Linux', 'JUnit'],
  },
]

export default function Skills() {
  return (
    <Section id="skills" label="Skills" title="Skills">
      <div className={styles.grid}>
        {skillGroups.map((group, i) => (
          <div className={styles.group} key={i}>
            <div className={styles.groupLabel}>{group.label}</div>
            <div className={styles.tags}>
              {group.tags.map((tag, j) => (
                <span className={styles.tag} key={j}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
