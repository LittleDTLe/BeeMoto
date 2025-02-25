import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    // TODO: Add Web3Form Integration

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us a Message</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad quae rem est ipsum voluptates ea pariatur minima, placeat harum, maiores beatae doloremque unde at corporis iure ratione earum ex? Impedit.</p>
            <ul>
                <li><img src={mail_icon} alt="" />Email</li>
                <li><img src={phone_icon} alt="" />Phone</li>
                <li><img src={location_icon} alt="" />Address</li>
            </ul>
        </div>
        <div className="contact-col">
            <form /*onSubmit={onSubmit}*/>
                <input type="text" name='name' placeholder='Type Your Name' required/>
                <input type="tel" name="phone" id="" placeholder='Enter Your Phone Number' required/>
                <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>
            </form>
            {/* <span>{onSubmit}</span> */}
        </div>
    </div>
  )
}

export default Contact