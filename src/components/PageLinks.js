import { Link } from 'react-router-dom';

const PageLinks = () => (
  <>
    <nav className="page-links">
      <ul className="page-link">
        <li>Apple</li>
        <li>Apple netted $99,803,000,000 USD for the year 2022</li>
        <li><Link to="/apple">See more financial data</Link></li>
      </ul>
      <ul className="page-link">
        <li>Samsung</li>
        <li>Samsung netted ₩54,730,018,000,000 KRW for the year 2022</li>
        <li><Link to="/samsung">See more financial data</Link></li>
      </ul>
      <ul className="page-link">
        <li>Xiaomi</li>
        <li>Xiaomi netted ¥2,474,030,000 CNY for the year 2022</li>
        <li><Link to="/xiaomi">See more financial data</Link></li>
      </ul>
      <ul className="page-link">
        <li>Google</li>
        <li>Google netted $59,972,000,000 USD for the year 2022</li>
        <li><Link to="/google">See more financial data</Link></li>
      </ul>
    </nav>
  </>
);

export default PageLinks;
