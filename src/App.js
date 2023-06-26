import { Routes, Route } from 'react-router-dom';
import Apple from './components/Apple';
import Samsung from './components/Samsung';
import Xiaomi from './components/Xiaomi';
import Google from './components/Google';
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/samsung" element={<Samsung />} />
        <Route path="/xiaomi" element={<Xiaomi />} />
        <Route path="/google" element={<Google />} />
      </Routes>
    </>
  );
}

export default App;
