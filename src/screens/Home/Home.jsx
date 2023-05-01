import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import MultipleFlagsBubble from '../../media/images/flags-different-countries-bubble-shape.png'

import styles from './Home.module.css';

const Home = () => {

  return (
    <>
      <Header />
      <main>
        <section className={styles.introduction}>
          <img
            className={styles.introduction__img}
            src={MultipleFlagsBubble}
            alt="Flags different countries bubble shape" />
          <h2 className={styles.introduction__slogan}>
            Discover the information of the country in which you were born
          </h2>
          <Link
            className={styles.introduction__button}
            to={"/"}>
            SEE ALL COUNTRIES
          </Link>
          <Link
            className={`${styles.introduction__button}
                        ${styles.introduction__buttonOutlined}`}
            to={"/"}>
            RANDOM COUNTRY
          </Link>
        </section>
        <section className={styles.about}>
          <h2 className={styles.about__title}>
            About this project
          </h2>
          <p className={styles.about__text}>
            The main function of this website is very simple, easy to use to
            explore information about the country in which you were born or
            learn something new from another country.
            <br />
            <br />
            All data is courtesy of <Link to={"https://github.com/angel99ab/view-my-country"}>Alejandro Matos</Link> from the Rest Countries project on GitLab.
            <br />
            Source code is available on <Link to={"https://github.com/angel99ab/view-my-country"}>GitHub</Link>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;