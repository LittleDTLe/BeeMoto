import React, { useState } from 'react'
import Hero from '../Components/Hero/Hero'
import Services from '../Components/Services/Services'
import Title from '../Components/Title/Title'
import About from '../Components/About/About'
import Store from '../Components/Store/Store'
import Contact from '../Components/Contact/Contact'
import Video from '../Components/VideoPlayer/VideoPlayer'

const Home = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Hero/>
      <div className="container">
        <Title subTitle='our services' title='What We Offer'/>
        <Services/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Our Space'/>
        <Store/>
        <Title subTitle='Contact Us' title='Only a Message Away'/>
        <Contact/>
      </div>
      <Video playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default Home