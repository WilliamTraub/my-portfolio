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
    title: 'dimLi: Dimension Formula',
    desc: 'Implementation of a dimension formula for simple modules in both OCaml and Python, developed during the Diagrammatic Algebras REU with modular, close-to-algorithm structure.',
    tags: ['OCaml', 'Python', 'Representation Theory'],
    link: null,
  },
  {
    title: 'TerraNova',
    desc: 'Neural network for environmental brownfield site classification. Achieved an 18% accuracy improvement over the baseline model.',
    tags: ['Python', 'ML', 'Neural Networks'],
    link: null,
  },
  {
    title: 'OCaml Compiler & Type Systems',
    desc: 'Compiler and type system work including SignTheory, MiniPython, a CNF SAT solver, and a propositional logic system.',
    tags: ['OCaml', 'Compilers', 'Type Theory'],
    link: null,
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
