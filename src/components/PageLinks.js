import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PageLinks = ({
  filteredData,
}) => {
  if (filteredData.includes('Apple') || filteredData.includes('apple')) {
    return (
      <div className="page-link">
        <p className="company-name">
          Apple
        </p>
        <p>Apple netted $99.8 Billion USD for the year 2022</p>
        <p><Link className="link-to-more" to="/apple">See financial data</Link></p>
      </div>
    );
  }
  if (filteredData.includes('Samsung') || filteredData.includes('samsung')) {
    return (
      <div className="page-link">
        <p className="company-name">
          Samsung
        </p>
        <p>Samsung netted $42 Billion USD for the year 2022</p>
        <p><Link className="link-to-more" to="/samsung">See financial data</Link></p>
      </div>
    );
  }
  if (filteredData.includes('Xiaomi') || filteredData.includes('xiaomi')) {
    return (
      <div className="page-link">
        <p className="company-name">
          Xiaomi
        </p>
        <p>Xiaomi netted $343 Million USD for the year 2022</p>
        <p><Link className="link-to-more" to="/xiaomi">See financial data</Link></p>
      </div>
    );
  }
  if (filteredData.includes('Google') || filteredData.includes('google')) {
    return (
      <div className="page-link">
        <p className="company-name">
          Google
        </p>
        <p>Google netted $59.97 Billion USD for the year 2022</p>
        <p><Link className="link-to-more" to="/google">See financial data</Link></p>
      </div>
    );
  }
  return (
    <nav className="page-links">
      <div className="page-link">
        <p className="company-name">
          Apple
        </p>
        <p>Apple netted $99.8 Billion USD for the year 2022</p>
        <p><Link className="link-to-more" to="/apple">See financial data</Link></p>
      </div>
      <div className="page-link">
        <p className="company-name">
          Samsung
        </p>
        <p>Samsung netted $42 Billion USD for the year 2022</p>
        <p><Link className="link-to-more" to="/samsung">See financial data</Link></p>
      </div>
      <div className="page-link">
        <p className="company-name">
          Xiaomi
        </p>
        <p>Xiaomi netted $343 Million USD for the year 2022</p>
        <p><Link className="link-to-more" to="/xiaomi">See financial data</Link></p>
      </div>
      <div className="page-link">
        <p className="company-name">
          Google
        </p>
        <p>Google netted $59.97 Billion USD for the year 2022</p>
        <p><Link className="link-to-more" to="/google">See financial data</Link></p>
      </div>
    </nav>
  );
};

PageLinks.propTypes = {
  filteredData: PropTypes.string.isRequired,
};

export default PageLinks;
