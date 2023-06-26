import PageLinks from './PageLinks';

const Home = () => (
  <>
    <h1>
      Hello! This is Mobile Tech Financial Digest.
    </h1>
    <p>
      We `&apos` ll be taking a look at some companies that have a large presence
      in the smartphone manufacturing market and their numbers.
      Note that all these companies are on public stock exchanges and are ordered randomly.
    </p>
    <p>
      Below lies a list of companies to choose from.
      Select one to see their number for the last 5 years.
    </p>
    <PageLinks />
  </>
);

export default Home;
