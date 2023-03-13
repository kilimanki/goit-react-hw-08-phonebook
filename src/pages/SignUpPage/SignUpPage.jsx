import { SignUp } from 'components/UserMenu/SIgnUpForm/SignUpForm';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = data => {
    dispatch(register(data));
  };
  return <SignUp onSubmit={handleSubmit} />;
};
export default SignUpPage;
