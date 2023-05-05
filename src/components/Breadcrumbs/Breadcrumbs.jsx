import styles from './Breadcrumbs.module.css';

const Breadcrumbs = (props) => {
  return (
    <ul className={styles.breadcrumb}>
      {props.children}
      <li>{props.lastCrumb}</li>
    </ul>
  );
};

export default Breadcrumbs;
