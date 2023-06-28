import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppleContainer from './components/AppleContainer';
import SamsungContainer from './components/SamsungContainer';
import XiaomiContainer from './components/XiaomiContainer';
import GoogleContainer from './components/GoogleContainer';
import Home from './components/Home';
import { fetchAppleData } from './redux/apple/appleSlice';
import { fetchSamsungData } from './redux/samsung/samsungSlice';
import { fetchXiaomiData } from './redux/xiaomi/xiaomiSlice';
import { fetchGoogleData } from './redux/google/googleSlice';

function App() {
  const dispatch = useDispatch();
  const { apple } = useSelector((state) => state.apple);
  const { samsung } = useSelector((state) => state.samsung);
  const { xiaomi } = useSelector((state) => state.xiaomi);
  const { google } = useSelector((state) => state.google);
  useEffect(() => {
    if (apple.length === 0) {
      dispatch(fetchAppleData());
    }
    if (samsung.length === 0) {
      dispatch(fetchSamsungData());
    }
    if (xiaomi.length === 0) {
      dispatch(fetchXiaomiData());
    }
    if (google.length === 0) {
      dispatch(fetchGoogleData());
    }
  }, [dispatch, apple, samsung, xiaomi, google]);
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
