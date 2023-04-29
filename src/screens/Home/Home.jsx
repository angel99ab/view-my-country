import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";

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
      </main>
    </>
  );
}

export default Home;