import { Link } from 'react-router-dom';

import styles from './CountryCard.module.css';

function Card(props) {
  let formatCountryName = props.name.toLowerCase().split(' ').join('-');

  return (
    <Link
      to={`/countries/${formatCountryName}`}
      state={{ originalName: props.name }}
      className={styles.card}
    >
      <div className={styles.cardImage}>
        <img src={props.flagImage} alt={props.flagAlt} />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardName}>{props.name}</h2>
        <p className={styles.cardCapital}>{props.capital}</p>
      </div>
    </Link>
  );
}

export default Card;
