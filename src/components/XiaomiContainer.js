import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchXiaomiData } from '../redux/xiaomi/xiaomiSlice';
import DataHandler from './DataHandler';

const Xiaomi = () => {
  const { xiaomi, isLoading, error } = useSelector((state) => state.xiaomi);
  const dispatch = useDispatch();

  useEffect(() => {
    if (xiaomi.length === 0) {
      dispatch(fetchXiaomiData());
    }
  }, [dispatch, xiaomi]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error !== undefined) {
    return 'Error... something went wrong';
  }

  return (
    <>
      <Link to="/">Go Home</Link>
      {xiaomi.map((data) => (
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

export default Xiaomi;
