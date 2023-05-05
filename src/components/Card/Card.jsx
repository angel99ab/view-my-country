import { Link } from 'react-router-dom';

import styles from './Card.module.css';

const Card = (props) => {
  return (
    // Change path when clicking in the card
    <Link to='/' className={styles.card}>
      <div className={styles.cardImage}>
        <img src={props.flagImage} alt={props.flagAlt} />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardName}>{props.name}</h2>
        <p className={styles.cardCapital}>{props.capital}</p>
      </div>
    </Link>
  );
};

export default Card;
