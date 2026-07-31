import Section from './Section'
import styles from './ResumeItems.module.css'

const experience = [
  {
    title: 'Diagrammatic Algebras REU',
    date: 'Summer 2024',
    sub: 'Northeastern University · Mentor: Prof. Iva Halacheva',
    bullets: [
      'Investigated dimensions of simple modules in diagrammatic algebra settings',
      'Implemented dimLi, a dimension formula for simple modules, in OCaml and Python with modular helper functions staying close to the underlying algorithmic structure',
      'Explored connections between representation theory, Lie theory, and combinatorics',
    ],
  },
  {
    title: 'Python & JavaScript Instructor',
    date: '2021 — 2024',
    sub: 'Trackside Teen Center',
    bullets: [
      'Taught introductory Python and JavaScript to middle school students over multiple years',
      'Designed hands-on curriculum emphasizing problem-solving over syntax',
    ],
  },
  {
    title: 'Summer Camp Counselor',
    date: '2023 — 2025',
    sub: 'Camp Gordyland, Wilton YMCA',
    bullets: [
      'Led athletic programming for campers, coordinating group instruction and activities',
    ],
  },
  {
    title: 'Farm Mentor and Builder',
    date: '2022 — 2024',
    sub: 'Ambler Farm - Wilton, CT',
    bullets: [
      'Worked on a small farm maintaining infrastructure and mentoring apprentices. Built and repaired fences, sheds, and other structures, and helped newer workers develop practical skills on the job',
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
