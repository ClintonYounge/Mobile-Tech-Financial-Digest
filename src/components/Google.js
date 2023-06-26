import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGoogleData } from '../redux/google/googleSlice';

const Google = () => {
  const { google } = useSelector((state) => state.google);
  const dispatch = useDispatch();

  useEffect(() => {
    if (google.length === 0) {
      dispatch(fetchGoogleData());
    }
  }, [dispatch, google]);
  return (
    <>
      <Link to="/">Go Home</Link>
      <h1>Google Smartphones</h1>
    </>
  );
};

export default Google;
