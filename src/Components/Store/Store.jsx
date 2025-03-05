import React from 'react'
import './Store.css'
import bike from '../../assets/bike.jpg'
import white_arrow from '../../assets/white-arrow.png'
import {Link} from 'react-router-dom'


const Store = () => {
  return (
    <div className='store'>
        <div className="gallery">
            <img src={bike} alt="" loading='lazy'/>
            <img src={bike} alt="" loading='lazy'/>
            <img src={bike} alt="" loading='lazy'/>
            <img src={bike} alt="" loading='lazy'/>
        </div>
        <button className='btn dark-btn'><Link to={'/Gallery'}>See More <img src={white_arrow} alt="" /></Link></button>
    </div>
  )
}

export default Store