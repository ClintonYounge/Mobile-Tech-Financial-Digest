import PageLinks from './PageLinks';
import Header from './Header';
import '../styles/HomePage.css';

const Home = () => (
  <>
    <Header />
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
        <p className="companies-found">(4) Companies available</p>
        <PageLinks />
      </div>
    </main>
  </>
);

export default Home;
