import { Link } from 'react-router-dom';

const Crumb = (props) => {
  return (
    <li>
      <Link to={props.to}>{props.name}</Link>
    </li>
  );
};

export default Crumb;
