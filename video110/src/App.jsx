import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// import tailwindcss from '@tailwindcss/vite'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(true)
  const [todo, setTodo] = useState([
    {
      title: "Learn React",
      description: "Learn React from the official documentation and tutorials."
    },
    {
      title: "Learn Vite",
      description: "Learn Vite from the official documentation and tutorials."
    },
    {
      title: "Learn JavaScript",
      description: "Learn JavaScript from the official documentation and tutorials."
    }
  ]
)
  const Todo = ({ todo }) => {
    return (
      <>
        <div className="todo">
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      </>
    )
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setShowbtn((showbtn) => !showbtn)}
        >
          Show/Hide Button
        </button>
        {showbtn ?
          <button className='border-2 border-white w-1/3 rounded-full' onClick={() => setShowbtn(false)}>Hide Button</button>
          // : ""
          : <button className='border-2 border-white w-1/3 rounded-full' onClick={() => setShowbtn(true)}>Show Button</button>
        }
        {showbtn && <button className='border-2 border-white w-1/3 rounded-full' onClick={() => setShowbtn(false)}>Visible only when showbtn is true, Self Hide</button>
        }
        {todo.map((t) => (
          <Todo key={t.title} todo={t} />
        ))}
        {todo.map((t) => {
          return <div className="todo" key={t.title}>
            <h3>{t.title}</h3>
            <p>{t.description}</p>
          </div>
        })}

      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}


export default App
