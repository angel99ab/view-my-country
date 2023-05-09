import { Link } from 'react-router-dom';

import styles from './MenuItem.module.css';

function MenuItem(props) {
  return (
    <li>
      <Link className={styles.menuLink} to={props.to}>
        {props.name}
      </Link>
    </li>
  );
}

export default MenuItem;
