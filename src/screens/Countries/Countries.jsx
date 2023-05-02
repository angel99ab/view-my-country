import Header from "../../components/Header/Header";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Crumb from "../../components/Crumb/Crumb";
import Footer from "../../components/Footer/Footer";

import styles from './Countries.module.css';

const Countries = () => {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Breadcrumbs lastCrumb="Countries">
          <Crumb to="/" name="Home"/>
        </Breadcrumbs>
      </main>
      <Footer />
    </>
  );
}

export default Countries;