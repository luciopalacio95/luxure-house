'use client';
import { useState } from 'react';
import Image from 'next/image';
import GaleryImage from '../common/GaleryImage';
import { PiEyeLight } from 'react-icons/pi';

export default function CardItem(props) {
  const [advancedExampleOpen, setAdvancedExampleOpen] = useState(false);
  
  const handleImage = () => {
    setAdvancedExampleOpen(true);
  };

  var cubierto_1p =100000;
    var cubierto_2p =100000;
    var semi = 24500; 
    var precio = 0;
    if(props.plantas === '1'){
        precio = (props.metros_semicubierto * semi) +( props.metros_cubierto * cubierto_1p);
    }
    else{
        precio = (props.metros_semicubierto * semi) + (props.metros_cubierto * cubierto_2p);
    }
    var total = parseFloat(props.metros_cubierto) + parseFloat(props.metros_semicubierto);

    var entrega = (precio * props.entrega) / '100';
    var resto_cuotas = precio - entrega;
    var precio_cuota = resto_cuotas / props.cuotas;

    return (
      <>
        <li className='cards__item'>
          <div>
            <button
              type='button'
              className='ojo'
              onClick={() => setAdvancedExampleOpen(true)}
            >
              <PiEyeLight />
            </button>
            <figure className='cards__item__pic-wrap'>
              <GaleryImage
                advancedExampleOpen={advancedExampleOpen}
                setAdvancedExampleOpen={setAdvancedExampleOpen}
                advancedSlides={props.contenedor}
              />
              <Image
                onClick={handleImage}
                src={props.src}
                alt={props.label}
                className='cards__item__img'
                width={800}
                height={600}
              />
              <div className='cards__item__caracter'>
                <div className='cards__item__data'>
                  <p className='cards__item__data__text'>{props.camas} Dormitorios</p>
                </div>
                <div className='cards__item__data'>
                  <p className='cards__item__data__text'>{props.duchas} Baños</p>
                </div>
                <div className='cards__item__data'>
                  <p className='cards__item__data__text'>{parseInt(total)} m<sup>2</sup></p>
                </div>
              </div>
            </figure>
            <hr className='line__gold__model' />
            <div className='cards__item__info'>
              <div className='cards__item__prince'>
                {/* <h5 className="cards__item__text">${number_format(precio,0, ",", ".")}</h5> */}
                <div className='cards__item__info__prince'>
                  <h5 className='cards__item__text'>{props.label}</h5>
                  {/* <h5 className="cards__item__cuotas">+{props.cuotas} CUOTAS <strong>${ number_format(precio_cuota,0, ",", ".")}</strong></h5> */}
                  {/* <h5 className="cards__item__cuotas">ENTREGA DE <strong>${number_format(entrega,0, ",", ".")}</strong><br></br>+ cuotas</h5> */}
                  <h5 className='cards__item__cuotas'>ENTREGA DE <strong>${number_format(entrega,0, ',', '.')}</strong></h5>
                </div>
                <a
                  href={props.path}
                  
                  className='cards__item__link'
                >Ver más + 
                </a>
              </div>
            </div>
          </div>
        </li>
      </>
    );
}

function number_format (number, decimals, dec_point, thousands_sep) {
    // Strip all characters but numerical ones.
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}