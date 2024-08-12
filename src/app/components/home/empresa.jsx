'use client';
import React from 'react';
import { Collapse } from '@kunukn/react-collapse';
import '../../assets/css/empresa.css';

function Empresa() {
    const [isOpen3, setIsOpen3] = React.useState(false);
    const [isOpen4, setIsOpen4] = React.useState(false);

    const onInit3 = ({ state, style, node }) => {
        setIsOpen3(true);
    };
    const onInit4 = ({ state, style, node }) => {
        setIsOpen4(true);
    };
    return (
      <div className='cards' id='empresa'>
        <div className='cards__container'>
          <div className='cont-title-sections'>
            <p className='title-sections' id='exept-title-empresa'>Nuestra empresa</p>
          </div>
        </div>
        <div className='cards__wrapper'>
          <div className='tu__empresa empresa__somos'>
            <button onClick={() => setIsOpen3(state => !state)} className={`${isOpen3 && 'boton-open'}`}>
              <span>
                <svg
                  className={`icon-down ${isOpen3 && 'is-open'}`}
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                >
                  <path d='M14.8 4L8 9.6 1.2 4 0 5.333 8 12l8-6.667z' />
                </svg>
              </span>
              <p>¿QUIÉNES SOMOS?</p>
            </button>
            <Collapse onInit={onInit3} isOpen={isOpen3}>
              <p className='texto__empresa'>
                Somos una empresa que se dedica al diseño y construcción de viviendas modernas. Nos caracteriza la calidad y exclusividad en todos nuestros proyectos. 
              </p>
            </Collapse>
          </div>
          <div className='tu__empresa empresa__elegir'>
            <button onClick={() => setIsOpen4(state => !state)} className={`${isOpen4 && 'boton-open'}`}>
              <span>
                <svg
                  className={`icon-down ${isOpen4 && 'is-open'}`}
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                >
                  <path d='M14.8 4L8 9.6 1.2 4 0 5.333 8 12l8-6.667z' />
                </svg>
              </span>
              <p>¿POR QUÉ ELEGIRNOS?</p>
            </button>
            <Collapse onInit={onInit4} isOpen={isOpen4}>
              <ul className='elegirnos__empresa'>
                <li>- Tenemos más de 1000 proyectos concretados que avalan nuestro compromiso.</li>
                <li>- Conformamos un equipo interdisciplinario de profesionales especializados en el rubro.</li>
                <li>- Construimos en todo el país.</li>
                <li>- Tenemos nuestra propia fábrica con materiales de primera calidad.</li>
              </ul>
            </Collapse>
          </div>
        </div>
      </div>
    );
}

export default Empresa;
