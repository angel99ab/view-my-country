import { Link } from "react-router-dom";

import Menu from "../Menu/Menu";

import styles from './Header.module.css';

const Header = () => {

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link to={"/"}>ViewMyCountry</Link>
      </h1>
      <Menu />
    </header>
  );
}

export default Header;