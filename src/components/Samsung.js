import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSamsungData } from '../redux/samsung/samsungSlice';

const Samsung = () => {
  const { samsung } = useSelector((state) => state.samsung);
  const dispatch = useDispatch();

  useEffect(() => {
    if (samsung.length === 0) {
      dispatch(fetchSamsungData());
    }
  }, [dispatch, samsung]);

  return (
    <>
      <Link to="/">Go Home</Link>
      <h1>Samsung Smartphones</h1>
    </>
  );
};

export default Samsung;
