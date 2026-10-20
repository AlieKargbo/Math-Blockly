import { useState } from 'react'
import './App.css'
import BlocklyWorkspace from './components/BlocklyWorkspace';

const questions = [
  'Add 3 and 4.',
  'Subtract 2 from 9.',
  'Multiply 5 by 6.',
  'Divide 24 by 3.',
  'Raise 2 to the 5th power.',
  'Find the square root of 81.',
  'Find the absolute value of −12.',
  'Add −7 and 10.',
  'Find the remainder when 17 is divided by 5.',
  'Divide 3 by 4.',
  'Add 6 to the product of 2 and 5.',
  'Divide 100 by 4, then subtract 8.',
  'Square 3, then add 1.',
  'Find the square root of 25, then add 6.',
  'Find the absolute value of −9, then subtract 2.',
  'Find sin(30°).',
  'Find cos(60°).',
  'Find tan(45°).',
  'Find sin⁻¹(0.5) in degrees.',
  'Find cos⁻¹(0.5) in degrees.',
  'Solve 2x + 3 = 11 for x.',
  'Define f(x) = 2x + 1, then graph f.',
]

function App() {
  const [activeQuestion, setActiveQuestion] = useState(0)

  return (
    <main className="math-app">
      <header className="math-topbar">
        <a className="math-brand" href="#workspace" aria-label="Math Blocks home">
          <span className="math-brand-mark" aria-hidden="true">∑</span>
          <span>Math Blocks</span>
        </a>
        <div className="math-topbar-title">Visual Math Studio</div>
        <label className="math-challenge-picker">
          <span>Challenge</span>
          <select
            value={activeQuestion}
            onChange={(event) => setActiveQuestion(Number(event.target.value))}
          >
            {questions.map((question, index) => (
              <option key={question} value={index}>{index + 1}. {question}</option>
            ))}
          </select>
        </label>
      </header>

      <div className="math-challenge-bar">
        <div className="math-challenge-copy" aria-live="polite">
          <span className="math-eyebrow">YOUR CHALLENGE · {activeQuestion + 1} OF {questions.length}</span>
          <strong>{questions[activeQuestion]}</strong>
        </div>
        <details className="math-guide">
          <summary>How to use</summary>
          <div className="math-guide-popover">
            <h2>Build, solve, explore</h2>
            <ol>
              <li>Choose a math category on the left.</li>
              <li>Drag blocks into the workspace and snap them together.</li>
              <li>Use Calculate for a value, Solve with an equation, or Graph to plot a function.</li>
            </ol>
          </div>
        </details>
      </div>

      <section id="workspace" className="math-editor" aria-label="Math block editor">
        <BlocklyWorkspace />
      </section>
    </main>
  )
}

export default App
