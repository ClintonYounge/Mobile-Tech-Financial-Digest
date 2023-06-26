import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSamsungData } from '../redux/samsung/samsungSlice';
import DataHandler from './DataHandler';

const Samsung = () => {
  const { samsung, isLoading, error } = useSelector((state) => state.samsung);
  const dispatch = useDispatch();

  useEffect(() => {
    if (samsung.length === 0) {
      dispatch(fetchSamsungData());
    }
  }, [dispatch, samsung]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error !== undefined) {
    return 'Error... something went wrong';
  }

  return (
    <>
      <Link to="/">Go Home</Link>
      {samsung.map((data) => (
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

export default Samsung;
