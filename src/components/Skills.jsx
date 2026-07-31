import Section from './Section'
import styles from './Skills.module.css'

const skillGroups = [
  {
    label: 'Programming Languages',
    tags: ['Python', 'Java', 'JavaScript', 'OCaml', 'Racket', 'C++', 'Lean 4', 'LaTeX'],
  },
  {
    label: 'Data & Libraries',
    tags: ['NumPy', 'Pandas', 'SciPy', 'Matplotlib'],
  },
  {
    label: 'Tools',
    tags: ['Git', 'React', 'Docker', 'WordPress'],
  },
  {
    label: 'Mathematics',
    tags: ['Real Analysis', 'Linear Algebra', 'Abstract Algebra', 'Discrete Mathematics', 'Mathematical Logic', 'Probability & Statistics', 'Group Theory', 'Differential Equations', 'Category Theory', 'Lie Theory', 'Representation Theory'],
  },
  {
    label: 'Theory & Formal Methods',
    tags: ['Type Theory', 'Formal Verification', 'PLT', 'Lean 4 Proofs', 'Lambda Calculus'],
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