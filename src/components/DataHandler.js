import PropTypes from 'prop-types';
import '../styles/DataHandler.css';

const DataHandler = ({
  calendarYear, revenue, costOfRevenue, grossProfit,
  researchAndDevelopmentExpenses, operatingExpenses,
  costAndExpenses, incomeBeforeTax,
  netIncome, netIncomeRatio, link, reportedCurrency,
}) => (
  <div className="data-container">
    <li className="data">
      Reported Currency:
    </li>
    <li className="data">
      {reportedCurrency}
    </li>
    <li className="data">
      Calendar Year:
    </li>
    <li className="data">
      {calendarYear}
    </li>
    <li className="data">
      Revenue:
    </li>
    <li className="data">
      {' $'}
      {revenue.toLocaleString()}
    </li>
    <li className="data">
      Cost of Revenue:
      {' $'}
      {costOfRevenue.toLocaleString()}
    </li>
    <li className="data">
      Gross Profit:
      {' $'}
      {grossProfit.toLocaleString()}
    </li>
    <li className="data">
      Research and Development Expenses:
      {' $'}
      {researchAndDevelopmentExpenses.toLocaleString()}
    </li>
    <li className="data">
      Operating Expenses:
      {' $'}
      {operatingExpenses.toLocaleString()}
    </li>
    <li className="data">
      Cost and Expenses:
      {' $'}
      {costAndExpenses.toLocaleString()}
    </li>
    <li className="data">
      Income Before Tax:
      {' $'}
      {incomeBeforeTax.toLocaleString()}
    </li>
    <li className="data">
      Net Income:
      {' $'}
      {netIncome.toLocaleString()}
    </li>
    <li className="data">
      Net Income Ratio:
      {' $'}
      {netIncomeRatio.toLocaleString()}
    </li>
    {link ? (
      <li className="link click-here">
        <a href={link} className="link-to-more">
          Click here for complete financial data.
        </a>
      </li>
    ) : null}
  </div>
);

DataHandler.propTypes = {
  reportedCurrency: PropTypes.string.isRequired,
  calendarYear: PropTypes.number.isRequired,
  revenue: PropTypes.number.isRequired,
  costOfRevenue: PropTypes.number.isRequired,
  grossProfit: PropTypes.number.isRequired,
  researchAndDevelopmentExpenses: PropTypes.number.isRequired,
  operatingExpenses: PropTypes.number.isRequired,
  costAndExpenses: PropTypes.number.isRequired,
  incomeBeforeTax: PropTypes.number.isRequired,
  netIncome: PropTypes.number.isRequired,
  netIncomeRatio: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

export default DataHandler;
