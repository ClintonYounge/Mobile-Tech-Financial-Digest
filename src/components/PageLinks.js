import { Link, NavLink } from 'react-router-dom';

const PageLinks = () => (
  <nav className="page-links">
    <div className="page-link">
      <p className="company-name">Apple</p>
      <p>Apple netted $99.8 Billion USD for the year 2022</p>
      <p><NavLink to="/apple">See more financial data</NavLink></p>
    </div>
    <div className="page-link">
      <p className="company-name">Samsung</p>
      <p>Samsung netted $42 Billion USD for the year 2022</p>
      <p><Link to="/samsung">See more financial data</Link></p>
    </div>
    <div className="page-link">
      <p className="company-name">Xiaomi</p>
      <p>Xiaomi netted $343 Million USD for the year 2022</p>
      <p><Link to="/xiaomi">See more financial data</Link></p>
    </div>
    <div className="page-link">
      <p className="company-name">Google</p>
      <p>Google netted $60 Billion USD for the year 2022</p>
      <p><Link to="/google">See more financial data</Link></p>
    </div>
  </nav>
);

export default PageLinks;
