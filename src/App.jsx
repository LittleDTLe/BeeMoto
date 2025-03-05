import './index.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Gallery} from './pages/Gallery'
import {Pricing} from './pages/Pricing'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Gallery" element={<Galery/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
      </Routes>
    </Router>
  )

}

export default App