import { Link } from 'react-router-dom';

import styles from './Logo.module.css';

function Logo() {
  return (
    <h1 className={styles.title}>
      <Link
        to={'/'}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        ViewMyCountry
      </Link>
    </h1>
  );
}

export default Logo;
