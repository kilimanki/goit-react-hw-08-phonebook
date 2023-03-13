import { isUserLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
export const PublicRoute = () => {
  const isLogin = useSelector(isUserLogin);
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};
export default PublicRoute;
