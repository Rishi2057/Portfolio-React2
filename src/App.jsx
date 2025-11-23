
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import About from './About'

function App() {

  return (
    <>
   <Routes>
    <Route path='/' element={<LandingPage/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/skills' element={<Skills/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/about' element={<About/>} />
   </Routes>
    </>
  )
}

export default App
