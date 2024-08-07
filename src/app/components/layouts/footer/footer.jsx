'use client';
import React, { useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { ImPhone } from 'react-icons/im';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Form from '../form/form';
import FormSuccess from '../form/formSuccess';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../../../assets/css/footer.css';

export default function Footer () {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
      setIsSubmitted(true);
    }
    return (
      <div className='footer-container' id='contact'>
        <div className='cont-title-sections'>
          <p className='title-sections'>Contacto</p>
        </div>
        <div className='footer-links'>
          <div className='footer-link-wrapper1'>
            <div className='footer-link-items'>
              {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
              {/* <FormSuccess/> */}
            </div>
          </div>
          <div className='footer-link-wrapper2'>
            <div className='footer-link-items'>
              <h2>Contacto</h2>
              <a href='tel:' target='_blank' rel='noreferrer'>
                <ImPhone className='footer_icon_social' /> 0800-888-0123
              </a>
              <a
                href='https://api.whatsapp.com/'
                target='_blank' rel='noreferrer'
              >
                <IoLogoWhatsapp className='footer_icon_social' /> 11-61244666
              </a>
              <a href='https://www.google.com/maps/place/Buenos+Aires,+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.615427,-58.7451462,11z/data=!3m1!4b1!4m6!3m5!1s0x95bcca3b4ef90cbd:0xa0b3812e88e88e87!8m2!3d-34.6036844!4d-58.3815591!16zL20vMDFseTVt?entry=ttu' target='_blank' rel='noreferrer'><FaMapMarkerAlt className='footer_icon_social' /> Ficticia - Calle 72, <br />Buenos Aires, Buenos Aires</a>
            </div>
            <div className='footer-link-items'>
              <h2>Horarios</h2>
              {/* <label className="label__direc">Córdoba</label> */}
              <p>
                <b>Lunes a Domingo</b>
                11:00 - 20:00hs.
              </p>
              {/* <p>
                  <b>Sábado</b>
                  10:00 - 14:00 hs.
                </p> */}
              <div className='slider-icon-redes-footer'>
                <a
                  href='https://www.instagram.com/'
                  target='_blank' rel='noreferrer'
                > <FaInstagram className='slider-fa-icon' />
                </a>
                <a
                  href='https://www.facebook.com//'
                  target='_blank' rel='noreferrer'
                > <FaFacebookSquare className='slider-fa-icon' />
                </a>
                <a
                  href='https://api.whatsapp.com/'
                  target='_blank' rel='noreferrer'
                > <FaWhatsapp className='slider-fa-icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-coopiri'>
          <p className='footer-text-coopiri'>Todos los derechos reservados - Luxure House 2021</p>
        </div>
      </div>
    );
}