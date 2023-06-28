/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom';

const PageLinks = ({
  apple, samsung, xiaomi, google,
}) => (
  <nav className="page-links">
    <div className="page-link">
      <p className="company-name">
        Apple
        {' '}
        (
        {apple.symbol}
        )
      </p>
      <p>Apple netted $99.8 Billion USD for the year 2022</p>
      <p><NavLink className="link-to-more" to="/apple">See financial data</NavLink></p>
    </div>
    <div className="page-link">
      <p className="company-name" id={samsung.symbol}>Samsung</p>
      <p>Samsung netted $42 Billion USD for the year 2022</p>
      <p><Link className="link-to-more" to="/samsung">See financial data</Link></p>
    </div>
    <div className="page-link">
      <p className="company-name" id={xiaomi.symbol}>Xiaomi</p>
      <p>Xiaomi netted $343 Million USD for the year 2022</p>
      <p><Link className="link-to-more" to="/xiaomi">See financial data</Link></p>
    </div>
    <div className="page-link">
      <p className="company-name" id={google.symbol}>Google</p>
      <p>Google netted $59.97 Billion USD for the year 2022</p>
      <p><Link className="link-to-more" to="/google">See financial data</Link></p>
    </div>
  </nav>
);

export default PageLinks;
