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
]

function App() {
  const [activeQuestion, setActiveQuestion] = useState(0)

  return (
    <main className="math-app">
      <header className="math-app-header">
        <h1>Math Blocks</h1>
        <p>Explore math by snapping blocks together.</p>
      </header>
      <section className="math-how-to" aria-labelledby="math-how-to-title">
        <h2 id="math-how-to-title">Try it: build 3 + 4</h2>
        <ol>
          <li>Drag a <strong>Number</strong> block from the toolbox into the workspace. Set it to 3.</li>
          <li>Drag an <strong>add</strong> operation into the workspace, then connect Number blocks set to 3 and 4.</li>
          <li>Read the expression on the right. Add a <strong>Calculate</strong> block to see the answer.</li>
        </ol>
      </section>
      <section className="math-practice" aria-labelledby="math-practice-title">
        <h2 id="math-practice-title">Practice questions</h2>
        <p>Choose a question, build it with blocks, then use Calculate to check the value.</p>
        <ol className="math-question-list">
          {questions.map((question, index) => (
            <li key={question}>
              <button
                type="button"
                className="math-question-button"
                aria-pressed={activeQuestion === index}
                onClick={() => setActiveQuestion(index)}
              >
                <span className="math-question-number">{index + 1}</span>
                <span>{question}</span>
              </button>
            </li>
          ))}
        </ol>
        <p className="math-active-question" aria-live="polite">
          <strong>Current question {activeQuestion + 1}:</strong> {questions[activeQuestion]}
        </p>
      </section>
      <BlocklyWorkspace />
    </main>
  )
}

export default App
