import Navbar from "./components/Navbar"
import React from "react"
import Title from "./components/title"
import Contact from "./components/contact"
import Foot from "./components/Foot"
import Card from "./components/cards"
import { Route, Routes } from "react-router"
import Skills from "./components/Skills"
import Crosshair from "./components/CrosshairCursor"
<<<<<<< HEAD
import PortfolioGrid from "./components/PortfolioGrid"
=======
>>>>>>> 117f25e080f26ba03f7da162f3cb5596af1ef94a
function App() {



  return (
    <div className="cyber-pattern overflow-y-auto no-scrollbar max-h-screen ">
<Crosshair />
      <header>
        <Navbar />
        <Title />
<<<<<<< HEAD
      </header> 
      <PortfolioGrid />
=======
      </header>
>>>>>>> 117f25e080f26ba03f7da162f3cb5596af1ef94a
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
