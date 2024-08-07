'use client';
import { useState, useEffect } from 'react';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import '../../assets/css/banner.css';

import pc1 from '../../../../public/images/EC_Slider.jpg';
import mobile1 from '../../../../public/images/EC_Slider_mobile.jpg';

export default function Banner() {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);

  return (
    <>
      <div>
        <Image
          src={screenSize <= 960 ? mobile1 : pc1}
          alt='slider1'
          className='slider__home'
          width={1933}
          height={960}
        />
        <div className='slider-redes'>
          <p className='titulo__slider__home'>¡El Showroom más grande de latinoamérica!</p>
          <p className='subtitulo__slider__home'>Calidad, variedad de modelos, asesoramiento personalizado.</p>
          <a href='/showroom' style={{'text-decoration': 'none'}}>
            <button className='slider-button' id='info-1'>Agendá una cita</button>
          </a>
          <div className='slider-icon-redes'>
            <a
              href='https://www.instagram.com/'
              target='_blank' rel='noreferrer'
            > <FaInstagram className='slider-fa-icon' />
            </a>
            <a
              href='https://www.facebook.com/'
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
    </>
  );
}