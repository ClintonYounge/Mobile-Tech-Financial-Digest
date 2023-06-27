import React from 'react';
import { render } from '@testing-library/react';
import DataHandler from '../components/DataHandler';
import '@testing-library/jest-dom/extend-expect';

describe('DataHandler component', () => {
  test('renders data correctly', () => {
    const { getByText } = render(
      <DataHandler
        reportedCurrency="USD"
        calendarYear={2022}
        revenue={1000000}
        costOfRevenue={500000}
        grossProfit={500000}
        researchAndDevelopmentExpenses={100000}
        operatingExpenses={200000}
        costAndExpenses={300000}
        incomeBeforeTax={200000}
        netIncome={150000}
        netIncomeRatio={0.15}
        link="https://example.com"
      />,
    );

    expect(getByText('USD')).toBeInTheDocument();
    expect(getByText('2022')).toBeInTheDocument();
    expect(getByText('$1,000,000')).toBeInTheDocument();
    expect(getByText('Click here for complete financial data.')).toBeInTheDocument();
  });
});
