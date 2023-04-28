import { useState } from "react";

import styles from './Hamburger.module.css';

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <div className={`${styles.container} ${isActive ? styles.open : ""}`} onClick={handleClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Hamburger;