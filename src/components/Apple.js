import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAppleData } from '../redux/apple/appleSlice';

const Apple = () => {
  const { apple } = useSelector((state) => state.apple);
  const dispatch = useDispatch();

  useEffect(() => {
    if (apple.length === 0) {
      dispatch(fetchAppleData());
    }
  }, [dispatch, apple]);

  return (
    <>
      <Link to="/">Go Home</Link>
      <h1>Apple Smartphones</h1>
    </>
  );
};

export default Apple;
