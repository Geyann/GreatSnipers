import Navbar from "./components/Navbar"
import React from "react"
import Title from "./components/title"
import Contact from "./components/contact"
import Foot from "./components/Foot"
import Card from "./components/cards"
import gian from "./assets/gian.png"
import joris from "./assets/joris.png"
import jerame from "./assets/jerame.png"
import { Route, Routes } from "react-router"
import Skills from "./components/Skills"
import Crosshair from "./components/CrosshairCursor"
function App() {



  return (
    <div className="cyber-pattern overflow-y-auto no-scrollbar max-h-screen ">
<Crosshair />
      <header>
        <Navbar />
        <Title />
      </header>
      <Card />
      <Skills />
      <Contact />
      <footer>
        <Foot />
      </footer>
    </div>
  )
}


export default App
