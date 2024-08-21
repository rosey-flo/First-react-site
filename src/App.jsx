import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
 const title = 'My Portfolio'
  return (
    <>
      <Header title={title}  />
    <main className="flex-1">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      </main>

      <Footer />
     
    </>

  )

}
export default App
