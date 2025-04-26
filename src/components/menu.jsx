import style from './menu.module.css';
import { useState } from 'react';

export const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navegacao ${style.navBar}`}>
      <div className={`container-fluid ${style.navContainer}`}>
        <button className={style.hamburger} onClick={toggleMenu}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </button>
        <ul className={`${style['nav-menu']} ${isOpen ? style.open : ''}`}>
          <li>
            <a className={`nav-link ${style['nav-link']}`} href={"/"}>{props.option01}</a>
          </li>
          <li>
            <a className={`nav-link ${style['nav-link']}`} href={"/requisicao"}>{props.option02}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};