import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsList, BsX } from 'react-icons/bs';
import Link from 'next/link';
import { Link  as Linka } from 'react-scroll';
import { IconContext } from 'react-icons/lib';

import logo_claro from '../../../../../public/images/logo.png';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../../../assets/css/navbar.css';

function NavBar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavBar] = useState(false);
  const [screenSize, setScreenSize] = useState(0);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    setScreenSize(window.innerWidth);
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    setScreenSize(window.innerWidth);
    showButton(); 
    window.addEventListener('resize', showButton);
    window.addEventListener('scroll', changeBackground);
  }, []);


  const changeBackground = () => {
    if (window.scrollY >= 0.1) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#373334' }}>
        <div className={`navbar ${navbar && 'active'}`}>
          <div className='navbar-container container'>
            {props.isHome ?
              <Linka 
                className='navbar-logo' 
                to='home'
                spy
                smooth
                offset={-180}
                duration={600}
                onClick={closeMobileMenu}
              >
                <Image
                  src={logo_claro}
                  className='navbar-logo-icon'
                  alt='logo'
                  width={230}
                  height={75}
                />
              </Linka>
              :
              <Link href='/' className='navbar-logo' onClick={closeMobileMenu}>
                <Image
                  src={logo_claro}
                  className='navbar-logo-icon'
                  alt='logo'
                  width={230}
                  height={75}
                />
              </Link>}

            <div className='menu-icon' onClick={handleClick}>
              {click ? <BsX /> : <BsList />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                {props.isHome ?
                  <Linka
                    to='home'
                    spy
                    smooth
                    offset={-90}
                    duration={600}
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Inicio
                  </Linka> 
                : <Link href='/' className='nav-links' onClick={closeMobileMenu}>Inicio</Link>}
              </li>
              <li className='nav-item' id='dropdown_modelo'>
                {screenSize <= 960 ? 
                  <Linka
                    className='nav-links'
                    id='btn__models'
                  >
                    Modelos
                  </Linka>
                  :
                  <Linka
                    to='models'
                    spy
                    smooth
                    offset={-120}
                    duration={600}
                    className='nav-links'
                    onClick={closeMobileMenu}
                    id='btn__models'
                  >
                    Modelos
                  </Linka>}
                <ul className='lista__modelos'>
                  {screenSize <= 960 &&
                    <li>
                      {props.isHome ?
                        <Linka
                          to='models'
                          spy
                          smooth
                          offset={-120}
                          duration={600}
                          className='nav-links'
                          onClick={closeMobileMenu}
                        >Todos
                        </Linka>
                    : <Link href='/#models' className='nav-links' onClick={closeMobileMenu}>Inicio</Link>}
                    </li>}
                  <li><Link href='/modelo/4010' onClick={closeMobileMenu}>Luxury 4010</Link></li>
                  <li><Link href='/modelo/4020' onClick={closeMobileMenu}>Luxury 4020</Link></li>
                  <li><Link href='/modelo/4030' onClick={closeMobileMenu}>Luxury 4030</Link></li>
                  <li><Link href='/modelo/4040' onClick={closeMobileMenu}>Luxury 4040</Link></li>
                  <li><Link href='/modelo/4050' onClick={closeMobileMenu}>Luxury 4050</Link></li>
                  <li><Link href='/modelo/4060' onClick={closeMobileMenu}>Luxury 4060</Link></li>
                  <li><Link href='/modelo/5010' onClick={closeMobileMenu}>Palace 5010</Link></li>
                  <li><Link href='/modelo/5020' onClick={closeMobileMenu}>Palace 5020</Link></li>
                  <li><Link href='/modelo/5030' onClick={closeMobileMenu}>Palace 5030</Link></li>
                  <li><Link href='/modelo/5040' onClick={closeMobileMenu}>Palace 5040</Link></li>
                </ul>
              </li>

              {/* <li className="nav-item">
                <Link
                  to="showroom"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={600}
                  className="nav-links"
                  onClick={closeMobileMenu}
                  id="btn__showroom"
                  >
                  Showroom
                </Link>
              </li> */}
              <li className='nav-item'>
                {props.isHome ?
                  <Linka
                    to='empresa'
                    spy
                    smooth
                    offset={-120}
                    duration={600}
                    className='nav-links'
                    onClick={closeMobileMenu}
                    id='btn__empresa'
                  >
                    Empresa
                  </Linka>
                : <Link href='/#empresa' className='nav-links' onClick={closeMobileMenu}>Empresa</Link>}
              </li>
              <li className='nav-item' style={{display:'none'}}>
                {props.isHome ?
                  <Linka
                    to='sistema'
                    spy
                    smooth
                    offset={-120}
                    duration={600}
                    className='nav-links'
                    onClick={closeMobileMenu}
                    id='btn__sistema'
                  >
                    Sistema
                  </Linka>
                  : <Link href='/#sistema' className='nav-links' onClick={closeMobileMenu}>Sistema</Link>}
              </li>
              <li className='nav-item'>
                <Linka
                  to='contact'
                  spy
                  smooth
                  offset={-130}
                  duration={600}
                  className='nav-links'
                  onClick={closeMobileMenu}
                  id='btn__contact'
                >
                  Contacto
                </Linka>
              </li>
              <li>
                <div className='slider-icon-redes-header'>
                  <a
                    href='https://www.instagram.com/'
                    target='_blank' rel='noreferrer'
                  > <FaInstagram className='slider-fa-icon' />
                  </a>
                  <a
                    href='https://www.facebook.com/'
                    target='_blank' rel='noreferrer'
                  > <FaFacebookSquare className='slider-fa-icon' />
                  </a>
                  <a
                    href='https://api.whatsapp.com/'
                    target='_blank' rel='noreferrer'
                  > <FaWhatsapp className='slider-fa-icon' />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
