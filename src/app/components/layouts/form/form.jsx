import React from 'react';
import '../../../assets/css/form.css';
import ValidateForm from './ValidateForm';
import validate from './Validate';
import { FaSpinner } from 'react-icons/fa';

const Form = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = ValidateForm(
    submitForm,
    validate
  );

  function keyUpHandler(elem, e, i) {
    elem.target.value = elem.target.value.replace(/[^0-9]/g, '');

    while (elem.target.value.charAt(0) === '0') {
      elem.target.value = elem.target.value.substr(1);
    }
    const tel = document.getElementById('phone');
    switch (elem.target.value.length) {
      case 2:
        tel.setAttribute('maxLength', 8);
        tel.setAttribute('minLength', 8);
        break;
      case 3:
        tel.setAttribute('maxLength', 7);
        tel.setAttribute('minLength', 7);
        break;
      case 4:
        tel.setAttribute('maxLength', 6);
        tel.setAttribute('minLength', 6);
        break;
      default:
        break;
    }
  }
  return (
    <>
      <h2>Formulario</h2>
      <div className='form-content'>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-row'>
            <div className='form-inputs'>
              <label htmlFor='name' className='form-label'>
                Nombre
              </label>
              <input
                type='text'
                name='name'
                id='name'
                className='form-input'
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && (
                <small className='input-error'>{errors.name}</small>
              )}
            </div>
            <div className='form-inputs'>
              <label htmlFor='province' className='form-label'>
                Provincia
              </label>
              <select
                className='form-input'
                id='province'
                name='province'
                value={values.province}
                onChange={handleChange}
              >
                <option value='0' />
                <option value='3'>Buenos Aires</option>
                <option value='12'>Catamarca</option>
                <option value='10'>Chaco</option>
                <option value='25'>Chubut</option>
                <option value='1'>Córdoba</option>
                <option value='15'>Corrientes</option>
                <option value='18'>Entre Rios</option>
                <option value='8'>Formosa</option>
                <option value='6'>Jujuy</option>
                <option value='22'>La Pampa</option>
                <option value='9'>La Rioja</option>
                <option value='21'>Mendoza</option>
                <option value='17'>Misiones</option>
                <option value='23'>Neuquén</option>
                <option value='24'>Río Negro</option>
                <option value='7'>Salta</option>
                <option value='19'>San Juan</option>
                <option value='20'>San Luis</option>
                <option value='26'>Santa Cruz</option>
                <option value='16'>Santa Fe</option>
                <option value='11'>Santiago del Estero</option>
                <option value='27'>Tierra del Fuego</option>
                <option value='14'>Tucumán</option>
              </select>
              {errors.province && (
                <small className='input-error'>{errors.province}</small>
              )}
            </div>
          </div>
          <div className='form-row'>
            <div className='form-inputs'>
              <label htmlFor='contact_from' className='form-label'>
                Horario de contacto
              </label>
              <select
                className='form-input'
                id='contact_from'
                name='contact_from'
                value={values.contact_from}
                onChange={handleChange}
              >
                <option value='0' />
                <option value='1'>10:00 - 12:00</option>
                <option value='2'>12:00 - 15:00</option>
                <option value='3'>15:00 - 19:00</option>
              </select>
              {errors.contact_from && (
                <small className='input-error'>{errors.contact_from}</small>
              )}
            </div>
            <div className='form-inputs'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='form-input'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && (
                <small className='input-error'>{errors.email}</small>
              )}
            </div>
          </div>
          <div className='form-row'>
            <div className='form-inputs'>
              <label htmlFor='area_code' className='form-label'>
                Código de área
              </label>
              <input
                type='tel'
                name='area_code'
                id='area_code'
                className='form-input'
                minLength='2'
                maxLength='4'
                autoComplete='none'
                value={values.area_code}
                onChange={handleChange}
                onKeyUp={keyUpHandler}
              />
              {errors.area_code && (
                <small className='input-error'>{errors.area_code}</small>
              )}
            </div>
            <div className='form-inputs'>
              <label htmlFor='phone' className='form-label'>
                Teléfono
              </label>
              <input
                type='tel'
                name='phone'
                id='phone'
                className='form-input'
                minLength='6'
                maxLength='8'
                autoComplete='none'
                value={values.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <small className='input-error'>{errors.phone}</small>
              )}
            </div>
          </div>
          <div className='form-row'>
            <div className='form-inputs'>
              <label htmlFor='comment' className='form-label'>
                Consulta
              </label>
              <textarea
                name='comment'
                className='form-input'
                id='comment'
                rows='3'
                minLength='10'
                value={values.comment}
                onChange={handleChange}
              />
              {errors.comment && (
                <small className='input-error'>{errors.comment}</small>
              )}
            </div>
          </div>
          <div className='form-row' id='form-contain-btn'>
            <button className='form-input-btn' type='submit'>
              Enviar
              <FaSpinner icon='spinner' className='spinner_boton' />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
