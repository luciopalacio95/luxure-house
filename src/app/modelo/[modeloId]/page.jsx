'use client';
import Footer from '@/app/components/layouts/footer/footer';
import Header from '@/app/components/layouts/header/header';
import { productList, productos } from '@/app/constants';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Arrow from '../../../../public/images/iconos/arrow.png';
import Parser from 'html-react-parser';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import  '../../assets/css/modelPuntual.css';

export default function ModelDetails({params}) {

   if(!productList.includes(params.modeloId)){
    redirect('/404');
   }

  // Función para encontrar un producto por su path
  function findProductByPath(path) {
    return productos.find(product => product.path === path);
  }
    // Ejemplo de uso:
  const pathToFind = `/modelo/${params.modeloId}`;
  const model = findProductByPath(pathToFind);

  return (
    <>
      <Header isHome={false} />
      
      <div className='seccion__modelo__galeria'>
        <Carousel
          showArrows
          emulateTouch
          showThumbs
          showStatus={false}
          infiniteLoop
          swipeable={false}
          useKeyboardArrows
          margin={0}
          padding={0}
          autoPlay={false}
        >
          {model.srcSet.map((item, index) =>{
            return(
              <div key={index}>
                <img
                  src={item.src} 
                  alt={model.title}
                  className='img_carousel'
                />
              </div>
            );
          })}
        </Carousel>
        <div className='seccion__caracteristicas__principales'>
          <p className='titulo__modelo_'>{model.title}</p>
          <p className='titulo__subtitulo_'>Características</p>
          <p className='titulo__espacios_'>- {model.camas} Dormitorios</p>
          <p className='titulo__espacios_'>- {model.duchas} Baños</p>
          {/* <p className="titulo__espacios_">- Superficie total 0.00 m<sup>2</sup></p> */}
        </div>
      </div>
      <div className='seccion__modelo__description'>
        <div className='cont-title-sections'>
          <p className='title-sections-model' id='except__desc__model'>
            Descripción
          </p>
        </div>
      </div>
      <div className='seccion__modelo__description' id='except__caracte_'>
        <div className='seccion__caracteristicas__modelo'>
          <p className='texto__caracteristicas'>
            {Parser(model.descripcion)}
          </p>
        </div>
        <div className='seccion__especificaciones__modelo'>
          <p className='titulo__especificaciones'>Superficie</p>
          <br />
          <p className='texto__especificaciones__modelo'>
            <Image
              src={Arrow}
              className='arrow__especificaciones'
              alt='arrow'
              width={20}
              height={20}
            />
            Superficie Cubierta {model.metros_cubierto} m<sup>2</sup>
          </p>
          <p className='texto__especificaciones__modelo'>
            <Image
              src={Arrow}
              className='arrow__especificaciones'
              alt='arrow'
              width={20}
              height={20}
            />
            Superficie Semicubierta {model.metros_semicubierto} m<sup>2</sup>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}