import styles from './Menu.module.css';

function Menu(props) {
  return (
    <nav
      className={`${styles.navigation} ${props.isActive ? styles.open : ''}`}
    >
      <ul>{props.children}</ul>
    </nav>
  );
}

export default Menu;
