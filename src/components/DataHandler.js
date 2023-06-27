import PropTypes from 'prop-types';

const DataHandler = ({
  calendarYear, revenue, costOfRevenue, grossProfit,
  researchAndDevelopmentExpenses, operatingExpenses,
  costAndExpenses, incomeBeforeTax,
  netIncome, netIncomeRatio, link, reportedCurrency,
}) => (
  <div className="data-container">
    <li>
      Reported Currency:
    </li>
    <li>
      {reportedCurrency}
    </li>
    <li>
      Calendar Year:
    </li>
    <li>
      {calendarYear}
    </li>
    <li>
      Revenue:
    </li>
    <li>
      {' $'}
      {revenue.toLocaleString()}
    </li>
    <li>
      Cost of Revenue:
      {' $'}
      {costOfRevenue.toLocaleString()}
    </li>
    <li>
      Gross Profit:
      {' $'}
      {grossProfit.toLocaleString()}
    </li>
    <li>
      Research and Development Expenses:
      {' $'}
      {researchAndDevelopmentExpenses.toLocaleString()}
    </li>
    <li>
      Operating Expenses:
      {' $'}
      {operatingExpenses.toLocaleString()}
    </li>
    <li>
      Cost and Expenses:
      {' $'}
      {costAndExpenses.toLocaleString()}
    </li>
    <li>
      Income Before Tax:
      {' $'}
      {incomeBeforeTax.toLocaleString()}
    </li>
    <li>
      Net Income:
      {' $'}
      {netIncome.toLocaleString()}
    </li>
    <li>
      Net Income Ratio:
      {' $'}
      {netIncomeRatio.toLocaleString()}
    </li>
    {link ? (
      <li>
        <a href={link}>
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
