import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/Header/Header';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Crumb from '../../components/Crumb/Crumb';
import Footer from '../../components/Footer/Footer';

import styles from './DetailedCountry.module.css';

function DetailedCountry() {
  const location = useLocation();
  const originalName = location.state.originalName;
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${originalName}?fullText=true`)
      .then(function (response) {
        setIsLoaded(true);
        setData(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Breadcrumbs lastCrumb={originalName}>
          <Crumb to='/' name='Home' />
          <Crumb to='/countries' name='Countries' />
        </Breadcrumbs>
        {!isLoaded ? (
          <h2>loading...</h2>
        ) : (
          <div className={styles.country}>
            <section className={styles.country__overview}>
              <div className={styles.overview__img}>
                <img src={data.flags.svg} alt={data.flags.alt} />
              </div>
              <table className={styles.overview__info}>
                <tbody>
                  <tr>
                    <th>Common</th>
                    <td>{data.name.common}</td>
                  </tr>
                  <tr>
                    <th>Official</th>
                    <td>{data.name.official}</td>
                  </tr>
                  <tr>
                    <th>Common native</th>
                    <td>
                      {data.name.nativeName?.[
                        Object.keys(data.name.nativeName)[0]
                      ]?.common || '-'}
                    </td>
                  </tr>
                  <tr>
                    <th>Official native</th>
                    <td>
                      {data.name.nativeName?.[
                        Object.keys(data.name.nativeName)[0]
                      ]?.official || '-'}
                    </td>
                  </tr>
                  <tr>
                    <th>Native language</th>
                    <td>
                      {data.languages?.[Object.keys(data.languages)[0]] || '-'}
                    </td>
                  </tr>
                  <tr>
                    <th>Population</th>
                    <td>{data.population}</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className={styles.country__codes}>
              <h2 className={styles.codes__title}>Codes</h2>
              <table className={styles.codes__info}>
                <tbody>
                  <tr>
                    <th>ISO 3166-1 alpha-2</th>
                    <td>{data.cca2}</td>
                  </tr>
                  <tr>
                    <th>ISO 3166-1 alpha-3</th>
                    <td>{data.cca3}</td>
                  </tr>
                  <tr>
                    <th>ISO 3166-1 numeric</th>
                    <td>{data.ccn3}</td>
                  </tr>
                  <tr>
                    <th>ISO 4217 currency code</th>
                    <td>
                      {data.currencies
                        ? Object.keys(data.currencies).join(', ')
                        : '-'}
                    </td>
                  </tr>
                  <tr>
                    <th>Top level domain</th>
                    <td>{data.tld[0]}</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className={styles.country__geography}>
              <h2 className={styles.geography__title}>Geography</h2>
              <table className={styles.geography__info}>
                <tbody>
                  <tr>
                    <th>Region</th>
                    <td>{data.region}</td>
                  </tr>
                  <tr>
                    <th>Subregion</th>
                    <td>{data.subregion ? data.subregion : '-'}</td>
                  </tr>
                  <tr>
                    <th>Capital</th>
                    <td>{data.capital ? data.capital : '-'}</td>
                  </tr>
                  <tr>
                    <th>Demonym</th>
                    <td>{data.demonyms?.eng.f || '-'}</td>
                  </tr>
                  <tr>
                    <th>Lat/Lng</th>
                    <td>
                      {data.capitalInfo.latlng?.[0] != null &&
                      data.capitalInfo.latlng?.[1] != null
                        ? `${data.capitalInfo.latlng[0]}, ${data.capitalInfo.latlng[1]}`
                        : '-'}
                    </td>
                  </tr>
                  <tr>
                    <th>Area</th>
                    <td>{data.area}km²</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default DetailedCountry;
