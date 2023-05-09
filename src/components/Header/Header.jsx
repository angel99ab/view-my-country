import { useState, useEffect } from 'react';

import Logo from '../Logo/Logo';
import Hamburger from '../Hambuger/Hambuger';
import Menu from '../Menu/Menu';
import MenuItem from '../MenuItem/MenuItem';

import styles from './Header.module.css';

function Header() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    document.body.classList.toggle(styles.menuOpen, isActive);
  }, [isActive]);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <header className={styles.header}>
      <Logo />
      <Hamburger isActive={isActive} onClick={handleClick} />
      <Menu isActive={isActive}>
        {/* TODO: change name and path of links */}
        <MenuItem name={'LINK 1'} to={'/'} />
        <MenuItem name={'LINK 2'} to={'/'} />
        <MenuItem name={'LINK 3'} to={'/'} />
        <MenuItem name={'LINK 4'} to={'/'} />
      </Menu>
    </header>
  );
}

export default Header;
