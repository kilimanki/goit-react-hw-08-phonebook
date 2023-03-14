import { useSelector } from 'react-redux';
import { userEmail } from 'redux/auth/auth-selectors';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import css from './NavBarUser.module.css';

export const NavBarUser = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  const email = useSelector(userEmail);
  return (
    <div className={css.auth}>
      <p className={css.email}>{email}</p>
      <button onClick={onLogout} className={css.btn}>
        Logout
      </button>
    </div>
  );
};
