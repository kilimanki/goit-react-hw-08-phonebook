import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/auth-operations';
import PropTypes from 'prop-types';
const AuthLayOut = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return children;
};
export default AuthLayOut;
AuthLayOut.propTypes = {
  children: PropTypes.object.isRequired,
};
