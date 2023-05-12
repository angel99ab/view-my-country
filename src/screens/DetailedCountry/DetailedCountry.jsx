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
        <div>
          <Breadcrumbs lastCrumb={originalName}>
            <Crumb to='/' name='Home' />
            <Crumb to='/countries' name='Countries' />
          </Breadcrumbs>
          {!isLoaded ? (
            <h2>loading...</h2>
          ) : (
            <>
              <section className={styles.country__overview}>
                <div className={styles.overview__img}>
                  <img src={data.flags.svg} alt={data.flags.alt} />
                </div>
                <div className={styles.overview__info}>
                  <h2 className={styles.overview__title}>Overview</h2>
                  <div>
                    <div>Common</div>
                    <div>{data.name.common}</div>
                  </div>
                  <div>
                    <div>Official</div>
                    <div>{data.name.official}</div>
                  </div>
                  <div>
                    <div>Common native</div>
                    <div>
                      {data.name.nativeName?.[
                        Object.keys(data.name.nativeName)[0]
                      ]?.common || '-'}
                    </div>
                  </div>
                  <div>
                    <div>Official native</div>
                    <div>
                      {data.name.nativeName?.[
                        Object.keys(data.name.nativeName)[0]
                      ]?.official || '-'}
                    </div>
                  </div>
                  <div>
                    <div>Native language</div>
                    <div>
                      {data.languages?.[Object.keys(data.languages)[0]] || '-'}
                    </div>
                  </div>
                  <div>
                    <div>Population</div>
                    <div>{data.population}</div>
                  </div>
                </div>
              </section>
              <section className={styles.country__codes}>
                <div className={styles.codes__info}>
                  <h2 className={styles.codes__title}>Codes</h2>
                  <div>
                    <div>ISO 3166-1 alpha-2</div>
                    <div>{data.cca2}</div>
                  </div>
                  <div>
                    <div>ISO 3166-1 alpha-3</div>
                    <div>{data.cca3}</div>
                  </div>
                  <div>
                    <div>ISO 3166-1 numeric</div>
                    <div>{data.ccn3}</div>
                  </div>
                  <div>
                    <div>ISO 4217 currency code</div>
                    <div>
                      {data.currencies
                        ? Object.keys(data.currencies).join(', ')
                        : '-'}
                    </div>
                  </div>
                  <div>
                    <div>Top level domain</div>
                    <div>{data.tld[0]}</div>
                  </div>
                </div>
              </section>
              <section className={styles.country__geography}>
                <div className={styles.geography__info}>
                  <h2 className={styles.geography__title}>Geography</h2>
                  <div>
                    <div>Region</div>
                    <div>{data.region}</div>
                  </div>
                  <div>
                    <div>Subregion</div>
                    <div>{data.subregion ? data.subregion : '-'}</div>
                  </div>
                  <div>
                    <div>Capital</div>
                    <div>{data.capital ? data.capital : '-'}</div>
                  </div>
                  <div>
                    <div>Demonym</div>
                    <div>{data.demonyms?.eng.f || '-'}</div>
                  </div>
                  <div>
                    <div>Lat/Lng</div>
                    <div>
                      {data.capitalInfo.latlng?.[0] != null &&
                      data.capitalInfo.latlng?.[1] != null
                        ? `${data.capitalInfo.latlng[0]}, ${data.capitalInfo.latlng[1]}`
                        : '-'}
                    </div>
                  </div>
                  <div>
                    <div>Area</div>
                    <div>{data.area}km²</div>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default DetailedCountry;
