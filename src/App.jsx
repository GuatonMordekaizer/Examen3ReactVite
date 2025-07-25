import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './TodoApp.css'
import { TodoList } from './todolist'
import { Header } from './Header'
import { Footer } from './Footer'

export function App() {
  const [count, setCount] = useState(0)

  return (  
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      
      <main className="flex-grow-1">
        <div className="container py-4">
          <TodoList/>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App

