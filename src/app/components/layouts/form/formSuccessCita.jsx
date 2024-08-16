import Image from 'next/image';
import '../../../assets/css/formSuccessCita.css';
import icon from '../../../../../public/images/iconos/pico.svg';
import Link from 'next/link';

const FormSuccess = () => {
  return (
    <>
      <div className='form-content-success'>
        <div className='form-success'>
          <Image
            src={icon}
            alt='icon'
            className='footer-icon-pico i-right'
            width={55}
            height={55}
          />          
          <h5 className='form-success-title'>¡Gracias por confiar <br /> en nosotros!</h5>
          <p className='form-success-text'>En breve un asesor comercial se <br /> pondrá en contacto para brindarle <br /> más información.</p>
          <Image
            src={icon}
            alt='icon'
            className='footer-icon-pico i-left'
            width={55}
            height={55}
          />
        </div>
      </div>

      <Link href='/' className='form-input-btn btn-back'>
        Inicio
      </Link>
    </>
  );
};

export default FormSuccess;
