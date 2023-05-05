import { Link } from 'react-router-dom';

import styles from './Logo.module.css';

const Logo = () => {
  return (
    <h1 className={styles.title}>
      <Link to={'/'}>ViewMyCountry</Link>
    </h1>
  );
};

export default Logo;
