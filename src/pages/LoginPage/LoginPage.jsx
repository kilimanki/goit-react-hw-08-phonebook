import { Login } from 'components/UserMenu/Login/LoginForm';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
const LoginPage = () => {
  const dispatch = useDispatch();
  const onLogin = data => {
    dispatch(login(data));
  };
  return <Login onSubmit={onLogin} />;
};
export default LoginPage;
