import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchXiaomiData } from '../redux/xiaomi/xiaomiSlice';

const Xiaomi = () => {
  const { xiaomi } = useSelector((state) => state.xiaomi);
  const dispatch = useDispatch();

  useEffect(() => {
    if (xiaomi.length === 0) {
      dispatch(fetchXiaomiData());
    }
  }, [dispatch, xiaomi]);

  return (
    <>
      <Link to="/">Go Home</Link>
      <h1>Xiaomi Smartphones</h1>
    </>
  );
};

export default Xiaomi;
