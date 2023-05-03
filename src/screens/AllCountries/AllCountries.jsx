import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../../components/Header/Header";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Crumb from "../../components/Crumb/Crumb";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import Footer from "../../components/Footer/Footer";

import styles from './AllCountries.module.css';

const AllCountries = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [searchParam] = useState(["name"]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);
  const totalPages = Math.ceil(countries.length / countriesPerPage)

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(function (response) {
        setIsLoaded(true);
        setCountries(
          response.data.sort((a, b) =>
            a.name.common.localeCompare(b.name.common))
        );
      })
      .catch(function (error) {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  const search = (countries, currentCountries) => {
    let type = query === "" ? currentCountries : countries

    return type.filter((country) => {
      return searchParam.some((newCountry) => {
        return (
          country[newCountry].common
            .toString()
            .toLowerCase()
            .indexOf(query.toLowerCase()) > -1
        );
      });
    });
  }


  const onPageChanged = (data) => {
    const { allCountries } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentCountries = allCountries.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentCountries, totalPages });
  };

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
              : search(countries, currentCountries).map((item, id) => (
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
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
      <Footer />
    </>
  );
}

export default AllCountries;