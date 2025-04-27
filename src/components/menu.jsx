import style from './menu.module.css';
import logoNav from '../assets/images/logo_dragonball.png';
import MainMenuIcon from '../assets/images/main-menu.png'; // Importe a imagem do menu
import { useState } from 'react';

export const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`navegacao ${style['navBar']}`}>
        <img src={logoNav} alt="logoNav" className={style.logoNav} />
        <button className={style.hamburger} onClick={toggleMenu}>
          <img src={MainMenuIcon} alt="Menu" className={style.mainMenuIcon} /> {/* Ícone do menu */}
        </button>
        <ul className={`${style['nav-menu']} ${isOpen ? style.open : ''}`}>
          <li>
            <a className={`nav-link ${style['nav-link']}`} href={"/"}>{props.option01}</a>
          </li>
          <li>
            <a className={`nav-link ${style['nav-link']}`} href={"/requisicao"}>{props.option02}</a>
          </li>
        </ul>
      </nav>
    </>
  );
};