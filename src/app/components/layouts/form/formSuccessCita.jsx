import React from 'react';
import '../../../assets/css/formSuccessCita.css';
import icon from '/images/iconos/pico.svg';

const FormSuccess = () => {
    return (
      <div className='form-content-success'>
        <div className='form-success'>
          <img
            src={icon}
            className='footer-icon-pico i-right'
            alt=''
          /> 
          <h5 className='form-success-title'>¡Gracias por confiar <br /> en nosotros!</h5>
          <p className='form-success-text'>En breve un asesor comercial se <br /> pondrá en contacto para brindarle <br /> más información.</p>
          <img
            src={icon}
            className='footer-icon-pico i-left'
            alt=''
          /> 
        </div>
      </div>
            
        
    );
};

export default FormSuccess;
