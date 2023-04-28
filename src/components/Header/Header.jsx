import { useState } from "react";

import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Hamburger from "../Hambuger/Hambuger";

import styles from './Header.module.css';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <header className={styles.header}>
      <Logo />
      <Hamburger isActive={isActive} onClick={handleClick}/>
      <Menu isActive={isActive}/>
    </header>
  );
}

export default Header;