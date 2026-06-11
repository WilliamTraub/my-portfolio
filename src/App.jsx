import Nav from './components/Nav'
import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <hr />
      <Education />
      <hr />
      <Experience />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <footer style={{
        textAlign: 'center',
        padding: '3rem 2rem',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.72rem',
        color: 'var(--chalk-dim)',
        borderTop: '1px solid var(--border)',
      }}>
        William Traub &nbsp;·&nbsp; Northeastern University &nbsp;·&nbsp; Boston, MA
      </footer>
    </>
  )
}
