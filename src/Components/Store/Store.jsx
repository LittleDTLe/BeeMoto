import React from 'react'
import './Store.css'
import bike from '../../assets/bike.jpg'
import white_arrow from '../../assets/white-arrow.png'


const Store = () => {
  return (
    <div className='store'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className='btn dark-btn'>See More <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Store