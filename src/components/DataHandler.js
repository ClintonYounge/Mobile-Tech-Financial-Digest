import PropTypes from 'prop-types';

const DataHandler = ({
  calendarYear, revenue, costOfRevenue, grossProfit,
  researchAndDevelopmentExpenses, operatingExpenses,
  costAndExpenses, incomeBeforeTax,
  netIncome, netIncomeRatio, link, reportedCurrency,
}) => (
  <ul>
    <li>
      Reported Currency:
      {' '}
      {reportedCurrency}
    </li>
    <li>
      Calendar Year:
      {' '}
      {calendarYear}
    </li>
    <li>
      Revenue:
      {' '}
      {revenue}
    </li>
    <li>
      Cost of Revenue:
      {' '}
      {costOfRevenue}
    </li>
    <li>
      Gross Profit:
      {' '}
      {grossProfit}
    </li>
    <li>
      Research and Development Expenses:
      {' '}
      {researchAndDevelopmentExpenses}
    </li>
    <li>
      Operating Expenses:
      {' '}
      {operatingExpenses}
    </li>
    <li>
      Cost and Expenses:
      {' '}
      {costAndExpenses}
    </li>
    <li>
      Income Before Tax:
      {' '}
      {incomeBeforeTax}
    </li>
    <li>
      Net Income:
      {' '}
      {netIncome}
    </li>
    <li>
      Net Income Ratio:
      {' '}
      {netIncomeRatio}
    </li>
    {link ? (
      <li>
        <a href={link}>
          Click here for complete financial data.
        </a>
      </li>
    ) : null}
  </ul>
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
