import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import PageLinks from './PageLinks';
import Header from './Header';
import '../styles/HomePage.css';

const Home = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState('');

  const appleTicker = 'Apple';
  const samsungTicker = 'Samsung';
  const xiaomiTicker = 'Xiaomi';
  const googleTicker = 'Google';
  const appleCompany = 'apple';
  const samsungCompany = 'samsung';
  const xiaomiCompany = 'xiaomi';
  const googleCompany = 'google';

  const location = useLocation();

  useEffect(() => {
    const categoryArray = [
      appleTicker,
      appleCompany,
      samsungTicker,
      samsungCompany,
      xiaomiTicker,
      xiaomiCompany,
      googleTicker,
      googleCompany,
    ];

    if (searchQuery !== '') {
      const filtered = categoryArray.filter(
        (data) => data.includes(searchQuery),
      );
      setFilteredData(filtered);
    }
  }, [appleTicker, googleTicker, samsungTicker, searchQuery, xiaomiTicker]);

  const handleCompanySearch = () => {
    setIsSearchVisible(true);
  };

  const handleCompanySearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Header handleCompanySearch={handleCompanySearch} />
      <main className="home-container">
        <div className="landing">
          <h1>
            Hello! This is Mobile Tech Financial Digest.
          </h1>
          <p>
            We&apos;ll be taking a look at some companies that have a large presence
            in the smartphone manufacturing market and their numbers.
            Note that all these companies are on public stock exchanges and are ordered randomly.
          </p>
          <p>
            Below lies a list of companies to choose from.
            Select one to see their numbers for up to the last 5 years.
          </p>
        </div>
        <div className="companies">
          <div className="company-search">
            <p className="companies-found">Companies available</p>
            {location.pathname === '/' && (
            <FaSearch className="Fa-search" onClick={handleCompanySearch} />
            )}
          </div>

          {isSearchVisible && (
          <div>
            <input
              type="text"
              placeholder="Search by company name..."
              value={searchQuery}
              onChange={handleCompanySearchChange}
            />
          </div>
          )}
          <PageLinks
            filteredData={filteredData}
            apple={appleTicker}
            xiaomi={xiaomiTicker}
            google={googleTicker}
            samsung={samsungTicker}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
