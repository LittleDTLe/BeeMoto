import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Pricing from './pages/Pricing'
import Gallery from './pages/Gallery'
import Footer from './Components/Footer/Footer'
// import Content from './Components/Content.jsx'
import Home from './pages/Home'
import Terms from './pages/Terms'
import Policies from './pages/Policies'
import './index.css'

const App = () => {

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='*' element={<Home/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/policies' element={<Policies/>}/>
        </Routes>
        <div className='container'><Footer/></div>
      </Router>
    </div>
  )
}

export default App