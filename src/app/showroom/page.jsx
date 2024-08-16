'use client';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import '../assets/css/showroom.css';
import logo from '../../../public/images/logo_blanco.png';
import FormCita from '../components/layouts/form/formCita';
import FormSuccess from '../components/layouts/form/formSuccessCita';

export default function Page() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    useEffect(() => {
        let title = document.querySelector('div#showroom .title__showroom');
        title.classList.add('active');
        title.style.opacity = 1;
        
        let line = document.querySelector('div#showroom .line__showroom');
        line.classList.add('active');
        line.style.opacity = 1;

        let text = document.querySelector('div#showroom .text__showroom');
        text.classList.add('active');
        text.style.opacity = 1;

        let image = document.querySelector('div#showroom .img__showroom');
        image.classList.add('active');
        image.style.opacity = 1;
    },[]);

    return (
      <div className='' id='showroom'>
        <div className='cards__wrapper'>
          <div className='tarjeta__showroom'>
            <p className='title__showroom'>Agendá tu cita <br />sin cargo</p>
            <hr className='line__showroom' />
            <p className='text__showroom'>Te invitamos a recorrer el <br />Showroom de casas más<br />grande del país.</p>
            <Image
              src={logo}
              alt='logo'
              className='img__showroom'
              width={725}
              height={183}
            />  
          </div>
          <div className='tarjeta__showroom'>
            <div className='formulario__cita'>
              <div className='form__cita'>
                {!isSubmitted ? <FormCita submitForm={submitForm} /> : <FormSuccess />}
              </div>
            </div>
          </div>
          <Image
            src={logo}
            alt='logo'
            className='img__showroom__mobile'
            width={725}
            height={183}
          />  
        </div>
      </div>
    );
}