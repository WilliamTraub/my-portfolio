import Section from './Section'
import styles from './ResumeItems.module.css'

const experience = [
  {
    title: 'Diagrammatic Algebras REU',
    date: 'Summer 2024',
    sub: 'Research Experience for Undergraduates · Northeastern University',
    highlight: 'Mentor: Prof. Iva Halacheva',
    bullets: [
      'Investigated dimensions of simple modules in diagrammatic algebra settings',
      'Implemented dimension formula dimLi in both OCaml and Python with modular helper functions',
      'Explored connections between representation theory, Lie theory, and combinatorics',
    ],
  },
  {
    title: 'Python & JavaScript Instructor',
    date: '2021 — Present',
    sub: 'Trackside Teen Center',
    bullets: [
      'Taught introductory Python and JavaScript to middle school students over multiple years',
      'Designed hands-on curriculum emphasizing problem-solving over syntax',
    ],
  },
  {
    title: 'Sports Instructor',
    date: 'Summer 2023',
    sub: 'Summer Camp',
    bullets: [
      'Led athletic programming for campers, coordinating group instruction and activities',
    ],
  },
]

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Experience">
      {experience.map((item, i) => (
        <div className={styles.item} key={i}>
          <div className={styles.header}>
            <span className={styles.itemTitle}>{item.title}</span>
            <span className={styles.date}>{item.date}</span>
          </div>
          <div className={styles.sub}>
            {item.sub}
            {item.highlight && <> &nbsp;·&nbsp; <strong>{item.highlight}</strong></>}
          </div>
          <ul className={styles.bullets}>
            {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>
        </div>
      ))}
    </Section>
  )
}
