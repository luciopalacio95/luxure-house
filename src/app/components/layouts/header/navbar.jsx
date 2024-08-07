import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { BsList, BsX } from 'react-icons/bs';
import { Link  as Link } from 'react-scroll';
import { IconContext } from 'react-icons/lib';
import logo_claro from '../../../../../public/images/logo.png';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../../../assets/css/navbar.css';

function NavBar() {
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
  }, []);


  const changeBackground = () => {
    if (window.scrollY >= 0.1) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener('resize', showButton);
  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <IconContext.Provider value={{ color: '#373334' }}>
        <div className={`navbar ${navbar && 'active'}`}>
          <div className='navbar-container container'>
            <Link 
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
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <BsX /> : <BsList />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link
                  to='home'
                  spy
                  smooth
                  offset={-90}
                  duration={600}
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Inicio
                </Link>
              </li>
              <li className='nav-item' id='dropdown_modelo'>
                {screenSize <= 960 ? 
                  <Link
                    className='nav-links'
                    id='btn__models'
                  >
                    Modelos
                  </Link>
                  :
                  <Link
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
                  </Link>}
                <ul className='lista__modelos'>
                  {screenSize <= 960 &&
                    <li>
                      <Link
                        to='models'
                        spy
                        smooth
                        offset={-120}
                        duration={600}
                        className='nav-links'
                        onClick={closeMobileMenu}
                      >Todos
                      </Link>
                    </li>}
                  <li><a href='/modelo/4010' onClick={closeMobileMenu}>Luxury 4010</a></li>
                  <li><a href='/modelo/4020' onClick={closeMobileMenu}>Luxury 4020</a></li>
                  <li><a href='/modelo/4030' onClick={closeMobileMenu}>Luxury 4030</a></li>
                  <li><a href='/modelo/4040' onClick={closeMobileMenu}>Luxury 4040</a></li>
                  <li><a href='/modelo/4050' onClick={closeMobileMenu}>Luxury 4050</a></li>
                  <li><a href='/modelo/4060' onClick={closeMobileMenu}>Luxury 4060</a></li>
                  <li><a href='/modelo/5010' onClick={closeMobileMenu}>Palace 5010</a></li>
                  <li><a href='/modelo/5020' onClick={closeMobileMenu}>Palace 5020</a></li>
                  <li><a href='/modelo/5030' onClick={closeMobileMenu}>Palace 5030</a></li>
                  <li><a href='/modelo/5040' onClick={closeMobileMenu}>Palace 5040</a></li>
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
                <Link
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
                </Link>
              </li>
              <li className='nav-item' style={{display:'none'}}>
                <Link
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
                </Link>
              </li>
              <li className='nav-item'>
                <Link
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
                </Link>
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
