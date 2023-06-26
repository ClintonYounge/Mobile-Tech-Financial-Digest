import { Link } from 'react-router-dom';

const PageLinks = () => (
  <>
    <ul className="page-links">
      <li className="page-link">
        <Link to="/apple">Apple</Link>
      </li>
      <li className="page-link">
        <Link to="/samsung">Samsung</Link>
      </li>
      <li className="page-link">
        <Link to="/xiaomi">Xiaomi</Link>
      </li>
      <li className="page-link">
        <Link to="/google">Google</Link>
      </li>
    </ul>
  </>
);

export default PageLinks;
