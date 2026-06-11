import Section from './Section'
import styles from './ResumeItems.module.css'

const education = [
  {
    title: 'Northeastern University',
    date: 'Sep 2022 — May 2028',
    sub: 'B.S. Computer Science & Mathematics',
    highlight: "Dean's List, every semester",
    bullets: [
      'Khoury College of Computer Science',
      'Coursework: Advanced Group Theory, Advanced Linear Algebra, Algorithms & Data, Logic and Computation, Programming Languages',
      'Event Planner, Northeastern Mathematics Club',
      'TA applicant, CS 2800 Logic and Computation',
    ],
  },
  {
    title: 'Oregon Programming Languages Summer School (OPLSS)',
    date: 'Summer 2024',
    sub: 'Intensive graduate-level program in type theory, category theory, and formal methods',
    bullets: [],
  },
]

export default function Education() {
  return (
    <Section id="education" label="Education" title="Education">
      {education.map((item, i) => (
        <div className={styles.item} key={i}>
          <div className={styles.header}>
            <span className={styles.itemTitle}>{item.title}</span>
            <span className={styles.date}>{item.date}</span>
          </div>
          <div className={styles.sub}>
            {item.sub}
            {item.highlight && <> &nbsp;·&nbsp; <strong>{item.highlight}</strong></>}
          </div>
          {item.bullets.length > 0 && (
            <ul className={styles.bullets}>
              {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          )}
        </div>
      ))}
    </Section>
  )
}
