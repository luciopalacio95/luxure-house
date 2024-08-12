'use client';
import React, { useState } from 'react';
import { Collapse } from '@kunukn/react-collapse';
import '../../assets/css/sistema.css';
import Gallery from './gallery';

export default function Sistema() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const onInit1 = ({ state, style, node }) => {
        setIsOpen1(true);
    };
    const onInit2 = ({ state, style, node }) => {
        setIsOpen2(false);
    };
    return (
      <div className='cards' id='sistema'>
        <div className='cards__container'>
          <div className='cont-title-sections'>
            <p className='title-sections' id='exept-title-sistemas'>Sistemas Constructivos</p>
          </div>
        </div>
        <div className='cards__wrapper'>
          <div className='sistema__galery'>
            <Gallery />
          </div>

          <div className='sistema__information'>
            <div className='sistema__wood'>
              <button onClick={() => setIsOpen1(state => !state)} className={`${isOpen1 && 'boton-open'}`}>
                <span>
                  <svg
                    className={`icon-down ${isOpen1 && 'is-open'}`}
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                  >
                    <path d='M14.8 4L8 9.6 1.2 4 0 5.333 8 12l8-6.667z' />
                  </svg>
                </span>
                <p>WOOD FRAME</p>
              </button>
              <Collapse onInit={onInit1} isOpen={isOpen1}>
                <ul className='lista__sistema'>
                  <li>- Excelente Aislación térmica y acústica.</li>
                  <li>- Perfiles de madera.</li>
                  <li>- Menor tiempo de construcción.</li> 
                  <li>- Utiliza menos materiales.</li>
                </ul>
              </Collapse>
            </div>
            <div className='sistema__steel'>
              <button onClick={() => setIsOpen2(state => !state)} className={`${isOpen2 && 'boton-open'}`}>
                <span>
                  <svg
                    className={`icon-down ${isOpen2 && 'is-open'}`}
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                  >
                    <path d='M14.8 4L8 9.6 1.2 4 0 5.333 8 12l8-6.667z' />
                  </svg>
                </span>
                <p>STEEL FRAME</p>
              </button>
              <Collapse onInit={onInit2} isOpen={isOpen2}>
                <ul className='lista__sistema'>
                  <li>- Excelente aislación térmica y acústica.</li>
                  <li>- Materiales modernos.</li>
                  <li>- Perfiles de acero galvanizado.</li> 
                  <li>- Menor costo de mano de obra.</li>
                  <li>- Ahorro de materiales.</li>
                </ul>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    );
}
