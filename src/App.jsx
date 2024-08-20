import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'

import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  const title = 'My Portfolio'
  const [page, setPage] = useState('Home')

  const renderPage = (pageName) => {
    switch(pageName) {
      case 'Home':
        return <Home />
      case 'About':
        return <About />
      default:
        return <Contact />
    }
  }


 
  return (
    <>
      <Header title={title} setPage={setPage} page = {page} />

      

      {renderPage(page)}
    </>

  )

}
export default App
