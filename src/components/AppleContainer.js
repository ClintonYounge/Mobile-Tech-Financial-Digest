import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppleData } from '../redux/apple/appleSlice';
import DataHandler from './DataHandler';
import Header from './Header';

const Apple = () => {
  const { apple, isLoading, error } = useSelector((state) => state.apple);
  const dispatch = useDispatch();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [resultCount, setResultCount] = useState(0); // New state for result count

  useEffect(() => {
    if (apple.length === 0) {
      dispatch(fetchAppleData());
    }
  }, [dispatch, apple]);

  useEffect(() => {
    if (searchQuery !== '') {
      const filtered = apple.filter(
        (data) => data.calendarYear.toString().includes(searchQuery),
      );
      setFilteredData(filtered);
      setResultCount(filtered.length);
    } else {
      setFilteredData(apple);
      setResultCount(apple.length);
    }
  }, [searchQuery, apple]);

  const handleSearch = () => {
    setIsSearchVisible(true);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error !== undefined) {
    return 'Error... something went wrong';
  }

  return (
    <>
      <Header handleSearch={handleSearch} />
      {isSearchVisible && (
        <div>
          <input
            type="text"
            placeholder="Search by year..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      )}
      <p>
        Previous Years Available:
        {' '}
        {resultCount}
      </p>
      {filteredData.map((data) => (
        <DataHandler
          reportedCurrency={data.reportedCurrency}
          key={data.date}
          calendarYear={data.calendarYear}
          revenue={data.revenue}
          costOfRevenue={data.costOfRevenue}
          grossProfit={data.grossProfit}
          researchAndDevelopmentExpenses={data.researchAndDevelopmentExpenses}
          operatingExpenses={data.operatingExpenses}
          costAndExpenses={data.costAndExpenses}
          incomeBeforeTax={data.incomeBeforeTax}
          netIncome={data.netIncome}
          netIncomeRatio={data.netIncomeRatio}
          link={data.link}
        />
      ))}
    </>
  );
};

export default Apple;
