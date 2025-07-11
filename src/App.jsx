import React from "react"
import Navbar from "./components/Navbar"
import Manager from "./components/Manager"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Manager />
      <Footer />
    </div>
  )
}

export default App
