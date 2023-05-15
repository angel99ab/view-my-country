import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import styles from './NotFound.module.css';

function NotFound() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <p className={styles.errorNumbers}>4 0 4</p>
        <Link to='/' className={styles.homeLink}>
          Back to home
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
