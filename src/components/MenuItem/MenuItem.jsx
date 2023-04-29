import { Link } from "react-router-dom";

import styles from './MenuItem.module.css';

const MenuItem = (props) => {

  return (
    <li>
      <Link to={props.to}>{props.name}</Link>
    </li>
  );
}

export default MenuItem;