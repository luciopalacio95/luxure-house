import React from 'react';
import '../../assets/css/models.css';
import CardItem from './modelItem';
import { productos } from '@/app/constants';

export default function Models() {
  return (
    <div className='cards' id='models'>
      <div className='cards__container'>
        <div className='cont-title-sections'>
          <p className='title-sections' id='exept-title-modelos'>Nuestros modelos</p>
        </div>
        <div className='cards__wrapper'>
          <div className='cards__items'>
            {productos.map((item, i) => (
              <CardItem
                key={i}
                src={item.src}
                label={item.title}
                path={item.path}
                camas={item.camas}
                duchas={item.duchas}
                metros_cubierto={item.metros_cubierto}
                metros_semicubierto={item.metros_semicubierto}
                entrega={item.entrega}
                cuotas={item.cuotas}
                plantas={item.plantas}
                contenedor={item.srcSet}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}