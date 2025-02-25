import React from 'react'
import './Services.css'
import service1 from '../../assets/program-1.png'
import service2 from '../../assets/program-2.png'
import service3 from '../../assets/program-3.png'
import service_icon_1 from '../../assets/program-icon-1.png'
import service_icon_2 from '../../assets/program-icon-2.png'
import service_icon_3 from '../../assets/program-icon-3.png'

const Services = () => {
  return (
    <div className='services'>
        <div className="service">
            <img src={service1} alt="" />
            <div className="caption">
                <img src={service_icon_1} alt="" />
                <p>Wheel Care</p>
            </div>
        </div>
        <div className="service">
            <img src={service2} alt="" />
            <div className="caption">
                <img src={service_icon_2} alt="" />
                <p>Body Paint Care</p>
            </div>
        </div>
        <div className="service">
            <img src={service3} alt="" />
            <div className="caption">
                <img src={service_icon_3} alt="" />
                <p>Deep Cleaning</p>
            </div>
        </div>
    </div>
  )
}

export default Services