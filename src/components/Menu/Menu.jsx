import styles from './Menu.module.css';

const Menu = (props) => {

  return (
    <nav className={`${styles.navigation} ${props.isActive ? styles.open : ""}`}>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>
    </nav>
  );
}

export default Menu;