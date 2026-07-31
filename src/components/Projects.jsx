import Section from './Section'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'Lean 4 Group Theory Library',
    desc: 'Custom formalization of group theory from scratch: semigroups, monoids, groups, subgroups, normal subgroups, homomorphisms, isomorphisms, and cyclic groups — without Mathlib.',
    tags: ['Lean 4', 'Formal Verification', 'Algebra'],
    link: null,
  },
  {
    title: 'TerraNova',
    desc: 'Neural network for environmental brownfield site classification. Achieved an 18% accuracy improvement over the baseline model.',
    tags: ['Python', 'ML', 'Neural Networks'],
    link: 'https://github.com/WilliamTraub/TerraNova',
  },
  {
  title: 'Public Class Notes',
  desc: 'An open repository of notes from coursework in mathematics and computer science, covering topics including group theory, linear algebra, algorithms, and programming languages.',
  tags: ['LaTeX', 'Mathematics', 'CS Theory'],
  link: 'https://github.com/WilliamTraub/Public-Classnotes',
},
]

export default function Projects() {
  return (
    <Section id="projects" label="Projects" title="Projects">
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.cardTitle}>{p.title}</div>
            <div className={styles.cardDesc}>{p.desc}</div>
            <div className={styles.cardTags}>
              {p.tags.map((t, j) => (
                <span className={styles.cardTag} key={j}>{t}</span>
              ))}
            </div>
            {p.link && (
              <a href={p.link} className={styles.cardLink} target="_blank" rel="noreferrer">
                view project →
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
