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

  const generateNativeNames = () => {
    return Object.keys(data.name.nativeName).map((nativeN) => {
      return (
        <>
          <tr key={`${nativeN}-common`}>
            <th>Native name</th>
            <td>{data.name.nativeName[nativeN].common}</td>
          </tr>
          <tr key={`${nativeN}-official`}>
            <th>Native official</th>
            <td>{data.name.nativeName[nativeN].official}</td>
          </tr>
        </>
      );
    });
  };

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
          <>
            <div className={styles.country}>
              <div className={styles.country__img}>
                <img src={data.flags.svg} alt={data.flags.alt} />
              </div>
              <table className={styles.country__generalInfo}>
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
                      {
                        data.name.nativeName[
                          Object.keys(data.name.nativeName)[0]
                        ].common
                      }
                    </td>
                  </tr>
                  <tr>
                    <th>Official native</th>
                    <td>
                      {
                        data.name.nativeName[
                          Object.keys(data.name.nativeName)[0]
                        ].official
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default DetailedCountry;
