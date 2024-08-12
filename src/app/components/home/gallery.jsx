'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import wood1 from '../../../../public/images/sistema/EC_Wood_1.jpg';
import wood2 from '../../../../public/images/sistema/EC_Wood_2.jpg';
import wood3 from '../../../../public/images/sistema/EC_Wood_3.jpg';
import steel1 from '../../../../public/images/sistema/EC_Steel_1.jpg';
import steel2 from '../../../../public/images/sistema/EC_Steel_2.jpg';
import steel3 from '../../../../public/images/sistema/EC_Steel_3.jpg';


export default function Gallery() {
    const [img1, setImg1] = useState(wood1);
    const [img2, setImg2] = useState(steel2);
    const [img3, setImg3] = useState(steel3);
    
    useEffect(() => {
        let myPix = new Array(wood1,wood2,steel3,wood3,steel1,steel2);
        const element1 = document.getElementsByClassName('sistema__img__1');
        const element2 = document.getElementsByClassName('sistema__img__2');
        const element3 = document.getElementsByClassName('sistema__img__3');
        let intervalId = setInterval(()=>  {
            if(!window.location.pathname.includes('/modelo') && !window.location.pathname.includes('/showroom')) {
            element1[0].animate([
                // keyframes
                { opacity: '1' },
                { opacity: '0' }
            ], {
                // timing options
                duration: 500,
                iterations: 1,
            });
            element2[0].animate([
                // keyframes
                { opacity: '1' },
                { opacity: '0' }
            ], {
                // timing options
                duration: 500,
                iterations: 1,
            });
            element3[0].animate([
                // keyframes
                { opacity: '1' },
                { opacity: '0' }
            ], {
                // timing options
                duration: 500,
                iterations: 1,
            });

            for(var i in myPix) {
                var randomNum = Math.floor(Math.random() * myPix.length);
                if(myPix.indexOf(randomNum) === -1){
                    randomNum = randomNum;
                } 
            }
            setImg2(myPix[randomNum]);
            switch(randomNum){
                case 0:
                    setImg1(myPix[randomNum+1]);
                    setImg3(myPix[randomNum+2]);
                break;
                case 2:
                    setImg1(myPix[randomNum-1]);
                    setImg3(myPix[randomNum+2]);
                break;
                case 1 || 3 || 4:
                    setImg1(myPix[randomNum-1]);
                    setImg3(myPix[randomNum+1]);
                break;
                case 5:
                    setImg1(myPix[randomNum-1]);
                    setImg3(myPix[randomNum-2]);
                break;
            }
        
            element1[0].animate([
                // keyframes
                { opacity: '0' },
                { opacity: '1' }
            ], {
                // timing options
                duration: 500,
                iterations: 1,
            });
            
            element2[0].animate([
                // keyframes
                { opacity: '0' },
                { opacity: '1' }
            ], {
                // timing options
                duration: 500,
                iterations: 1,
            });
            element3[0].animate([
                // keyframes
                { opacity: '0' },
                { opacity: '1' }
            ], {
                // timing options
                duration: 500,
                iterations: 1,
            });
            }else{
            clearInterval(intervalId);
            }
        },5000);

    },[]);


  return (
    <>
      <div className='sistema__galeria__1'>
        <Image
          src={img1}
          className='sistema__image sistema__img__1'
          alt='sistema__img__1'
          width={700}
          height={500}
        />
      </div>
      <div className='sistema__galeria__2'>
        <Image
          src={img2}
          className='sistema__image sistema__img__2'
          alt='sistema__img__2'
          width={700}
          height={500}
        />
      </div>
      <div className='sistema__galeria__3'>
        <Image
          src={img3}
          className='sistema__image sistema__img__3'
          alt='sistema__img__2'
          width={700}
          height={500}
        />
      </div>
    </>
  );
}
