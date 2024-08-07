    import React, { useState } from 'react';
    import ValidateForm from './ValidateFormCita';
    import validate from './ValidateCita';
    import { FaSpinner } from 'react-icons/fa';
    import DatePicker, { registerLocale } from 'react-datepicker';
    import 'react-datepicker/dist/react-datepicker.css';
    import el from 'date-fns/locale/es'; // the locale you want
    import {setMinutes, setHours} from 'date-fns';
    import '../../../assets/css/formCita.css';

    registerLocale('el', el); // register it with the name you want
    
    const FormCita = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = ValidateForm(
        submitForm,
        validate
    );

    const [startDate, setStartDate] = useState(null);

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        return currentDate.getTime() < selectedDate.getTime();
    };

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
    <h2 className='title__form__cita'>Formulario</h2>
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-row'>
        <div className='form-inputs'>
          <label htmlFor='name' className='form-label'>
            Nombre y Apellido
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='form-input'
            value={values.name}
            onChange={handleChange}
            placeholder='Escriba aquí su nombre y apellido'
          />
          {errors.name && (
            <small className='input-error'>{errors.name}</small>
                )}
        </div>
      </div>
      <div className='form-row'>
        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>
            E-mail
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='form-input'
            value={values.email}
            onChange={handleChange}
            placeholder='Escriba aquí su email'
          />
          {errors.email && (
            <small className='input-error'>{errors.email}</small>
                )}
        </div>
      </div>
      <div className='form-row'>
        <div className='form-inputs'>
          <label htmlFor='area_code' className='form-label'>
            Teléfono
          </label>
          <input
            type='tel'
            name='area_code'
            id='area_code'
            className='form-input'
            minLength='2'
            maxLength='4'
            autoComplete='none'
            placeholder='Código de área'
            value={values.area_code}
            onChange={handleChange}
            onKeyUp={keyUpHandler}
            style={{ width: '85%' }}
          />
          {errors.area_code && (
            <small className='input-error input-phne'>{errors.area_code}</small>
                )}
        </div>
        <div className='form-inputs'>
          <label
            htmlFor='phone'
            className='form-label'
            style={{ opacity: 0 }}
          >
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
            placeholder='Teléfono'
          />
          {errors.phone && (
            <small className='input-error input-phne'>{errors.phone}</small>
                )}
        </div>
      </div>
      <div className='form-row'>
        <div className='form-inputs'>
          <label htmlFor='cita_date' className='form-label'>
            Disponibilidad
          </label>
          <DatePicker
            className='form-input'
            dateFormat='HH:mm - dd/MM/yyyy'
            timeFormat='HH:mm'
            selected={startDate}
            minDate={new Date()}
            placeholderText='Seleciona una fecha y hora'
            onChange={(date) => {setStartDate(date);}}
            showTimeSelect
            includeTimes={[
                    setHours(setMinutes(new Date(), 0), 9),
                    setHours(setMinutes(new Date(), 0), 10),
                    setHours(setMinutes(new Date(), 0), 11),
                    setHours(setMinutes(new Date(), 0), 12),
                    setHours(setMinutes(new Date(), 0), 13),
                    setHours(setMinutes(new Date(), 0), 14),
                    setHours(setMinutes(new Date(), 0), 15),
                    setHours(setMinutes(new Date(), 0), 16),
                    setHours(setMinutes(new Date(), 0), 17),
                    setHours(setMinutes(new Date(), 0), 18),

                    setHours(setMinutes(new Date() ,15), 9),
                    setHours(setMinutes(new Date() ,15), 10),
                    setHours(setMinutes(new Date() ,15), 11),
                    setHours(setMinutes(new Date() ,15), 12),
                    setHours(setMinutes(new Date() ,15), 13),
                    setHours(setMinutes(new Date() ,15), 14),
                    setHours(setMinutes(new Date() ,15), 15),
                    setHours(setMinutes(new Date() ,15), 16),
                    setHours(setMinutes(new Date() ,15), 17),
                    setHours(setMinutes(new Date() ,15), 18),

                    setHours(setMinutes(new Date() ,30), 9),
                    setHours(setMinutes(new Date() ,30), 10),
                    setHours(setMinutes(new Date() ,30), 11),
                    setHours(setMinutes(new Date() ,30), 12),
                    setHours(setMinutes(new Date() ,30), 13),
                    setHours(setMinutes(new Date() ,30), 14),
                    setHours(setMinutes(new Date() ,30), 15),
                    setHours(setMinutes(new Date() ,30), 16),
                    setHours(setMinutes(new Date() ,30), 17),
                    setHours(setMinutes(new Date() ,30), 18),

                    setHours(setMinutes(new Date() ,45), 9),
                    setHours(setMinutes(new Date() ,45), 10),
                    setHours(setMinutes(new Date() ,45), 11),
                    setHours(setMinutes(new Date() ,45), 12),
                    setHours(setMinutes(new Date() ,45), 13),
                    setHours(setMinutes(new Date() ,45), 14),
                    setHours(setMinutes(new Date() ,45), 15),
                    setHours(setMinutes(new Date() ,45), 16),
                    setHours(setMinutes(new Date() ,45), 17),
                    setHours(setMinutes(new Date() ,45), 18),
                ]}
            timeIntervals={15}
            filterTime={filterPassedTime}
            strictParsing
            locale='el'
            timeCaption='Hora'
            popperPlacement='bottom-start'
            name='cita_date'
            id='cita_date'
            autoComplete='none'
          />
        
          {errors.cita_date && (
            <small className='input-error'>{errors.cita_date}</small>
                )}
        </div>
      </div>
      <div className='' id='form-contain-btn'>
        <button className='form-input-btn' type='submit'>
          Enviar
          <FaSpinner icon='spinner' className='spinner_boton' />
        </button>
      </div>
    </form>
  </>
    );
};

    export default FormCita;
