import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { jumpProject } from "@/utils";
const whiteList = ["http://localhost:8080"];
function App() {
  window.addEventListener(
    "message",
    (event) => {
      if (!whiteList.includes(event.origin)) return;
      localStorage.setItem("count", event.data);
    },
    false
  );
  const [count, setCount] = useState(Number(localStorage.getItem("count")))
  useEffect(()=>{
    localStorage.setItem("count", count);
  },[count])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <button type="button" onClick={() => jumpProject({postData:count})}>
            返回首屏
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
