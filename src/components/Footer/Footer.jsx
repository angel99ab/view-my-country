import styles from './Footer.module.css';

const Footer = () => {

  return (
    <footer className={styles.footer}>
        <p className={styles.footer__license}>Mozila Public License 2.0</p>
    </footer>
  );
}

export default Footer;