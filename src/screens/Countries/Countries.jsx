import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../../components/Header/Header";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Crumb from "../../components/Crumb/Crumb";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

import styles from './Countries.module.css';

const Countries = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [searchParam] = useState(["name"]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(function (response) {
        setIsLoaded(true);
        setItems(response.data);
      })
      .catch(function (error) {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  // Sort names in alphabetical order
  items.sort((a, b) => a.name.common.localeCompare(b.name.common));

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].common
            .toString()
            .toLowerCase()
            .indexOf(query.toLowerCase()) > -1
        );
      });
    });
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Breadcrumbs lastCrumb="Countries">
          <Crumb to="/" name="Home" />
        </Breadcrumbs>
        <h2 className={styles.main__title}>All countries</h2>
        <div className={styles.main__wrapper}>
          <input
            type="search"
            className={styles.main__searchInput}
            placeholder="Enter country name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className={styles.main__countries}>
            {!isLoaded
              ? <h2>loading...</h2>
              : search(items).map((item, id) => (
                  <Card
                    key={id}
                    flagImage={item.flags.svg}
                    flagAlt={item.flags.alt}
                    name={item.name.common}
                    capital={item.capital}
                  />
                ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Countries;