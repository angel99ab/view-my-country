import styles from './Hamburger.module.css';

const Hamburger = (props) => {

  return (
    <div className={`${styles.container} ${props.isActive ? styles.open : ""}`} onClick={props.onClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Hamburger;