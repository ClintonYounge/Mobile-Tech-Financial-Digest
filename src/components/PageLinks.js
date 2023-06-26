import { Link } from 'react-router-dom';

const PageLinks = () => (
  <>
    <nav className="page-links">
      <ul className="page-link">
        <li><Link to="/apple">Apple</Link></li>
        <li>*** Billion for the year ***</li>
      </ul>
      <ul className="page-link">
        <li><Link to="/samsung">Samsung</Link></li>
        <li>*** Billion for the year ***</li>
      </ul>
      <ul className="page-link">
        <li><Link to="/xiaomi">Xiaomi</Link></li>
        <li>*** Billion for the year ***</li>
      </ul>
      <ul className="page-link">
        <li><Link to="/google">Google</Link></li>
        <li>*** Billion for the year ***</li>
      </ul>
    </nav>
  </>
);

export default PageLinks;
