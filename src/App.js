import { Routes, Route } from 'react-router-dom';
import AppleContainer from './components/AppleContainer';
import SamsungContainer from './components/SamsungContainer';
import XiaomiContainer from './components/XiaomiContainer';
import GoogleContainer from './components/GoogleContainer';
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apple" element={<AppleContainer />} />
        <Route path="/samsung" element={<SamsungContainer />} />
        <Route path="/xiaomi" element={<XiaomiContainer />} />
        <Route path="/google" element={<GoogleContainer />} />
      </Routes>
    </>
  );
}

export default App;
